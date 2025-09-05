'use client'

import { useState, useEffect } from 'react'

interface AtAGlanceFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function AtAGlanceForm({ initialData, onSubmit, isLoading }: AtAGlanceFormProps) {
  const [formData, setFormData] = useState({
    image_url: '',
    description: '',
    order_index: 0
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        image_url: initialData.image_url || '',
        description: initialData.description || '',
        order_index: initialData.order_index || 0
      })
    } else {
      setFormData({
        image_url: '',
        description: '',
        order_index: 0
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 600, 
          color: '#374151' 
        }}>
          Image URL *
        </label>
        <input
          type="url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          required
          placeholder="https://example.com/image.jpg"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none'
          }}
        />
      </div>

      <div>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 600, 
          color: '#374151' 
        }}>
          Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          placeholder="Enter a description for this photo..."
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            resize: 'vertical'
          }}
        />
      </div>

      <div>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 600, 
          color: '#374151' 
        }}>
          Order Index
        </label>
        <input
          type="number"
          name="order_index"
          value={formData.order_index}
          onChange={handleChange}
          min="0"
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none'
          }}
        />
        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '4px' }}>
          Lower numbers appear first in the carousel
        </p>
      </div>

      {formData.image_url && (
        <div>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px', 
            fontWeight: 600, 
            color: '#374151' 
          }}>
            Preview
          </label>
          <img
            src={formData.image_url}
            alt="Preview"
            style={{
              maxWidth: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '1px solid #d1d5db'
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        style={{
          backgroundColor: isLoading ? '#9ca3af' : '#f97316',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 600,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          marginTop: '20px'
        }}
      >
        {isLoading ? 'Saving...' : (initialData ? 'Update' : 'Create')}
      </button>
    </form>
  )
}