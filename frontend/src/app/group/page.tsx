'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Footer from '../../components/Footer'
import ProfileCard from '../../components/ProfileCard'
import { apiCall } from '../../lib/api'

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
}

interface PIEducation {
  id: number
  year: string
  degree: string
  field: string
  institution: string
  location?: string
  order_index: number
  is_active: boolean
}

interface PIExperience {
  id: number
  start_year: string
  end_year?: string
  position: string
  organization: string
  location?: string
  description?: string
  is_current: boolean
  order_index: number
  is_active: boolean
}

interface PIAward {
  id: number
  year: string
  title: string
  description?: string
  organization?: string
  grant_amount?: string
  currency?: string
  order_index: number
  is_active: boolean
}

export default function Group() {
  const [activeTab, setActiveTab] = useState('pi')
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([])
  const [piEducation, setPIEducation] = useState<PIEducation[]>([])
  const [piExperience, setPIExperience] = useState<PIExperience[]>([])
  const [piAwards, setPIAwards] = useState<PIAward[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      
      // Fetch group members
      const groupResponse = await apiCall('/api/group')
      
      const [educationResponse, experienceResponse, awardsResponse] = await Promise.all([
        apiCall('/api/pi/education'),
        apiCall('/api/pi/experience'),
        apiCall('/api/pi/awards')
      ])

      if (educationResponse.ok) {
        const educationData = await educationResponse.json()
        setPIEducation(educationData)
      }

      if (experienceResponse.ok) {
        const experienceData = await experienceResponse.json()
        setPIExperience(experienceData)
      }

      if (awardsResponse.ok) {
        const awardsData = await awardsResponse.json()
        setPIAwards(awardsData)
      }

    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const teamMembers = groupMembers.filter(member => member.section === 'Team')
  const alumniMembers = groupMembers.filter(member => member.section === 'Alumni')

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '16px' }}>Loading...</div>
        </div>
      </div>
    )
  }

  // Add responsive styles
  const responsiveStyles = `
    .pi-grid {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 48px;
      align-items: flex-start;
    }
    
    .additional-info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      margin-top: 32px;
    }
    
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
    
    .pi-section {
      background: white;
      border-radius: 16px;
      padding: 48px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5e7eb;
    }
    
    .pi-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin: 0 0 8px 0;
    }
    
    .pi-position {
      font-size: 1.25rem;
      color: #f97316;
      font-weight: 600;
      margin-bottom: 24px;
    }
    
    .pi-description {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      .pi-grid {
        grid-template-columns: 1fr;
        gap: 24px;
        text-align: center;
      }
      
      .additional-info-grid {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-top: 24px;
      }
      
      .pi-section {
        padding: 24px;
      }
      
      .pi-title {
        font-size: 1.8rem;
      }
      
      .pi-position {
        font-size: 1.1rem;
      }
      
      .pi-description {
        font-size: 0.9rem;
      }
      
      .team-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }
    
    @media (max-width: 480px) {
      .pi-section {
        padding: 16px;
        margin: 0 8px;
      }
      
      .pi-title {
        font-size: 1.5rem;
      }
      
      .pi-position {
        font-size: 1rem;
      }
      
      .pi-description {
        font-size: 0.85rem;
      }
    }
  `

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      
      <main>
        {/* Container */}
        <div style={{ maxWidth: '100%', margin: '0 auto', paddingLeft: '5%', paddingRight: '5%', paddingTop: '32px', paddingBottom: '32px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '16px'
          }}>
            Our Group
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Meet our dedicated team of researchers and students working on cutting-edge semiconductor research.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '48px',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('pi')}
            style={{
              padding: '12px 24px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'pi' ? '#f97316' : 'white',
              color: activeTab === 'pi' ? 'white' : '#6b7280',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Principal Investigator
          </button>
          <button
            onClick={() => setActiveTab('team')}
            style={{
              padding: '12px 24px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'team' ? '#f97316' : 'white',
              color: activeTab === 'team' ? 'white' : '#6b7280',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Team
          </button>
          <button
            onClick={() => setActiveTab('alumni')}
            style={{
              padding: '12px 24px',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              backgroundColor: activeTab === 'alumni' ? '#f97316' : 'white',
              color: activeTab === 'alumni' ? 'white' : '#6b7280',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Alumni
          </button>
        </div>

        {/* Principal Investigator Section */}
        {activeTab === 'pi' && (
          <div className="pi-section">
            <div className="pi-grid">
              {/* PI Photo - Replaced with ProfileCard */}
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <ProfileCard
                  avatarUrl="/contact.jpg"
                  handle="drsurendra"
                  status="Available"
                  contactText="Contact Me"
                  showUserInfo={true}
                  showNameTitle={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    window.location.href = '/contact';
                  }}
                />
              </div>

              {/* PI Information */}
              <div style={{ marginTop: 0 }}>
                <h2 className="pi-title">
                  Dr. Surendra B. Anantharaman
                </h2>
                <p className="pi-position">
                  Assistant Professor
                </p>
                <p className="pi-description">
                  Department of Metallurgical and Materials Engineering<br />
                  Indian Institute of Technology Madras<br />
                  Chennai 600036, Tamil Nadu, India
                </p>

                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '16px'
                  }}>
                    Contact Information
                  </h3>
                  <div style={{
                    color: '#6b7280',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}>
                    <p style={{ marginBottom: '8px' }}>📧 sba[at]iitm.ac.in</p>
                    <p style={{ marginBottom: '8px' }}>📞 +44-2257-4794</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="additional-info-grid">
                {/* Left Side - Education & Experience */}
                <div>
                  {/* Education */}
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '16px'
                    }}>
                      Education
                    </h3>
                    <ul style={{
                      color: '#6b7280',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      paddingLeft: '20px',
                      margin: 0
                    }}>
                      {piEducation.length > 0 ? (
                        piEducation.map((edu) => (
                          <li key={edu.id} style={{ marginBottom: '8px' }}>
                            {edu.degree} in {edu.field}, {edu.institution}{edu.location ? `, ${edu.location}` : ''} ({edu.year})
                          </li>
                        ))
                      ) : (
                        <li style={{ marginBottom: '8px' }}>No education information available</li>
                      )}
                    </ul>
                  </div>

                  {/* Experience */}
                  <div style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '16px'
                    }}>
                      Experience
                    </h3>
                    <ul style={{
                      color: '#6b7280',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      paddingLeft: '20px',
                      margin: 0
                    }}>
                      {piExperience.length > 0 ? (
                        piExperience.map((exp) => (
                          <li key={exp.id} style={{ marginBottom: '8px' }}>
                            {exp.position}, {exp.organization}{exp.location ? `, ${exp.location}` : ''} 
                            ({exp.start_year}{exp.end_year ? `-${exp.end_year}` : exp.is_current ? '-Present' : ''})
                            {exp.description && (
                              <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '4px' }}>
                                {exp.description}
                              </div>
                            )}
                          </li>
                        ))
                      ) : (
                        <li style={{ marginBottom: '8px' }}>No experience information available</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Awards & Honours */}
                <div>
                  <div style={{
                    background: '#fff7ed',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #fed7aa',
                    height: 'fit-content'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '16px'
                    }}>
                      Awards & Honours
                    </h3>
                    <ul style={{
                      color: '#6b7280',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      paddingLeft: '20px',
                      margin: 0
                    }}>
                      {piAwards.length > 0 ? (
                        piAwards.map((award) => (
                          <li key={award.id} style={{ marginBottom: '8px' }}>
                            🏆 {award.title} ({award.year})
                            {award.organization && (
                              <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '2px' }}>
                                {award.organization}
                              </div>
                            )}
                            {award.description && (
                              <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '2px' }}>
                                {award.description}
                              </div>
                            )}
                            {award.grant_amount && (
                              <div style={{ fontSize: '0.9rem', color: '#16a34a', marginTop: '2px' }}>
                                Grant: {award.currency || ''}{award.grant_amount}
                              </div>
                            )}
                          </li>
                        ))
                      ) : (
                        <li style={{ marginBottom: '8px' }}>🏆 No awards information available</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Section */}
          {activeTab === 'team' && (
            <div>
              {teamMembers.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr 1fr' : (window.innerWidth >= 768 ? '1fr 1fr' : '1fr'),
                  gap: '32px'
                }}>
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      style={{
                        background: 'white',
                        borderRadius: '16px',
                        padding: '32px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '1px solid #e5e7eb',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: member.image_url ? 'transparent' : 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
                        margin: '0 auto 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid #f97316',
                        overflow: 'hidden'
                      }}>
                        {member.image_url ? (
                          <img 
                            src={member.image_url} 
                            alt={member.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        ) : (
                          <span style={{ fontSize: '2.5rem' }}>👩‍🔬</span>
                        )}
                      </div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '8px'
                      }}>
                        {member.name}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        color: '#f97316',
                        fontWeight: 500,
                        marginBottom: '16px'
                      }}>
                        {member.position}
                      </p>
                      {member.bio && (
                        <p style={{
                          fontSize: '0.875rem',
                          color: '#6b7280',
                          lineHeight: 1.5
                        }}>
                          {member.bio}
                        </p>
                      )}
                      <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        justifyContent: 'center',
                        marginTop: '16px' 
                      }}>
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`} 
                            style={{ 
                              color: '#f97316', 
                              textDecoration: 'none',
                              fontSize: '0.875rem'
                            }}
                          >
                            📧 Email
                          </a>
                        )}
                        {member.linkedin_url && (
                          <a 
                            href={member.linkedin_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#f97316', 
                              textDecoration: 'none',
                              fontSize: '0.875rem'
                            }}
                          >
                            🔗 LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '80px 20px',
                  color: '#6b7280' 
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👥</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>No Team Members Yet</h3>
                  <p>Team member information will be displayed here once added.</p>
                </div>
              )}
            </div>
          )}

          {/* Alumni Section */}
          {activeTab === 'alumni' && (
            <div>
              {alumniMembers.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr 1fr' : (window.innerWidth >= 768 ? '1fr 1fr' : '1fr'),
                  gap: '32px'
                }}>
                  {alumniMembers.map((member) => (
                    <div
                      key={member.id}
                      style={{
                        background: 'white',
                        borderRadius: '16px',
                        padding: '32px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: '1px solid #e5e7eb',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: member.image_url ? 'transparent' : 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
                        margin: '0 auto 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '3px solid #f97316',
                        overflow: 'hidden'
                      }}>
                        {member.image_url ? (
                          <img 
                            src={member.image_url} 
                            alt={member.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        ) : (
                          <span style={{ fontSize: '2.5rem' }}>🎓</span>
                        )}
                      </div>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        color: '#1f2937',
                        marginBottom: '8px'
                      }}>
                        {member.name}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        color: '#f97316',
                        fontWeight: 500,
                        marginBottom: '16px'
                      }}>
                        {member.position}
                      </p>
                      {member.bio && (
                        <p style={{
                          fontSize: '0.875rem',
                          color: '#6b7280',
                          lineHeight: 1.5
                        }}>
                          {member.bio}
                        </p>
                      )}
                      <div style={{ 
                        display: 'flex', 
                        gap: '8px', 
                        justifyContent: 'center',
                        marginTop: '16px' 
                      }}>
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`} 
                            style={{ 
                              color: '#f97316', 
                              textDecoration: 'none',
                              fontSize: '0.875rem'
                            }}
                          >
                            📧 Email
                          </a>
                        )}
                        {member.linkedin_url && (
                          <a 
                            href={member.linkedin_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                              color: '#f97316', 
                              textDecoration: 'none',
                              fontSize: '0.875rem'
                            }}
                          >
                            🔗 LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '80px 20px',
                  color: '#6b7280' 
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎓</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>No Alumni Yet</h3>
                  <p>Alumni information will be displayed here once added.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}