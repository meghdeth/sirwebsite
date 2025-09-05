import { getDatabase, initializeDatabase } from '../models/database'

const recentUpdatesData = [
  {
    title: "Hiring New M.S and Ph.D Students",
    content: "We are interested in hiring one M.S and one Ph.D. student. Interested students can contact Surendra or meet him in his office - KCB 147",
    date_posted: "2025-01-15",
    order_index: 1
  },
  {
    title: "Congratulations Ramji",
    content: "Ramji has successfully completed and secured 10 CGPA in his MS Coursework",
    date_posted: "2025-01-10",
    order_index: 2
  },
  {
    title: "Welcome Chandu and Ganesh Arvindh",
    content: "Chandu, 4th year student of our department and Ganesh Arvindh, Dual Degree student from IIST Thiruvanthapuram will be pursuing their thesis research in our LDS lab",
    date_posted: "2025-01-05",
    order_index: 3
  },
  {
    title: "Congratulations Reitesh Raman for M.S Admission (Fall 2025) in US",
    content: "Reitesh Raman will be joining the Electrical and Systems Engineering, University of Pennsylvania, USA for his M.S program. Reitesh completed his B.Tech work in LDS Lab",
    date_posted: "2024-12-20",
    order_index: 4
  },
  {
    title: "NANO KOREA 2025 - Oral Presentation",
    content: "Congratulations Reitesh Raman. He will be presenting his B.Tech Thesis research in NANO KOREA, Seoul, South Korea from 02 - 04th July 2025",
    date_posted: "2024-12-15",
    order_index: 5
  },
  {
    title: "Surendra and Prof. Shotaro Tada are Organising Indo-Japan Conference 2025: (ISERAM)",
    content: "IITM and Nagoya University-Japan jointly will be organizing the International Symposium on Emerging Research in Advanced Materials (ISERAM-1) from 27-29 June 2025. For more details Please check",
    date_posted: "2024-12-10",
    order_index: 6
  },
  {
    title: "ANRF ITS",
    content: "Congratulations Dr. Kumar Shwetabh for receiving the ANRF ITS (Travel Grant ~€1500) - E-MRS France May 2025",
    date_posted: "2024-12-05",
    order_index: 7
  },
  {
    title: "New Publication - Nature Photonics 2025",
    content: "Surendra's work was accepted in Nature Photonics, January 2025. Click here for more details",
    date_posted: "2024-11-30",
    order_index: 8
  }
]

async function insertRecentUpdates() {
  try {
    console.log('Initializing database...')
    await initializeDatabase()
    
    console.log('Getting database connection...')
    const db = getDatabase()
    
    console.log('Inserting recent updates...')
    
    for (const update of recentUpdatesData) {
      await db.run(
        'INSERT INTO recent_updates (title, content, date_posted, order_index) VALUES (?, ?, ?, ?)',
        [update.title, update.content, update.date_posted, update.order_index]
      )
      console.log(`✓ Inserted: ${update.title}`)
    }
    
    console.log('\n🎉 Successfully inserted all recent updates!')
    console.log(`📊 Total updates inserted: ${recentUpdatesData.length}`)
    
    // Verify the insertions
    const count = await db.get('SELECT COUNT(*) as count FROM recent_updates')
    console.log(`📈 Total updates in database: ${count.count}`)
    
  } catch (error) {
    console.error('❌ Error inserting recent updates:', error)
  }
}

// Run the script
insertRecentUpdates()