export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1f2937',
      color: 'white',
      paddingTop: '32px',
      paddingBottom: '32px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: '3%',
        paddingRight: '3%'
      }}>
        <p style={{
          fontSize: '1rem',
          marginBottom: '8px',
          color: '#d1d5db'
        }}>
          Copyright © Surendra Anantharaman
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: '#9ca3af'
        }}>
          Last Updated: August 2025
        </p>
      </div>
    </footer>
  )
}