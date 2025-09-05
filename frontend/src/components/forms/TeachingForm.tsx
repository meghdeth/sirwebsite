'use client'

import { useState, useEffect } from 'react'
import { Save } from 'lucide-react'

interface TeachingFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading: boolean
}

export default function TeachingForm({ initialData, onSubmit, isLoading }: TeachingFormProps) {
  const [formData, setFormData] = useState({
    duration: '',
    program_level: '',
    year_level: '',
    course_type: '',
    course_code: '',
    course_name: '',
    instructor: '',
    description: ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        duration: initialData.duration || '',
        program_level: initialData.program_level || '',
        year_level: initialData.year_level || '',
        course_type: initialData.course_type || '',
        course_code: initialData.course_code || '',
        course_name: initialData.course_name || '',
        instructor: initialData.instructor || '',
        description: initialData.description || ''
      })
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '6px'
          }}>
            Duration *
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., July - December 2025"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '6px'
          }}>
            Program Level *
          </label>
          <select
            name="program_level"
            value={formData.program_level}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          >
            <option value="">Select program level</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="M.S">M.S</option>
            <option value="Ph.D">Ph.D</option>
            <option value="M.Tech/M.S/Ph.D">M.Tech/M.S/Ph.D</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '6px'
          }}>
            Year Level *
          </label>
          <select
            name="year_level"
            value={formData.year_level}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          >
            <option value="">Select year level</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Fourth Year">Fourth Year</option>
          </select>
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '6px'
          }}>
            Course Type *
          </label>
          <select
            name="course_type"
            value={formData.course_type}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          >
            <option value="">Select course type</option>
            <option value="Core">Core</option>
            <option value="Elective">Elective</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '6px'
          }}>
            Course Code *
          </label>
          <input
            type="text"
            name="course_code"
            value={formData.course_code}
            onChange={handleChange}
            placeholder="e.g., CS101, EE201"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>

        <div>
          <label style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#374151',
            marginBottom: '6px'
          }}>
            Course Name *
          </label>
          <input
            type="text"
            name="course_name"
            value={formData.course_name}
            onChange={handleChange}
            placeholder="e.g., Introduction to Computer Science"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease'
            }}
          />
        </div>
      </div>

      <div>
        <label style={{
          display: 'block',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: '6px'
        }}>
          Instructor *
        </label>
        <input
          type="text"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          placeholder="e.g., Dr. John Smith"
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease'
          }}
        />
      </div>

      <div>
        <label style={{
          display: 'block',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#374151',
          marginBottom: '6px'
        }}>
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description of the course content and objectives"
          rows={4}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
            resize: 'vertical'
          }}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? '#9ca3af' : '#8b5cf6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.3s ease',
          marginTop: '8px'
        }}
      >
        <Save size={20} />
        {isLoading ? 'Saving...' : (initialData ? 'Update Course' : 'Add Course')}
      </button>
    </form>
  )
}