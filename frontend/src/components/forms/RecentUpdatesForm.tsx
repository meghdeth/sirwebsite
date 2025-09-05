'use client'

import { useState, useEffect } from 'react'

interface RecentUpdatesFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function RecentUpdatesForm({ initialData, onSubmit, isLoading }: RecentUpdatesFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date_posted: '',
    order_index: 0
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        content: initialData.content || '',
        date_posted: initialData.date_posted || new Date().toISOString().split('T')[0],
        order_index: initialData.order_index || 0
      })
    } else {
      setFormData({
        title: '',
        content: '',
        date_posted: new Date().toISOString().split('T')[0],
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
          Title *
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
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
          Content *
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          rows={4}
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
          Date Posted
        </label>
        <input
          type="date"
          name="date_posted"
          value={formData.date_posted}
          onChange={handleChange}
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
      </div>

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