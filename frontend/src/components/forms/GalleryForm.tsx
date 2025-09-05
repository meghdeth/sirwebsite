'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Upload, X, Image } from 'lucide-react'
import { apiCall } from '../../lib/api'

interface GalleryFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export default function GalleryForm({ initialData, onSubmit, isLoading }: GalleryFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [] as string[],
    is_active: true
  })
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        images: initialData.images || [],
        is_active: initialData.is_active !== undefined ? initialData.is_active : true
      })
      setPreviewUrls(initialData.images || [])
    }
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    let finalImages = [...formData.images]
    
    // Upload new files if any
    if (selectedFiles.length > 0) {
      setUploading(true)
      try {
        const uploadFormData = new FormData()
        selectedFiles.forEach(file => {
          uploadFormData.append('images', file)
        })

        const token = localStorage.getItem('adminToken')
        const response = await apiCall('/api/admin/gallery/upload', {
          method: 'POST',
          body: uploadFormData,
        })

        const result = await response.json()
        if (result.success) {
          finalImages = [...finalImages, ...result.imageUrls]
        } else {
          throw new Error(result.error || 'Upload failed')
        }
      } catch (error) {
        alert('Error uploading images: ' + (error as Error).message)
        setUploading(false)
        return
      }
      setUploading(false)
    }

    onSubmit({
      ...formData,
      images: finalImages
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setSelectedFiles(prev => [...prev, ...files])
    
    // Create preview URLs
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrls(prev => [...prev, e.target?.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    if (index < formData.images.length) {
      // Remove from existing images
      setFormData(prev => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index)
      }))
    } else {
      // Remove from selected files
      const fileIndex = index - formData.images.length
      setSelectedFiles(prev => prev.filter((_, i) => i !== fileIndex))
    }
    setPreviewUrls(prev => prev.filter((_, i) => i !== index))
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
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
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
        <label style={{ display: 'block', fontWeight: 500, marginBottom: '8px' }}>
          Images <Star size={12} style={{ display: 'inline', color: '#ef4444' }} />
        </label>
        
        {/* Upload Area */}
        <div
          onClick={() => fileInputRef.current?.click()}
          style={{
            border: '2px dashed #d1d5db',
            borderRadius: '8px',
            padding: '24px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#f9fafb',
            marginBottom: '16px',
            transition: 'border-color 0.2s'
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.borderColor = '#06b6d4'
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.borderColor = '#d1d5db'
          }}
        >
          <Upload size={32} style={{ color: '#6b7280', margin: '0 auto 8px' }} />
          <p style={{ color: '#374151', margin: '0 0 4px 0', fontWeight: 500 }}>
            Click to upload images
          </p>
          <p style={{ color: '#6b7280', margin: 0, fontSize: '0.875rem' }}>
            PNG, JPG, JPEG up to 5MB each
          </p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.avif"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />

        {/* Image Previews */}
        {previewUrls.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '12px' }}>
            {previewUrls.map((url, index) => (
              <div key={index} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    border: '1px solid #e5e7eb'
                  }}
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  style={{
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    backgroundColor: 'rgba(239, 68, 68, 0.9)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}

        {previewUrls.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '16px',
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            No images selected
          </div>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          cursor: 'pointer',
          fontWeight: 500 
        }}>
          <input
            type="checkbox"
            name="is_active"
            checked={formData.is_active}
            onChange={handleChange}
            style={{ margin: 0 }}
          />
          Active (visible on website)
        </label>
      </div>

      {uploading && (
        <div style={{
          backgroundColor: '#dbeafe',
          color: '#1e40af',
          padding: '12px',
          borderRadius: '6px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          Uploading images...
        </div>
      )}
    </form>
  )
}