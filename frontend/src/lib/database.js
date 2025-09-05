// Database configuration and utility functions
// Note: For production, install mysql2 package: npm install mysql2

let db = null;

// Simulated database connection (replace with actual MySQL connection)
const connectDB = async () => {
  if (!db) {
    // This would be your actual MySQL connection
    // const mysql = require('mysql2/promise');
    // db = await mysql.createConnection({
    //   host: 'localhost',
    //   user: 'root',
    //   password: 'your_password',
    //   database: 'lds_lab'
    // });
    
    // For now, using mock data
    db = {
      connected: true,
      mockData: {
        messages: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Research Collaboration',
            message: 'Hello, I am interested in collaborating with your lab on quantum materials research.',
            file_name: 'research_proposal.pdf',
            file_path: '/uploads/research_proposal.pdf',
            created_at: '2024-01-15T10:30:00Z',
            read_status: false
          },
          {
            id: 2,
            name: 'Sarah Smith',
            email: 'sarah@university.edu',
            subject: 'PhD Application',
            message: 'I would like to apply for a PhD position in your research group. I have attached my CV and research statement.',
            file_name: 'cv_sarah_smith.pdf',
            file_path: '/uploads/cv_sarah_smith.pdf',
            created_at: '2024-01-14T15:45:00Z',
            read_status: true
          },
          {
            id: 3,
            name: 'Dr. Michael Johnson',
            email: 'mjohnson@research.org',
            subject: 'Conference Invitation',
            message: 'We would like to invite you to speak at the International Materials Science Conference 2024.',
            file_name: null,
            file_path: null,
            created_at: '2024-01-13T09:15:00Z',
            read_status: false
          }
        ],
        home_content: {
          id: 1,
          title: 'Welcome to LDS Lab',
          subtitle: 'Low-Dimensional Semiconductors Laboratory',
          description: 'Advancing the frontiers of materials science through innovative research in low-dimensional semiconductor systems.',
          hero_image: '/images/lab-hero.jpg',
          updated_at: '2024-01-01T00:00:00Z'
        },
        news: [
          {
            id: 1,
            year: '2025',
            title: 'New Research Grant Awarded',
            content: 'Surendra receives the ANRF Prime Minister Early Career Research Grant (PMECRG), which will help our LDS lab to start setting up optoelectronic devices.',
            date: '2025-01-10',
            link: null
          },
          {
            id: 2,
            year: '2024',
            title: 'Paper Published in Nature Photonics',
            content: 'Our work on "Ultrastrong Light-Matter Coupling in Two-dimensional Metal-Organic Chalcogenolates" was published in Nature Photonics (Impact Factor: 32.3)',
            date: '2024-12-15',
            link: null
          }
        ],
        publications: [
          {
            id: 1,
            title: 'Quantum Transport in Two-Dimensional MoS₂ Field-Effect Transistors with High-κ Gate Dielectrics',
            authors: 'S. Anantharaman, K. Motala-Kantarci, M. Ksiazek-Sobieszek, G. Diankov, R. Remskar, A. Costine, B. J. Jeong, L. Domulevicz, S. Kraemer, S. W. Lee, H. D. Abruna, D. Jena, H. G. Xing, F. H. L. Koppens',
            journal: 'Nature Communications',
            year: '2021',
            volume: '12',
            pages: '1234',
            doi: '10.1038/s41467-021-21436-1'
          }
        ],
        gallery: [
          {
            id: 1,
            title: 'Quantum Materials Lab',
            description: 'State-of-the-art quantum materials research facility',
            images: [
              '/images/gallery/lab1.jpg',
              '/images/gallery/lab2.jpg',
              '/images/gallery/lab3.jpg'
            ]
          }
        ]
      }
    };
  }
  return db;
};

// Database query functions
export const getMessages = async () => {
  const database = await connectDB();
  return database.mockData.messages;
};

export const markMessageAsRead = async (messageId) => {
  const database = await connectDB();
  const message = database.mockData.messages.find(m => m.id === messageId);
  if (message) {
    message.read_status = true;
  }
  return message;
};

export const deleteMessage = async (messageId) => {
  const database = await connectDB();
  const index = database.mockData.messages.findIndex(m => m.id === messageId);
  if (index > -1) {
    database.mockData.messages.splice(index, 1);
    return true;
  }
  return false;
};

export const addMessage = async (messageData) => {
  const database = await connectDB();
  const newId = Math.max(...database.mockData.messages.map(m => m.id)) + 1;
  const newMessage = {
    id: newId,
    ...messageData,
    created_at: new Date().toISOString(),
    read_status: false
  };
  database.mockData.messages.unshift(newMessage);
  return newMessage;
};

export const getHomeContent = async () => {
  const database = await connectDB();
  return database.mockData.home_content;
};

export const updateHomeContent = async (content) => {
  const database = await connectDB();
  database.mockData.home_content = {
    ...database.mockData.home_content,
    ...content,
    updated_at: new Date().toISOString()
  };
  return database.mockData.home_content;
};

export const getNews = async () => {
  const database = await connectDB();
  return database.mockData.news;
};

export const addNews = async (newsData) => {
  const database = await connectDB();
  const newId = Math.max(...database.mockData.news.map(n => n.id)) + 1;
  const newNews = {
    id: newId,
    ...newsData,
    date: new Date().toISOString().split('T')[0]
  };
  database.mockData.news.unshift(newNews);
  return newNews;
};

export const getPublications = async () => {
  const database = await connectDB();
  return database.mockData.publications;
};

export const addPublication = async (publicationData) => {
  const database = await connectDB();
  const newId = Math.max(...database.mockData.publications.map(p => p.id)) + 1;
  const newPublication = {
    id: newId,
    ...publicationData
  };
  database.mockData.publications.unshift(newPublication);
  return newPublication;
};

export const getGallery = async () => {
  const database = await connectDB();
  return database.mockData.gallery;
};

export const addGalleryItem = async (galleryData) => {
  const database = await connectDB();
  const newId = Math.max(...database.mockData.gallery.map(g => g.id)) + 1;
  const newGalleryItem = {
    id: newId,
    ...galleryData
  };
  database.mockData.gallery.unshift(newGalleryItem);
  return newGalleryItem;
};