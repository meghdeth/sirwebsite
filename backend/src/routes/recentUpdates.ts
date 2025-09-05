import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const updates = await db.all('SELECT * FROM recent_updates WHERE is_active = 1 ORDER BY order_index ASC, created_at DESC');
    res.json(updates);
  } catch (error) {
    console.error('Error fetching recent updates:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, content, date_posted, order_index } = req.body;
    const db = getDatabase();
    
    await db.run(
      'INSERT INTO recent_updates (title, content, date_posted, order_index) VALUES (?, ?, ?, ?)',
      [title, content, date_posted || new Date().toISOString().split('T')[0], order_index || 0]
    );
    
    res.json({ message: 'Recent update added successfully' });
  } catch (error) {
    console.error('Error adding recent update:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, date_posted, order_index, is_active } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE recent_updates SET title = ?, content = ?, date_posted = ?, order_index = ?, is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [title, content, date_posted, order_index, is_active, id]
    );
    
    res.json({ message: 'Recent update updated successfully' });
  } catch (error) {
    console.error('Error updating recent update:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM recent_updates WHERE id = ?', [id]);
    res.json({ message: 'Recent update deleted successfully' });
  } catch (error) {
    console.error('Error deleting recent update:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;