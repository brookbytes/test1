import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerRVG() {
  const product = {
    title: "Woodpecker RVG Sensor",
    description: "Advanced digital radiography sensor designed for modern dental practices. The Woodpecker RVG delivers crystal-clear imaging with exceptional detail for accurate diagnosis and treatment planning. Features high-resolution CMOS technology with ergonomic design for patient comfort.",
    features: [
      "High-resolution CMOS sensor technology for superior image quality",
      "Multiple sensor sizes available (Size 1.0, 1.5, 2.0) for different applications",
      "19.5 μm pixel size for exceptional detail and clarity",
      "Ergonomic design with rounded edges for maximum patient comfort",
      "USB 2.0/3.0 connectivity for fast data transfer",
      "3-meter cable length for flexible positioning",
      "Compatible with Windows 7/8/10 operating systems",
      "Instant image preview and enhancement capabilities",
      "Durable construction with long-lasting performance",
      "Complete package with positioning holders and accessories"
    ],
    specifications: {
      "Technology": "CMOS Active Pixel Sensor",
      "Pixel Size": "19.5 μm",
      "Active Area": "Multiple sizes (1.0/1.5/2.0)",
      "Resolution": "High-definition imaging",
      "Cable Length": "3 meters",
      "Interface": "USB 2.0/3.0",
      "Power Supply": "USB powered",
      "Compatibility": "Windows 7/8/10",
      "Software": "Woodpecker imaging software",
      "Warranty": "2 years manufacturer warranty"
    },
    images: [
      "/images/RVGsensors/woodepeckeri.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker RVG Sensor - Digital Radiography | Qualified Dental</title>
        <meta name="description" content="Buy Woodpecker RVG sensor for dental clinics in Tamil Nadu and Karnataka. High-resolution CMOS technology with 2-year warranty. Get quote for best prices with installation service." />
        <meta name="keywords" content="Woodpecker RVG price Tamil Nadu, dental RVG sensor Chennai, digital radiography Karnataka, CMOS sensor Bangalore, dental imaging equipment, RVG sensor for clinic" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker RVG Sensor - Digital Radiography" />
        <meta property="og:description" content="Advanced Woodpecker RVG sensor for dental clinics with high-resolution CMOS technology and 2-year warranty. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/RVGsensors/woodepeckeri.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/woodpeckerrvg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker RVG Sensor - Digital Radiography" />
        <meta name="twitter:description" content="High-resolution Woodpecker RVG sensor for dental clinics with CMOS technology and 2-year warranty. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/RVGsensors/woodepeckeri.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/woodpeckerrvg" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker RVG Sensor",
            "description": "Advanced digital radiography sensor with high-resolution CMOS technology for dental clinics",
            "brand": {
              "@type": "Brand",
              "name": "Woodpecker"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Woodpecker"
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
            ],
            "technicalSpecifications": {
              "@type": "PropertyValue",
              "name": "Technical Specifications",
              "value": "CMOS sensor, 19.5μm pixel size, USB connectivity"
            }
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
            <h1>Woodpecker RVG Sensor</h1>
            <p>Advanced Digital Radiography Solution</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker RVG Sensor CMOS technology")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 years warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
