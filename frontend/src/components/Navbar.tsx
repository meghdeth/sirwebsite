'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  // Add responsive styles
  const responsiveStyles = `
    @media (min-width: 1024px) {
      .desktop-nav { display: flex !important; }
      .mobile-nav { display: none !important; }
      .mobile-toggle { display: none !important; }
      .nav-spacer { display: block !important; }
    }
    @media (max-width: 1023px) {
      .desktop-nav { display: none !important; }
      .mobile-nav { display: block !important; }
      .mobile-toggle { display: flex !important; }
      .nav-spacer { display: none !important; }
    }
  `

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Group', href: '/group' },
    { name: 'Teaching', href: '/teaching' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Recent News', href: '/news' },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      <nav style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid #f3f4f6'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', paddingLeft: '20px', paddingRight: '20px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              href="/" 
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'opacity 0.2s'
              }}
            >
              <Image
                src="/Logo.png"
                alt="LDS Lab Logo"
                width={120}
                height={60}
                style={{
                  objectFit: 'contain'
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div 
            className="desktop-nav"
            style={{ 
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    color: '#374151',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#f97316'
                    target.style.backgroundColor = '#fff7ed'
                    target.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#374151'
                    target.style.backgroundColor = 'transparent'
                    target.style.transform = 'scale(1)'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer for mobile button alignment */}
          <div 
            className="nav-spacer"
            style={{ 
              display: 'none',
              width: '96px'
            }}
          ></div>

          {/* Mobile menu button */}
          <div 
            className="mobile-toggle"
            style={{ 
              display: 'none',
              alignItems: 'center'
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: '8px',
                borderRadius: '8px',
                color: '#f97316',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'colors 0.2s'
              }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="mobile-nav"
            style={{ display: 'none' }}
          >
            <div style={{
              padding: '16px',
              paddingTop: '8px',
              paddingBottom: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              borderTop: '1px solid #f3f4f6',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#374151',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    animationDelay: `${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#f97316'
                    target.style.backgroundColor = '#fff7ed'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement
                    target.style.color = '#374151'
                    target.style.backgroundColor = 'transparent'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  )
}

export default Navbar