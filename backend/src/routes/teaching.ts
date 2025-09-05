import express from 'express';
import { getDatabase } from '../models/database';

const router = express.Router();

// GET all teaching courses
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const rows = await db.all('SELECT * FROM teaching_courses WHERE is_active = 1 ORDER BY order_index ASC, created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching teaching courses:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new teaching course
router.post('/', async (req, res) => {
  try {
    const { duration, program_level, year_level, course_type, course_code, course_name, instructor, description } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      'INSERT INTO teaching_courses (duration, program_level, year_level, course_type, course_code, course_name, instructor, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [duration, program_level, year_level, course_type, course_code, course_name, instructor, description]
    );
    
    res.status(201).json({ message: 'Teaching course added successfully', id: result.lastID });
  } catch (error) {
    console.error('Error adding teaching course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update teaching course
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { duration, program_level, year_level, course_type, course_code, course_name, instructor, description } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE teaching_courses SET duration = ?, program_level = ?, year_level = ?, course_type = ?, course_code = ?, course_name = ?, instructor = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [duration, program_level, year_level, course_type, course_code, course_name, instructor, description, id]
    );
    
    res.json({ message: 'Teaching course updated successfully' });
  } catch (error) {
    console.error('Error updating teaching course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE teaching course
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('UPDATE teaching_courses SET is_active = 0 WHERE id = ?', [id]);
    
    res.json({ message: 'Teaching course deleted successfully' });
  } catch (error) {
    console.error('Error deleting teaching course:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;