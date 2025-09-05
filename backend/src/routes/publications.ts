import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all publications
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const rows = await db.all('SELECT * FROM publications ORDER BY order_index ASC, year DESC, created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching publications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new publication
router.post('/', async (req, res) => {
  try {
    const { title, authors, journal, year, doi, pdf_url } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      'INSERT INTO publications (title, authors, journal, year, doi, pdf_url) VALUES (?, ?, ?, ?, ?, ?)',
      [title, authors, journal, year, doi, pdf_url]
    );
    
    res.status(201).json({ message: 'Publication added successfully', id: result.lastID });
  } catch (error) {
    console.error('Error adding publication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update publication
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, authors, journal, year, doi, pdf_url } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE publications SET title = ?, authors = ?, journal = ?, year = ?, doi = ?, pdf_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, authors, journal, year, doi, pdf_url, id]
    );
    
    res.json({ message: 'Publication updated successfully' });
  } catch (error) {
    console.error('Error updating publication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE publication
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM publications WHERE id = ?', [id]);
    
    res.json({ message: 'Publication deleted successfully' });
  } catch (error) {
    console.error('Error deleting publication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;