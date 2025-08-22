 import Link from 'next/link';
import { openWhatsAppQuote } from '../utils/whatsapp';

export default function SmallEquipmentGrid() {
  const products = [
    {
      id: "woodpecker-ultrasonic-scaler",
      name: "Woodpecker UDS-E LED Ultrasonic Scaler",
      price: "₹45,000",
      image: "/images/Scalar/UDSELED.jpg",
      description: "Advanced ultrasonic scaler with LED illumination for precise dental cleaning",
      features: ["LED illumination", "Auto-frequency tracking", "5 tips included"],
      link: "/products/Smallequipments/woodpeckerultrasonicscaler"
    },
    {
      id: "woodpecker-light-cure",
      name: "Woodpecker LED-B Light Cure Unit",
      price: "₹12,500",
      image: "/images/woodpecker lightcure/woodpecker light cure.png",
      description: "High-performance LED curing unit with 360° rotating head",
      features: ["360° rotating head", "Cordless operation", "3 working modes"],
      link: "/products/Smallequipments/woodpeckerlightcureunit"
    },
    {
      id: "woodpecker-endo-activator",
      name: "Woodpecker Endo Activator Plus",
      price: "₹18,000",
      image: "/images/EndoActivator/endoactivator.jpg",
      description: "Advanced endodontic activator for effective root canal cleaning",
      features: ["3 speed settings", "LED illumination", "Disposable tips"],
      link: "/products/Smallequipments/woodpeckerendoactivator"
    },
    {
      id: "woodpecker-apex-locator",
      name: "Woodpecker Woodpex III Apex Locator",
      price: "₹28,000",
      image: "/images/Apex locator/woodepexiii (1).jpg",
      description: "Advanced apex locator with multi-frequency technology",
      features: ["Color LCD display", "Real-time visualization", "Auto-calibration"],
      link: "/products/Smallequipments/woodpeckerapexlocator"
    }
  ];

  return (
    <section className="small-equipment-grid" id="small-equipment">
      <div className="container">
        <h2>Small Equipment & Accessories</h2>
        <p className="section-subtitle">Premium dental equipment for enhanced precision and efficiency</p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <Link href={product.link} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                
                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="product-actions">
                  <button 
                    className="quote-btn"
                    onClick={() => openWhatsAppQuote(product.name, "Small Equipment")}
                  >
                    Get Quote
                  </button>
                  <Link href={product.link} className="details-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .small-equipment-grid {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 2.5rem;
        }

        .section-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 3rem;
          font-size: 1.2rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-overlay {
          opacity: 1;
        }

        .view-details {
          background: #00FFD1;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
        }

        .product-info {
          padding: 1.5rem;
        }

        h3 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .product-price {
          color: #00FFD1;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-description {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .product-features {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }

        .product-features li {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
          padding-left: 1rem;
          position: relative;
        }

        .product-features li::before {
          content: "✓";
          color: #00FFD1;
          position: absolute;
          left: 0;
        }

        .product-actions {
          display: flex;
          gap: 1rem;
        }

        .quote-btn, .details-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quote-btn {
          background: #00FFD1;
          color: white;
        }

        .details-btn {
          background: transparent;
          color: #333;
          border: 1px solid #00FFD1;
        }

        .quote-btn:hover, .details-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 255, 209, 0.3);
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .product-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
