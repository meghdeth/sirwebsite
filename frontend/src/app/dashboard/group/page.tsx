'use client'

import { useState, useEffect } from 'react'
import GroupForm from '../../../components/GroupForm'
import { apiCall } from '../../../lib/api'

interface GroupMember {
  id: number
  name: string
  position: string
  section: 'Team' | 'Alumni'
  bio?: string
  image_url?: string
  email?: string
  linkedin_url?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export default function GroupManagement() {
  const [members, setMembers] = useState<GroupMember[]>([])
  const [filteredMembers, setFilteredMembers] = useState<GroupMember[]>([])
  const [selectedSection, setSelectedSection] = useState<string>('all')
  const [showForm, setShowForm] = useState(false)
  const [editingMember, setEditingMember] = useState<GroupMember | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadMembers()
  }, [])

  useEffect(() => {
    if (selectedSection === 'all') {
      setFilteredMembers(members)
    } else {
      setFilteredMembers(members.filter(member => member.section === selectedSection))
    }
  }, [members, selectedSection])

  const loadMembers = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/group', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (!response.ok) throw new Error('Failed to fetch members')
      const data = await response.json()
      setMembers(data)
      setError(null)
    } catch (err) {
      setError('Failed to load group members')
      console.error('Error loading members:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (memberData: Omit<GroupMember, 'id' | 'created_at' | 'updated_at'>, imageFile?: File) => {
    try {
      const formData = new FormData()
      
      // Add all member data to FormData
      Object.entries(memberData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          formData.append(key, value.toString())
        }
      })
      
      // Add image file if provided
      if (imageFile) {
        formData.append('image', imageFile)
      }
      
      const endpoint = editingMember 
        ? `/api/admin/group/${editingMember.id}`
        : '/api/admin/group'
      
      const method = editingMember ? 'PUT' : 'POST'
      
      const token = localStorage.getItem('adminToken')
      const response = await apiCall(endpoint, {
        method,
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to save member')
      }
      
      await loadMembers()
      setShowForm(false)
      setEditingMember(null)
    } catch (err) {
      console.error('Error saving member:', err)
      alert('Failed to save member: ' + (err as Error).message)
    }
  }

  const handleEdit = (member: GroupMember) => {
    setEditingMember(member)
    setShowForm(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this member?')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall(`/api/admin/group/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (!response.ok) throw new Error('Failed to delete member')
      
      await loadMembers()
    } catch (err) {
      console.error('Error deleting member:', err)
      alert('Failed to delete member')
    }
  }

  const handleAdd = () => {
    setEditingMember(null)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingMember(null)
  }

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>Loading group members...</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Group Management</h1>
        <button
          onClick={handleAdd}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Add Member
        </button>
      </div>

      {error && (
        <div style={{
          padding: '12px',
          backgroundColor: '#fee2e2',
          border: '1px solid #fecaca',
          borderRadius: '6px',
          color: '#dc2626',
          marginBottom: '16px'
        }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '12px', fontWeight: '500' }}>Filter by Section:</label>
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          style={{
            padding: '6px 12px',
            border: '1px solid #d1d5db',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        >
          <option value="all">All Sections</option>
          <option value="Team">Team</option>
          <option value="Alumni">Alumni</option>
        </select>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
          >
            {member.image_url && (
              <img
                src={member.image_url}
                alt={member.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: '12px'
                }}
              />
            )}
            
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: '600' }}>
              {member.name}
            </h3>
            
            <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>
              {member.position}
            </p>
            
            <p style={{ 
              margin: '0 0 8px 0', 
              fontSize: '12px', 
              padding: '2px 8px', 
              backgroundColor: '#f3f4f6', 
              borderRadius: '12px', 
              display: 'inline-block' 
            }}>
              {member.section}
            </p>
            
            {member.bio && (
              <p style={{ 
                margin: '8px 0', 
                fontSize: '13px', 
                color: '#4b5563',
                lineHeight: '1.4'
              }}>
                {member.bio.length > 100 ? `${member.bio.substring(0, 100)}...` : member.bio}
              </p>
            )}
            
            <div style={{ 
              display: 'flex', 
              gap: '8px', 
              marginTop: '12px' 
            }}>
              <button
                onClick={() => handleEdit(member)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Edit
              </button>
              
              <button
                onClick={() => handleDelete(member.id)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Delete
              </button>
            </div>
            
            <div style={{ 
              marginTop: '8px', 
              fontSize: '11px', 
              color: '#9ca3af' 
            }}>
              Order: {member.order_index} | 
              Status: {member.is_active ? 'Active' : 'Inactive'}
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          color: '#6b7280' 
        }}>
          No members found for the selected section.
        </div>
      )}

      {showForm && (
        <GroupForm
          member={editingMember || undefined}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  )
}