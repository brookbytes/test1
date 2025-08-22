import { useState } from 'react'

export default function ImageSlider({ images }) {
  const [currentImage, setCurrentImage] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="image-slider">
        <div className="no-image">
          <i className="fas fa-image"></i>
          <p>No images available</p>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="image-slider">
      <div className="slider-main">
        {(() => {
          const current = images[currentImage]
          const src = typeof current === 'string' ? current : current?.src
          return (
            <img 
              src={src}
              alt={`Product image ${currentImage + 1}`}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
              }}
            />
          )
        })()}
        
        {images.length > 1 && (
          <>
            <button className="slider-btn prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-btn next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="slider-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            >
              {(() => {
                const src = typeof image === 'string' ? image : image?.src
                return (
                  <img 
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80x60?text=N/A'
                    }}
                  />
                )
              })()}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
