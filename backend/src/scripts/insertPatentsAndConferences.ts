import { initializeDatabase, getDatabase } from '../models/database';

const patentsData = [
  {
    title: "Ultrahigh Vacuum Apparatus having a Cryopump Nanostructured Material",
    inventors: "S.B. Anantharaman, W-C. Yang, C-E. Kao, V.Y. Lu, W. Chin",
    patent_number: "US11111910B2",
    application_number: null,
    filing_date: null,
    grant_date: "2021-01-01",
    status: "Granted",
    abstract: "Patent on Ultrahigh Vacuum Apparatus having a Cryopump Nanostructured Material"
  },
  {
    title: "Ultrahigh Vacuum Apparatus having a Cryopump Nanostructured Material",
    inventors: "S.B. Anantharaman, W-C. Yang, C-E. Kao, V.Y. Lu, W. Chin",
    patent_number: "CN104564597B",
    application_number: null,
    filing_date: null,
    grant_date: "2018-01-01",
    status: "Granted",
    abstract: "China Patent on Ultrahigh Vacuum Apparatus having a Cryopump Nanostructured Material"
  }
];

const conferencesData = [
  {
    title: "Room-Temperature Distributed Feedback CsPbBr₃ Perovskite Lasers Integrated on Silicon Nitride Waveguide Platform",
    authors: "F. Fabrizi*, P. Cegielski, M. Runkel, S. Goudarzi, C. Kreusel, B. Chmielak, S. Suckow, T. Riedl, S.B Anantharaman, M.C. Lemme",
    conference_name: "2023 MRS Spring Meeting",
    location: "San Francisco, USA",
    date: "2024-04-10",
    year: 2024,
    paper_type: "Oral Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Self-Hybridized Polaritonic Emission from Layered Perovskites",
    authors: "S.B. Anantharaman*, C.E. Stevens, J. Lynch, B. Song, J. Hou, H. Zhang, K. Jo, P. Kumar, J-C. Blancon, A.D. Mohite, J.R. Hendrickson, D. Jariwala",
    conference_name: "2021 MRS Spring Meeting (online)",
    location: "Online",
    date: "2021-04-01",
    year: 2021,
    paper_type: "Oral Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Enhanced Room‐Temperature Photoluminescence Quantum Yield in Morphology Controlled J‐Aggregates",
    authors: "S.B. Anantharaman*, J. Kohlbrecher, G. Rainò, S. Yakunin, T. Stöferle, J. Patel, M. Kovalenko, R.F. Mahrt, F.A. Nüesch, J. Heier",
    conference_name: "2020 MRS Spring & Fall Meeting (online)",
    location: "Online",
    date: "2020-04-01",
    year: 2020,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Enhanced Room‐Temperature Photoluminescence Quantum Yield in Morphology Controlled J‐Aggregates",
    authors: "S.B. Anantharaman*, J. Kohlbrecher, G. Rainò, S. Yakunin, T. Stöferle, J. Patel, M. Kovalenko, R.F. Mahrt, F.A. Nüesch, J. Heier",
    conference_name: "2020 Young Professional Meetup: nanoge Conference (online)",
    location: "Online",
    date: "2020-06-01",
    year: 2020,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Squaraine Dye for a Visibly Transparent All-Organic Optical Upconversion Device with Sensitivity at 1000 nm",
    authors: "K. Strassel*, A. Kaiser, S. Jenatsch, A. Véron, S.B. Anantharaman, E. Hack, M. Diethelm, F. Nüesch, R. Aderne, C. Legnani, S. Yakunin, M. Cremona, R. Hany",
    conference_name: "International Conference on Interfaces in Organic and Hybrid Thin-Film Optoelectronics",
    location: "Spain",
    date: "2019-03-05",
    year: 2019,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Role of Submerged Miscibility Gap in Phase Formation in Sol-gel Synthesis of Yttrium Silicates",
    authors: "S.B. Anantharaman*, V.B. Rajkumar, S. Raghunandan, K.C. Hari Kumar, R. Suresh Kumar, Ashutosh S. Gandhi",
    conference_name: "2018 MS&T",
    location: "Columbus, Ohio",
    date: "2018-10-14",
    year: 2018,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Enhancing Solid-State Luminescence in Supramolecular Assemblies by Suppressing Non-radiative Decay",
    authors: "S.B. Anantharaman*, T. Stöferle, F. Nüesch, R. F. Mahrt, J. Heier",
    conference_name: "EDMX Research Day 2018",
    location: "EPFL, Switzerland",
    date: "2018-05-01",
    year: 2018,
    paper_type: "Oral Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Enhancing the Exciton Diffusion in the Supramolecular Assemblies by Suppressing the Non-radiative Decays",
    authors: "S.B. Anantharaman*, T. Stöferle, F. A. Nüesch, R.F. Mahrt, J. Heier",
    conference_name: "2018 MRS Spring Meeting & Exhibit",
    location: "Arizona",
    date: "2018-04-02",
    year: 2018,
    paper_type: "Oral Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Exploiting Supramolecular Assemblies for Filterless Ultra-narrowband Organic Photodetectors with Inkjet Fabrication Capability",
    authors: "S.B. Anantharaman*, K. Strassel, M. Diethelm, A. Gubicza, E. Hack, R. Hany, F. Nüesch, J. Heier",
    conference_name: "2018 MRS Spring Meeting & Exhibit",
    location: "Arizona",
    date: "2018-04-02",
    year: 2018,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Enhancing the Exciton Diffusion in the Supramolecular Assemblies by Suppressing the Non-radiative Decays",
    authors: "S.B. Anantharaman*, T. Stöferle, F. A. Nüesch, R.F. Mahrt, J. Heier",
    conference_name: "EMPA PhD Symposium 2017",
    location: "Dubendorf, Switzerland",
    date: "2017-11-13",
    year: 2017,
    paper_type: "Oral Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Strongly Red-Shifted Photoluminescence Band Induced by Molecular Twisting in Cyanine (Cy3) Dye Films",
    authors: "S.B. Anantharaman*, S. Yakunin, C. Peng, M. Vismara, C. Graeff, F. Nüesch, S. Jenatsch, R. Hany, M. Kovalenko, J. Heier",
    conference_name: "4th International Conference on Physical and Theoretical Chemistry",
    location: "Dublin, Ireland",
    date: "2017-09-18",
    year: 2017,
    paper_type: "Invited Oral",
    doi: null,
    pdf_url: null
  },
  {
    title: "Unraveling the Growth Mechanism of 2D J-aggregate Monolayers and Nanocrystals on Modified Surfaces",
    authors: "S.B. Anantharaman*, T. Stöferle, F. A. Nüesch, R.F. Mahrt, J. Heier",
    conference_name: "SAOG 2017",
    location: "Switzerland",
    date: "2017-09-01",
    year: 2017,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Unraveling the Growth Mechanism of 2D J-aggregate Monolayers and Nanocrystals on Modified Surfaces",
    authors: "S.B. Anantharaman*, F. Nüesch and J. Heier",
    conference_name: "Swiss Chemical Society",
    location: "University of Zurich, Switzerland",
    date: "2016-09-15",
    year: 2016,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Growth and Morphology of J-aggregates on Solid Substrates",
    authors: "S.B. Anantharaman*, F. Nüesch, J. Heier",
    conference_name: "Junior Euromat",
    location: "EPFL",
    date: "2016-07-10",
    year: 2016,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Growth and Morphology of J-aggregates on Solid Substrates",
    authors: "S.B. Anantharaman*, F. Nüesch, J. Heier",
    conference_name: "ICSM 2016",
    location: "China",
    date: "2016-06-26",
    year: 2016,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Growth and Morphology of J-aggregates on Solid Substrates",
    authors: "S.B. Anantharaman*, F. Nüesch, J. Heier",
    conference_name: "ICMST 2016",
    location: "Kerala, India",
    date: "2016-06-05",
    year: 2016,
    paper_type: "Oral Presentation",
    doi: null,
    pdf_url: null
  },
  {
    title: "Synthesis, Phase Stability and Conduction Behavior of Co-doped and Doped Barium Cerates",
    authors: "A.S. Babu* and R. Bauri",
    conference_name: "Fifth World Hydrogen Energy Technology Conference (WHTC2013)",
    location: "Shanghai, China",
    date: "2013-09-25",
    year: 2013,
    paper_type: "Poster Presentation",
    doi: null,
    pdf_url: null
  }
];

