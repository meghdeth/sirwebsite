import { Request, Response } from 'express';
import { getDatabase } from '../models/database';

// Education Controllers
export const getEducation = async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const rows = await db.all(
      'SELECT * FROM pi_education WHERE is_active = 1 ORDER BY order_index ASC'
    );
    res.json(rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createEducation = async (req: Request, res: Response) => {
  try {
    const { year, degree, field, institution, location, order_index, is_active } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      `INSERT INTO pi_education (year, degree, field, institution, location, order_index, is_active, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
      [year, degree, field, institution, location, order_index || 0, is_active !== undefined ? is_active : true]
    );
    
    res.json({ id: result.lastID, message: 'Education created successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { year, degree, field, institution, location, order_index, is_active } = req.body;
    const db = getDatabase();
    
    await db.run(
      `UPDATE pi_education SET year = ?, degree = ?, field = ?, institution = ?, location = ?, 
       order_index = ?, is_active = ?, updated_at = datetime('now') WHERE id = ?`,
      [year, degree, field, institution, location, order_index, is_active, id]
    );
    
    res.json({ message: 'Education updated successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEducation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM pi_education WHERE id = ?', [id]);
    res.json({ message: 'Education deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Experience Controllers
export const getExperience = async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const rows = await db.all(
      'SELECT * FROM pi_experience WHERE is_active = 1 ORDER BY order_index ASC'
    );
    res.json(rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createExperience = async (req: Request, res: Response) => {
  try {
    const { start_year, end_year, position, organization, location, description, is_current, order_index, is_active } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      `INSERT INTO pi_experience (start_year, end_year, position, organization, location, description, is_current, order_index, is_active, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
      [start_year, end_year, position, organization, location, description, is_current || false, order_index || 0, is_active !== undefined ? is_active : true]
    );
    
    res.json({ id: result.lastID, message: 'Experience created successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { start_year, end_year, position, organization, location, description, is_current, order_index, is_active } = req.body;
    const db = getDatabase();
    
    await db.run(
      `UPDATE pi_experience SET start_year = ?, end_year = ?, position = ?, organization = ?, location = ?, 
       description = ?, is_current = ?, order_index = ?, is_active = ?, updated_at = datetime('now') WHERE id = ?`,
      [start_year, end_year, position, organization, location, description, is_current, order_index, is_active, id]
    );
    
    res.json({ message: 'Experience updated successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM pi_experience WHERE id = ?', [id]);
    res.json({ message: 'Experience deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Awards Controllers
export const getAwards = async (req: Request, res: Response) => {
  try {
    const db = getDatabase();
    const rows = await db.all(
      'SELECT * FROM pi_awards WHERE is_active = 1 ORDER BY order_index ASC'
    );
    res.json(rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createAward = async (req: Request, res: Response) => {
  try {
    const { year, title, description, organization, grant_amount, currency, order_index, is_active } = req.body;
    const db = getDatabase();
    
    const result = await db.run(
      `INSERT INTO pi_awards (year, title, description, organization, grant_amount, currency, order_index, is_active, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
      [year, title, description, organization, grant_amount, currency, order_index || 0, is_active !== undefined ? is_active : true]
    );
    
    res.json({ id: result.lastID, message: 'Award created successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAward = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { year, title, description, organization, grant_amount, currency, order_index, is_active } = req.body;
    const db = getDatabase();
    
    await db.run(
      `UPDATE pi_awards SET year = ?, title = ?, description = ?, organization = ?, grant_amount = ?, 
       currency = ?, order_index = ?, is_active = ?, updated_at = datetime('now') WHERE id = ?`,
      [year, title, description, organization, grant_amount, currency, order_index, is_active, id]
    );
    
    res.json({ message: 'Award updated successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAward = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const db = getDatabase();
    
    await db.run('DELETE FROM pi_awards WHERE id = ?', [id]);
    res.json({ message: 'Award deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};