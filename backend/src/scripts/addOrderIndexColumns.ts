import { initializeDatabase, getDatabase } from '../models/database';

async function addOrderIndexColumns() {
  try {
    // Initialize database
    await initializeDatabase();
    const db = getDatabase();

    console.log('Adding order_index columns to existing tables...');

    // Add order_index to patents table if it doesn't exist
    try {
      await db.exec(`ALTER TABLE patents ADD COLUMN order_index INTEGER DEFAULT 0`);
      console.log('✅ Added order_index to patents table');
    } catch (error) {
      console.log('⚠️  order_index already exists in patents table or other error');
    }

    // Add order_index to conferences table if it doesn't exist
    try {
      await db.exec(`ALTER TABLE conferences ADD COLUMN order_index INTEGER DEFAULT 0`);
      console.log('✅ Added order_index to conferences table');
    } catch (error) {
      console.log('⚠️  order_index already exists in conferences table or other error');
    }

    // Add order_index to publications table if it doesn't exist
    try {
      await db.exec(`ALTER TABLE publications ADD COLUMN order_index INTEGER DEFAULT 0`);
      console.log('✅ Added order_index to publications table');
    } catch (error) {
      console.log('⚠️  order_index already exists in publications table or other error');
    }

    // Add order_index to teaching_courses table if it doesn't exist
    try {
      await db.exec(`ALTER TABLE teaching_courses ADD COLUMN order_index INTEGER DEFAULT 0`);
      console.log('✅ Added order_index to teaching_courses table');
    } catch (error) {
      console.log('⚠️  order_index already exists in teaching_courses table or other error');
    }

    // Add order_index to gallery_posts table if it doesn't exist
    try {
      await db.exec(`ALTER TABLE gallery_posts ADD COLUMN order_index INTEGER DEFAULT 0`);
      console.log('✅ Added order_index to gallery_posts table');
    } catch (error) {
      console.log('⚠️  order_index already exists in gallery_posts table or other error');
    }

    console.log('🎉 Order index columns setup complete!');
    
    // Initialize order_index values based on current ordering
    console.log('Initializing order_index values...');
    
    // Patents
    const patents = await db.all('SELECT id FROM patents ORDER BY grant_date DESC, filing_date DESC, created_at DESC');
    for (let i = 0; i < patents.length; i++) {
      await db.run('UPDATE patents SET order_index = ? WHERE id = ?', [i, patents[i].id]);
    }
    console.log(`✅ Initialized order for ${patents.length} patents`);

    // Conferences
    const conferences = await db.all('SELECT id FROM conferences ORDER BY date DESC, year DESC, created_at DESC');
    for (let i = 0; i < conferences.length; i++) {
      await db.run('UPDATE conferences SET order_index = ? WHERE id = ?', [i, conferences[i].id]);
    }
    console.log(`✅ Initialized order for ${conferences.length} conferences`);

    // Publications
    const publications = await db.all('SELECT id FROM publications ORDER BY year DESC, created_at DESC');
    for (let i = 0; i < publications.length; i++) {
      await db.run('UPDATE publications SET order_index = ? WHERE id = ?', [i, publications[i].id]);
    }
    console.log(`✅ Initialized order for ${publications.length} publications`);

    // Teaching courses
    const courses = await db.all('SELECT id FROM teaching_courses ORDER BY created_at DESC');
    for (let i = 0; i < courses.length; i++) {
      await db.run('UPDATE teaching_courses SET order_index = ? WHERE id = ?', [i, courses[i].id]);
    }
    console.log(`✅ Initialized order for ${courses.length} teaching courses`);

    // Gallery posts
    const galleryPosts = await db.all('SELECT id FROM gallery_posts ORDER BY created_at DESC');
    for (let i = 0; i < galleryPosts.length; i++) {
      await db.run('UPDATE gallery_posts SET order_index = ? WHERE id = ?', [i, galleryPosts[i].id]);
    }
    console.log(`✅ Initialized order for ${galleryPosts.length} gallery posts`);

    console.log('✨ All order indexes initialized successfully!');
    
  } catch (error) {
    console.error('❌ Error adding order index columns:', error);
  }
}

// Run the script
addOrderIndexColumns();