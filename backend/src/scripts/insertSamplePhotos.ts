import { getDatabase, initializeDatabase } from '../models/database'

const samplePhotosData = [
  {
    image_url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=400&fit=crop",
    description: "Advanced semiconductor research laboratory with state-of-the-art equipment for materials characterization and device fabrication",
    order_index: 1
  },
  {
    image_url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
    description: "Students and researchers collaborating on cutting-edge projects in low-dimensional semiconductors and photonics",
    order_index: 2
  },
  {
    image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop",
    description: "High-resolution microscopy facilities enabling nanoscale characterization of semiconductor materials and devices",
    order_index: 3
  },
  {
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    description: "International conferences and symposiums where LDS Lab presents groundbreaking research to the global scientific community",
    order_index: 4
  }
]

async function insertSamplePhotos() {
  try {
    console.log('Initializing database...')
    await initializeDatabase()
    
    console.log('Getting database connection...')
    const db = getDatabase()
    
    console.log('Inserting sample photos for At a Glance carousel...')
    
    for (const photo of samplePhotosData) {
      await db.run(
        'INSERT INTO at_a_glance_photos (image_url, description, order_index) VALUES (?, ?, ?)',
        [photo.image_url, photo.description, photo.order_index]
      )
      console.log(`✓ Inserted photo: ${photo.description.substring(0, 50)}...`)
    }
    
    console.log('\n🎉 Successfully inserted all sample photos!')
    console.log(`📊 Total photos inserted: ${samplePhotosData.length}`)
    
    // Verify the insertions
    const count = await db.get('SELECT COUNT(*) as count FROM at_a_glance_photos')
    console.log(`📸 Total photos in database: ${count.count}`)
    
  } catch (error) {
    console.error('❌ Error inserting sample photos:', error)
  }
}

// Run the script
insertSamplePhotos()