import { initializeDatabase, getDatabase } from '../models/database';

const newsData = [
  // 2025 News
  {
    year: "2025",
    title: "Indo-Japan International Symposium on Advanced Materials",
    content: "Upcoming Indo-Japan event: Surendra and Prof. Shotaro Tada will be organizing the International Symposium on Emerging Research in Advanced Materials from 27-29th June 2025. MoU will be signed between IIT M and Nagoya University, Japan. For more details, please click here",
    link: "#"
  },
  {
    year: "2025",
    title: "Kumar Shwetabh to Present at E-MRS 2025",
    content: "Kumar Shwetabh will be presenting his Postdoctoral Research at European Materials Research Society (E-MRS 2025) France on 25th May 2025. Kumar has also received support from ANRF-ITS travel grant. Congratulations, Kumar!!"
  },
  {
    year: "2025",
    title: "ANRF Prime Minister Early Career Research Grant Awarded",
    content: "New Project Grant: Surendra receives the ANRF Prime Minister Early Career Research Grant (PMECRG), which will help our LDS lab to start setting up optoelectronic devices. Students interested in working on optoelectronic devices based on 2D materials can contact Surendra for Ph.D. or project position"
  },
  {
    year: "2025",
    title: "Institute Open House 2025",
    content: "Surendra organized the Institute Open House 2025, representing the Department of Metallurgical and Materials Engineering"
  },
  {
    year: "2025",
    title: "Nature Photonics Publication",
    content: "Surendra's work on \"Ultrastrong Light-Matter Coupling in Two-dimensional Metal-Organic Chalcogenolates\" was published in Nature Photonics (Impact Factor: 32.3)"
  },

  // 2024 News
  {
    year: "2024",
    title: "Reitesh KV Raman Joins LDS Lab",
    content: "Reitesh KV Raman joins our group for his B.Tech thesis work on Exciton-polariton based optoelectronic devices"
  },
  {
    year: "2024",
    title: "Welcome Shovan Samanta",
    content: "Shovan Samanta joins our group as a second Ph.D student. Welcome Shovan!!"
  },
  {
    year: "2024",
    title: "Gummidi Nidesh M.Tech Project",
    content: "Gummidi Nidesh will start working on Hybrid Organic-Inorganic Semiconductors for his M.Tech thesis work"
  },
  {
    year: "2024",
    title: "Abhishek Raj Selected for Purdue Fellowship",
    content: "Abhishek Raj has been selected for Summer Undergraduate Research Fellowship at Purdue University. Abhishek will be visiting Purdue University for this summer. Best wishes from our group for your internship!!"
  },
  {
    year: "2024",
    title: "Abhishek Mondal Thesis Defense Success",
    content: "Abhishek Mondal has successfully defended his Integrated Master Thesis work at SVNIT"
  },
  {
    year: "2024",
    title: "Abhishek Raj Achieves S-Grade",
    content: "Abhishek Raj has secured S-grade (10/10) for his BTech Thesis work. Congratulations, Abhishek Raj!!"
  },
  {
    year: "2024",
    title: "ISPEC 2024 Conference Attendance",
    content: "Surendra was invited to attend the First India Semiconductor and Packaging Ecosystem Conference (ISPEC 2024) in Mohali, Punjab"
  },
  {
    year: "2024",
    title: "Abhishek Mondal Research Internship",
    content: "We welcome Abhishek Mondal for his research internship in the LDS Lab"
  },
  {
    year: "2024",
    title: "Invited Talk at IIT Patna",
    content: "Surendra presented an invited talk at IIT Patna on Emerging Halide Perovskite Semiconductors for Harvesting the Solar Energy on 15th February 2024"
  },
  {
    year: "2024",
    title: "Invited Talk at IIT Kharagpur",
    content: "Surendra presented an invited talk at IIT Kharagpur on Strong Light-Matter Interactions in Two-dimensional Materials for Harvesting Solar Energy on 8th January 2024"
  },

  // 2023 News
  {
    year: "2023",
    title: "XXII International Workshop Co-Chair",
    content: "Surendra co-chaired the sessions for \"Optoelectronics\" in XXII International Workshop on Physics of Semiconductor Devices, 14 - 17 December, 2023, IIT Madras"
  },
  {
    year: "2023",
    title: "New Lab Members Welcome",
    content: "LDS Lab welcomes PhD student - Mr. Reyas Ali, BTech Thesis Students - Mr. Abhishek Raj and Mr. Rajamani Ananth"
  },
  {
    year: "2023",
    title: "International Conference Invited Talk",
    content: "Surendra presented an invited talk titled \"Opportunities in Two-dimensional Materials for Harvesting Solar Energy\" at International Conference on Thin Films & Nanotechnology: Knowledge, Leadership, & Commercialization, IIT Madras on 7th July 2023"
  },
  {
    year: "2023",
    title: "Joining IIT Madras",
    content: "Surendra Anantharaman joined the Department of Metallurgical and Materials Engineering, IIT Madras on 2nd May 2023"
  },
  {
    year: "2023",
    title: "Anna University Invited Talk",
    content: "Surendra presented an invited talk at the College of Engineering, Anna University, Guindy, Chennai on 8th March 2023"
  },
  {
    year: "2023",
    title: "NIT Tiruchirappalli Invited Talk",
    content: "Surendra presented an invited talk at National Institute of Technology, Tiruchirappalli for Inphynitt'23 on 7th March 2023"
  }
];

async function insertNews() {
  try {
    await initializeDatabase();
    const db = getDatabase();
    
    console.log('Starting to insert news items...');
    
    for (const news of newsData) {
      const result = await db.run(
        `INSERT INTO news (year, title, content, link) VALUES (?, ?, ?, ?)`,
        news.year, news.title, news.content, news.link || null
      );
      console.log(`Inserted news: ${news.title} (ID: ${result.lastID})`);
    }
    
    console.log(`Successfully inserted ${newsData.length} news items!`);
    
    // Verify the insertion
    const count = await db.get('SELECT COUNT(*) as count FROM news');
    console.log(`Total news items in database: ${count.count}`);
    
  } catch (error) {
    console.error('Error inserting news:', error);
  }
}

insertNews();