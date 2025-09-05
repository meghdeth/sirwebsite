'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import NewJoinersForm from '../components/NewJoinersForm'
import AtAGlanceCarousel from '../components/AtAGlanceCarousel'
import { apiCall } from '../lib/api'

interface HomeContent {
  id: number
  title: string
  subtitle: string
  description: string
  hero_image: string
}

interface RecentUpdate {
  id: number
  title: string
  content: string
  date_posted: string
}

export default function Home() {
  const [content, setContent] = useState<HomeContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [showNewJoinersForm, setShowNewJoinersForm] = useState(false)
  const [recentUpdates, setRecentUpdates] = useState<RecentUpdate[]>([])
  const [newJoinersContent, setNewJoinersContent] = useState('')

  // Add responsive styles
  const responsiveStyles = `
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 8px;
      padding-bottom: 8px;
      margin-top: -80px;
    }
    
    .hero-text {
      order: 1;
    }
    
    .hero-image {
      order: 2;
    }
    
    .hero-buttons {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
    
    .hero-image-container {
      position: relative;
      height: 600px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .updates-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      padding-left: 3%;
      padding-right: 3%;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
    }
    
    /* Banner responsive styles */
    .banner-section {
      height: 120px;
      width: 100%;
      overflow: hidden;
    }
    
    .banner-title {
      font-size: 2.25rem;
    }
    
    .banner-subtitle {
      font-size: 1.125rem;
    }
    
    /* Button responsive styles */
    .hero-button {
      padding: 16px 32px;
      font-size: 1rem;
      border-radius: 12px;
      font-weight: 600;
      box-sizing: border-box;
    }
    
    /* Container constraints */
    .mobile-container {
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
      box-sizing: border-box;
    }
    
    /* PI Image responsive styles */
    .pi-image {
      width: 400px;
      height: 400px;
    }
    
    @media (max-width: 1023px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 32px;
        margin-top: -40px;
        width: 100%;
        max-width: 100%;
      }
      
      .hero-text {
        order: 2;
        text-align: center;
        width: 100%;
        max-width: 100%;
      }
      
      .hero-image {
        order: 1;
        width: 100%;
        max-width: 100%;
      }
      
      .hero-image-container {
        height: 384px;
        width: 100%;
        max-width: 100%;
      }
      
      .updates-grid {
        grid-template-columns: 1fr;
        gap: 32px;
        width: 100%;
        max-width: 100%;
      }
      
      .banner-section {
        height: 100px;
      }
      
      .banner-title {
        font-size: 1.875rem;
      }
      
      .banner-subtitle {
        font-size: 1rem;
      }
      
      .hero-button {
        padding: 14px 28px;
        font-size: 0.95rem;
        max-width: 100%;
      }
      
      .pi-image {
        width: 300px;
        height: 300px;
      }
    }
    
    @media (max-width: 767px) {
      .hero-subtitle {
        font-size: 1.25rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 100%;
      }
      
      .hero-grid {
        gap: 24px;
        padding-left: 4%;
        padding-right: 4%;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .updates-grid {
        padding-left: 4%;
        padding-right: 4%;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .banner-section {
        height: 80px;
        padding: 0 4%;
        box-sizing: border-box;
      }
      
      .banner-title {
        font-size: 1.5rem;
        line-height: 1.2;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      
      .banner-subtitle {
        font-size: 0.875rem;
      }
      
      .hero-button {
        padding: 12px 24px;
        font-size: 0.9rem;
        width: 100%;
        max-width: 100%;
        text-align: center;
        box-sizing: border-box;
      }
      
      .hero-text {
        width: 100%;
        max-width: 100%;
        padding: 0;
        box-sizing: border-box;
      }
      
      .hero-text h1 {
        font-size: clamp(1.8rem, 4vw, 2.5rem) !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .hero-text p {
        font-size: 1rem !important;
        line-height: 1.6 !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .pi-image {
        width: 220px;
        height: 220px;
      }
    }
    
    @media (max-width: 480px) {
      .hero-grid {
        padding-left: 3%;
        padding-right: 3%;
        width: 100%;
        max-width: 100%;
        margin: 0;
        box-sizing: border-box;
      }
      
      .hero-image-container {
        height: 280px;
        width: 100%;
        max-width: 100%;
      }
      
      .banner-section {
        height: 70px;
        padding: 0 3%;
        box-sizing: border-box;
      }
      
      .banner-title {
        font-size: 1.25rem;
        line-height: 1.1;
        padding: 0;
        margin: 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .banner-subtitle {
        font-size: 0.75rem;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .hero-button {
        padding: 10px 16px;
        font-size: 0.85rem;
        border-radius: 8px;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .hero-text {
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      
      .hero-text h1 {
        font-size: clamp(1.5rem, 3.5vw, 2rem) !important;
        margin-bottom: 16px !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
        line-height: 1.2 !important;
      }
      
      .hero-text h2 {
        font-size: 1.1rem !important;
        margin-bottom: 16px !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .hero-text p {
        font-size: 0.9rem !important;
        line-height: 1.5 !important;
        margin-bottom: 24px !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .updates-grid {
        padding-left: 3%;
        padding-right: 3%;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .updates-grid > div {
        padding: 20px !important;
        height: auto !important;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      }
      
      .updates-grid h2 {
        font-size: 1.5rem !important;
        margin-bottom: 16px !important;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      
      .pi-image {
        width: 180px;
        height: 180px;
      }
      
      /* At a Glance Carousel mobile styles */
      .updates-grid > div:last-child {
        height: 600px !important;
      }
    }
    
    /* At a Glance Carousel responsive styles */
    @media (max-width: 1023px) {
      .updates-grid > div:last-child {
        height: 550px !important;
      }
    }
    
    @media (max-width: 767px) {
      .updates-grid > div:last-child {
        height: 600px !important;
      }
    }
    
    @media (max-width: 480px) {
      .updates-grid > div:last-child {
        height: 650px !important;
      }
    }
  `

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homeResponse, updatesResponse, joinersResponse] = await Promise.all([
          apiCall('/api/home'),
          apiCall('/api/recent-updates'),
          apiCall('/api/new-joiners/content')
        ])
        
        if (homeResponse.ok) {
          const homeData = await homeResponse.json()
          setContent(homeData)
        }
        
        if (updatesResponse.ok) {
          const updatesData = await updatesResponse.json()
          setRecentUpdates(updatesData)
        }
        
        if (joinersResponse.ok) {
          const joinersData = await joinersResponse.json()
          setNewJoinersContent(joinersData.content)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #f97316',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }}></div>
          <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mobile-container" style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />

      {/* Banner Section */}
      <section className="banner-section" style={{
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/6d7179_8b1f589d03f7472c873cc796d935d39f~mv2.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Overlay for better text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1
          }}></div>
          
          <div style={{
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            zIndex: 2,
            padding: '0 16px'
          }}>
            <h1 className="banner-title" style={{ 
              fontWeight: 700, 
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              Low-Dimensional Semiconductors Lab
            </h1>
            <p className="banner-subtitle" style={{
              fontStyle: 'italic',
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              opacity: 0.9,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
            }}>
              where light meets material
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fed7aa 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div className="hero-grid">
            <div className="hero-text">
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#1f2937',
                lineHeight: 1.2,
                marginBottom: '24px'
              }}>
                {content?.title || 'Welcome to LDS Lab'}
              </h1>
              <h2 className="hero-subtitle" style={{
                marginBottom: '24px',
                color: '#f97316'
              }}>
                {content?.subtitle || 'Leading Innovation in Research'}
              </h2>
              <p style={{
                marginBottom: '32px',
                color: '#6b7280',
                fontSize: '1.125rem',
                lineHeight: 1.8
              }}>
                {content?.description || 
                  'Our laboratory focuses on cutting-edge research and development, fostering innovation and academic excellence. We are committed to advancing knowledge through collaborative research and meaningful contributions to the scientific community.'}
              </p>
              <div className="hero-buttons">
                <a 
                  href="/contact" 
                  className="hero-button"
                  style={{
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.background = 'linear-gradient(135deg, #ea580c, #c2410c)'
                    target.style.transform = 'translateY(-2px)'
                    target.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.background = 'linear-gradient(135deg, #f97316, #ea580c)'
                    target.style.transform = 'translateY(0)'
                    target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}
                >
                  Contact Us
                </a>
                <a 
                  href="/publications"
                  className="hero-button"
                  style={{
                    background: 'transparent',
                    color: '#f97316',
                    border: '2px solid #f97316',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.background = '#f97316'
                    target.style.color = 'white'
                    target.style.transform = 'translateY(-2px)'
                    target.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.background = 'transparent'
                    target.style.color = '#f97316'
                    target.style.transform = 'translateY(0)'
                    target.style.boxShadow = 'none'
                  }}
                >
                  View Publications
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-container">
                {content?.hero_image ? (
                  <Image
                    src={content.hero_image}
                    alt="Lab Hero Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <Image
                      src="/prof.png"
                      alt="Principal Investigator"
                      width={400}
                      height={400}
                      className="pi-image"
                      style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #f97316',
                        boxShadow: '0 8px 32px rgba(249, 115, 22, 0.2)'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates & At a Glance Section */}
      <section style={{ backgroundColor: '#f9fafb', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div className="updates-grid">
            {/* Recent Updates */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e5e7eb',
              height: '500px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '24px'
              }}>
                Recent Updates
              </h2>
              <div style={{ 
                color: '#6b7280', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                overflowY: 'auto',
                flex: 1,
                paddingRight: '8px'
              }}>
                {recentUpdates.length > 0 ? (
                  recentUpdates.map((update, index) => (
                    <div 
                      key={update.id} 
                      style={{ 
                        marginBottom: '16px', 
                        paddingBottom: index < recentUpdates.length - 1 ? '16px' : '0',
                        borderBottom: index < recentUpdates.length - 1 ? '1px solid #e5e7eb' : 'none'
                      }}
                    >
                      <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: '8px' }}>
                        {update.title}
                      </p>
                      <p style={{ marginBottom: '8px' }}>{update.content}</p>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                        {new Date(update.date_posted).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <div>
                    <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
                      <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: '8px' }}>New Research Publication</p>
                      <p>Our latest paper on advanced data analysis techniques has been published in Nature Journal.</p>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>2 days ago</p>
                    </div>
                    <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #e5e7eb' }}>
                      <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: '8px' }}>Conference Presentation</p>
                      <p>Dr. Smith presented our findings at the International Science Conference 2024.</p>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>1 week ago</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: '8px' }}>Lab Equipment Upgrade</p>
                      <p>New state-of-the-art microscopy equipment installed for enhanced research capabilities.</p>
                      <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>2 weeks ago</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* At a Glance - Photo Carousel */}
            <AtAGlanceCarousel />
          </div>

        </div>
      </section>

      {/* Funding Section */}
      <section style={{ backgroundColor: 'white', paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', paddingLeft: '3%', paddingRight: '3%' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Our research is funded by:
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/Screen Shot 2025-07-02 at 8_12_06 PM.avif"
                alt="Funding Organization 1"
                width={200}
                height={120}
                style={{ objectFit: 'contain', filter: 'grayscale(0%)', transition: 'all 0.3s ease' }}
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/download_edited_edited.avif"
                alt="Funding Organization 2"
                width={200}
                height={120}
                style={{ objectFit: 'contain', filter: 'grayscale(0%)', transition: 'all 0.3s ease' }}
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/ANI-20240928115659_edited.avif"
                alt="Funding Organization 3"
                width={200}
                height={120}
                style={{ objectFit: 'contain', filter: 'grayscale(0%)', transition: 'all 0.3s ease' }}
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/Untitled.png"
                alt="ISRO - Indian Space Research Organisation"
                width={200}
                height={120}
                style={{ objectFit: 'contain', filter: 'grayscale(0%)', transition: 'all 0.3s ease' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* New Joiners Form Modal */}
      {showNewJoinersForm && (
        <NewJoinersForm onClose={() => setShowNewJoinersForm(false)} />
      )}
    </div>
  )
}
