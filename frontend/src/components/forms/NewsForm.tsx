'use client'

import { useState, useEffect } from 'react'
import { Star, Save } from 'lucide-react'

interface NewsFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function NewsForm({ initialData, onSubmit, isLoading }: NewsFormProps) {
  const [formData, setFormData] = useState({
    year: new Date().getFullYear().toString(),
    title: '',
    content: '',
    link: ''
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        year: initialData.year || new Date().getFullYear().toString(),
        title: initialData.title || '',
        content: initialData.content || '',
        link: initialData.link || ''
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
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Year <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="year"
            value={formData.year}
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
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
          Content <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={3}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            boxSizing: 'border-box',
            fontFamily: 'inherit'
          }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
          Link (Optional)
        </label>
        <input
          type="url"
          name="link"
          value={formData.link}
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
    </form>
  )
}
