import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all research content
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const research = await db.all(`
      SELECT id, title, summary, image, order_index, created_at, updated_at 
      FROM research_content 
      ORDER BY order_index ASC, created_at DESC
    `);
    
    // For each research project, get its links
    const researchWithLinks = await Promise.all(
      research.map(async (project: any) => {
        const links = await db.all(
          'SELECT url, name_tag FROM research_links WHERE research_id = ?',
          project.id
        );
        return {
          ...project,
          links: links || []
        };
      })
    );
    
    res.json(researchWithLinks);
  } catch (error) {
    console.error('Error fetching research content:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;