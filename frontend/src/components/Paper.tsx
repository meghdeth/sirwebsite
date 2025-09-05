interface PaperProps {
  serialNumber: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  volume?: string;
  pages?: string;
}

export default function Paper({
  serialNumber,
  title,
  authors,
  journal,
  year,
  doi,
  volume,
  pages
}: PaperProps) {
  const responsiveStyles = `
    .paper-container {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5e7eb;
      margin-bottom: 24px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .paper-container:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    .paper-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    
    .paper-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f97316;
      min-width: 40px;
      margin-top: 2px;
    }
    
    .paper-content {
      flex: 1;
    }
    
    .paper-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 12px;
      line-height: 1.3;
      margin: 0;
      margin-bottom: 12px;
    }
    
    .paper-authors {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 8px;
      font-style: italic;
    }
    
    .journal-info {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    
    .journal-name {
      font-size: 1rem;
      color: #374151;
      font-weight: 500;
    }
    
    .journal-details {
      font-size: 1rem;
      color: #6b7280;
    }
    
    .doi-section {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .doi-label {
      font-size: 0.875rem;
      color: #9ca3af;
      font-weight: 500;
    }
    
    .doi-link {
      font-size: 0.875rem;
      color: #f97316;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
    }
    
    .doi-link:hover {
      color: #ea580c;
      text-decoration: underline;
    }
    
    @media (max-width: 767px) {
      .paper-container {
        padding: 20px;
      }
      
      .paper-header {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
      
      .paper-number {
        font-size: 1.25rem;
        margin-top: 0;
      }
      
      .paper-content {
        width: 100%;
      }
      
      .paper-title {
        font-size: 1.125rem;
        line-height: 1.4;
      }
      
      .paper-authors {
        font-size: 0.9rem;
      }
      
      .journal-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      
      .journal-name {
        font-size: 0.9rem;
      }
      
      .journal-details {
        font-size: 0.85rem;
      }
      
      .doi-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      
      .doi-label {
        font-size: 0.8rem;
      }
      
      .doi-link {
        font-size: 0.8rem;
        word-break: break-all;
      }
    }
    
    @media (max-width: 480px) {
      .paper-container {
        padding: 16px;
      }
      
      .paper-title {
        font-size: 1rem;
      }
      
      .paper-authors {
        font-size: 0.85rem;
      }
      
      .journal-name {
        font-size: 0.85rem;
      }
      
      .journal-details {
        font-size: 0.8rem;
      }
    }
  `

  return (
    <>
      <style>{responsiveStyles}</style>
      <div className="paper-container">
        <div className="paper-header">
          <span className="paper-number">
            {serialNumber}.
          </span>
          <div className="paper-content">
            <h3 className="paper-title">
              {title}
            </h3>

            <p className="paper-authors">
              {authors}
            </p>

            <div className="journal-info">
              <span className="journal-name">
                {journal}
              </span>
              {volume && (
                <span className="journal-details">
                  Vol. {volume}
                </span>
              )}
              {pages && (
                <span className="journal-details">
                  pp. {pages}
                </span>
              )}
              <span className="journal-details">
                ({year})
              </span>
            </div>

            <div className="doi-section">
              <span className="doi-label">
                DOI:
              </span>
              <a 
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="doi-link"
              >
                {doi}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}