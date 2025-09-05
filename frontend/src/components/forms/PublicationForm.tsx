'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface PublicationFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function PublicationForm({ initialData, onSubmit, isLoading }: PublicationFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    journal: '',
    volume: '',
    pages: '',
    year: new Date().getFullYear(),
    doi: ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        authors: initialData.authors || '',
        journal: initialData.journal || '',
        volume: initialData.volume || '',
        pages: initialData.pages || '',
        year: initialData.year || new Date().getFullYear(),
        doi: initialData.doi || ''
      })
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Journal <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="journal"
            value={formData.journal}
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
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Volume
          </label>
          <input
            type="text"
            name="volume"
            value={formData.volume}
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Pages
          </label>
          <input
            type="text"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            placeholder="e.g., 123-145"
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
            DOI <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="doi"
            value={formData.doi}
            onChange={handleChange}
            required
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
      </div>
    </form>
  )
}
