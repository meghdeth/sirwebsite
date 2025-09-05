'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { apiCall } from '../../lib/api'
import FloatingModal from '../../components/FloatingModal'
import NewsForm from '../../components/forms/NewsForm'
import PublicationForm from '../../components/forms/PublicationForm'
import PatentForm from '../../components/forms/PatentForm'
import ConferenceForm from '../../components/forms/ConferenceForm'
import GalleryForm from '../../components/forms/GalleryForm'
import TeachingForm from '../../components/forms/TeachingForm'
import ResearchForm from '../../components/forms/ResearchForm'
import RecentUpdatesForm from '../../components/forms/RecentUpdatesForm'
import AtAGlanceForm from '../../components/forms/AtAGlanceForm'
import DragDropList from '../../components/DragDropList'
import { 
  Home, 
  Users, 
  GraduationCap, 
  FlaskConical, 
  FileText, 
  Images, 
  Newspaper, 
  MessageSquare, 
  LogOut,
  Menu,
  X,
  Plus,
  Edit,
  Trash2,
  Star,
  Save,
  GripVertical
} from 'lucide-react'

// Add type definitions
interface Message {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
  read_status: boolean
  file_name?: string
}

interface NewsItem {
  id: number
  year: string
  title: string
  content: string
  link?: string
}

interface Publication {
  id: number
  title: string
  authors: string
  journal: string
  year: string
  link?: string
}

interface Patent {
  id: number
  title: string
  inventors: string
  patent_number?: string
  application_number?: string
  filing_date?: string
  grant_date?: string
  status: string
  abstract?: string
  created_at: string
  updated_at: string
}

interface Conference {
  id: number
  title: string
  authors: string
  conference_name: string
  location?: string
  date?: string
  year: number
  paper_type?: string
  doi?: string
  pdf_url?: string
  created_at: string
  updated_at: string
}

