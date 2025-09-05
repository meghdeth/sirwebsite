import { getDatabase, initializeDatabase } from '../models/database';

// PI Education data
const educationData = [
  {
    year: '2019',
    degree: 'Ph.D',
    field: 'Materials Science and Engineering',
    institution: 'Swiss Federal Institute of Technology Lausanne (EPFL)',
    location: 'Switzerland',
    order_index: 1,
    is_active: true
  },
  {
    year: '2012',
    degree: 'M.S (by Research)',
    field: 'Metallurgical and Materials Engineering',
    institution: 'Indian Institute of Technology Madras',
    location: 'India',
    order_index: 2,
    is_active: true
  }
];

// PI Experience data
const experienceData = [
  {
    start_year: '2023',
    end_year: null,
    position: 'Assistant Professor',
    organization: 'Indian Institute of Technology Madras',
    location: 'Chennai, India',
    description: '',
    is_current: true,
    order_index: 1,
    is_active: true
  },
  {
    start_year: '2022',
    end_year: '2023',
    position: 'Group Leader, Perovskite Optoelectronics',
    organization: 'AMO/RWTH Aachen',
    location: 'Germany',
    description: '',
    is_current: false,
    order_index: 2,
    is_active: true
  },
  {
    start_year: '2019',
    end_year: '2022',
    position: 'Swiss National Science Foundation (SNSF) Postdoctoral Fellow',
    organization: 'University of Pennsylvania',
    location: 'Philadelphia, USA',
    description: '',
    is_current: false,
    order_index: 3,
    is_active: true
  },
  {
    start_year: '2015',
    end_year: '2019',
    position: 'Research Assistant',
    organization: 'Swiss Federal Laboratories for Materials Science and Technology',
    location: 'Duebendorf, Switzerland',
    description: '',
    is_current: false,
    order_index: 4,
    is_active: true
  },
  {
    start_year: '2015',
    end_year: '2015',
    position: 'Japan Society for Promotion of Science (JSPS) fellow',
    organization: 'Tokyo University of Agriculture and Technology (TUAT)',
    location: 'Japan',
    description: '',
    is_current: false,
    order_index: 5,
    is_active: true
  },
  {
    start_year: '2012',
    end_year: '2013',
    position: 'Engineer',
    organization: 'Taiwan Semiconductor Manufacturing Company (TSMC)',
    location: 'Hsinchu, Taiwan',
    description: '',
    is_current: false,
    order_index: 6,
    is_active: true
  }
];

// PI Awards data
const awardsData = [
  {
    year: '2019-2021',
    title: 'Principal Investigator for Swiss National Science Foundation (SNSF) Early Postdoc Mobility Fellowship',
    description: 'Research grant for postdoctoral work',
    organization: 'Swiss National Science Foundation',
    grant_amount: '106,650',
    currency: 'CHF',
    order_index: 1,
    is_active: true
  },
  {
    year: '2021',
    title: 'SNSF Open Access Publication Funding',
    description: 'Publication grant',
    organization: 'Swiss National Science Foundation',
    grant_amount: '4,494',
    currency: 'CHF',
    order_index: 2,
    is_active: true
  },
  {
    year: '2020, 2019',
    title: 'Best Presentation Prize in Nanoge Conference',
    description: 'Two times consecutively',
    organization: 'Nanoge Conference',
    grant_amount: null,
    currency: null,
    order_index: 3,
    is_active: true
  },
  {
    year: '2019',
    title: 'Ph.D. Thesis nominated for the "Best Ph.D. Thesis Award"',
    description: 'Top 8% at EPFL',
    organization: 'Swiss Federal Institute of Technology Lausanne (EPFL)',
    grant_amount: null,
    currency: null,
    order_index: 4,
    is_active: true
  },
  {
    year: '2017',
    title: 'Conceived the proposal for SNSF R\'EQUIP grant to purchase IR-AFM at Empa, Switzerland',
    description: 'Equipment grant proposal',
    organization: 'Swiss National Science Foundation',
    grant_amount: null,
    currency: null,
    order_index: 5,
    is_active: true
  },
  {
    year: '2016',
    title: 'Japan Society for Promotion of Science (JSPS) fellow (3 months)',
    description: 'Research fellowship',
    organization: 'Japan Society for Promotion of Science',
    grant_amount: '660,000',
    currency: 'JPY',
    order_index: 6,
    is_active: true
  },
  {
    year: '2015-2019',
    title: 'SNSF Fellowship, Ph.D. research',
    description: 'Ph.D. research funding',
    organization: 'Swiss National Science Foundation',
    grant_amount: '220,000',
    currency: 'CHF',
    order_index: 7,
    is_active: true
  },
  {
    year: '2013',
    title: 'Best Idea Award at Taiwan Semiconductor Manufacturing Company (TSMC), Taiwan',
    description: 'Innovation award for engineering excellence',
    organization: 'Taiwan Semiconductor Manufacturing Company',
    grant_amount: null,
    currency: null,
    order_index: 8,
    is_active: true
  },
  {
    year: '2009-2012',
    title: 'Research Assistantship, Government of India for M.S (by Research) at IIT Madras',
    description: 'Graduate research assistantship',
    organization: 'Government of India',
    grant_amount: null,
    currency: null,
    order_index: 9,
    is_active: true
  }
];

async function seedPIData() {
  try {
    const db = getDatabase();
    
    // Clear existing data
    await db.run('DELETE FROM pi_education');
    await db.run('DELETE FROM pi_experience');
    await db.run('DELETE FROM pi_awards');

    // Insert education data
    for (const item of educationData) {
      await db.run(`
        INSERT INTO pi_education (year, degree, field, institution, location, order_index, is_active, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `, [item.year, item.degree, item.field, item.institution, item.location, item.order_index, item.is_active]);
    }

    // Insert experience data
    for (const item of experienceData) {
      await db.run(`
        INSERT INTO pi_experience (start_year, end_year, position, organization, location, description, is_current, order_index, is_active, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `, [item.start_year, item.end_year, item.position, item.organization, item.location, item.description, item.is_current, item.order_index, item.is_active]);
    }

    // Insert awards data
    for (const item of awardsData) {
      await db.run(`
        INSERT INTO pi_awards (year, title, description, organization, grant_amount, currency, order_index, is_active, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `, [item.year, item.title, item.description, item.organization, item.grant_amount, item.currency, item.order_index, item.is_active]);
    }

    console.log('PI data seeded successfully!');
  } catch (error) {
    console.error('Error seeding PI data:', error);
    throw error;
  }
}

if (require.main === module) {
  initializeDatabase()
    .then(() => seedPIData())
    .then(() => {
      console.log('Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

export { seedPIData };