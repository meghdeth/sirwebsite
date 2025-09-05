'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface PIAwardsFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function PIAwardsForm({ initialData, onSubmit, isLoading }: PIAwardsFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    year: '',
    description: '',
    grant_amount: '',
    currency: '',
    order_index: 1,
    is_active: true
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        organization: initialData.organization || '',
        year: initialData.year || '',
        description: initialData.description || '',
        grant_amount: initialData.grant_amount || '',
        currency: initialData.currency || '',
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
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Award Title <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Best Paper Award"
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
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            placeholder="e.g., 2023"
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
          Organization <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
          placeholder="Awarding organization/institution"
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
          Description (Optional)
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          placeholder="Details about the award and its significance..."
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
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>
            Grant Amount (Optional)
          </label>
          <input
            type="text"
            name="grant_amount"
            value={formData.grant_amount}
            onChange={handleChange}
            placeholder="e.g., 100,000"
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
            Currency
          </label>
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            placeholder="e.g., USD, EUR"
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