interface GalleryPost {
  id: number
  title: string
  description?: string
  images: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

interface TeachingCourse {
  id: number
  duration: string
  program_level: string
  year_level: string
  course_type: string
  course_code: string
  course_name: string
  instructor: string
  description?: string
  created_at: string
  updated_at: string
}

interface ResearchProject {
  id: number
  title: string
  summary: string
  image?: string
  order_index: number
  links?: Array<{ url: string; name_tag: string }>
  created_at: string
  updated_at: string
}

interface RecentUpdate {
  id: number
  title: string
  content: string
  date_posted: string
  created_at: string
  updated_at: string
}

interface AtAGlancePhoto {
  id: number
  description: string
  image_url: string
  created_at: string
  updated_at: string
}

interface NewJoinerSubmission {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('messages')
  const [publicationsSubTab, setPublicationsSubTab] = useState('publications')
  const [messages, setMessages] = useState<Message[]>([])
  const [news, setNews] = useState<NewsItem[]>([])
  const [publications, setPublications] = useState<Publication[]>([])
  const [patents, setPatents] = useState<Patent[]>([])
  const [conferences, setConferences] = useState<Conference[]>([])
  const [gallery, setGallery] = useState<GalleryPost[]>([])
  const [teachingCourses, setTeachingCourses] = useState<TeachingCourse[]>([])
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>([])
  const [recentUpdates, setRecentUpdates] = useState<RecentUpdate[]>([])
  const [atAGlancePhotos, setAtAGlancePhotos] = useState<AtAGlancePhoto[]>([])
  const [newJoinersSubmissions, setNewJoinersSubmissions] = useState<NewJoinerSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<string>('')
  const [editingItem, setEditingItem] = useState<any>(null)
  const [modalLoading, setModalLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get active tab from URL params
  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab) {
      setActiveTab(tab)
    }
  }, [searchParams])

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/adminpanel')
      return
    }

    // Load initial data
    loadMessages()
    loadNews()
    loadPublications()
    loadPatents()
    loadConferences()
    loadGallery()
    loadTeachingCourses()
    loadResearchProjects()
    loadRecentUpdates()
    loadAtAGlancePhotos()
    loadNewJoinersSubmissions()
  }, [router])

  const loadMessages = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const result = await response.json()
      if (result.success) {
        setMessages(result.messages)
      }
    } catch (error) {
      console.error('Error loading messages:', error)
    }
  }

  const loadNews = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/news', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const result = await response.json()
      if (result.success) {
        setNews(result.news)
      }
    } catch (error) {
      console.error('Error loading news:', error)
    }
  }

  const loadPublications = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/publications', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const result = await response.json()
      if (result.success) {
        setPublications(result.publications)
      }
    } catch (error) {
      console.error('Error loading publications:', error)
    }
  }

  const loadPatents = async () => {
    try {
      const response = await apiCall('/api/patents')
      const result = await response.json()
      setPatents(result.patents || result)
    } catch (error) {
      console.error('Error loading patents:', error)
    }
  }

  const loadConferences = async () => {
    try {
      const response = await apiCall('/api/conferences')
      const result = await response.json()
      setConferences(result.conferences || result)
    } catch (error) {
      console.error('Error loading conferences:', error)
    }
  }

  const loadGallery = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/gallery', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const result = await response.json()
      if (result.success) {
        setGallery(result.gallery)
      }
    } catch (error) {
      console.error('Error loading gallery:', error)
    }
  }

  const loadTeachingCourses = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/teaching', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const result = await response.json()
      if (result.success) {
        setTeachingCourses(result.courses)
      }
    } catch (error) {
      console.error('Error loading teaching courses:', error)
    }
  }

  const loadResearchProjects = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await apiCall('/api/admin/research', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const result = await response.json()
      if (result.success) {
        setResearchProjects(result.research)
      }
    } catch (error) {
      console.error('Error loading research projects:', error)
    }
  }

  const loadRecentUpdates = async () => {
    try {
      const response = await apiCall('/api/recent-updates')
      const result = await response.json()
      setRecentUpdates(result.updates || result)
    } catch (error) {
      console.error('Error loading recent updates:', error)
    }
  }

  const loadAtAGlancePhotos = async () => {
    try {
      const response = await apiCall('/api/at-a-glance')
      const result = await response.json()
      setAtAGlancePhotos(result.photos || result)
    } catch (error) {
      console.error('Error loading at a glance photos:', error)
    }
  }

  const loadNewJoinersSubmissions = async () => {
    try {
      const response = await apiCall('/api/new-joiners/submissions')
      const result = await response.json()
      setNewJoinersSubmissions(result.submissions || result)
    } catch (error) {
      console.error('Error loading new joiners submissions:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/adminpanel')
  }

  const markAsRead = async (messageId: number) => {
    try {
      const token = localStorage.getItem('adminToken')
      await apiCall('/api/admin/messages', {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ messageId, action: 'mark_read' })
      })
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId ? { ...msg, read_status: true } : msg
        )
      )
    } catch (error) {
      console.error('Error marking message as read:', error)
    }
  }

  const deleteMessage = async (messageId: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      await apiCall('/api/admin/messages', {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ messageId })
      })
      
      setMessages(prev => prev.filter(msg => msg.id !== messageId))
    } catch (error) {
      console.error('Error deleting message:', error)
    }
  }

  const openAddModal = (type: string) => {
    setModalType(type)
    setEditingItem(null)
    setShowModal(true)
  }

  const openEditModal = (type: string, item: NewsItem | Publication | GalleryPost | TeachingCourse | ResearchProject | Patent | Conference) => {
    setModalType(type)
    setEditingItem(item)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalType('')
    setEditingItem(null)
    setModalLoading(false)
  }

  const handleFormSubmit = async (formData: any) => {
    setModalLoading(true)

    try {
      const isEditing = editingItem !== null
      const method = isEditing ? 'PUT' : 'POST'
      
      let url = ''
      if (modalType === 'recent-updates') {
        url = isEditing 
          ? `/api/recent-updates/${editingItem.id}`
          : `/api/recent-updates`
      } else if (modalType === 'at-a-glance') {
        url = isEditing 
          ? `/api/at-a-glance/${editingItem.id}`
          : `/api/at-a-glance`
      } else if (modalType === 'patents') {
        url = isEditing 
          ? `/api/patents/${editingItem.id}`
          : `/api/patents`
      } else if (modalType === 'conferences') {
        url = isEditing 
          ? `/api/conferences/${editingItem.id}`
          : `/api/conferences`
      } else {
        url = `/api/admin/${modalType}`
      }
      
      const body = isEditing && (modalType === 'recent-updates' || modalType === 'at-a-glance' || modalType === 'patents' || modalType === 'conferences')
        ? formData
        : isEditing 
        ? { ...formData, id: editingItem.id }
        : formData

      const token = localStorage.getItem('adminToken')
      const headers: any = { 'Content-Type': 'application/json' }
      
      if (modalType !== 'recent-updates' && modalType !== 'at-a-glance' && modalType !== 'patents' && modalType !== 'conferences') {
        headers['Authorization'] = `Bearer ${token}`
      }
      
      const response = await apiCall(url, {
        method,
        headers,
        body: JSON.stringify(body)
      })
      
      const result = await response.json()

      if (modalType === 'recent-updates') {
        loadRecentUpdates()
      } else if (modalType === 'at-a-glance') {
        loadAtAGlancePhotos()
      } else if (modalType === 'patents') {
        loadPatents()
      } else if (modalType === 'conferences') {
        loadConferences()
      } else {
        if (result.success) {
          if (modalType === 'news') {
            if (isEditing) {
              setNews(prev => prev.map(item => 
                item.id === editingItem.id ? result.news : item
              ))
            } else {
              setNews(prev => [result.news, ...prev])
            }
          } else if (modalType === 'publications') {
            if (isEditing) {
              setPublications(prev => prev.map(item => 
                item.id === editingItem.id ? result.publication : item
              ))
            } else {
              setPublications(prev => [result.publication, ...prev])
            }
          } else if (modalType === 'teaching') {
            if (isEditing) {
              setTeachingCourses(prev => prev.map(item => 
                item.id === editingItem.id ? result.course : item
              ))
            } else {
              setTeachingCourses(prev => [result.course, ...prev])
            }
          } else if (modalType === 'gallery') {
            if (isEditing) {
              setGallery(prev => prev.map(item => 
                item.id === editingItem.id ? result.gallery : item
              ))
            } else {
              setGallery(prev => [result.gallery, ...prev])
            }
          } else if (modalType === 'research') {
            if (isEditing) {
              setResearchProjects(prev => prev.map(item => 
                item.id === editingItem.id ? result.research : item
              ))
            } else {
              setResearchProjects(prev => [result.research, ...prev])
            }
          }
        }
      }
      
      closeModal()
      alert(`${modalType.charAt(0).toUpperCase() + modalType.slice(1).replace('-', ' ')} ${isEditing ? 'updated' : 'added'} successfully!`)
    } catch (error: any) {
      alert('Error: ' + (error.message || 'Unknown error'))
    }

    setModalLoading(false)
  }



  const handleDelete = async (type: string, id: number) => {
    if (!confirm(`Are you sure you want to delete this ${type.slice(0, -1)}?`)) return
    
    try {
      const token = localStorage.getItem('adminToken')
      await apiCall(`/api/admin/${type}`, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id })
      })
      
      if (type === 'news') {
        setNews(prev => prev.filter(item => item.id !== id))
      } else if (type === 'publications') {
        setPublications(prev => prev.filter(item => item.id !== id))
      } else if (type === 'gallery') {
        setGallery(prev => prev.filter(item => item.id !== id))
      } else if (type === 'research') {
        setResearchProjects(prev => prev.filter(item => item.id !== id))
      }
      alert(`${type.charAt(0).toUpperCase() + type.slice(1).slice(0, -1)} deleted successfully!`)
    } catch (error) {
      alert(`Error deleting ${type.slice(0, -1)}`)
    }
  }

  const deletePatent = async (patentId: number) => {
    if (!confirm('Are you sure you want to delete this patent?')) return
    
    try {
      await apiCall(`/api/patents/${patentId}`, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      
      setPatents(prev => prev.filter(patent => patent.id !== patentId))
      alert('Patent deleted successfully!')
    } catch (error) {
      console.error('Error deleting patent:', error)
      alert('Error deleting patent')
    }
  }

  const deleteConference = async (conferenceId: number) => {
    if (!confirm('Are you sure you want to delete this conference?')) return
    
    try {
      await apiCall(`/api/conferences/${conferenceId}`, {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      
      setConferences(prev => prev.filter(conference => conference.id !== conferenceId))
      alert('Conference deleted successfully!')
    } catch (error) {
      console.error('Error deleting conference:', error)
      alert('Error deleting conference')
    }
  }

  const deleteTeachingCourse = async (courseId: number) => {
    if (!confirm('Are you sure you want to delete this course?')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      await apiCall('/api/admin/teaching', {
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id: courseId })
      })
      
      setTeachingCourses(prev => prev.filter(course => course.id !== courseId))
      alert('Course deleted successfully!')
    } catch (error) {
      console.error('Error deleting course:', error)
      alert('Error deleting course')
    }
  }

  // Drag and drop order update functions
  const updateOrder = async (tableName: string, items: any[]) => {
    try {
      const token = localStorage.getItem('adminToken')
      const orderItems = items.map((item, index) => ({
        id: item.id,
        order_index: index
      }))

      await apiCall(`/api/admin/bulk/order/${tableName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ items: orderItems })
      })
    } catch (error) {
      console.error('Error updating order:', error)
      alert('Error updating order')
    }
  }

  const updatePatentsOrder = async (items: Patent[]) => {
    try {
      const orderItems = items.map((item, index) => ({
        id: item.id,
        order_index: index
      }))

      await apiCall('/api/patents/bulk/order', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: orderItems })
      })

      setPatents(items)
    } catch (error) {
      console.error('Error updating patents order:', error)
      alert('Error updating patents order')
    }
  }

  const updateConferencesOrder = async (items: Conference[]) => {
    try {
      const orderItems = items.map((item, index) => ({
        id: item.id,
        order_index: index
      }))

      await apiCall('/api/conferences/bulk/order', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: orderItems })
      })

      setConferences(items)
    } catch (error) {
      console.error('Error updating conferences order:', error)
      alert('Error updating conferences order')
    }
  }




  const renderMessages = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          Messages ({messages.filter(m => !m.read_status).length} unread)
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {messages.map(message => (
          <div
            key={message.id}
            style={{
              backgroundColor: message.read_status ? '#f9fafb' : '#fff7ed',
              border: `2px solid ${message.read_status ? '#e5e7eb' : '#fed7aa'}`,
              borderRadius: '12px',
              padding: '20px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => markAsRead(message.id)}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  {message.subject}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b7280',
                  margin: 0
                }}>
                  From: {message.name} ({message.email})
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {!message.read_status && (
                  <span style={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontWeight: 500
                  }}>
                    NEW
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteMessage(message.id)
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#ef4444',
                    padding: '4px'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <p style={{
              fontSize: '1rem',
              color: '#374151',
              margin: 0,
              marginBottom: '12px',
              lineHeight: 1.5
            }}>
              {message.message}
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.875rem',
              color: '#9ca3af'
            }}>
              <span>Date: {new Date(message.created_at).toLocaleDateString()}</span>
              {message.file_name && (
                <span style={{
                  backgroundColor: '#ddd6fe',
                  color: '#7c3aed',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  fontWeight: 500
                }}>
                  📎 {message.file_name}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderNews = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          News Management
        </h2>
        <button
          onClick={() => openAddModal('news')}
          style={{
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 500
          }}
        >
          <Plus size={16} />
          Add News
        </button>
      </div>

      {/* Draggable News List */}
      <DragDropList
        items={news}
        onOrderChange={(reorderedNews) => {
          setNews(reorderedNews);
          updateOrder('news', reorderedNews);
        }}
        renderItem={(item, index, isDragging) => (
          <div
            style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '20px',
              opacity: isDragging ? 0.5 : 1
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px'
            }}>
              <div>
                <span style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 500
                }}>
                  {item.year}
                </span>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: '8px 0 4px 0'
                }}>
                  {item.title}
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => openEditModal('news', item)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#3b82f6',
                    padding: '4px'
                  }}
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete('news', item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#ef4444',
                    padding: '4px'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <p style={{
              fontSize: '1rem',
              color: '#374151',
              margin: 0,
              lineHeight: 1.5
            }}>
              {item.content}
            </p>
            
            {item.link && (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  marginTop: '8px',
                  display: 'inline-block'
                }}
              >
                View Link →
              </a>
            )}
          </div>
        )}
        getItemId={(item) => item.id}
        itemClassName=""
      />
    </div>
  )

  const renderGallery = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          Gallery Management
        </h2>
        <button
          onClick={() => openAddModal('gallery')}
          style={{
            backgroundColor: '#06b6d4',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 500
          }}
        >
          <Plus size={16} />
          Add Gallery Post
        </button>
      </div>

      {/* Draggable Gallery Posts */}
      <DragDropList
        items={gallery || []}
        onOrderChange={(reorderedGallery) => {
          setGallery(reorderedGallery);
          updateOrder('gallery_posts', reorderedGallery);
        }}
        renderItem={(post, index, isDragging) => (
          <div
            style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              opacity: isDragging ? 0.5 : 1
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              padding: '16px 16px 0 16px'
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: '0 0 8px 0'
                }}>
                  {post.title}
                </h3>
                {post.description && (
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    margin: '0 0 8px 0',
                    lineHeight: 1.4
                  }}>
                    {post.description}
                  </p>
                )}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.8rem',
                  color: '#9ca3af'
                }}>
                  <span>{post.images?.length || 0} image{(post.images?.length || 0) !== 1 ? 's' : ''}</span>
                  <span>{new Date(post.created_at).toLocaleDateString()}</span>
                  {!post.is_active && (
                    <span style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: 500
                    }}>
                      INACTIVE
                    </span>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                <button
                  onClick={() => openEditModal('gallery', post)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#3b82f6',
                    padding: '8px',
                    borderRadius: '6px'
                  }}
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete('gallery', post.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#ef4444',
                    padding: '8px',
                    borderRadius: '6px'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            {/* Images Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: (post.images?.length || 0) === 1 ? '1fr' : 
                                   (post.images?.length || 0) === 2 ? '1fr 1fr' : 
                                   'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '8px',
              padding: '16px',
              maxHeight: '300px',
              overflow: 'hidden'
            }}>
              {(post.images || []).slice(0, 6).map((imageUrl, index) => (
                <div key={index} style={{ position: 'relative' }}>
                  <img
                    src={imageUrl}
                    alt={`${post.title} - Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: (post.images?.length || 0) === 1 ? '250px' : '150px',
                      objectFit: 'cover',
                      borderRadius: '6px'
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+'
                    }}
                  />
                  {index === 5 && (post.images?.length || 0) > 6 && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '6px',
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}>
                      +{(post.images?.length || 0) - 6}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        getItemId={(post) => post.id}
        itemClassName=""
      />
    </div>
  )

  const renderPublications = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          PI Details
        </h2>
      </div>

      {/* Sub-tabs */}
      <div style={{
        display: 'flex',
        borderBottom: '2px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        {[
          { key: 'publications', label: 'Publications', color: '#ec4899' },
          { key: 'patents', label: 'Patents', color: '#8b5cf6' },
          { key: 'conferences', label: 'Conferences', color: '#f59e0b' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setPublicationsSubTab(tab.key)}
            style={{
              padding: '12px 24px',
              border: 'none',
              backgroundColor: 'transparent',
              color: publicationsSubTab === tab.key ? tab.color : '#6b7280',
              borderBottom: publicationsSubTab === tab.key ? `3px solid ${tab.color}` : '3px solid transparent',
              fontSize: '1rem',
              fontWeight: publicationsSubTab === tab.key ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Publications Tab */}
      {publicationsSubTab === 'publications' && (
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
              Publications ({publications.length})
            </h3>
            <button
              onClick={() => openAddModal('publications')}
              style={{
                backgroundColor: '#ec4899',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              <Plus size={16} />
              Add Publication
            </button>
          </div>

          <DragDropList
            items={publications}
            onOrderChange={(reorderedItems) => {
              setPublications(reorderedItems);
              updateOrder('publications', reorderedItems);
            }}
            renderItem={(pub, index, isDragging) => (
              <div
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  opacity: isDragging ? 0.5 : 1
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    backgroundColor: '#ec4899',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 500
                  }}>
                    {index + 1}
                  </span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => openEditModal('publications', pub)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#3b82f6',
                        padding: '4px'
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete('publications', pub.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ef4444',
                        padding: '4px'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: '0 0 8px 0',
                  lineHeight: 1.3
                }}>
                  {pub.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: '0 0 8px 0',
                  fontStyle: 'italic'
                }}>
                  {pub.authors}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    color: '#374151',
                    fontWeight: 500
                  }}>
                    {pub.journal}
                  </span>
                  <span style={{ fontSize: '1rem', color: '#6b7280' }}>
                    ({pub.year})
                  </span>
                </div>

                {pub.link && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af',
                      fontWeight: 500
                    }}>
                      DOI:
                    </span>
                    <a 
                      href={`https://doi.org/${pub.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: '#f97316',
                        textDecoration: 'none',
                        fontWeight: 500
                      }}
                    >
                      {pub.link}
                    </a>
                  </div>
                )}
              </div>
            )}
            getItemId={(pub) => pub.id}
            itemClassName=""
          />
        </div>
      )}

      {/* Patents Tab */}
      {publicationsSubTab === 'patents' && (
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
              Patents ({patents.length})
            </h3>
            <button
              onClick={() => openAddModal('patents')}
              style={{
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              <Plus size={16} />
              Add Patent
            </button>
          </div>

          <DragDropList
            items={patents}
            onOrderChange={(reorderedItems) => updatePatentsOrder(reorderedItems)}
            renderItem={(patent, index, isDragging) => (
              <div
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  opacity: isDragging ? 0.5 : 1
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{
                      backgroundColor: '#8b5cf6',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      {index + 1}
                    </span>
                    <span style={{
                      backgroundColor: patent.status === 'granted' ? '#10b981' : '#f59e0b',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'uppercase'
                    }}>
                      {patent.status}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => openEditModal('patents', patent)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#3b82f6',
                        padding: '4px'
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deletePatent(patent.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ef4444',
                        padding: '4px'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: '0 0 8px 0',
                  lineHeight: 1.3
                }}>
                  {patent.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: '0 0 8px 0',
                  fontStyle: 'italic'
                }}>
                  {patent.inventors}
                </p>

                <div style={{ marginBottom: '12px' }}>
                  {patent.patent_number && (
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: 500 }}>
                        Patent No:
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                        {patent.patent_number}
                      </span>
                    </div>
                  )}
                  {patent.application_number && (
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: 500 }}>
                        Application No:
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                        {patent.application_number}
                      </span>
                    </div>
                  )}
                  {patent.filing_date && (
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: 500 }}>
                        Filed:
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                        {new Date(patent.filing_date).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                  {patent.grant_date && (
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: 500 }}>
                        Granted:
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                        {new Date(patent.grant_date).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>

                {patent.abstract && (
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    margin: 0,
                    lineHeight: 1.5,
                    fontStyle: 'italic'
                  }}>
                    {patent.abstract}
                  </p>
                )}
              </div>
            )}
            getItemId={(patent) => patent.id}
            itemClassName=""
          />
        </div>
      )}

      {/* Conferences Tab */}
      {publicationsSubTab === 'conferences' && (
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
              Conferences ({conferences.length})
            </h3>
            <button
              onClick={() => openAddModal('conferences')}
              style={{
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.9rem',
                fontWeight: 500
              }}
            >
              <Plus size={16} />
              Add Conference
            </button>
          </div>

          <DragDropList
            items={conferences}
            onOrderChange={(reorderedItems) => updateConferencesOrder(reorderedItems)}
            renderItem={(conference, index, isDragging) => (
              <div
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  opacity: isDragging ? 0.5 : 1
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{
                      backgroundColor: '#f59e0b',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 500
                    }}>
                      {index + 1}
                    </span>
                    <span style={{
                      backgroundColor: '#6b7280',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}>
                      {conference.year}
                    </span>
                    {conference.paper_type && (
                      <span style={{
                        backgroundColor: '#06b6d4',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textTransform: 'capitalize'
                      }}>
                        {conference.paper_type}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => openEditModal('conferences', conference)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#3b82f6',
                        padding: '4px'
                      }}
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteConference(conference.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#ef4444',
                        padding: '4px'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: '0 0 8px 0',
                  lineHeight: 1.3
                }}>
                  {conference.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: '0 0 8px 0',
                  fontStyle: 'italic'
                }}>
                  {conference.authors}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    color: '#374151',
                    fontWeight: 500
                  }}>
                    {conference.conference_name}
                  </span>
                  {conference.location && (
                    <>
                      <span style={{ fontSize: '1rem', color: '#6b7280' }}>•</span>
                      <span style={{ fontSize: '1rem', color: '#6b7280' }}>
                        {conference.location}
                      </span>
                    </>
                  )}
                  {conference.date && (
                    <>
                      <span style={{ fontSize: '1rem', color: '#6b7280' }}>•</span>
                      <span style={{ fontSize: '1rem', color: '#6b7280' }}>
                        {new Date(conference.date).toLocaleDateString()}
                      </span>
                    </>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  {conference.doi && (
                    <a 
                      href={`https://doi.org/${conference.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: '#f97316',
                        textDecoration: 'none',
                        fontWeight: 500
                      }}
                    >
                      DOI: {conference.doi}
                    </a>
                  )}
                  {conference.pdf_url && (
                    <a 
                      href={conference.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: 500
                      }}
                    >
                      View PDF
                    </a>
                  )}
                </div>
              </div>
            )}
            getItemId={(conference) => conference.id}
            itemClassName=""
          />
        </div>
      )}
    </div>
  )

  const renderTeaching = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          Teaching Courses ({teachingCourses.length})
        </h2>
        <button
          onClick={() => openAddModal('teaching')}
          style={{
            backgroundColor: '#8b5cf6',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 500
          }}
        >
          <Plus size={16} />
          Add Course
        </button>
      </div>

      {teachingCourses.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '48px',
          backgroundColor: '#f9fafb',
          borderRadius: '8px',
          color: '#6b7280'
        }}>
          <GraduationCap size={48} style={{ margin: '0 auto 16px', color: '#d1d5db' }} />
          <p style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 500 }}>
            No teaching courses yet
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            Click "Add Course" to create your first course
          </p>
        </div>
      ) : (
        <DragDropList
          items={teachingCourses}
          onOrderChange={(reorderedCourses) => {
            setTeachingCourses(reorderedCourses);
            updateOrder('teaching_courses', reorderedCourses);
          }}
          renderItem={(course, index, isDragging) => (
            <div
              style={{
                backgroundColor: 'white',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                padding: '20px',
                opacity: isDragging ? 0.5 : 1
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    margin: 0,
                    marginBottom: '8px'
                  }}>
                    {course.course_code}: {course.course_name}
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '12px',
                    marginBottom: '12px'
                  }}>
                    <div>
                      <span style={{ fontWeight: 600, color: '#6b7280' }}>Duration: </span>
                      <span style={{ color: '#1f2937' }}>{course.duration}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: '#6b7280' }}>Program: </span>
                      <span style={{ color: '#1f2937' }}>{course.program_level}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: '#6b7280' }}>Year: </span>
                      <span style={{ color: '#1f2937' }}>{course.year_level}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: '#6b7280' }}>Type: </span>
                      <span style={{ color: '#1f2937' }}>{course.course_type}</span>
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, color: '#6b7280' }}>Instructor: </span>
                      <span style={{ color: '#1f2937' }}>{course.instructor}</span>
                    </div>
                  </div>
                  {course.description && (
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#6b7280',
                      margin: 0,
                      lineHeight: 1.5
                    }}>
                      {course.description}
                    </p>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                  <button
                    onClick={() => openEditModal('teaching', course)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#3b82f6',
                      padding: '4px'
                    }}
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => deleteTeachingCourse(course.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#ef4444',
                      padding: '4px'
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
          getItemId={(course) => course.id}
          itemClassName=""
        />
      )}
    </div>
  )

  const renderResearch = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          Research Management
        </h2>
        <button
          onClick={() => openAddModal('research')}
          style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            fontWeight: 500
          }}
        >
          <Plus size={16} />
          Add Research Project
        </button>
      </div>

      <DragDropList
        items={researchProjects}
        onOrderChange={(reorderedProjects) => {
          setResearchProjects(reorderedProjects);
          updateOrder('research_content', reorderedProjects);
        }}
        renderItem={(project, index, isDragging) => (
          <div
            style={{
              backgroundColor: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '20px',
              opacity: isDragging ? 0.5 : 1
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px'
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: 0,
                  marginBottom: '8px'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  margin: 0,
                  marginBottom: '12px',
                  lineHeight: 1.5
                }}>
                  {project.summary}
                </p>
                {project.image && (
                  <div style={{ marginBottom: '12px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        maxWidth: '200px',
                        maxHeight: '150px',
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
                {project.links && project.links.length > 0 && (
                  <div style={{ marginTop: '12px' }}>
                    {project.links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          color: '#3b82f6',
                          textDecoration: 'none',
                          fontWeight: 500,
                          display: 'block',
                          marginBottom: '4px'
                        }}
                      >
                        {link.name_tag}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                <button
                  onClick={() => openEditModal('research', project)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#3b82f6',
                    padding: '4px'
                  }}
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete('research', project.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#ef4444',
                    padding: '4px'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <div style={{
              fontSize: '0.875rem',
              color: '#9ca3af'
            }}>
              Created: {new Date(project.created_at).toLocaleDateString()}
            </div>
          </div>
        )}
        getItemId={(project) => project.id}
        itemClassName=""
      />
    </div>
  )

  const renderRecentUpdates = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          Recent Updates
        </h2>
        <button
          onClick={() => {
            setModalType('recent-updates')
            setEditingItem(null)
            setShowModal(true)
          }}
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Plus size={16} />
          Add Update
        </button>
      </div>
      
      <DragDropList
        items={recentUpdates}
        onOrderChange={(reorderedUpdates) => {
          setRecentUpdates(reorderedUpdates);
          updateOrder('recent_updates', reorderedUpdates);
        }}
        renderItem={(update: any, index, isDragging) => (
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              opacity: isDragging ? 0.5 : 1
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1f2937', marginBottom: '8px' }}>
                  {update.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '12px', lineHeight: 1.6 }}>
                  {update.content}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  {new Date(update.date_posted).toLocaleDateString()}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '16px' }}>
                <button
                  onClick={() => {
                    setEditingItem(update)
                    setModalType('recent-updates')
                    setShowModal(true)
                  }}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={async () => {
                    if (confirm('Are you sure you want to delete this update?')) {
                      try {
                        await apiCall(`/api/recent-updates/${update.id}`, {
                          method: 'DELETE'
                        })
                        loadRecentUpdates()
                      } catch (error) {
                        console.error('Error deleting update:', error)
                      }
                    }
                  }}
                  style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
        getItemId={(update: any) => update.id}
        itemClassName=""
      />
    </div>
  )

  const renderAtAGlancePhotos = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          At a Glance Photos
        </h2>
        <button
          onClick={() => {
            setModalType('at-a-glance')
            setEditingItem(null)
            setShowModal(true)
          }}
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Plus size={16} />
          Add Photo
        </button>
      </div>
      
      <DragDropList
        items={atAGlancePhotos}
        onOrderChange={(reorderedPhotos) => {
          setAtAGlancePhotos(reorderedPhotos);
          updateOrder('at_a_glance_photos', reorderedPhotos);
        }}
        className=""
        renderItem={(photo: any, index, isDragging) => (
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              opacity: isDragging ? 0.5 : 1
            }}
          >
            <img
              src={photo.image_url}
              alt={photo.description}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '16px' }}>
              <p style={{ color: '#6b7280', marginBottom: '12px', fontSize: '0.875rem' }}>
                {photo.description}
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => {
                    setEditingItem(photo)
                    setModalType('at-a-glance')
                    setShowModal(true)
                  }}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={async () => {
                    if (confirm('Are you sure you want to delete this photo?')) {
                      try {
                        await apiCall(`/api/at-a-glance/${photo.id}`, {
                          method: 'DELETE'
                        })
                        loadAtAGlancePhotos()
                      } catch (error) {
                        console.error('Error deleting photo:', error)
                      }
                    }
                  }}
                  style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        getItemId={(photo: any) => photo.id}
        itemClassName=""
      />
    </div>
  )

  const renderNewJoinersSubmissions = () => (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
          New Joiners Submissions
        </h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {newJoinersSubmissions.map((submission: any) => (
          <div
            key={submission.id}
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#1f2937', marginBottom: '8px' }}>
                  {submission.name}
                </h3>
                {submission.email && (
                  <p style={{ color: '#6b7280', marginBottom: '8px', fontSize: '0.875rem' }}>
                    {submission.email}
                  </p>
                )}
                <p style={{ color: '#6b7280', marginBottom: '12px', lineHeight: 1.6 }}>
                  {submission.message}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  {new Date(submission.created_at).toLocaleDateString()}
                </p>
              </div>
              <div style={{ marginLeft: '16px' }}>
                <button
                  onClick={async () => {
                    if (confirm('Are you sure you want to delete this submission?')) {
                      try {
                        await apiCall(`/api/new-joiners/submissions/${submission.id}`, {
                          method: 'DELETE'
                        })
                        loadNewJoinersSubmissions()
                      } catch (error) {
                        console.error('Error deleting submission:', error)
                      }
                    }
                  }}
                  style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderComingSoon = (title: string) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '16px',
        opacity: 0.3
      }}>
        🚧
      </div>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#6b7280',
        margin: 0,
        marginBottom: '8px'
      }}>
        {title} Management
      </h2>
      <p style={{
        fontSize: '1rem',
        color: '#9ca3af',
        margin: 0
      }}>
        Full CRUD functionality coming soon
      </p>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'messages':
        return renderMessages()
      case 'news':
        return renderNews()
      case 'publications':
        return renderPublications()
      case 'teaching':
        return renderTeaching()
      case 'gallery':
        return renderGallery()
      case 'research':
        return renderResearch()
      case 'recent-updates':
        return renderRecentUpdates()
      case 'at-a-glance':
        return renderAtAGlancePhotos()
      case 'new-joiners':
        return renderNewJoinersSubmissions()
      default:
        return renderComingSoon('Coming Soon')
    }
  }

  const getModalTitle = () => {
    const isEditing = editingItem !== null
    const action = isEditing ? 'Edit' : 'Add'
    const type = modalType === 'news' ? 'News' 
                : modalType === 'publications' ? 'Publication'
                : modalType === 'patents' ? 'Patent'
                : modalType === 'conferences' ? 'Conference'
                : modalType === 'teaching' ? 'Teaching Course'
                : modalType === 'gallery' ? 'Gallery Post'
                : modalType === 'recent-updates' ? 'Recent Update'
                : modalType === 'at-a-glance' ? 'At a Glance Photo'
                : modalType
    return `${action} ${type.charAt(0).toUpperCase() + type.slice(1)}`
  }

  const renderModalContent = () => {
    if (modalType === 'news') {
      return (
        <NewsForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'publications') {
      return (
        <PublicationForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'teaching') {
      return (
        <TeachingForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'gallery') {
      return (
        <GalleryForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'research') {
      return (
        <ResearchForm
          research={editingItem as ResearchProject}
          onSubmit={handleFormSubmit}
          onCancel={closeModal}
          loading={modalLoading}
        />
      )
    } else if (modalType === 'recent-updates') {
      return (
        <RecentUpdatesForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'at-a-glance') {
      return (
        <AtAGlanceForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'patents') {
      return (
        <PatentForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    } else if (modalType === 'conferences') {
      return (
        <ConferenceForm 
          initialData={editingItem} 
          onSubmit={handleFormSubmit} 
          isLoading={modalLoading}
        />
      )
    }
    return null
  }

  return (
    <div>
      {renderContent()}

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