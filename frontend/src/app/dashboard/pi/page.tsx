'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { apiCall } from '../../../lib/api'
import { Plus, Edit, Trash2, User, GraduationCap, Award, Briefcase } from 'lucide-react'
import FloatingModal from '../../../components/FloatingModal'
import PIEducationForm from '../../../components/forms/PIEducationForm'
import PIExperienceForm from '../../../components/forms/PIExperienceForm'
import PIAwardsForm from '../../../components/forms/PIAwardsForm'

interface PIEducation {
  id: number
  degree: string
  field: string
  institution: string
  location?: string
  year: string
  description?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

interface PIExperience {
  id: number
  position: string
  organization: string
  location?: string
  start_year: string
  end_year?: string
  description?: string
  is_current: boolean
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

interface PIAward {
  id: number
  title: string
  organization?: string
  year: string
  description?: string
  grant_amount?: string
  currency?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export default function PIManagement() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'awards'>('education')
  const [education, setEducation] = useState<PIEducation[]>([])
  const [experience, setExperience] = useState<PIExperience[]>([])
  const [awards, setAwards] = useState<PIAward[]>([])
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'education' | 'experience' | 'awards'>('education')
  const [editingItem, setEditingItem] = useState<any>(null)
  const [modalLoading, setModalLoading] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const headers = {
        'Authorization': `Bearer ${token}`
      }

      const [educationRes, experienceRes, awardsRes] = await Promise.all([
        apiCall('/api/admin/pi/education', { headers }),
        apiCall('/api/admin/pi/experience', { headers }),
        apiCall('/api/admin/pi/awards', { headers })
      ])

      if (educationRes.ok) {
        const educationData = await educationRes.json()
        setEducation(educationData)
      }
      
      if (experienceRes.ok) {
        const experienceData = await experienceRes.json()
        setExperience(experienceData)
      }
      
