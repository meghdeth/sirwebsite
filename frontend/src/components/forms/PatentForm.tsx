'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface PatentFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function PatentForm({ initialData, onSubmit, isLoading }: PatentFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    inventors: '',
    patent_number: '',
    application_number: '',
    filing_date: '',
    grant_date: '',
    status: '',
    abstract: ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        inventors: initialData.inventors || '',
        patent_number: initialData.patent_number || '',
        application_number: initialData.application_number || '',
        filing_date: initialData.filing_date || '',
        grant_date: initialData.grant_date || '',
        status: initialData.status || '',
        abstract: initialData.abstract || ''
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
      [name]: value
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
          Inventors <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        <input
          type="text"
          name="inventors"
          value={formData.inventors}
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Patent Number
          </label>
          <input
            type="text"
            name="patent_number"
            value={formData.patent_number}
            onChange={handleChange}
            placeholder="e.g., US1234567B2"
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
            Application Number
          </label>
          <input
            type="text"
            name="application_number"
            value={formData.application_number}
            onChange={handleChange}
            placeholder="e.g., US16/123456"
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
            Filing Date
          </label>
          <input
            type="date"
            name="filing_date"
            value={formData.filing_date}
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
            Grant Date
          </label>
          <input
            type="date"
            name="grant_date"
            value={formData.grant_date}
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
            Status <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">Select Status</option>
            <option value="Filed">Filed</option>
            <option value="Published">Published</option>
            <option value="Granted">Granted</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
          Abstract
        </label>
        <textarea
          name="abstract"
          value={formData.abstract}
          onChange={handleChange}
          rows={4}
          placeholder="Patent abstract..."
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxSizing: 'border-box',
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
      </div>
    </form>
  )
}