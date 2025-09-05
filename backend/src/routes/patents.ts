import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all patents
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const rows = await db.all('SELECT * FROM patents ORDER BY order_index ASC, grant_date DESC, filing_date DESC, created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching patents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new patent
router.post('/', async (req, res) => {
  try {
    const { title, inventors, patent_number, application_number, filing_date, grant_date, status, abstract } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      'INSERT INTO patents (title, inventors, patent_number, application_number, filing_date, grant_date, status, abstract) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, inventors, patent_number, application_number, filing_date, grant_date, status, abstract]
    );
    
    res.status(201).json({ message: 'Patent added successfully', id: result.lastID });
  } catch (error) {
    console.error('Error adding patent:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update patent
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, inventors, patent_number, application_number, filing_date, grant_date, status, abstract, order_index } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE patents SET title = ?, inventors = ?, patent_number = ?, application_number = ?, filing_date = ?, grant_date = ?, status = ?, abstract = ?, order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, inventors, patent_number, application_number, filing_date, grant_date, status, abstract, order_index || 0, id]
    );
    
    res.json({ message: 'Patent updated successfully' });
  } catch (error) {
    console.error('Error updating patent:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE patent
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM patents WHERE id = ?', [id]);
    
    res.json({ message: 'Patent deleted successfully' });
  } catch (error) {
    console.error('Error deleting patent:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT bulk update order
router.put('/bulk/order', async (req, res) => {
  try {
    const { items } = req.body; // items: [{ id, order_index }]
    const db = getDatabase();
    
    for (const item of items) {
      await db.run('UPDATE patents SET order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [item.order_index, item.id]);
    }
    
    res.json({ message: 'Patent order updated successfully' });
  } catch (error) {
    console.error('Error updating patent order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;