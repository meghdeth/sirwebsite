'use client'

import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { apiCall } from '../../lib/api'
import ResearchSection from '../../components/ResearchSection'

interface ResearchProject {
  id: number
  title: string
  summary: string
  image?: string
  links?: Array<{ url: string; name_tag: string }>
  created_at?: string
  updated_at?: string
}

export default function Research() {
  const [researchData, setResearchData] = useState<ResearchProject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchResearchData()
  }, [])

  const fetchResearchData = async () => {
    try {
      const response = await apiCall('/api/research')
      if (!response.ok) {
        throw new Error('Failed to fetch research data')
      }
      const data = await response.json()
      setResearchData(data)
      setLoading(false)
    } catch (err) {
      setError('Failed to load research data')
      setLoading(false)
      console.error('Error fetching research data:', err)
    }
  }

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
          <p style={{ marginTop: '16px', color: '#6b7280' }}>Loading research data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontSize: '1.125rem' }}>{error}</p>
          <button 
            onClick={fetchResearchData}
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: '#f97316',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Main Content */}
      <main style={{ marginTop: '80px', paddingTop: '20px', paddingBottom: '80px' }}>
        <div style={{
          width: '90%',
          paddingLeft: '5%',
          paddingRight: '5%'
        }}>
          {/* Page Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              Research
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              marginLeft: '15%',
              marginRight: '15%'
            }}>
              Advancing the frontiers of low-dimensional semiconductors and quantum materials
            </p>
          </div>

          {/* Research Sections */}
          {researchData.length > 0 ? (
            researchData.map((research, index) => (
              <ResearchSection
                key={research.id}
                title={research.title}
                description={[research.summary]}
                readMoreLinks={research.links ? research.links.map(link => ({ href: link.url, text: link.name_tag })) : []}
                imageUrl={research.image}
                reverse={index % 2 === 1}
              />
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>No research projects available at the moment.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}