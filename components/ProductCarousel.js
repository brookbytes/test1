import { useState, useEffect } from 'react'
import { openWhatsAppQuote } from '../utils/whatsapp'

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const products = [
    {
      title: 'Qualified 100 Dental Chair',
      specs: 'Ergonomic design, Durable, Comfortable seating',
      image: '/images/Dental Chairs/Qualified/QualifiedV100.png'
    },
    {
      title: 'Qualified 200 Dental Chair',
      specs: 'Advanced features, Spittoon system, LED lighting',
      image: '/images/Dental Chairs/Qualified/Qualified 200 (1).png'
    },
    {
      title: 'Star Dental Chair',
      specs: 'Premium quality, Modern design, Patient comfort',
      image: '/images/Dental Chairs/stardenatl.jpg'
    },
    {
      title: 'Xpectvision RVG',
      specs: 'High resolution imaging, Digital sensor, Easy to use',
      image: '/images/RVGsensors/xpectvision (1).jpg'
    },
    {
      title: 'Runyes Portable X-Ray',
      specs: 'Portable design, High frequency, Digital display',
      image: '/images/Radiology products/portable x ray/alerio neo (1).jpg'
    },
    {
      title: 'Ureka Dental Chair',
      specs: 'Compact design, Affordable, Reliable performance',
      image: '/images/Dental Chairs/Ureka/ureaka.png'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [products.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section className="product-carousel">
      <div className="container">
        <h2>Best Selling Products</h2>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="carousel-slide">
                  <div className="product-carousel-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details">
                      <h3>{product.title}</h3>
                      <p>{product.specs}</p>
                      <button 
                        className="quote-btn" 
                        onClick={() => openWhatsAppQuote(product.title, product.specs)}
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
