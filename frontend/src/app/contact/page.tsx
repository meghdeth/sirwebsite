'use client'

import { useState } from 'react'
import Footer from '../../components/Footer'
import { Upload, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import { apiCall } from '../../lib/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    email: '',
    name: ''
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.title)
      formDataToSend.append('message', formData.message)
      
      if (selectedFile) {
        formDataToSend.append('file', selectedFile)
      }
      
      const response = await apiCall('/api/contact/submit', {
        method: 'POST',
        body: formDataToSend
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert('Message sent successfully!')
        setFormData({ title: '', message: '', email: '', name: '' })
        setSelectedFile(null)
      } else {
        alert('Error sending message: ' + result.error)
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  const responsiveStyles = `
    @media (max-width: 768px) {
      .contact-container {
        padding: 16px !important;
        margin-top: 60px !important;
      }
      .contact-header h1 {
        font-size: 2rem !important;
      }
      .contact-header p {
        font-size: 1rem !important;
        margin-left: 2% !important;
        margin-right: 2% !important;
      }
      .contact-form {
        padding: 20px !important;
      }
      .contact-form h2 {
        font-size: 1.4rem !important;
      }
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
      .contact-details {
        padding: 20px !important;
      }
      .contact-details h3 {
        font-size: 1.4rem !important;
      }
      .map-container {
        min-height: 300px !important;
      }
    }
    @media (max-width: 480px) {
      .contact-header h1 {
        font-size: 1.75rem !important;
      }
      .contact-form {
        padding: 16px !important;
      }
      .contact-details {
        padding: 16px !important;
      }
    }
  `

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      
      {/* Main Content */}
      <div className="contact-container" style={{ 
        padding: '3%',
        marginTop: '80px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1f2937',
            margin: 0
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginTop: '16px',
            marginLeft: '5%',
            marginRight: '5%'
          }}>
            Get in touch with the Low-Dimensional Semiconductors Lab
          </p>
        </div>

        {/* Contact Form */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '64px'
        }}>
          <form onSubmit={handleSubmit} style={{
            backgroundColor: '#f8f9fa',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              Send us a Message
            </h2>

            {/* Name Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '8px'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#f97316')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '8px'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#f97316')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            {/* Title Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '8px'
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#f97316')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '8px'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => (e.target.style.borderColor = '#f97316')}
                onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
              />
            </div>

            {/* File Upload */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#374151',
                marginBottom: '8px'
              }}>
                Attach File (Optional)
              </label>
              <div style={{
                position: 'relative',
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center',
                transition: 'border-color 0.3s ease'
              }}
              onDragOver={(e) => {
                e.preventDefault()
                e.currentTarget.style.borderColor = '#f97316'
              }}
              onDragLeave={(e) => {
                e.currentTarget.style.borderColor = '#d1d5db'
              }}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.xlsx,.xls,.ppt,.pptx,.txt"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }}
                />
                <Upload size={48} color="#9ca3af" style={{ marginBottom: '12px' }} />
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: 0,
                  marginBottom: '8px'
                }}>
                  {selectedFile ? selectedFile.name : 'Drop your file here or click to browse'}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  margin: 0
                }}>
                  Supports PDF, DOC, PNG, JPEG, XLSX, PPT and more
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                backgroundColor: isLoading ? '#d1d5db' : '#f97316',
                color: 'white',
                padding: '14px',
                fontSize: '1.1rem',
                fontWeight: 600,
                border: 'none',
                borderRadius: '8px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease',
                boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) (e.currentTarget.style.backgroundColor = '#ea580c')
              }}
              onMouseLeave={(e) => {
                if (!isLoading) (e.currentTarget.style.backgroundColor = '#f97316')
              }}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Details & Map Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '64px',
          alignItems: 'stretch',
          minHeight: '400px'
        }}>
          {/* Contact Details */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '24px'
            }}>
              Contact Details
            </h3>

            {/* Profile Image Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
              padding: '20px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ 
                marginRight: '24px', 
                width: '120px', 
                height: '150px',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #f97316'
              }}>
                <img
                  src="/contact.jpg"
                  alt="Dr. Surendra Babu Anantharaman"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  Dr. Surendra Babu Anantharaman
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  Principal Investigator
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af',
                  margin: 0
                }}>
                  Low-Dimensional Semiconductors Lab
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <Mail size={24} color="#f97316" style={{ marginRight: '12px' }} />
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#374151'
                  }}>
                    Email
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    color: '#6b7280'
                  }}>
                    surendra@iitm.ac.in
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <Phone size={24} color="#f97316" style={{ marginRight: '12px' }} />
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#374151'
                  }}>
                    Phone
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    color: '#6b7280'
                  }}>
                    +91-44-2257-4770
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <MapPin size={24} color="#f97316" style={{ marginRight: '12px', marginTop: '2px' }} />
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#374151',
                    marginBottom: '4px'
                  }}>
                    Address
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    color: '#6b7280',
                    lineHeight: 1.5
                  }}>
                    Low-Dimensional Semiconductors Lab<br />
                    Department of Metallurgical and Materials Engineering<br />
                    Indian Institute of Technology Madras<br />
                    Chennai - 600036, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              paddingTop: '20px',
              borderTop: '1px solid #e5e7eb'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '8px'
              }}>
                Office Hours
              </h4>
              <p style={{
                margin: 0,
                fontSize: '1rem',
                color: '#6b7280'
              }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            height: '100%',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.331424361!2d80.22879131482142!3d12.99095709087789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x89a52bb6da41e5f4!2sIndian%20Institute%20of%20Technology%20Madras!5e0!3m2!1sen!2sin!4v1640123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ 
                border: 0,
                flex: 1,
                minHeight: '400px'
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIT Madras Location"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}