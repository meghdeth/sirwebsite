'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
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
  User
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/adminpanel')
  }

  const menuItems = [
    { id: 'messages', label: 'Messages', icon: MessageSquare, color: '#ef4444', path: '/dashboard' },
    { id: 'news', label: 'News', icon: Newspaper, color: '#84cc16', path: '/dashboard' },
    { id: 'publications', label: 'Publications', icon: FileText, color: '#ec4899', path: '/dashboard' },
    { id: 'home', label: 'Home Content', icon: Home, color: '#3b82f6', path: '/dashboard' },
    { id: 'recent-updates', label: 'Recent Updates', icon: Newspaper, color: '#f59e0b', path: '/dashboard' },
    { id: 'at-a-glance', label: 'At a Glance', icon: Images, color: '#10b981', path: '/dashboard' },
    { id: 'new-joiners', label: 'New Joiners', icon: Users, color: '#ec4899', path: '/dashboard' },
    { id: 'group', label: 'Group', icon: Users, color: '#10b981', path: '/dashboard/group' },
    { id: 'pi', label: 'PI Details', icon: User, color: '#8b5cf6', path: '/dashboard/pi' },
    { id: 'teaching', label: 'Teaching', icon: GraduationCap, color: '#8b5cf6', path: '/dashboard' },
    { id: 'research', label: 'Research', icon: FlaskConical, color: '#f59e0b', path: '/dashboard' },
    { id: 'gallery', label: 'Gallery', icon: Images, color: '#06b6d4', path: '/dashboard' }
  ]

  const handleMenuClick = (itemId: string) => {
    const item = menuItems.find(m => m.id === itemId)
    if (item) {
      if (item.path === '/dashboard/group') {
        router.push('/dashboard/group')
      } else {
        router.push(`${item.path}?tab=${itemId}`)
      }
    }
  }

  const getActiveTab = () => {
    if (pathname === '/dashboard/group') return 'group'
    // Read tab from URL parameters for main dashboard
    const tab = searchParams.get('tab')
    return tab || 'messages' // default to messages if no tab specified
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? '280px' : '80px',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Sidebar Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h1 style={{
            fontSize: sidebarOpen ? '1.5rem' : '0',
            fontWeight: 700,
            color: '#f97316',
            margin: 0,
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}>
            LDS Admin
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              color: '#6b7280'
            }}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <div style={{ flex: 1, padding: '20px 0' }}>
          {menuItems.map(item => {
            const IconComponent = item.icon
            const isActive = getActiveTab() === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 20px',
                  margin: '4px 0',
                  backgroundColor: isActive ? '#fff7ed' : 'transparent',
                  border: isActive ? '2px solid #fed7aa' : '2px solid transparent',
                  borderRadius: '0',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#f97316' : '#6b7280',
                  transition: 'all 0.3s ease',
                  textAlign: 'left'
                }}
              >
                <IconComponent size={20} color={isActive ? item.color : '#6b7280'} />
                <span style={{
                  display: sidebarOpen ? 'block' : 'none',
                  whiteSpace: 'nowrap'
                }}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Logout Button */}
        <div style={{ padding: '20px', borderTop: '1px solid #e5e7eb' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 20px',
              backgroundColor: '#fee2e2',
              border: '2px solid #fecaca',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#dc2626',
              transition: 'all 0.3s ease'
            }}
          >
            <LogOut size={20} />
            <span style={{
              display: sidebarOpen ? 'block' : 'none',
              whiteSpace: 'nowrap'
            }}>
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '32px' }}>
        {children}
      </div>
    </div>
  );
}