import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const photos = await db.all('SELECT * FROM at_a_glance_photos WHERE is_active = 1 ORDER BY order_index ASC, created_at ASC');
    res.json(photos);
  } catch (error) {
    console.error('Error fetching at a glance photos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { image_url, description, order_index } = req.body;
    const db = getDatabase();
    
    await db.run(
      'INSERT INTO at_a_glance_photos (image_url, description, order_index) VALUES (?, ?, ?)',
      [image_url, description, order_index || 0]
    );
    
    res.json({ message: 'Photo added successfully' });
  } catch (error) {
    console.error('Error adding photo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { image_url, description, order_index, is_active } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE at_a_glance_photos SET image_url = ?, description = ?, order_index = ?, is_active = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [image_url, description, order_index, is_active, id]
    );
    
    res.json({ message: 'Photo updated successfully' });
  } catch (error) {
    console.error('Error updating photo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM at_a_glance_photos WHERE id = ?', [id]);
    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    console.error('Error deleting photo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;