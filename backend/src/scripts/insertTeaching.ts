import { initializeDatabase, getDatabase } from '../models/database';

const courses = [
  {
    duration: 'July - December 2025',
    program_level: 'M.Tech',
    year_level: 'First Year',
    course_type: 'Core',
    course_code: 'MM5050',
    course_name: 'Thermodynamics and Kinetics',
    instructor: 'Self'
  },
  {
    duration: 'Jan - May 2025',
    program_level: 'B.Tech',
    year_level: 'First Year',
    course_type: 'Core',
    course_code: 'MM1003',
    course_name: 'Thermodynamics of Materials',
    instructor: 'Self'
  },
  {
    duration: 'July - December 2024',
    program_level: 'B.Tech',
    year_level: 'Second Year',
    course_type: 'Core',
    course_code: 'MM2015',
    course_name: 'Thermodynamics of Materials',
    instructor: 'Self'
  },
  {
    duration: 'Jan - May 2024',
    program_level: 'B.Tech',
    year_level: 'First Year',
    course_type: 'Core',
    course_code: 'MM1001',
    course_name: 'Introduction to Metallurgical and Materials Engineering',
    instructor: 'Self'
  },
  {
    duration: 'July - December 2023',
    program_level: 'M.Tech/M.S/Ph.D',
    year_level: 'First Year',
    course_type: 'Core',
    course_code: 'MM5014',
    course_name: 'Physical Foundation of Materials Science',
    instructor: 'Along with Prof. V. Subramanya Sarma, Prof. Sreeram K. Kalpathy'
  }
];

async function insertTeachingCourses() {
  try {
    await initializeDatabase();
    const db = getDatabase();
    
    console.log('Starting to insert teaching courses...');
    
    for (const course of courses) {
      const result = await db.run(
        `INSERT INTO teaching_courses (duration, program_level, year_level, course_type, course_code, course_name, instructor) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        course.duration, course.program_level, course.year_level, course.course_type, course.course_code, course.course_name, course.instructor
      );
      console.log(`Inserted course: ${course.course_code} - ${course.course_name} (ID: ${result.lastID})`);
    }
    
    console.log(`Successfully inserted ${courses.length} teaching courses!`);
    
    // Verify the insertion
    const count = await db.get('SELECT COUNT(*) as count FROM teaching_courses WHERE is_active = 1');
    console.log(`Total active teaching courses in database: ${count.count}`);
    
  } catch (error) {
    console.error('Error inserting teaching courses:', error);
  }
}

insertTeachingCourses();