interface ResearchSectionProps {
  title: string;
  description: string[];
  readMoreLinks: Array<{ href: string; text: string }>;
  imageUrl?: string;
  reverse?: boolean;
}

export default function ResearchSection({
  title,
  description,
  readMoreLinks,
  imageUrl,
  reverse = false
}: ResearchSectionProps) {
  return (
    <>
      <style jsx>{`
        .research-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 48px;
          align-items: start;
          margin-bottom: 48px;
          flex-direction: ${reverse ? 'row-reverse' : 'row'};
        }
        
        .research-image-container {
          display: flex;
          justify-content: center;
          order: ${reverse ? 2 : 1};
        }
        
        .research-image-wrapper {
          width: 100%;
          height: 400px;
          border-radius: 16px;
          background: ${imageUrl ? 'transparent' : 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'};
          display: flex;
          align-items: center;
          justify-content: center;
          border: ${imageUrl ? 'none' : '2px solid #f97316'};
          box-shadow: ${imageUrl ? 'none' : '0 8px 30px rgba(0, 0, 0, 0.1)'};
          overflow: hidden;
        }
        
        .research-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0;
        }
        
        .research-content {
          order: ${reverse ? 1 : 2};
        }
        
        .research-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
          line-height: 1.2;
          margin-top: 0;
        }
        
        .research-description {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .read-more-container {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #e2e8f0;
          margin: 0;
        }
        
        .read-more-title {
          font-size: clamp(1rem, 3vw, 1.25rem);
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }
        
        .read-more-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .read-more-link {
          color: #f97316;
          text-decoration: none;
          font-size: clamp(0.75rem, 2vw, 0.875rem);
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 1023px) {
          .research-section {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 40px;
          }
          
          .research-image-container {
            order: 1;
          }
          
          .research-content {
            order: 2;
          }
          
          .research-image-wrapper {
            height: 300px;
          }
        }
        
        @media (max-width: 767px) {
          .research-section {
            gap: 24px;
            margin-bottom: 32px;
          }
          
          .research-image-wrapper {
            height: 250px;
            border-radius: 12px;
          }
          
          .read-more-container {
            padding: 16px;
            border-radius: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .research-section {
            gap: 20px;
            margin-bottom: 24px;
          }
          
          .research-image-wrapper {
            height: 200px;
          }
          
          .read-more-container {
            padding: 12px;
          }
          
          .read-more-links {
            gap: 6px;
          }
        }
      `}</style>
      
      <div className="research-section">
        {/* Image */}
        <div className="research-image-container">
          <div className="research-image-wrapper">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="research-image"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.background = 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)';
                    parent.style.border = '2px solid #f97316';
                    parent.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
                    parent.innerHTML = `
                      <div style="text-align: center; color: #f97316;">
                        <div style="font-size: 4rem; margin-bottom: 16px;">🔬</div>
                        <p style="font-size: 1.125rem; font-weight: 600;">Research Image</p>
                        <p style="font-size: 0.875rem; opacity: 0.8;">Image not available</p>
                      </div>
                    `;
                  }
                }}
              />
            ) : (
              <div style={{
                textAlign: 'center',
                color: '#f97316'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔬</div>
                <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>Research Image</p>
                <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>No image available</p>
              </div>
            )}
          </div>
        </div>

        {/* Text Content */}
        <div className="research-content">
          {/* Title */}
          <h2 className="research-title">
            {title}
          </h2>

          {/* Description */}
          {description.map((paragraph, index) => (
            <p key={index} className="research-description">
              {paragraph}
            </p>
          ))}

          {/* Read More Section */}
          <div className="read-more-container">
            <h3 className="read-more-title">
              Read More
            </h3>

            <div className="read-more-links">
              {readMoreLinks.map((link, index) => (
                <a key={index} href={link.href} className="read-more-link"
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#ea580c';
                  (e.target as HTMLElement).style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#f97316';
                  (e.target as HTMLElement).style.textDecoration = 'none';
                }}>
                  → {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}