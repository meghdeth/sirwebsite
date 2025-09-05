'use client'

import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import ImageModal from '../../components/ImageModal'
import { apiCall } from '../../lib/api'

interface GalleryPost {
  id: number
  title: string
  description?: string
  images: string[]
  created_at: string
  updated_at: string
}

export default function Gallery() {
  const [selectedPostIndex, setSelectedPostIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [galleryPosts, setGalleryPosts] = useState<GalleryPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    try {
      const response = await apiCall('/api/gallery')
      if (!response.ok) {
        throw new Error('Failed to fetch gallery')
      }
      const galleryData: GalleryPost[] = await response.json()
      
      setGalleryPosts(galleryData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load gallery')
    } finally {
      setLoading(false)
    }
  }

  const handleImageClick = (postIndex: number, imageIndex: number) => {
    setSelectedPostIndex(postIndex)
    setSelectedImageIndex(imageIndex)
    setIsModalOpen(true)
  }

  const handleNextImage = () => {
    const currentPost = galleryPosts[selectedPostIndex]
    const nextImageIndex = selectedImageIndex + 1
    
    if (nextImageIndex < (currentPost.images?.length || 0)) {
      setSelectedImageIndex(nextImageIndex)
    } else {
      // Loop back to first image of the SAME post
      setSelectedImageIndex(0)
    }
  }

  const handlePreviousImage = () => {
    const previousImageIndex = selectedImageIndex - 1
    
    if (previousImageIndex >= 0) {
      setSelectedImageIndex(previousImageIndex)
    } else {
      // Loop back to last image of the SAME post
      const currentPost = galleryPosts[selectedPostIndex]
      setSelectedImageIndex((currentPost.images?.length || 1) - 1)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '4px solid #f97316', 
            borderTop: '4px solid transparent', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Loading gallery...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <div style={{ 
          padding: '3%',
          marginTop: '80px',
          textAlign: 'center'
        }}>
          <div style={{
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '24px',
            borderRadius: '8px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h2 style={{ margin: '0 0 8px 0' }}>Error Loading Gallery</h2>
            <p style={{ margin: 0 }}>{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .gallery-container {
          padding: 3%;
          margin-top: 80px;
        }
        
        .gallery-header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .gallery-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }
        
        .gallery-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #6b7280;
          margin-top: 16px;
        }
        
        .gallery-grid {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .gallery-posts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        
        .gallery-card {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          border: 1px solid #f1f5f9;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
        
        .card-header {
          padding: 20px 20px 16px 20px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .card-title {
          font-size: clamp(1.125rem, 3vw, 1.5rem);
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          text-align: center;
          line-height: 1.4;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        .card-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }
        
        .image-overlay {
          position: absolute;
          top: 16px;
          right: 16px;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          font-weight: 600;
          z-index: 10;
          pointer-events: none;
        }
        
        .card-footer {
          padding: 16px 20px 20px 20px;
        }
        
        .card-description {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
          color: #6b7280;
          margin: 0 0 12px 0;
          line-height: 1.6;
        }
        
        .card-meta {
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .no-posts-message {
          text-align: center;
          padding: 48px;
          background-color: #f9fafb;
          border-radius: 8px;
        }
        
        .no-posts-text {
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          color: #6b7280;
          margin: 0;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 1023px) {
          .gallery-container {
            padding: 2%;
            margin-top: 70px;
          }
          
          .gallery-header {
            margin-bottom: 32px;
          }
          
          .gallery-posts-grid {
            gap: 24px;
          }
          
          .card-image {
            height: 250px;
          }
        }
        
        @media (max-width: 767px) {
          .gallery-container {
            padding: 16px;
            margin-top: 60px;
          }
          
          .gallery-header {
            margin-bottom: 24px;
          }
          
          .gallery-posts-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .card-header {
            padding: 16px 16px 12px 16px;
          }
          
          .card-title {
            font-size: clamp(1rem, 4vw, 1.25rem);
            line-height: 1.3;
          }
          
          .card-footer {
            padding: 12px 16px 16px 16px;
          }
          
          .card-image {
            height: 220px;
          }
          
          .image-overlay {
            top: 12px;
            right: 12px;
            padding: 6px 10px;
            font-size: clamp(0.7rem, 2.5vw, 0.85rem);
            border-radius: 16px;
            background-color: rgba(0, 0, 0, 0.9);
          }
          
          .card-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-container {
            padding: 12px;
            margin-top: 50px;
          }
          
          .gallery-posts-grid {
            gap: 16px;
          }
          
          .card-title {
            font-size: clamp(0.9rem, 4.5vw, 1.1rem);
            line-height: 1.2;
          }
          
          .card-image {
            height: 200px;
          }
          
          .gallery-card {
            border-radius: 12px;
          }
          
          .image-overlay {
            top: 8px;
            right: 8px;
            padding: 4px 8px;
            font-size: clamp(0.65rem, 3vw, 0.8rem);
            border-radius: 12px;
            background-color: rgba(0, 0, 0, 0.95);
            font-weight: 700;
          }
        }
      `}</style>
      
      <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {/* Main Content */}
        <div className="gallery-container">
          {/* Header */}
          <div className="gallery-header">
            <h1 className="gallery-title">
              Gallery
            </h1>
            <p className="gallery-subtitle">
              Visual journey through our research and achievements
            </p>
          </div>

          {/* Gallery Cards */}
          <div className="gallery-grid">
            {galleryPosts.length === 0 ? (
              <div className="no-posts-message">
                <p className="no-posts-text">
                  No gallery posts found. Check back later for updates!
                </p>
              </div>
            ) : (
              <div className="gallery-posts-grid">
                {galleryPosts.map((post, postIndex) => (
                  <div 
                    key={post.id} 
                    className="gallery-card"
                    onClick={() => handleImageClick(postIndex, 0)}
                  >
                    {/* Card Header with Title */}
                    <div className="card-header">
                      <h3 className="card-title">
                        {post.title}
                      </h3>
                    </div>

                    {/* Preview Image */}
                    <div style={{ position: 'relative' }}>
                      <img
                        src={(post.images && post.images[0]) || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTUwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5ObyBpbWFnZSBhdmFpbGFibGU8L3RleHQ+PC9zdmc+'}
                        alt={post.title}
                        className="card-image"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTUwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y5ZmFmYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2YjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+'
                        }}
                      />
                      
                      {/* Image count overlay */}
                      {(post.images?.length || 0) > 1 && (
                        <div className="image-overlay">
                          +{(post.images?.length || 0) - 1} more
                        </div>
                      )}
                    </div>

                    {/* Card Footer with Description */}
                    <div className="card-footer">
                      {post.description && (
                        <p className="card-description">
                          {post.description}
                        </p>
                      )}
                      <div className="card-meta">
                        <span>{post.images?.length || 0} image{(post.images?.length || 0) !== 1 ? 's' : ''}</span>
                        <span>{new Date(post.created_at).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image Modal */}
        {galleryPosts.length > 0 && (
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            images={(() => {
              // Only show images from the currently selected post
              const currentPost = galleryPosts[selectedPostIndex]
              if (!currentPost || !currentPost.images) return []
              
              return currentPost.images.map((imageUrl, imageIndex) => ({
                title: `${currentPost.title} - Image ${imageIndex + 1}`,
                image: imageUrl,
                description: currentPost.description || currentPost.title
              }))
            })()}
            currentIndex={selectedImageIndex}
            onNext={handleNextImage}
            onPrevious={handlePreviousImage}
          />
        )}
        
        <Footer />
      </div>
    </>
  )
}