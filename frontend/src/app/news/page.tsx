'use client'

import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import NewsItem from '../../components/NewsItem'
import { apiCall } from '../../lib/api'

interface NewsItem {
  id: number
  year: string
  title: string
  content: string
  link?: string
  created_at: string
  updated_at: string
}

interface NewsData {
  year: string
  items: { text: string; link?: string }[]
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await apiCall('/api/news')
      if (!response.ok) {
        throw new Error('Failed to fetch news')
      }
      const newsItems: NewsItem[] = await response.json()
      
      // Group news items by year
      const groupedNews = newsItems.reduce((acc: { [key: string]: NewsData }, item) => {
        if (!acc[item.year]) {
          acc[item.year] = { year: item.year, items: [] }
        }
        acc[item.year].items.push({ text: item.content, link: item.link })
        return acc
      }, {})
      
      // Convert to array and sort by year (descending)
      const sortedNews = Object.values(groupedNews).sort((a, b) => 
        parseInt(b.year) - parseInt(a.year)
      )
      
      setNewsData(sortedNews)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load news')
    } finally {
      setLoading(false)
    }
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
          <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Loading news...</p>
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
            <h2 style={{ margin: '0 0 8px 0' }}>Error Loading News</h2>
            <p style={{ margin: 0 }}>{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      {/* Main Content */}
      <div style={{ 
        padding: '3%',
        marginTop: '80px'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1f2937',
            margin: 0
          }}>
            Recent News
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            marginTop: '16px',
            marginLeft: '5%',
            marginRight: '5%'
          }}>
            Latest updates and achievements from the Low-Dimensional Semiconductors Lab
          </p>
        </div>

        {/* News Content */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {newsData.length === 0 ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '48px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }}>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#6b7280', 
                margin: 0 
              }}>
                No news items found. Check back later for updates!
              </p>
            </div>
          ) : (
            newsData.map((yearData, yearIndex) => (
              <div key={yearData.year} style={{ marginBottom: '48px' }}>
                {/* Year Header */}
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#f97316',
                  marginBottom: '24px',
                  paddingBottom: '8px',
                  borderBottom: '3px solid #f97316'
                }}>
                  {yearData.year}
                </h2>

                {/* News Items */}
                <div style={{ marginLeft: '20px' }}>
                  {yearData.items.map((item, itemIndex) => (
                    <NewsItem
                      key={itemIndex}
                      text={item.text}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}