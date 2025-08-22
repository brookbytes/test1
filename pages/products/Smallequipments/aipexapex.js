import Head from 'next/head'
import Link from 'next/link'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function AipexApexLocator() {
  const product = {
    title: "Aipex Apex Locator",
    description: "Experience precision endodontic measurements with the Aipex Apex Locator, designed for dental professionals who demand accuracy and reliability in root canal procedures. This advanced device combines cutting-edge technology with user-friendly operation, featuring real-time display, high precision measurements, and exceptional build quality. The Aipex represents the perfect fusion of functionality and precision, making it the ideal choice for modern dental practices seeking world-class endodontic equipment.",
    features: [
      "Advanced real-time display with high precision measurements",
      "User-friendly interface with intuitive operation",
      "Compact and ergonomic design for comfortable handling",
      "Reliable performance with consistent accuracy",
      "Multiple working modes for different clinical scenarios",
      "Clear visual and audio indicators for precise measurements",
      "Long battery life with rechargeable battery system",
      "Durable construction with premium materials",
      "Easy calibration and maintenance procedures",
      "Comprehensive warranty with technical support"
    ],
    specifications: {
      "Device Type": "Advanced Apex Locator",
      "Measurement Technology": "High precision electronic measurement",
      "Display": "Real-time digital display",
      "Power Source": "Rechargeable battery system",
      "Accuracy": "±0.5mm precision measurement",
      "Operating Modes": "Multiple clinical modes",
      "Indicators": "Visual and audio alerts",
      "Dimensions": "Compact handheld design",
      "Weight": "Lightweight ergonomic build",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/Apex locator/Aipex.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Aipex Apex Locator - Precision Endodontic Equipment | Qualified Dental</title>
        <meta name="description" content="Discover the Aipex Apex Locator - advanced precision endodontic equipment with real-time display, ±0.5mm accuracy, and 2-year warranty. Perfect for accurate root canal measurements in modern dental practices." />
        <meta name="keywords" content="Aipex apex locator price, dental apex locator Tamil Nadu, endodontic equipment Chennai, root canal measurement device, precision apex locator Karnataka, dental equipment Bangalore" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Aipex Apex Locator - Precision Endodontic Equipment" />
        <meta property="og:description" content="Advanced apex locator with real-time display, ±0.5mm accuracy, and 2-year warranty. Perfect for precise root canal measurements in modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Apex locator/Aipex.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/aipexapex" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aipex Apex Locator" />
        <meta name="twitter:description" content="Precision apex locator with real-time display and ±0.5mm accuracy. 2-year warranty included. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Apex locator/Aipex.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/aipexapex" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Aipex Apex Locator",
            "description": "Advanced precision endodontic equipment with real-time display, ±0.5mm accuracy, and 2-year warranty for accurate root canal measurements",
            "brand": {
              "@type": "Brand",
              "name": "Aipex"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Aipex Medical"
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
            <h1>Aipex Apex Locator</h1>
            <p>Precision endodontic equipment for accurate root canal measurements</p>
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
