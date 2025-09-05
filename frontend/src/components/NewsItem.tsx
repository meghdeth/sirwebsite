'use client'

interface NewsItemProps {
  text: string
  link?: string
}

const NewsItem = ({ text, link }: NewsItemProps) => {
  return (
    <div 
      style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderLeft: '4px solid #f97316',
        borderRadius: '0 8px 8px 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLElement
        target.style.backgroundColor = '#fff7ed'
        target.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLElement
        target.style.backgroundColor = '#f8f9fa'
        target.style.transform = 'translateX(0)'
      }}
    >
      <p style={{
        margin: 0,
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '#374151'
      }}>
        {link ? (
          <>
            {text.split('please click here')[0]}
            <a 
              href={link}
              style={{
                color: '#f97316',
                textDecoration: 'underline',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#ea580c'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#f97316'
              }}
            >
              please click here
            </a>
          </>
        ) : (
          text
        )}
      </p>
    </div>
  )
}

export default NewsItem