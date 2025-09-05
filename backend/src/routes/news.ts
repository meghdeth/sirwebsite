import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all news (for public use)
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const rows = await db.all(`
      SELECT id, year, title, content, link, order_index, created_at, updated_at 
      FROM news 
      ORDER BY order_index ASC, year DESC, created_at DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single news item
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    const news = await db.get('SELECT * FROM news WHERE id = ?', [id]);
    
    if (!news) {
      return res.status(404).json({ error: 'News item not found' });
    }
    
    res.json(news);
  } catch (error) {
    console.error('Error fetching news item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;