async function insertPatentsAndConferences() {
  try {
    // Initialize database
    await initializeDatabase();
    const db = getDatabase();

    console.log('Starting data insertion...');

    // Insert patents
    console.log('Inserting patents...');
    for (const patent of patentsData) {
      await db.run(
        `INSERT INTO patents (title, inventors, patent_number, application_number, filing_date, grant_date, status, abstract) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          patent.title,
          patent.inventors,
          patent.patent_number,
          patent.application_number,
          patent.filing_date,
          patent.grant_date,
          patent.status,
          patent.abstract
        ]
      );
    }
    console.log(`✅ Inserted ${patentsData.length} patents`);

    // Insert conferences
    console.log('Inserting conferences...');
    for (const conference of conferencesData) {
      await db.run(
        `INSERT INTO conferences (title, authors, conference_name, location, date, year, paper_type, doi, pdf_url) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          conference.title,
          conference.authors,
          conference.conference_name,
          conference.location,
          conference.date,
          conference.year,
          conference.paper_type,
          conference.doi,
          conference.pdf_url
        ]
      );
    }
    console.log(`✅ Inserted ${conferencesData.length} conferences`);

    console.log('🎉 All data inserted successfully!');
    
    // Display summary
    const patentCount = await db.get('SELECT COUNT(*) as count FROM patents');
    const conferenceCount = await db.get('SELECT COUNT(*) as count FROM conferences');
    
    console.log('\n📊 Database Summary:');
    console.log(`Total Patents: ${patentCount.count}`);
    console.log(`Total Conferences: ${conferenceCount.count}`);
    
  } catch (error) {
    console.error('❌ Error inserting data:', error);
  }
}

// Run the insertion
insertPatentsAndConferences();