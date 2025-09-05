'use client'

import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Paper from '../../components/Paper'
import { apiCall } from '../../lib/api'

interface Publication {
  id: number
  title: string
  authors: string
  journal: string
  year: string
  volume?: string
  pages?: string
  doi: string
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

export default function Publications() {
  const [activeTab, setActiveTab] = useState('publications')
  const [publications, setPublications] = useState<Publication[]>([])
  const [patents, setPatents] = useState<Patent[]>([])
  const [conferences, setConferences] = useState<Conference[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Add responsive styles
  const responsiveStyles = `
    .publications-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .publications-header {
      text-align: center;
      margin-bottom: 48px;
    }
    
    .publications-title {
      font-size: 3rem;
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 16px;
    }
    
    .publications-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      margin-left: 5%;
      margin-right: 5%;
    }
    
    .tab-navigation {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      border-bottom: 1px solid #e5e7eb;
      gap: 8px;
    }
    
    .tab-button {
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      border-radius: 8px 8px 0 0;
      transition: all 0.3s ease;
      white-space: nowrap;
    }
    
    .patent-card, .conference-card {
      background-color: white;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .card-number {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      min-width: 40px;
      text-align: center;
      color: white;
    }
    
    .card-content {
      flex: 1;
    }
    
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 8px 0;
      line-height: 1.4;
    }
    
    .card-authors {
      font-size: 1rem;
      color: #6b7280;
      margin: 0 0 12px 0;
      font-style: italic;
    }
    
    .tag-container {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 12px;
    }
    
    .tag {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .date-info {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
      font-size: 0.9rem;
      color: #6b7280;
    }
    
    .conference-info {
      margin-bottom: 12px;
    }
    
    .conference-name {
      font-size: 1rem;
      color: #374151;
      font-weight: 600;
      margin: 0 0 4px 0;
    }
    
    .conference-location {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
    }
    
    .links-container {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    
    .link {
      color: #f59e0b;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    @media (max-width: 1023px) {
      .publications-container {
        padding: 0 16px;
      }
      
      .publications-title {
        font-size: 2.5rem;
      }
      
      .publications-subtitle {
        font-size: 1.125rem;
        margin-left: 3%;
        margin-right: 3%;
      }
      
      .tab-navigation {
        gap: 4px;
      }
      
      .tab-button {
        padding: 10px 16px;
        font-size: 0.9rem;
      }
      
      .patent-card, .conference-card {
        padding: 20px;
      }
      
      .card-header {
        gap: 12px;
      }
      
      .card-title {
        font-size: 1.125rem;
      }
    }
    
    @media (max-width: 767px) {
      .publications-container {
        padding: 0 12px;
      }
      
      .publications-title {
        font-size: 2rem;
        line-height: 1.2;
      }
      
      .publications-subtitle {
        font-size: 1rem;
        margin-left: 2%;
        margin-right: 2%;
      }
      
      .tab-navigation {
        flex-direction: column;
        gap: 8px;
        align-items: stretch;
      }
      
      .tab-button {
        padding: 12px 16px;
        font-size: 0.9rem;
        border-radius: 8px;
        text-align: center;
      }
      
      .patent-card, .conference-card {
        padding: 16px;
      }
      
      .card-header {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
      
      .card-number {
        align-self: flex-start;
      }
      
      .card-content {
        width: 100%;
      }
      
      .card-title {
        font-size: 1rem;
        line-height: 1.3;
      }
      
      .card-authors {
        font-size: 0.9rem;
      }
      
      .tag-container {
        gap: 8px;
      }
      
      .tag {
        font-size: 0.75rem;
        padding: 3px 6px;
      }
      
      .date-info {
        flex-direction: column;
        gap: 4px;
        font-size: 0.8rem;
      }
      
      .conference-name {
        font-size: 0.9rem;
      }
      
      .conference-location {
        font-size: 0.8rem;
      }
      
      .links-container {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
      
      .link {
        font-size: 0.8rem;
      }
    }
    
    @media (max-width: 480px) {
      .publications-container {
        padding: 0 8px;
      }
      
      .publications-title {
        font-size: 1.75rem;
      }
      
      .publications-subtitle {
        font-size: 0.9rem;
      }
      
      .tab-button {
        padding: 10px 12px;
        font-size: 0.8rem;
      }
      
      .patent-card, .conference-card {
        padding: 12px;
      }
      
      .card-title {
        font-size: 0.95rem;
      }
      
      .card-authors {
        font-size: 0.85rem;
      }
    }
  `

  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    try {
      const [publicationsResponse, patentsResponse, conferencesResponse] = await Promise.all([
        apiCall('/api/publications'),
        apiCall('/api/patents'),
        apiCall('/api/conferences')
      ])

      if (!publicationsResponse.ok) throw new Error('Failed to fetch publications')
      if (!patentsResponse.ok) throw new Error('Failed to fetch patents')
      if (!conferencesResponse.ok) throw new Error('Failed to fetch conferences')

      const [publicationsData, patentsData, conferencesData] = await Promise.all([
        publicationsResponse.json(),
        patentsResponse.json(),
        conferencesResponse.json()
      ])

      setPublications(publicationsData)
      setPatents(patentsData)
      setConferences(conferencesData)
      setLoading(false)
    } catch (err) {
      setError('Failed to load data')
      setLoading(false)
      console.error('Error fetching data:', err)
    }
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#6b7280'
      }}>
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        color: '#ef4444'
      }}>
        {error}
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <style>{responsiveStyles}</style>
      <main style={{
        paddingTop: '80px',
        paddingBottom: '40px'
      }}>
        <div className="publications-container">
          {/* Header */}
          <div className="publications-header">
            <h1 className="publications-title">
              Publications & Patents
            </h1>
            <p className="publications-subtitle">
              Research publications, patents, and conference presentations from the Low-Dimensional Semiconductors Lab
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              onClick={() => setActiveTab('publications')}
              className="tab-button"
              style={{
                backgroundColor: activeTab === 'publications' ? '#ec4899' : 'transparent',
                color: activeTab === 'publications' ? 'white' : '#6b7280',
                borderBottom: activeTab === 'publications' ? '3px solid #ec4899' : '3px solid transparent'
              }}
            >
              Publications ({publications.length})
            </button>
            <button
              onClick={() => setActiveTab('patents')}
              className="tab-button"
              style={{
                backgroundColor: activeTab === 'patents' ? '#8b5cf6' : 'transparent',
                color: activeTab === 'patents' ? 'white' : '#6b7280',
                borderBottom: activeTab === 'patents' ? '3px solid #8b5cf6' : '3px solid transparent'
              }}
            >
              Patents ({patents.length})
            </button>
            <button
              onClick={() => setActiveTab('conferences')}
              className="tab-button"
              style={{
                backgroundColor: activeTab === 'conferences' ? '#f59e0b' : 'transparent',
                color: activeTab === 'conferences' ? 'white' : '#6b7280',
                borderBottom: activeTab === 'conferences' ? '3px solid #f59e0b' : '3px solid transparent'
              }}
            >
              Conferences ({conferences.length})
            </button>
          </div>

          {/* Tab Content */}
          <div style={{
            maxWidth: '100%',
            margin: '0 auto'
          }}>
            {activeTab === 'publications' && (
              <div>
                {publications.map((paper, index) => (
                  <Paper
                    key={paper.id}
                    serialNumber={index + 1}
                    title={paper.title}
                    authors={paper.authors}
                    journal={paper.journal}
                    year={paper.year}
                    doi={paper.doi}
                    volume={paper.volume}
                    pages={paper.pages}
                  />
                ))}
                {publications.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    color: '#6b7280'
                  }}>
                    No publications available yet.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'patents' && (
              <div>
                {patents.map((patent, index) => (
                  <div key={patent.id} className="patent-card">
                    <div className="card-header">
                      <span className="card-number" style={{ backgroundColor: '#8b5cf6' }}>
                        {index + 1}
                      </span>
                      <div className="card-content">
                        <h3 className="card-title">
                          {patent.title}
                        </h3>
                        <p className="card-authors">
                          Inventors: {patent.inventors}
                        </p>
                        
                        <div className="tag-container">
                          {patent.patent_number && (
                            <span className="tag" style={{
                              backgroundColor: '#ddd6fe',
                              color: '#7c3aed'
                            }}>
                              Patent: {patent.patent_number}
                            </span>
                          )}
                          {patent.application_number && (
                            <span className="tag" style={{
                              backgroundColor: '#e0e7ff',
                              color: '#5b21b6'
                            }}>
                              App: {patent.application_number}
                            </span>
                          )}
                          <span className="tag" style={{
                            backgroundColor: patent.status === 'Granted' ? '#dcfce7' : patent.status === 'Pending' ? '#fef3c7' : '#fecaca',
                            color: patent.status === 'Granted' ? '#15803d' : patent.status === 'Pending' ? '#92400e' : '#dc2626'
                          }}>
                            {patent.status}
                          </span>
                        </div>

                        <div className="date-info">
                          {patent.filing_date && (
                            <span>Filed: {new Date(patent.filing_date).toLocaleDateString()}</span>
                          )}
                          {patent.grant_date && (
                            <span>Granted: {new Date(patent.grant_date).toLocaleDateString()}</span>
                          )}
                        </div>

                        {patent.abstract && (
                          <p style={{
                            fontSize: '0.9rem',
                            color: '#374151',
                            lineHeight: 1.6,
                            margin: 0
                          }}>
                            {patent.abstract}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {patents.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    color: '#6b7280'
                  }}>
                    No patents available yet.
                  </div>
                )}
              </div>
            )}

            {activeTab === 'conferences' && (
              <div>
                {conferences.map((conference, index) => (
                  <div key={conference.id} className="conference-card">
                    <div className="card-header">
                      <span className="card-number" style={{ backgroundColor: '#f59e0b' }}>
                        {index + 1}
                      </span>
                      <div className="card-content">
                        <h3 className="card-title">
                          {conference.title}
                        </h3>
                        <p className="card-authors">
                          Authors: {conference.authors}
                        </p>
                        
                        <div className="tag-container">
                          <span className="tag" style={{
                            backgroundColor: '#fed7aa',
                            color: '#9a3412'
                          }}>
                            {conference.year}
                          </span>
                          {conference.paper_type && (
                            <span className="tag" style={{
                              backgroundColor: '#fef3c7',
                              color: '#92400e'
                            }}>
                              {conference.paper_type}
                            </span>
                          )}
                        </div>

                        <div className="conference-info">
                          <p className="conference-name">
                            {conference.conference_name}
                          </p>
                          {conference.location && conference.date && (
                            <p className="conference-location">
                              {conference.location} • {new Date(conference.date).toLocaleDateString()}
                            </p>
                          )}
                        </div>

                        <div className="links-container">
                          {conference.doi && (
                            <a
                              href={`https://doi.org/${conference.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              DOI: {conference.doi}
                            </a>
                          )}
                          {conference.pdf_url && (
                            <a
                              href={conference.pdf_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              View PDF
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {conferences.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '8px',
                    color: '#6b7280'
                  }}>
                    No conference presentations available yet.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}