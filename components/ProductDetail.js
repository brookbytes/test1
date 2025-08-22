import ImageSlider from './ImageSlider'
import { openWhatsAppQuote } from '../utils/whatsapp'

export default function ProductDetail({ 
  product, 
  images, 
  showQuoteButton = true 
}) {
  const {
    title,
    description,
    specifications,
    features,
    applications
  } = product

  return (
    <main className="product-detail-page">
      <style jsx>{`
        .product-detail {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        .product-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .product-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .product-images {
          background: white;
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .product-info {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .specifications {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .spec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .spec-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .features-list, .applications-list {
          list-style: none;
          padding: 0;
        }
        
        .features-list li, .applications-list li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .features-list li:before, .applications-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #00FFD1;
          font-weight: bold;
        }
        
        .cta-section {
          text-align: center;
          margin: 2rem 0;
        }
        
        .quote-btn-large {
          background: linear-gradient(135deg, #00FFD1, #00CCB8);
          color: white;
          border: none;
          padding: 15px 40px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
        }
        
        .quote-btn-large:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 20px rgba(0, 255, 209, 0.3);
        }
        
        @media (max-width: 768px) {
          .product-content {
            grid-template-columns: 1fr;
          }
          
          .product-detail {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="product-detail">
        <div className="product-header">
          <h1>{title}</h1>
          <p>Professional dental equipment for precise procedures</p>
        </div>

        <div className="product-content">
          <div className="product-images">
            <ImageSlider images={images} />
          </div>
          
          <div className="product-info">
            <h2>Product Description</h2>
            <p>{description}</p>
            
            {features && features.length > 0 && (
              <>
                <h3>Key Features</h3>
                <ul className="features-list">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            
            {applications && applications.length > 0 && (
              <>
                <h3>Applications</h3>
                <ul className="applications-list">
                  {applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {specifications && Object.keys(specifications).length > 0 && (
          <div className="specifications">
            <h2>Technical Specifications</h2>
            <div className="spec-grid">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          </div>
        )}

        {showQuoteButton && (
          <div className="cta-section">
            <button 
              className="quote-btn-large"
              onClick={() => openWhatsAppQuote(title, description)}
            >
              Get Quote for {title}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
