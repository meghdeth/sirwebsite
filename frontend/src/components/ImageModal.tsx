'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: Array<{
    title: string
    image: string
    description: string
  }>
  currentIndex: number
  onNext: () => void
  onPrevious: () => void
}

const ImageModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNext, 
  onPrevious 
}: ImageModalProps) => {
  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .modal-content {
          position: relative;
          width: 90%;
          max-width: 1200px;
          height: 80%;
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .close-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10001;
          color: white;
          transition: background-color 0.2s;
        }
        
        .close-button:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10001;
          color: white;
          transition: background-color 0.2s;
        }
        
        .nav-button:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .prev-button {
          left: 15px;
        }
        
        .next-button {
          right: 15px;
        }
        
        .modal-title {
          padding: 20px;
          background-color: #f8f9fa;
          border-bottom: 1px solid #e9ecef;
        }
        
        .title-text {
          margin: 0;
          font-size: clamp(1.25rem, 4vw, 1.8rem);
          font-weight: 700;
          color: #2d3436;
          text-align: center;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: calc(100% - 140px);
          overflow: hidden;
        }
        
        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-color: #f8f9fa;
        }
        
        .modal-description {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(4px);
          padding: 20px;
          border-top: 1px solid #e9ecef;
        }
        
        .description-text {
          margin: 0;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: #2d3436;
          text-align: center;
          line-height: 1.5;
        }
        
        .image-counter {
          position: absolute;
          bottom: 80px;
          right: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          font-weight: 500;
        }
        
        /* Mobile responsive adjustments */
        @media (max-width: 1023px) {
          .modal-overlay {
            padding: 15px;
          }
          
          .modal-content {
            width: 95%;
            height: 85%;
          }
          
          .nav-button {
            width: 45px;
            height: 45px;
          }
          
          .close-button {
            width: 35px;
            height: 35px;
            top: 12px;
            right: 12px;
          }
          
          .modal-title {
            padding: 16px;
          }
          
          .modal-description {
            padding: 16px;
          }
          
          .image-counter {
            bottom: 70px;
            right: 16px;
          }
        }
        
        @media (max-width: 767px) {
          .modal-overlay {
            padding: 10px;
          }
          
          .modal-content {
            width: 100%;
            height: 90%;
            border-radius: 8px;
          }
          
          .nav-button {
            width: 40px;
            height: 40px;
          }
          
          .prev-button {
            left: 10px;
          }
          
          .next-button {
            right: 10px;
          }
          
          .close-button {
            width: 32px;
            height: 32px;
            top: 10px;
            right: 10px;
          }
          
          .modal-title {
            padding: 12px;
          }
          
          .modal-description {
            padding: 12px;
          }
          
          .image-counter {
            bottom: 60px;
            right: 12px;
            padding: 6px 10px;
          }
        }
        
        @media (max-width: 480px) {
          .modal-overlay {
            padding: 5px;
          }
          
          .modal-content {
            height: 95%;
          }
          
          .nav-button {
            width: 36px;
            height: 36px;
          }
          
          .prev-button {
            left: 8px;
          }
          
          .next-button {
            right: 8px;
          }
          
          .close-button {
            width: 30px;
            height: 30px;
            top: 8px;
            right: 8px;
          }
          
          .modal-title {
            padding: 10px;
          }
          
          .modal-description {
            padding: 10px;
          }
          
          .image-counter {
            bottom: 50px;
            right: 10px;
            padding: 4px 8px;
          }
        }
      `}</style>
      
      <div className="modal-overlay">
        {/* Modal Content */}
        <div className="modal-content">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="close-button"
          >
            <X size={20} />
          </button>

          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              onClick={onPrevious}
              className="nav-button prev-button"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              className="nav-button next-button"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Title */}
          <div className="modal-title">
            <h2 className="title-text">
              {currentImage.title}
            </h2>
          </div>

          {/* Image */}
          <div className="image-container">
            <img 
              src={currentImage.image} 
              alt={currentImage.title}
              className="modal-image"
            />
          </div>

          {/* Description */}
          <div className="modal-description">
            <p className="description-text">
              {currentImage.description}
            </p>
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ImageModal