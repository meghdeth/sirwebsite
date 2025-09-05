'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface PIExperienceFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function PIExperienceForm({ initialData, onSubmit, isLoading }: PIExperienceFormProps) {
  const [formData, setFormData] = useState({
    position: '',
    organization: '',
    location: '',
    start_year: '',
    end_year: '',
    description: '',
    is_current: false,
    order_index: 1,
    is_active: true
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        position: initialData.position || '',
        organization: initialData.organization || '',
        location: initialData.location || '',
        start_year: initialData.start_year || '',
        end_year: initialData.end_year || '',
        description: initialData.description || '',
        is_current: initialData.is_current || false,
        order_index: initialData.order_index || 1,
        is_active: initialData.is_active !== undefined ? initialData.is_active : true
      })
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
          Position <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          placeholder="e.g., Assistant Professor"
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
            Organization <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
            placeholder="Institution/Company name"
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
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., USA, India"
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
            Start Year <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="start_year"
            value={formData.start_year}
            onChange={handleChange}
            required
            placeholder="e.g., 2020"
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
            End Year
          </label>
          <input
            type="text"
            name="end_year"
            value={formData.end_year}
            onChange={handleChange}
            placeholder="e.g., Present or 2023"
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
          Description (Optional)
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          placeholder="Key responsibilities and achievements..."
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
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Display Order
          </label>
          <input
            type="number"
            name="order_index"
            value={formData.order_index}
            onChange={handleChange}
            min="1"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
          <input
            type="checkbox"
            name="is_current"
            checked={formData.is_current}
            onChange={handleChange}
            style={{ marginRight: '8px' }}
          />
          <label>Current Position</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '24px' }}>
          <input
            type="checkbox"
            name="is_active"
            checked={formData.is_active}
            onChange={handleChange}
            style={{ marginRight: '8px' }}
          />
          <label>Active</label>
        </div>
      </div>
    </form>
  )
}