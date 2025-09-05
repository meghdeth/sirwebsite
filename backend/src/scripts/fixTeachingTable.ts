import { initializeDatabase, getDatabase } from '../models/database';

async function fixTeachingTable() {
  try {
    await initializeDatabase();
    const db = getDatabase();
    
    console.log('Dropping existing teaching_courses table...');
    await db.exec('DROP TABLE IF EXISTS teaching_courses');
    
    console.log('Recreating teaching_courses table with correct schema...');
    await db.exec(`
      CREATE TABLE IF NOT EXISTS teaching_courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        duration TEXT NOT NULL,
        course_type TEXT NOT NULL,
        course_code TEXT NOT NULL,
        course_name TEXT NOT NULL,
        instructor TEXT NOT NULL,
        description TEXT,
        is_active BOOLEAN DEFAULT TRUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Teaching courses table fixed successfully!');
    
  } catch (error) {
    console.error('Error fixing teaching courses table:', error);
  }
}

fixTeachingTable();