import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all conferences
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const rows = await db.all('SELECT * FROM conferences ORDER BY order_index ASC, date DESC, year DESC, created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching conferences:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new conference
router.post('/', async (req, res) => {
  try {
    const { title, authors, conference_name, location, date, year, paper_type, doi, pdf_url } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      'INSERT INTO conferences (title, authors, conference_name, location, date, year, paper_type, doi, pdf_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [title, authors, conference_name, location, date, year, paper_type, doi, pdf_url]
    );
    
    res.status(201).json({ message: 'Conference added successfully', id: result.lastID });
  } catch (error) {
    console.error('Error adding conference:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update conference
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, authors, conference_name, location, date, year, paper_type, doi, pdf_url, order_index } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE conferences SET title = ?, authors = ?, conference_name = ?, location = ?, date = ?, year = ?, paper_type = ?, doi = ?, pdf_url = ?, order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, authors, conference_name, location, date, year, paper_type, doi, pdf_url, order_index || 0, id]
    );
    
    res.json({ message: 'Conference updated successfully' });
  } catch (error) {
    console.error('Error updating conference:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE conference
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM conferences WHERE id = ?', [id]);
    
    res.json({ message: 'Conference deleted successfully' });
  } catch (error) {
    console.error('Error deleting conference:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT bulk update order
router.put('/bulk/order', async (req, res) => {
  try {
    const { items } = req.body; // items: [{ id, order_index }]
    const db = getDatabase();
    
    for (const item of items) {
      await db.run('UPDATE conferences SET order_index = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?', [item.order_index, item.id]);
    }
    
    res.json({ message: 'Conference order updated successfully' });
  } catch (error) {
    console.error('Error updating conference order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;