'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { apiCall } from '../lib/api'

interface AtAGlancePhoto {
  id: number
  image_url: string
  description: string
  order_index: number
}

export default function AtAGlanceCarousel() {
  const [photos, setPhotos] = useState<AtAGlancePhoto[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await apiCall('/api/at-a-glance')
        if (response.ok) {
          const data = await response.json()
          setPhotos(data)
        }
      } catch (error) {
        console.error('Error fetching at a glance photos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  useEffect(() => {
    if (photos.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [photos.length])

  if (loading) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', color: '#f97316' }}>
          <div style={{
            border: '3px solid #fed7aa',
            borderTop: '3px solid #f97316',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p>Loading photos...</p>
        </div>
      </div>
    )
  }

  if (photos.length === 0) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid #e5e7eb',
        height: '500px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center', color: '#1f2937', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🔬</div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            At a Glance
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            marginTop: '8px', 
            color: '#6b7280'
          }}>
            Laboratory Overview
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      border: '1px solid #e5e7eb',
      height: '500px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <Image
            src={photo.image_url}
            alt={photo.description}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
            padding: '40px 24px 24px',
            color: 'white'
          }}>
            <p style={{
              fontSize: '1.125rem',
              fontWeight: 500,
              margin: 0,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              {photo.description}
            </p>
          </div>
        </div>
      ))}
      
      <div style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}>
        {photos.map((_, index) => (
          <div
            key={index}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'backgroundColor 0.3s ease'
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}