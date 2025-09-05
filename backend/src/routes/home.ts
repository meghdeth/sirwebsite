import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET home content
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const content = await db.get('SELECT * FROM home_content ORDER BY updated_at DESC LIMIT 1');
    
    if (!content) {
      return res.json({
        title: 'Welcome to LDS Lab',
        subtitle: 'Leading Innovation in Research',
        description: 'Our laboratory focuses on cutting-edge research and development, fostering innovation and academic excellence.',
        hero_image: null
      });
    }
    
    res.json(content);
  } catch (error) {
    console.error('Error fetching home content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST/PUT home content (admin)
router.post('/', async (req, res) => {
  try {
    const { title, subtitle, description, hero_image } = req.body;
    const db = getDatabase();
    
    // Check if content exists
    const existing = await db.get('SELECT id FROM home_content LIMIT 1');
    
    if (existing) {
      // Update existing content
      await db.run(
        'UPDATE home_content SET title = ?, subtitle = ?, description = ?, hero_image = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [title, subtitle, description, hero_image, existing.id]
      );
    } else {
      // Insert new content
      await db.run(
        'INSERT INTO home_content (title, subtitle, description, hero_image) VALUES (?, ?, ?, ?)',
        [title, subtitle, description, hero_image]
      );
    }
    res.json({ message: 'Home content updated successfully' });
  } catch (error) {
    console.error('Error updating home content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;