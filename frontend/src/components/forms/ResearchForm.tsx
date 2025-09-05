import React, { useState, useEffect } from 'react'
import { X, Save, Upload, Plus, Trash2 } from 'lucide-react'
import { apiCall } from '../../lib/api'

interface Link {
  url: string
  name_tag: string
}

interface ResearchFormProps {
  research?: {
    id: number
    title: string
    summary: string
    image?: string
    order_index?: number
    links?: Link[]
  } | null
  onSubmit: (data: any) => void
  onCancel: () => void
  loading?: boolean
}

interface FormData {
  title: string
  summary: string
  image: string
  order_index: number
  links: Link[]
  imageFile?: File
}

const ResearchForm: React.FC<ResearchFormProps> = ({ research, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    summary: '',
    image: '',
    order_index: 0,
    links: [{ url: '', name_tag: '' }]
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    if (research) {
      setFormData({
        title: research.title || '',
        summary: research.summary || '',
        image: research.image || '',
        order_index: research.order_index || 0,
        links: research.links && research.links.length > 0 ? research.links : [{ url: '', name_tag: '' }]
      })
      if (research.image) {
        setImagePreview(research.image)
      }
    }
  }, [research])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let imageUrl = formData.image

      // Upload image first if a new file is selected
      if (selectedFile) {
        const uploadFormData = new FormData()
        uploadFormData.append('image', selectedFile)

        const uploadResponse = await apiCall('/api/admin/research/upload', {
          method: 'POST',
          body: uploadFormData,
        })

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image')
        }

        const uploadResult = await uploadResponse.json()
        if (uploadResult.success) {
          imageUrl = uploadResult.imageUrl
        } else {
          throw new Error(uploadResult.error || 'Failed to upload image')
        }
      }

      const submitData = {
        ...formData,
        image: imageUrl,
        links: formData.links.filter((link: Link) => link.url.trim() !== '')
      }

      await onSubmit(submitData)
      
      // Reset form
      setFormData({ 
        title: '', 
        summary: '', 
        image: '',
        order_index: 0,
        links: [{ url: '', name_tag: '' }]
      })
      setSelectedFile(null)
      setImagePreview('')
    } catch (error) {
      console.error('Submit error:', error)
      alert('Failed to submit research project')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleLinkChange = (index: number, field: 'url' | 'name_tag', value: string) => {
    setFormData(prev => ({
      ...prev,
      links: prev.links.map((link, i) => 
        i === index ? { ...link, [field]: value } : link
      )
    }))
  }

  const addLink = () => {
    setFormData(prev => ({
      ...prev,
      links: [...prev.links, { url: '', name_tag: '' }]
    }))
  }

  const removeLink = (index: number) => {
    if (formData.links.length > 1) {
      setFormData(prev => ({
        ...prev,
        links: prev.links.filter((_, i) => i !== index)
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>
            {research ? 'Edit Research Project' : 'Add Research Project'}
          </h2>
          <button
            onClick={onCancel}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontWeight: 500,
              marginBottom: '4px',
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
              placeholder="Enter research project title"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontWeight: 500,
              marginBottom: '4px',
              color: '#374151'
            }}>
              Summary *
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Enter research project summary"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />
          </div>


          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontWeight: 500,
              marginBottom: '4px',
              color: '#374151'
            }}>
              Image Upload
            </label>
            <div style={{
              border: '2px dashed #d1d5db',
              borderRadius: '6px',
              padding: '20px',
              textAlign: 'center',
              backgroundColor: '#f9fafb'
            }}>
              <input
                type="file"
                accept="image/*,.avif"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                <Upload size={16} />
                Choose Image
              </label>
              {imagePreview && (
                <div style={{ marginTop: '12px' }}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{
                      maxWidth: '200px',
                      maxHeight: '150px',
                      borderRadius: '6px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}
              {selectedFile && (
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#6b7280' }}>
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <label style={{
                fontWeight: 500,
                color: '#374151'
              }}>
                Links
              </label>
              <button
                type="button"
                onClick={addLink}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 12px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                <Plus size={14} />
                Add Link
              </button>
            </div>
            
            {formData.links.map((link, index) => (
              <div key={index} style={{
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: '#f9fafb'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px'
                }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>
                    Link {index + 1}
                  </span>
                  {formData.links.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeLink(index)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ef4444',
                        padding: '2px'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                
                <div style={{ marginBottom: '8px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 500,
                    marginBottom: '4px',
                    color: '#6b7280'
                  }}>
                    URL
                  </label>
                  <input
                    type="url"
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                    placeholder="Enter link URL"
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 500,
                    marginBottom: '4px',
                    color: '#6b7280'
                  }}>
                    Name Tag (Link Text)
                  </label>
                  <input
                    type="text"
                    value={link.name_tag}
                    onChange={(e) => handleLinkChange(index, 'name_tag', e.target.value)}
                    placeholder="Enter link display text"
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      border: '1px solid #d1d5db',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }}>
            <button
              type="button"
              onClick={onCancel}
              style={{
                padding: '8px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: 'white',
                color: '#374151',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '6px',
                backgroundColor: loading ? '#9ca3af' : '#3b82f6',
                color: 'white',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Save size={16} />
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResearchForm