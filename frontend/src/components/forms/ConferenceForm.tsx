'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface ConferenceFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function ConferenceForm({ initialData, onSubmit, isLoading }: ConferenceFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    conference_name: '',
    location: '',
    date: '',
    year: new Date().getFullYear(),
    paper_type: '',
    doi: '',
    pdf_url: ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        authors: initialData.authors || '',
        conference_name: initialData.conference_name || '',
        location: initialData.location || '',
        date: initialData.date || '',
        year: initialData.year || new Date().getFullYear(),
        paper_type: initialData.paper_type || '',
        doi: initialData.doi || '',
        pdf_url: initialData.pdf_url || ''
      })
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) || new Date().getFullYear() : value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
          Title <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
          Authors <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        <input
          type="text"
          name="authors"
          value={formData.authors}
          onChange={handleChange}
          required
          placeholder="e.g., Smith, J., Doe, J."
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Conference Name <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="conference_name"
            value={formData.conference_name}
            onChange={handleChange}
            required
            placeholder="e.g., IEEE International Conference on Computer Vision"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Year <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            min="1900"
            max={new Date().getFullYear() + 10}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Paris, France"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Paper Type
          </label>
          <select
            name="paper_type"
            value={formData.paper_type}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">Select Type</option>
            <option value="Full Paper">Full Paper</option>
            <option value="Short Paper">Short Paper</option>
            <option value="Workshop Paper">Workshop Paper</option>
            <option value="Poster">Poster</option>
            <option value="Extended Abstract">Extended Abstract</option>
            <option value="Keynote">Keynote</option>
            <option value="Tutorial">Tutorial</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            DOI
          </label>
          <input
            type="text"
            name="doi"
            value={formData.doi}
            onChange={handleChange}
            placeholder="10.1000/123456"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            PDF URL
          </label>
          <input
            type="url"
            name="pdf_url"
            value={formData.pdf_url}
            onChange={handleChange}
            placeholder="https://example.com/paper.pdf"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>
    </form>
  )
}