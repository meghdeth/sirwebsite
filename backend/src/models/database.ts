import sqlite3 from 'sqlite3'
import { open, Database } from 'sqlite'
import bcrypt from 'bcryptjs'

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null

export const initializeDatabase = async (): Promise<Database<sqlite3.Database, sqlite3.Statement>> => {
  if (db) return db

  try {
    db = await open({
      filename: process.env.DB_PATH || './database.sqlite',
      driver: sqlite3.Database
    })

    await createTables()
    await createDefaultAdmin()
    
    console.log('Database initialized successfully')
    return db
  } catch (error) {
    console.error('Database initialization failed:', error)
    throw error
  }
}

const createTables = async () => {
  if (!db) throw new Error('Database not initialized')

  // Messages table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      file_name TEXT,
      file_path TEXT,
      read_status BOOLEAN DEFAULT FALSE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // News table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS news (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      year TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      link TEXT,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Publications table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS publications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      authors TEXT NOT NULL,
      journal TEXT NOT NULL,
      volume TEXT,
      pages TEXT,
      year INTEGER NOT NULL,
      doi TEXT NOT NULL,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Patents table
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
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Conferences table
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
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Admin users table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Home content table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS home_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section TEXT NOT NULL,
      title TEXT,
      content TEXT NOT NULL,
      image_url TEXT,
      order_index INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Group members table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS group_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      position TEXT NOT NULL,
      section TEXT NOT NULL CHECK (section IN ('Team', 'Alumni')),
      bio TEXT,
      image_url TEXT,
      email TEXT,
      linkedin_url TEXT,
      order_index INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Teaching courses table - Updated schema
  await db.exec(`
    CREATE TABLE IF NOT EXISTS teaching_courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      duration TEXT NOT NULL,
      program_level TEXT NOT NULL,
      year_level TEXT NOT NULL,
      course_type TEXT NOT NULL,
      course_code TEXT NOT NULL,
      course_name TEXT NOT NULL,
      instructor TEXT NOT NULL,
      description TEXT,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Research content table (updated to remove single link fields)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS research_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      summary TEXT,
      image TEXT,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Research links table (new table for multiple links)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS research_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      research_id INTEGER NOT NULL,
      url TEXT NOT NULL,
      name_tag TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (research_id) REFERENCES research_content (id) ON DELETE CASCADE
    )
  `)
  // Gallery posts table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS gallery_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      images TEXT NOT NULL, -- JSON array of image URLs
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // PI Education table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS pi_education (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      year TEXT NOT NULL,
      degree TEXT NOT NULL,
      field TEXT NOT NULL,
      institution TEXT NOT NULL,
      location TEXT,
      order_index INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // PI Experience table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS pi_experience (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      start_year TEXT NOT NULL,
      end_year TEXT,
      position TEXT NOT NULL,
      organization TEXT NOT NULL,
      location TEXT,
      description TEXT,
      is_current BOOLEAN DEFAULT FALSE,
      order_index INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // PI Awards table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS pi_awards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      year TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      organization TEXT,
      grant_amount TEXT,
      currency TEXT,
      order_index INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // New joiners content table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS new_joiners_content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // New joiners submissions table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS new_joiners_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      message TEXT NOT NULL,
      email TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Recent updates content table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS recent_updates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      date_posted DATE DEFAULT CURRENT_DATE,
      is_active BOOLEAN DEFAULT TRUE,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // At a glance photos table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS at_a_glance_photos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image_url TEXT NOT NULL,
      description TEXT NOT NULL,
      order_index INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT TRUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)
}

const createDefaultAdmin = async () => {
  if (!db) throw new Error('Database not initialized')

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

  // Check if admin already exists
  const existingAdmin = await db.get('SELECT id FROM admin_users WHERE email = ?', adminEmail)
  
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(adminPassword, 10)
    
    await db.run(
      'INSERT INTO admin_users (email, password_hash) VALUES (?, ?)',
      adminEmail,
      passwordHash
    )
    
    console.log(`Default admin created with email: ${adminEmail}`)
  }
}

export const getDatabase = (): Database<sqlite3.Database, sqlite3.Statement> => {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase first.')
  }
  return db
}

export const closeDatabase = async () => {
  if (db) {
    await db.close()
    db = null
  }
}