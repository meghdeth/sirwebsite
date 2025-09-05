'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, User } from 'lucide-react'
import { apiCall } from '../../lib/api'

export default function AdminPanel() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
  
    try {
      const response = await apiCall('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: credentials.username, 
          password: credentials.password 
        }),
      })
  
      const result = await response.json()
  
      if (result.success) {
        localStorage.setItem('adminToken', result.token)
        router.push('/dashboard')
      } else {
        setError(result.error || 'Invalid credentials. Please check your email and password.')
      }
    } catch (error) {
      setError('Connection error. Please make sure the server is running.')
    }
    
    setIsLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '48px',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#f97316',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)'
          }}>
            <Lock size={32} color="white" />
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1f2937',
            margin: 0,
            marginBottom: '8px'
          }}>
            Admin Panel
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            margin: 0
          }}>
            Sign in to access the dashboard
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Username Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#374151',
              marginBottom: '6px'
            }}>
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <User 
                size={20} 
                color="#9ca3af" 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                required
                placeholder="Enter email address"
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
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
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#374151',
              marginBottom: '6px'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock 
                size={20} 
                color="#9ca3af" 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                placeholder="Enter password"
                style={{
                  width: '100%',
                  padding: '12px 44px 12px 44px',
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                {showPassword ? <EyeOff size={20} color="#9ca3af" /> : <Eye size={20} color="#9ca3af" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              marginBottom: '20px',
              border: '1px solid #fecaca'
            }}>
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              backgroundColor: isLoading ? '#d1d5db' : '#f97316',
              color: 'white',
              padding: '14px',
              fontSize: '1rem',
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
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}