'use client'

import { useState, useEffect } from 'react'

interface GalleryCardProps {
  title: string
  images: string[]
  description: string
  onClick: () => void
}

const GalleryCard = ({ title, images, description, onClick }: GalleryCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [images.length])

  const currentImage = images[currentImageIndex] || images[0]
  return (
    <div 
      style={{
        padding: '4px',
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s ease',
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
      }}
    >
      {/* Title */}
      <div style={{
        padding: '12px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e9ecef'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#2d3436',
          textAlign: 'center'
        }}>
          {title}
        </h3>
      </div>

      {/* Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        overflow: 'hidden'
      }}>
        <img 
          src={currentImage} 
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* Image indicator dots */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            display: 'flex',
            gap: '4px'
          }}>
            {images.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === currentImageIndex ? '#f97316' : 'rgba(255, 255, 255, 0.6)',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
        )}
        
        {/* Description Overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(2px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px'
        }}>
          <p style={{
            margin: 0,
            fontSize: '0.9rem',
            color: '#2d3436',
            textAlign: 'center',
            fontWeight: 500
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard