import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

const dbPath = path.join(__dirname, '../../database.sqlite');

export const openDb = async (): Promise<Database> => {
  return open({
    filename: dbPath,
    driver: sqlite3.Database
  });
};

export const initializeDatabase = async () => {
  const db = await openDb();
  
  try {
    // Home page content
    await db.exec(`
      CREATE TABLE IF NOT EXISTS home_content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subtitle TEXT,
        description TEXT,
        hero_image TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Group members
    await db.exec(`
      CREATE TABLE IF NOT EXISTS group_members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT,
        bio TEXT,
        image TEXT,
        email TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Teaching content
    await db.exec(`
      CREATE TABLE IF NOT EXISTS teaching_content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        course_name TEXT NOT NULL,
        course_code TEXT,
        description TEXT,
        semester TEXT,
        year INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Research content
    await db.exec(`
      CREATE TABLE IF NOT EXISTS research_content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        summary TEXT,
        image TEXT,
        link TEXT,
        name_tag TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Publications
    await db.exec(`
      CREATE TABLE IF NOT EXISTS publications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        authors TEXT,
        journal TEXT,
        year INTEGER,
        doi TEXT,
        pdf_url TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Patents
    await db.exec(`
      CREATE TABLE IF NOT EXISTS patents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        inventors TEXT,
        patent_number TEXT,
        application_number TEXT,
        filing_date DATE,
        grant_date DATE,
        status TEXT,
        abstract TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Conferences
    await db.exec(`
      CREATE TABLE IF NOT EXISTS conferences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        authors TEXT,
        conference_name TEXT,
        location TEXT,
        date DATE,
        year INTEGER,
        paper_type TEXT,
        doi TEXT,
        pdf_url TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Gallery
    await db.exec(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        image_url TEXT NOT NULL,
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // News
    await db.exec(`
      CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        excerpt TEXT,
        image TEXT,
        published BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Contact information
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contact_info (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        address TEXT,
        phone TEXT,
        email TEXT,
        office_hours TEXT,
        map_embed TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Admin users
    await db.exec(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert sample data
    await db.run(`
      INSERT OR IGNORE INTO home_content (id, title, subtitle, description, hero_image) 
      VALUES (1, 'Welcome to LDS Lab', 'Leading Innovation in Research', 'Our laboratory focuses on cutting-edge research and development, fostering innovation and academic excellence. We are committed to advancing knowledge through collaborative research and meaningful contributions to the scientific community.', null)
    `);

    await db.run(`
      INSERT OR IGNORE INTO contact_info (id, address, phone, email, office_hours) 
      VALUES (1, '123 University Avenue, Research Building, Room 101', '+1 (555) 123-4567', 'contact@ldslab.edu', 'Monday-Friday: 9:00 AM - 5:00 PM')
    `);

    console.log('SQLite database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    await db.close();
  }
};