      if (awardsRes.ok) {
        const awardsData = await awardsRes.json()
        setAwards(awardsData)
      }
    } catch (error) {
      console.error('Error fetching PI data:', error)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (type: 'education' | 'experience' | 'awards', item?: any) => {
    setModalType(type)
    setEditingItem(item || null)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalType('education')
    setEditingItem(null)
    setModalLoading(false)
  }

  const handleFormSubmit = async (formData: any) => {
    setModalLoading(true)

    try {
      const token = localStorage.getItem('adminToken')
      const url = editingItem
        ? `/api/admin/pi/${modalType}/${editingItem.id}`
        : `/api/admin/pi/${modalType}`
      
      const response = await apiCall(url, {
        method: editingItem ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      
      if (response.ok) {
        // Refresh the data after successful operation
        fetchData()
        closeModal()
        alert(`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} ${editingItem ? 'updated' : 'added'} successfully!`)
      } else {
        alert('Error: ' + (result.error || 'Unknown error'))
      }
    } catch (error) {
      alert(`Error ${editingItem ? 'updating' : 'adding'} ${modalType}`)
      console.error('Form submit error:', error)
    }

    setModalLoading(false)
  }

  const handleDelete = async (type: 'education' | 'experience' | 'awards', id: number) => {
    if (!confirm(`Are you sure you want to delete this ${type} entry?`)) return

    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall(`/api/admin/pi/${type}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const result = await response.json()
      
      if (response.ok) {
        // Refresh the data after successful deletion
        fetchData()
        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`)
      } else {
        alert('Error deleting entry: ' + (result.error || 'Unknown error'))
      }
    } catch (error) {
      alert('Error deleting entry')
      console.error('Delete error:', error)
    }
  }

  const renderModalContent = () => {
    if (modalType === 'education') {
      return (
        <PIEducationForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'experience') {
      return (
        <PIExperienceForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'awards') {
      return (
        <PIAwardsForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    }
    return null
  }

  const getModalTitle = () => {
    const action = editingItem ? 'Edit' : 'Add'
    const type = modalType.charAt(0).toUpperCase() + modalType.slice(1)
    return `${action} ${type}`
  }

  const renderEducationList = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GraduationCap size={20} />
          Education
        </h3>
        <button
          onClick={() => openModal('education')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          Add Education
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '12px' }}>
        {education.map((item) => (
          <div key={item.id} style={{
            padding: '16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: item.is_active ? 'white' : '#f9fafb'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 4px 0', color: '#1f2937' }}>
                  {item.degree} in {item.field}
                </h4>
                <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontWeight: 500 }}>
                  {item.institution}{item.location ? `, ${item.location}` : ''} • {item.year}
                </p>
                {item.description && (
                  <p style={{ margin: '0 0 8px 0', color: '#4b5563', fontSize: '14px' }}>
                    {item.description}
                  </p>
                )}
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                  Order: {item.order_index} | Status: {item.is_active ? 'Active' : 'Inactive'}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => openModal('education', item)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  <Edit size={12} />
                </button>
                <button
                  onClick={() => handleDelete('education', item.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {education.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          No education entries found. Add your first education entry!
        </div>
      )}
    </div>
  )

  const renderExperienceList = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Briefcase size={20} />
          Experience
        </h3>
        <button
          onClick={() => openModal('experience')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          Add Experience
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '12px' }}>
        {experience.map((item) => (
          <div key={item.id} style={{
            padding: '16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: item.is_active ? 'white' : '#f9fafb'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 4px 0', color: '#1f2937' }}>
                  {item.position}
                </h4>
                <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontWeight: 500 }}>
                  {item.organization}{item.location ? `, ${item.location}` : ''} • {item.start_year} - {item.end_year || (item.is_current ? 'Present' : '')}
                </p>
                {item.description && (
                  <p style={{ margin: '0 0 8px 0', color: '#4b5563', fontSize: '14px' }}>
                    {item.description}
                  </p>
                )}
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                  Order: {item.order_index} | Status: {item.is_active ? 'Active' : 'Inactive'}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => openModal('experience', item)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  <Edit size={12} />
                </button>
                <button
                  onClick={() => handleDelete('experience', item.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {experience.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          No experience entries found. Add your first experience entry!
        </div>
      )}
    </div>
  )

  const renderAwardsList = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={20} />
          Awards
        </h3>
        <button
          onClick={() => openModal('awards')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          <Plus size={16} />
          Add Award
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '12px' }}>
        {awards.map((item) => (
          <div key={item.id} style={{
            padding: '16px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: item.is_active ? 'white' : '#f9fafb'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: '0 0 4px 0', color: '#1f2937' }}>
                  {item.title}
                </h4>
                <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontWeight: 500 }}>
                  {item.organization && `${item.organization} • `}{item.year}
                </p>
                {item.description && (
                  <p style={{ margin: '0 0 8px 0', color: '#4b5563', fontSize: '14px' }}>
                    {item.description}
                  </p>
                )}
                {item.grant_amount && (
                  <p style={{ margin: '0 0 8px 0', color: '#16a34a', fontSize: '14px', fontWeight: 500 }}>
                    Grant: {item.currency || ''} {item.grant_amount}
                  </p>
                )}
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                  Order: {item.order_index} | Status: {item.is_active ? 'Active' : 'Inactive'}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => openModal('awards', item)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  <Edit size={12} />
                </button>
                <button
                  onClick={() => handleDelete('awards', item.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {awards.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
          No awards found. Add your first award!
        </div>
      )}
    </div>
  )

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
        <div>Loading PI data...</div>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
          <User size={24} />
          PI Details Management
        </h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid #e5e7eb', 
        marginBottom: '30px',
        gap: '0'
      }}>
        {[
          { key: 'education', label: 'Education', icon: GraduationCap },
          { key: 'experience', label: 'Experience', icon: Briefcase },
          { key: 'awards', label: 'Awards', icon: Award }
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as any)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              border: 'none',
              borderBottom: activeTab === key ? '2px solid #3b82f6' : '2px solid transparent',
              backgroundColor: 'transparent',
              color: activeTab === key ? '#3b82f6' : '#6b7280',
              cursor: 'pointer',
              fontWeight: activeTab === key ? 600 : 400,
              transition: 'all 0.2s'
            }}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'education' && renderEducationList()}
        {activeTab === 'experience' && renderExperienceList()}
        {activeTab === 'awards' && renderAwardsList()}
      </div>

      {/* Floating Modal */}
      <FloatingModal
        isOpen={showModal}
        onClose={closeModal}
        title={getModalTitle()}
        onSave={() => {
          const form = document.querySelector('form')
          if (form) {
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
          }
        }}
        onCancel={closeModal}
        isLoading={modalLoading}
      >
        {renderModalContent()}
      </FloatingModal>
    </div>
  )
}