import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

router.get('/content', async (req, res) => {
  try {
    const db = getDatabase();
    const content = await db.get('SELECT * FROM new_joiners_content WHERE is_active = 1 ORDER BY updated_at DESC LIMIT 1');
    
    if (!content) {
      return res.json({
        content: 'New joiners: Complete orientation, meet your mentor, and access resources at contact@ldslab.edu for immediate support.'
      });
    }
    
    res.json(content);
  } catch (error) {
    console.error('Error fetching new joiners content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/content', async (req, res) => {
  try {
    const { content } = req.body;
    const db = getDatabase();
    
    const existing = await db.get('SELECT id FROM new_joiners_content WHERE is_active = 1 LIMIT 1');
    
    if (existing) {
      await db.run(
        'UPDATE new_joiners_content SET content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [content, existing.id]
      );
    } else {
      await db.run(
        'INSERT INTO new_joiners_content (content) VALUES (?)',
        [content]
      );
    }
    
    res.json({ message: 'New joiners content updated successfully' });
  } catch (error) {
    console.error('Error updating new joiners content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/submit', async (req, res) => {
  try {
    const { name, message, email } = req.body;
    const db = getDatabase();
    
    await db.run(
      'INSERT INTO new_joiners_submissions (name, message, email) VALUES (?, ?, ?)',
      [name, message, email]
    );
    
    res.json({ message: 'Submission saved successfully' });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/submissions', async (req, res) => {
  try {
    const db = getDatabase();
    const submissions = await db.all('SELECT * FROM new_joiners_submissions ORDER BY created_at DESC');
    res.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/submissions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM new_joiners_submissions WHERE id = ?', [id]);
    res.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    console.error('Error deleting submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;