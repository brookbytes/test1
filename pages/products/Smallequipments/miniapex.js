import Head from 'next/head'
import Link from 'next/link'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function MiniapexApexLocator() {
  const product = {
    title: "Miniapex Apex Locator",
    description: "Discover precision endodontic measurement with the Miniapex Apex Locator, engineered for dental professionals who demand compact design without compromising accuracy. This ultra-portable device delivers exceptional performance in root canal procedures, featuring advanced electronic measurement technology, intuitive operation, and reliable results. The Miniapex represents the perfect balance of portability and precision, making it the ideal choice for modern dental practices seeking professional-grade endodontic equipment in a compact form factor.",
    features: [
      "Ultra-compact design perfect for space-constrained practices",
      "Advanced electronic measurement technology with high precision",
      "Intuitive user interface with simple one-touch operation",
      "Real-time digital display with clear visual indicators",
      "Multiple measurement modes for different clinical scenarios",
      "Long-lasting rechargeable battery with USB charging",
      "Lightweight construction for comfortable handheld use",
      "Reliable performance with consistent accuracy",
      "Easy calibration and maintenance procedures",
      "Comprehensive 2-year warranty with technical support"
    ],
    specifications: {
      "Device Type": "Compact Apex Locator",
      "Measurement Technology": "Advanced electronic measurement",
      "Display": "Digital LCD display with backlight",
      "Power Source": "Rechargeable lithium battery",
      "Accuracy": "±0.5mm precision measurement",
      "Operating Modes": "Multiple clinical modes",
      "Indicators": "Visual and audio alerts",
      "Dimensions": "Ultra-compact handheld design",
      "Weight": "Lightweight portable build",
      "Charging": "USB Type-C charging port",
      "Battery Life": "8+ hours continuous use",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/Apex locator/minpex.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Miniapex Apex Locator - Compact Precision Endodontic Device | Qualified Dental</title>
        <meta name="description" content="Discover the Miniapex Apex Locator - ultra-compact precision endodontic device with ±0.5mm accuracy, USB charging, and 2-year warranty. Perfect for accurate root canal measurements in space-constrained practices." />
        <meta name="keywords" content="Miniapex apex locator price, compact dental apex locator Tamil Nadu, portable endodontic equipment Chennai, mini apex locator Karnataka, small dental equipment Bangalore, portable root canal measurement" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Miniapex Apex Locator - Compact Precision Endodontic Device" />
        <meta property="og:description" content="Ultra-compact apex locator with ±0.5mm accuracy, USB charging, and 2-year warranty. Perfect for precise root canal measurements in space-constrained practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Apex locator/minpex.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/miniapex" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Miniapex Apex Locator" />
        <meta name="twitter:description" content="Compact apex locator with ±0.5mm accuracy and USB charging. 2-year warranty included. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Apex locator/minpex.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/miniapex" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Miniapex Apex Locator",
            "description": "Ultra-compact precision endodontic device with ±0.5mm accuracy, USB charging, and 2-year warranty for accurate root canal measurements in space-constrained practices",
            "brand": {
              "@type": "Brand",
              "name": "Miniapex"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Miniapex Medical"
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
            <h1>Miniapex Apex Locator</h1>
            <p>Ultra-compact precision endodontic device for space-constrained practices</p>
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
                  <Link href="/products/Smallequipments" className="back-link">
                    ← Back to Small Equipment Grid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
