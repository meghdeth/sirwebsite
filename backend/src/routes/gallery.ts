import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all gallery posts (for public use)
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const rows = await db.all(`
      SELECT id, title, description, images, order_index, created_at, updated_at 
      FROM gallery_posts 
      WHERE is_active = TRUE 
      ORDER BY order_index ASC, created_at DESC
    `);
    
    // Parse images JSON for each post
    const parsedGallery = rows.map(post => ({
      ...post,
      images: JSON.parse(post.images || '[]')
    }));
    
    res.json(parsedGallery);
  } catch (error) {
    console.error('Error fetching gallery posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET single gallery post
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    const gallery = await db.get('SELECT * FROM gallery_posts WHERE id = ?', [id]);
    
    if (!gallery) {
      return res.status(404).json({ error: 'Gallery post not found' });
    }
    
    gallery.images = JSON.parse(gallery.images || '[]');
    res.json(gallery);
  } catch (error) {
    console.error('Error fetching gallery post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;