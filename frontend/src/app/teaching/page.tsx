'use client'

import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { apiCall } from '../../lib/api'

interface Course {
  id: number
  duration: string
  program_level: string
  year_level: string
  course_type: string
  course_code: string
  course_name: string
  instructor: string
  description?: string
}

export default function Teaching() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const response = await apiCall('/api/teaching')
      if (!response.ok) {
        throw new Error('Failed to fetch courses')
      }
      const data = await response.json()
      setCourses(data)
      setLoading(false)
    } catch (err) {
      setError('Failed to load courses')
      setLoading(false)
      console.error('Error fetching courses:', err)
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#6b7280'
      }}>
        Loading courses...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#ef4444'
      }}>
        {error}
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Main Content */}
      <main style={{ marginTop: '80px', paddingTop: '20px', paddingBottom: '80px' }}>
        <div style={{
          width: '90%',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}>
          {/* Page Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              Teaching
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              marginLeft: '15%',
              marginRight: '15%'
            }}>
              Courses taught at Indian Institute of Technology Madras
            </p>
          </div>

          {/* Courses Section */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              Courses Taken
            </h2>

            {/* Course Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {courses.map((course, index) => (
                <div key={course.id} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e5e7eb',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.transform = 'translateY(-4px)'
                  target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)'
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.transform = 'translateY(0)'
                  target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}>
                  {/* Duration */}
                  <div style={{
                    backgroundColor: '#fff7ed',
                    color: '#f97316',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    display: 'inline-block',
                    marginBottom: '8px',
                    border: '1px solid #fed7aa'
                  }}>
                    {course.duration}
                  </div>

                  {/* Course Info Tags */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '6px', 
                    marginBottom: '16px' 
                  }}>
                    {/* Program Level */}
                    <div style={{
                      backgroundColor: '#eff6ff',
                      color: '#1d4ed8',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      border: '1px solid #bfdbfe'
                    }}>
                      {course.program_level}
                    </div>

                    {/* Year Level */}
                    <div style={{
                      backgroundColor: '#f0fdf4',
                      color: '#166534',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      border: '1px solid #bbf7d0'
                    }}>
                      {course.year_level}
                    </div>

                    {/* Course Type */}
                    <div style={{
                      backgroundColor: '#fef3f2',
                      color: '#dc2626',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      border: '1px solid #fecaca'
                    }}>
                      {course.course_type}
                    </div>
                  </div>

                  {/* Course Code */}
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#f97316',
                    marginBottom: '8px'
                  }}>
                    {course.course_code}
                  </h3>

                  {/* Course Name */}
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '16px',
                    lineHeight: 1.3
                  }}>
                    {course.course_name}
                  </h4>

                  {/* Instructor */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontSize: '1.25rem'
                    }}>
                      👨‍🏫
                    </span>
                    <p style={{
                      fontSize: '1rem',
                      color: '#6b7280',
                      margin: 0,
                      fontStyle: course.instructor === 'Self' ? 'normal' : 'italic'
                    }}>
                      {course.instructor}
                    </p>
                  </div>

                  {/* Description */}
                  {course.description && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginTop: '12px',
                      lineHeight: 1.4
                    }}>
                      {course.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}