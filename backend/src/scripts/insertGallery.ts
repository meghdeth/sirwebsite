import { initializeDatabase, getDatabase } from '../models/database';

const galleryData = [
  // Lab images
  {
    title: "Quantum Materials Lab Setup",
    description: "State-of-the-art quantum materials research facility with advanced instrumentation",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "lab",
    order_index: 1
  },
  {
    title: "Advanced Characterization Equipment",
    description: "High-resolution electron microscopy and spectroscopy equipment",
    image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    category: "equipment",
    order_index: 1
  },
  {
    title: "Clean Room Facility",
    description: "Class 1000 clean room for device fabrication and processing",
    image_url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    category: "lab",
    order_index: 2
  },

  // Research images
  {
    title: "2D Materials Synthesis",
    description: "Chemical vapor deposition system for growing high-quality 2D materials",
    image_url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&h=300&fit=crop",
    category: "research",
    order_index: 1
  },
  {
    title: "Device Fabrication Process",
    description: "Lithography and etching processes for creating semiconductor devices",
    image_url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
    category: "research",
    order_index: 2
  },
  {
    title: "Optical Characterization",
    description: "Photoluminescence and Raman spectroscopy measurements",
    image_url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
    category: "research",
    order_index: 3
  },

  // Team images
  {
    title: "Research Team Meeting",
    description: "Weekly group meeting discussing latest research findings",
    image_url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
    category: "team",
    order_index: 1
  },
  {
    title: "PhD Students at Work",
    description: "Graduate students conducting experiments in the lab",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "team",
    order_index: 2
  },
  {
    title: "Collaborative Research",
    description: "International collaboration meeting with visiting researchers",
    image_url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&h=300&fit=crop",
    category: "team",
    order_index: 3
  },

  // Events images
  {
    title: "International Conference Presentation",
    description: "Presenting research findings at IEEE conference",
    image_url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
    category: "events",
    order_index: 1
  },
  {
    title: "Workshop on 2D Materials",
    description: "Hosting international workshop on 2D materials research",
    image_url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
    category: "events",
    order_index: 2
  },

  // Equipment images
  {
    title: "Scanning Electron Microscope",
    description: "High-resolution SEM for material characterization",
    image_url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
    category: "equipment",
    order_index: 2
  },
  {
    title: "X-ray Diffraction System",
    description: "Advanced XRD system for crystal structure analysis",
    image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    category: "equipment",
    order_index: 3
  },

  // General images
  {
    title: "IIT Madras Campus",
    description: "Beautiful campus view of Indian Institute of Technology Madras",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    category: "general",
    order_index: 1
  },
  {
    title: "Laboratory Overview",
    description: "Overview of our research laboratory facilities",
    image_url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&h=300&fit=crop",
    category: "general",
    order_index: 2
  }
];

async function insertGallery() {
  try {
    await initializeDatabase();
    const db = getDatabase();
    
    console.log('Starting to insert gallery images...');
    
    for (const gallery of galleryData) {
      const result = await db.run(
        `INSERT INTO gallery_posts (title, description, images, order_index) VALUES (?, ?, ?, ?)`,
        gallery.title, gallery.description, JSON.stringify([gallery.image_url]), gallery.order_index
      );
      console.log(`Inserted gallery image: ${gallery.title} (ID: ${result.lastID})`);
    }
    
    console.log(`Successfully inserted ${galleryData.length} gallery images!`);
    
    // Verify the insertion
    const count = await db.get('SELECT COUNT(*) as count FROM gallery_posts');
    console.log(`Total gallery posts in database: ${count.count}`);
    
  } catch (error) {
    console.error('Error inserting gallery images:', error);
  }
}

insertGallery();