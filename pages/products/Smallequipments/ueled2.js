import Head from 'next/head'
import Link from 'next/link'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function UdesN2Scaler() {
  const product = {
    title: "Udes N2 Ultrasonic Scaler",
    description: "Experience advanced dental cleaning with the Udes N2 Ultrasonic Scaler, designed for dental professionals who demand superior performance and reliability in periodontal procedures. This cutting-edge ultrasonic scaler combines innovative technology with ergonomic design, featuring powerful scaling capabilities, precise control, and exceptional durability. The Udes N2 represents the next generation of ultrasonic scaling technology, making it the ideal choice for modern dental practices seeking professional-grade dental cleaning equipment.",
    features: [
      "Advanced ultrasonic technology for superior scaling performance",
      "User-friendly interface with intuitive digital controls",
      "Ergonomic handpiece design for comfortable extended use",
      "Powerful scaling capabilities with consistent results",
      "Multiple power and frequency settings for various procedures",
      "Auto-tuning technology for optimal performance stability",
      "Built-in water irrigation system for effective cooling",
      "Durable construction with medical-grade materials",
      "Easy maintenance and sterilization procedures",
      "Comprehensive 2-year warranty with technical support"
    ],
    specifications: {
      "Device Type": "Ultrasonic Dental Scaler",
      "Technology": "Piezoelectric ultrasonic technology",
      "Frequency Range": "28-32 kHz adjustable",
      "Power Settings": "Multiple adjustable power levels",
      "Water Supply": "Integrated irrigation system",
      "Handpiece": "Autoclavable ergonomic design",
      "Tips Included": "Standard scaling tips (set of 4)",
      "Dimensions": "Compact professional unit",
      "Weight": "Lightweight portable design",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/Scalar/UDSN2.webp"
    ]
  }

  return (
    <>
      <Head>
        <title>Udes N2 Ultrasonic Scaler - Professional Dental Cleaning Equipment | Qualified Dental</title>
        <meta name="description" content="Discover the Udes N2 Ultrasonic Scaler - advanced ultrasonic scaling equipment with multiple power settings, auto-tuning frequency, and 2-year warranty. Perfect for efficient dental cleaning in modern dental practices." />
        <meta name="keywords" content="Udes N2 ultrasonic scaler price, dental scaler Tamil Nadu, ultrasonic cleaning equipment Chennai, periodontal equipment, dental scaler Karnataka, dental equipment Bangalore" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Udes N2 Ultrasonic Scaler - Professional Dental Cleaning Equipment" />
        <meta property="og:description" content="Advanced ultrasonic scaler with multiple power settings, auto-tuning frequency, and 2-year warranty. Perfect for efficient dental cleaning in modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Scalar/UDSN2.webp" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/ueled2" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Udes N2 Ultrasonic Scaler" />
        <meta name="twitter:description" content="Professional ultrasonic scaler with multiple power settings and auto-tuning. 2-year warranty included. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Scalar/UDSN2.webp" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/ueled2" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Udes N2 Ultrasonic Scaler",
            "description": "Advanced ultrasonic scaling equipment with multiple power settings, auto-tuning frequency, and 2-year warranty for efficient dental cleaning procedures",
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
            <h1>Udes N2 Ultrasonic Scaler</h1>
            <p>Professional ultrasonic scaling equipment for efficient dental cleaning</p>
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
