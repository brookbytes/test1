import Head from 'next/head'
import Link from 'next/link'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function UdesJScaler() {
  const product = {
    title: "Udes J Ultrasonic Scaler",
    description: "Experience professional dental cleaning with the Udes J Ultrasonic Scaler, designed for efficient plaque and calculus removal. This advanced ultrasonic scaler combines powerful performance with gentle operation, featuring multiple operating modes, ergonomic design, and reliable performance. The Udes J is perfect for dental practices seeking high-quality scaling equipment with excellent patient comfort.",
    features: [
      "Advanced ultrasonic technology for efficient cleaning",
      "Multiple operating modes for different procedures",
      "Ergonomic design for comfortable handling",
      "Gentle yet effective plaque and calculus removal",
      "Easy-to-use interface with intuitive controls",
      "Durable construction with high-quality materials",
      "Low noise operation for patient comfort",
      "Automatic tuning for optimal performance",
      "Compatible with various scaler tips",
      "Easy maintenance and cleaning procedures"
    ],
    specifications: {
      "Device Type": "Ultrasonic Dental Scaler",
      "Technology": "Advanced ultrasonic vibration",
      "Operating Modes": "Multiple cleaning modes",
      "Power Output": "Adjustable power settings",
      "Frequency": "Optimal ultrasonic frequency",
      "Tips Compatibility": "Standard scaler tips",
      "Noise Level": "Low noise operation",
      "Dimensions": "Compact and ergonomic",
      "Weight": "Lightweight design",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/Scalar/UDSJ.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Udes J Ultrasonic Scaler - Professional Dental Cleaning Equipment | Qualified Dental</title>
        <meta name="description" content="Discover the Udes J Ultrasonic Scaler - advanced dental cleaning equipment with multiple modes, gentle operation, and 2-year warranty. Perfect for efficient plaque and calculus removal." />
        <meta name="keywords" content="Udes J scaler price, ultrasonic dental scaler Tamil Nadu, dental cleaning equipment Chennai, plaque removal device, ultrasonic scaler Karnataka, dental equipment Bangalore" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Udes J Ultrasonic Scaler - Professional Dental Cleaning Equipment" />
        <meta property="og:description" content="Advanced ultrasonic scaler with multiple modes, gentle operation, and 2-year warranty. Perfect for efficient plaque and calculus removal in dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Scalar/UDSJ.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/udesj" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Udes J Ultrasonic Scaler" />
        <meta name="twitter:description" content="Professional ultrasonic scaler with multiple modes and gentle operation. 2-year warranty included. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Scalar/UDSJ.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/udesj" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Udes J Ultrasonic Scaler",
            "description": "Advanced ultrasonic dental scaler with multiple operating modes, gentle operation, and 2-year warranty for efficient plaque and calculus removal",
            "brand": {
              "@type": "Brand",
              "name": "Udes"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Udes Medical"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Qualified Dental"
              }
            },
            "areaServed": [
              {
                "@type": "State",
                "name": "Tamil Nadu"
              },
              {
                "@type": "State",
                "name": "Karnataka"
              }
            ]
          })
        }} />
      </Head>

      <main className="product-detail-page">
        <style jsx>{`
          .product-detail-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-top: 2rem;
          }

          .product-image-section {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
          }

          .product-info-section {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
          }

          .product-info-section h2 {
            color: #333333;
            margin-bottom: 1.5rem;
            font-size: 2rem;
          }

          .product-description,
          .product-features,
          .product-specifications {
            margin-bottom: 2rem;
          }

          .product-description h3,
          .product-features h3,
          .product-specifications h3 {
            color: #333333;
            margin-bottom: 1rem;
            font-size: 1.25rem;
          }

          .product-description p {
            color: #666666;
            line-height: 1.6;
          }

          .product-features ul {
            list-style: none;
            padding: 0;
          }

          .product-features li {
            color: #666666;
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
          }

          .product-features li::before {
            content: "✓";
            color: #00FFD1;
            font-weight: bold;
            position: absolute;
            left: 0;
          }

          .specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid #f0f0f0;
          }

          .spec-label {
            font-weight: 600;
            color: #333333;
          }

          .spec-value {
            color: #666666;
          }

          .product-cta {
            text-align: center;
            margin-top: 2.5rem;
          }

          .quote-btn-large {
            background: linear-gradient(135deg, #00FFD1, #00CCB8);
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
            margin-bottom: 1rem;
          }

          .quote-btn-large:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 0 20px rgba(0, 255, 209, 0.3);
          }

          .service-info {
            color: #666666;
            font-size: 14px;
            line-height: 1.6;
          }

          .back-link {
            color: #00FFD1;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .back-link:hover {
            color: #00CCB8;
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .product-detail-container {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .product-info-section {
              padding: 1.5rem;
            }

            .specs-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        <div className="container">
          <div className="page-header">
            <h1>Udes J Ultrasonic Scaler</h1>
            <p>Professional dental cleaning equipment for efficient plaque and calculus removal</p>
          </div>

          <div className="product-detail-container">
            <div className="product-image-section">
              <ImageSlider images={product.images} />
            </div>

            <div className="product-info-section">
              <h2>{product.title}</h2>
              
              <div className="product-description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-specifications">
                <h3>Technical Specifications</h3>
                <div className="specs-grid">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="spec-item">
                      <span className="spec-label">{key}:</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-cta">
                <button 
                  className="quote-btn-large"
                  onClick={() => openWhatsAppQuote(product.title, product.title)}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
                <div style={{ marginTop: '1rem' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
