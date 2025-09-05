const { initializeDatabase, getDatabase } = require('../models/database');

const publications = 
[
  {
    "title": "Ultrastrong Light-Matter Coupling in 2D Metal-Chalcogenates",
    "authors": "S.B. Anantharaman*, J. Lynch, M. Aleksich, C.E. Stevens, C. Munley, B. Choi, S. Shenoy, T. Darlington, A. Majumdar, P. J. Shuck, J. Hendrickson, J. N. Hohman, D. Jariwala*",
    "journal": "Nature Photonics",
    "pages": "1-7",
    "year": 2025,
    "doi": "10.1038/s41566-024-01567-w"
  },
  {
    "title": "Optical spectroscopic detection of Schottky barrier height at a two-dimensional transition-metal dichalcogenide/metal interface",
    "authors": "D. Chen, S.B. Anantharaman, J. Wu, D.Y. Qiu, D. Jariwala, P. Guo",
    "journal": "Nanoscale",
    "volume": "16",
    "pages": "5169-5176",
    "year": 2024,
    "doi": "10.1039/D3NR06321A"
  },
  {
    "title": "Synthesis of 2D perovskite crystals via progressive transformation of quantum well thickness",
    "authors": "J. Hou, W. Li, H. Zhang, S. Sidhik, J. Fletcher, I. Metcalf, S.B. Anantharaman, X. Shuai, A. Mishra, J.-C. Blancon, C. Katan, D. Jariwala, J. Even, M.G. Kanatzidis, A.D. Mohite",
    "journal": "Nature Synthesis",
    "volume": "3",
    "pages": "265-275",
    "year": 2024,
    "doi": "10.1038/s44160-023-00448-6"
  },
  {
    "title": "Dynamics of self-hybridized exciton–polaritons in 2D halide perovskites",
    "authors": "S.B. Anantharaman*, J. Lynch, C.E. Stevens, C. Munley, C. Li, J. Hou, H. Zhang, A. Torma, T. Darlington, F. Coen, K. Li, A. Majumdar, P.J. Schuck, A. Mohite, H. Harutyunyan, J.R. Hendrickson, D. Jariwala*",
    "journal": "Light: Science & Applications",
    "volume": "13",
    "pages": "89",
    "year": 2024,
    "doi": "10.1038/s41377-024-01431-2"
  },
  {
    "title": "Observation of Sub-10 nm Transition Metal Dichalcogenide Nanocrystals in Rapidly Heated van der Waals Heterostructures",
    "authors": "P. Kumar, J. Chen, A.C. Meng, W-C. D. Yang, S.B. Anantharaman, J.P. Horwath, J.C. Idrobo, H. Mishra, Y. Liu, A.V. Davydov, E.A. Stach, D. Jariwala",
    "journal": "ACS Applied Materials & Interfaces",
    "volume": "15",
    "issue": "51",
    "pages": "59693-59703",
    "year": 2023,
    "doi": "10.1021/acsami.3c14447"
  },
  {
    "title": "Valley-Polarized Interlayer Excitons in 2D Chalcogenide–Halide Perovskite–van der Waals Heterostructures",
    "authors": "S. Singh, W. Gong, C.E. Stevens, J. Hou, A. Singh, H. Zhang, S.B. Anantharaman, A.D. Mohite, J.R. Hendrickson, Q.Yan, D. Jariwala",
    "journal": "ACS Nano",
    "volume": "17",
    "issue": "8",
    "pages": "7487–7497",
    "year": 2023,
    "doi": "10.1021/acsnano.3c01968"
  },
  {
    "title": "On the Response Speed of Narrowband Organic Optical Upconversion Devices",
    "authors": "W-H. Hu, C. Vael, M. Diethelm, K. Strassel, S.B. Anantharaman, A. Aribia, M. Cremona, S. Jenatsch, F. Nüesch, R. Hany",
    "journal": "Advanced Optical Materials",
    "volume": "10",
    "issue": "17",
    "pages": "2200695",
    "year": 2022,
    "doi": "10.1002/adom.202200695"
  },
  {
    "title": "Reconfigurable Compute-In-Memory on Field-Programmable Ferroelectric Diodes",
    "authors": "X. Liu, J. Ting, Y. He, M.M.A. Fiagbenu, J. Zheng, D. Wang, J. J. Frost, P. Musavigharavi, S.B. Anantharaman, E. A. Stach, R. H. Olsson III, D. Jariwala",
    "journal": "Nano Letters",
    "volume": "22",
    "issue": "18",
    "pages": "7690–7698",
    "year": 2022,
    "doi": "10.1021/acs.nanolett.2c03169"
  },
  {
    "title": "Nanomaterials for Quantum Information Science and Engineering",
    "authors": "A. Alfieri, S.B. Anantharaman, H. Zhang, D. Jariwala",
    "journal": "Advanced Materials",
    "pages": "2109621",
    "year": 2022,
    "doi": "10.1002/adma.202109621"
  },
  {
    "title": "Light-Matter Coupling in Large-Area Van der Waals Superlattices",
    "authors": "P. Kumar, J. Lynch, B. Song, H. Ling, F. Barrera, K. Kisslinger, H. Zhang, S.B. Anantharaman, J. Digani, H. Zhu, T. H. Choudhury, C. McAleese, X. Wang, B.R. Conran, O. Whear, M.J. Motala, M. Snure, C. Muratore, J.M. Redwing, N.R. Glavin, E.A. Stach, A.R. Davoyan, D. Jariwala",
    "journal": "Nature Nanotechnology",
    "volume": "17",
    "pages": "182-189",
    "year": 2022,
    "doi": "10.1038/s41565-021-01023-x"
  },
  {
    "title": "Exciton–Photonics: From Fundamental Science to Applications",
    "authors": "S.B. Anantharaman, K. Jo, and D. Jariwala",
    "journal": "ACS Nano",
    "volume": "15",
    "issue": "8",
    "pages": "12628–12654",
    "year": 2021,
    "doi": "10.1021/acsnano.1c04467"
  },
  {
    "title": "Self-Hybridized Polaritonic Emission from Layered Perovskites",
    "authors": "S.B. Anantharaman, C.E. Stevens, J. Lynch, B. Song, J. Hou, H. Zhang, K. Jo, P. Kumar, J-C. Blancon, A.D. Mohite, J.R. Hendrickson, D. Jariwala",
    "journal": "Nano Letters",
    "volume": "21",
    "issue": "14",
    "pages": "6245–6252",
    "year": 2021,
    "doi": "10.1021/acs.nanolett.1c02058"
  },
  {
    "title": "Anomalous Room-Temperature Photoluminescence from Nanostrained MoSe2 Monolayers",
    "authors": "T. Chowdhury, K. Jo, S.B. Anantharaman, T.H. Brintlinger, D. Jariwala, and T.J. Kempa",
    "journal": "ACS Photonics",
    "volume": "8",
    "issue": "8",
    "pages": "2220-2226",
    "year": 2021,
    "doi": "10.1021/acsphotonics.1c00626"
  },
  {
    "title": "Electron Energy Loss Spectroscopy of Sub-10 nm 2D MoS2 Crystals",
    "authors": "P. Kumar, J. Horwath, S.B. Anantharaman, A. Meng, J.C. Idrobo, E. Stach, D. Jariwala",
    "journal": "Microscopy and Microanalysis",
    "volume": "27",
    "pages": "1210-1211",
    "year": 2021,
    "doi": "10.1017/S1431927621004621"
  },
  {
    "title": "Direct Optoelectronic Imaging of 2D Semiconductor–3D Metal Buried Interfaces",
    "authors": "K. Jo, P. Kumar, J. Orr, S.B. Anantharaman, J. Miao, M.J. Motala, A. Bandyopadhyay, K. Kisslinger, C. Muratore, V.B. Shenoy, E.A. Stach, N.R. Glavin, and D. Jariwala",
    "journal": "ACS Nano",
    "volume": "15",
    "issue": "3",
    "pages": "5618–5630",
    "year": 2021,
    "doi": "10.1021/acsnano.1c00855"
  },
  {
    "title": "Enhanced Room‐Temperature Photoluminescence Quantum Yield in Morphology Controlled J‐Aggregates",
    "authors": "S.B. Anantharaman*, J. Kohlbrecher, G. Rainò, S. Yakunin, T. Stöferle, J. Patel, M. Kovalenko, R.F. Mahrt, F.A. Nüesch, J. Heier*",
    "journal": "Advanced Science",
    "volume": "8",
    "issue": "4",
    "pages": "1903080",
    "year": 2021,
    "doi": "10.1002/advs.202003080"
  },
  {
    "title": "Exciton Dynamics and Effects of Structural Order in Morphology-Controlled J-Aggregate Assemblies",
    "authors": "S.B. Anantharaman, T. Stöferle, F. A. Nüesch, R.F. Mahrt, J. Heier",
    "journal": "Advanced Functional Materials",
    "volume": "29",
    "issue": "21",
    "pages": "1806997",
    "year": 2019,
    "doi": "10.1002/adfm.201806997"
  },
  {
    "title": "Exploiting Supramolecular Assemblies for Filterless Ultra-Narrowband Organic Photodetectors with Inkjet Fabrication Capability",
    "authors": "S.B. Anantharaman*, K. Strassel, M. Diethelm, A. Gubicza, E. Hack, R. Hany, F. Nüesch*, J. Heier",
    "journal": "Journal of Materials Chemistry C",
    "volume": "7",
    "issue": "46",
    "pages": "14639-14650",
    "year": 2019,
    "doi": "10.1039/C9TC04239A"
  },
  {
    "title": "Excitonic Channels from Bio-Inspired Templated Supramolecular Assembly of J-aggregate Nanowires",
    "authors": "S.B. Anantharaman, D. Messmer, A. Sadeghpour, S. Salentinig, F. Nüesch, J. Heier",
    "journal": "Nanoscale",
    "volume": "11",
    "issue": "14",
    "pages": "6929-6938",
    "year": 2019,
    "doi": "10.1039/C8NR10331D"
  },
  {
    "title": "Squaraine Dye for a Visibly Transparent All-Organic Optical Upconversion Device with Sensitivity at 1000 nm",
    "authors": "K. Strassel, A. Kaiser, S. Jenatsch, A. Véron, S.B. Anantharaman, E. Hack, M. Diethelm, F. Nuesch, R. Aderne, C. Legnani, S. Yakunin, M. Cremona, R. Hany",
    "journal": "ACS Applied Materials & Interfaces",
    "volume": "10",
    "issue": "13",
    "pages": "11063-11069",
    "year": 2018,
    "doi": "10.1021/acsami.8b01114"
  },
  {
    "title": "Insights into Photovoltaic Properties of Ternary Organic Solar Cells from Phase Diagrams",
    "authors": "M. Makha, P. Schwaller, K. Strassel, S.B. Anantharaman, F. Nüesch, R. Hany, J. Heier",
    "journal": "Science and Technology of Advanced Materials",
    "volume": "19",
    "issue": "1",
    "pages": "669-682",
    "year": 2018,
    "doi": "10.1080/14686996.2018.1494493"
  },
  {
    "title": "Strongly Red-Shifted Photoluminescence Band Induced by Molecular Twisting in Cyanine (Cy3) Dye Films",
    "authors": "S.B. Anantharaman, S. Yakunin, C. Peng, M. Vismara, C. Graeff, F. Nüesch, S. Jenatsch, R. Hany, M. Kovalenko, J. Heier",
    "journal": "Journal of Physical Chemistry C",
    "volume": "121",
    "issue": "17",
    "pages": "9587-9593",
    "year": 2017,
    "doi": "10.1021/acs.jpcc.7b01815"
  },
  {
    "title": "Visible Light-Emitting Host-guest Electrochemical Cells using Cyanine Dyes",
    "authors": "S. Jenatsch, L. Wang, N. Leclaire, E. Hack, R. Steim, S.B. Anantharaman, J. Heier, B. Ruhstaller, L. Penninck, F. Nüesch, R. Hany",
    "journal": "Organic Electronics",
    "volume": "48",
    "pages": "77-84",
    "year": 2017,
    "doi": "10.1016/j.orgel.2017.05.029"
  },
  {
    "title": "Ternary Semitransparent Organic Solar cells with a Laminated Top Electrode",
    "authors": "M. Makha, P. Testa, S.B. Anantharaman, J. Heier, S. Jenatsch, N. Leclaire, J.-N. Tisserant, A. Véron, L. Wang, F. Nüesch, R. Hany",
    "journal": "Science and Technology of Advanced Materials",
    "volume": "18",
    "issue": "1",
    "pages": "68-75",
    "year": 2017,
    "doi": "10.1080/14686996.2016.1264421"
  },
  {
    "title": "Role of Submerged Miscibility Gap in Phase Formation in Sol-Gel Synthesis of Yttrium Silicates",
    "authors": "S.B. Anantharaman, V.B. Rajkumar, S. Raghunandan, K.C. Hari Kumar, R. Suresh Kumar, A.S. Gandhi",
    "journal": "Journal of the European Ceramic Society",
    "volume": "37",
    "issue": "15",
    "pages": "5001-5007",
    "year": 2017,
    "doi": "10.1016/j.jeurceramsoc.2017.06.027"
  },
  {
    "title": "Processing and Conduction Behavior of Nanocrystalline Gd-Doped and Rare Earth Co-Doped Ceria Electrolytes",
    "authors": "A.S. Babu, R. Bauri, G. S. Reddy",
    "journal": "Electrochimica Acta",
    "volume": "209",
    "pages": "541-550",
    "year": 2016,
    "doi": "10.1016/j.electacta.2016.05.151"
  },
  {
    "title": "Phase Evolution and Morphology of Nanocrystalline BaCe0.9Er0.1O3 Proton Conducting Oxide Synthesised by a Novel Modified Solution Combustion Route",
    "authors": "A.S. Babu, R. Bauri",
    "journal": "Journal of Physics and Chemistry of Solids",
    "volume": "87",
    "pages": "80-86",
    "year": 2015,
    "doi": "10.1016/j.jpcs.2015.08.016"
  },
  {
    "title": "Synthesis, Phase Stability and Conduction Behavior of Rare Earth and Transition Elements doped Barium Cerates",
    "authors": "A.S. Babu, R. Bauri",
    "journal": "International Journal of Hydrogen Energy",
    "volume": "39",
    "issue": "26",
    "pages": "14487-14495",
    "year": 2014,
    "doi": "10.1016/j.ijhydene.2014.07.034"
  },
  {
    "title": "Effect of Sintering Atmosphere on Densification, Redox Chemistry and Conduction Behavior of Gd-doped CeO2 Electrolytes",
    "authors": "A.S. Babu, R. Bauri",
    "journal": "Ceramics International",
    "volume": "39",
    "issue": "8",
    "pages": "9421-9428",
    "year": 2013,
    "doi": "10.1016/j.ceramint.2013.05.050"
  },
  {
    "title": "Rare Earth Co-Doped Nanocrystalline Ceria Electrolytes for Intermediate Temperature Solid Oxide Fuel Cells (IT-SOFC)",
    "authors": "A.S. Babu, R. Bauri",
    "journal": "ECS Transactions",
    "volume": "57",
    "issue": "1",
    "pages": "1115",
    "year": 2013,
    "doi": "10.1149/05701.1115ecst"
  }
];

async function insertPublications() {
  try {
    await initializeDatabase();
    const db = getDatabase();
    
    console.log('Starting to insert publications...');
    
    for (const pub of publications) {
      const result = await db.run(
        `INSERT INTO publications (title, authors, journal, volume, pages, year, doi) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        pub.title, pub.authors, pub.journal, pub.volume, pub.pages, pub.year, pub.doi
      );
      console.log(`Inserted publication: ${pub.title} (ID: ${result.lastID})`);
    }
    
    console.log(`Successfully inserted ${publications.length} publications!`);
    
    // Verify the insertion
    const count = await db.get('SELECT COUNT(*) as count FROM publications');
    console.log(`Total publications in database: ${count.count}`);
    
  } catch (error) {
    console.error('Error inserting publications:', error);
  }
}

insertPublications();