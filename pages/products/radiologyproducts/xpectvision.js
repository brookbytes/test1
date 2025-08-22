import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function XpectVision() {
  const product = {
    title: "Xpect Vision RVG Sensor",
    description: "Premium digital RVG sensor designed for high-resolution dental imaging. The Xpect Vision sensor delivers exceptional image quality with advanced CMOS technology, providing crystal-clear diagnostic images for accurate treatment planning. Perfect for modern dental practices seeking reliable and efficient digital radiography solutions.",
    features: [
      "High-resolution CMOS sensor technology for superior image quality",
      "USB connectivity for instant image transfer and compatibility",
      "Compact sensor design for patient comfort and easy positioning",
      "Real-time image preview with minimal radiation exposure",
      "Durable construction with reinforced cable for long-term reliability",
      "Compatible with all major dental imaging software",
      "Multiple size options available (Size 1 & Size 2)",
      "High sensitivity sensor captures detailed anatomical structures",
      "Quick image processing within seconds",
      "CE certified and FDA approved for dental use"
    ],
    specifications: {
      "Sensor Technology": "CMOS Active Pixel Sensor",
      "Resolution": "20+ LP/mm theoretical",
      "Pixel Size": "19.5 μm",
      "Sensor Sizes": "Size 1: 25.4×37.5mm, Size 2: 30.8×42.7mm",
      "Dynamic Range": "12-bit (4096 gray levels)",
      "Connection": "USB 2.0 High Speed",
      "Power Supply": "USB Bus Powered (5V)",
      "Cable Length": "3 meters reinforced",
      "Compatibility": "Windows 7/8/10, Mac OS",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/RVGsensors/xpectvision (1).jpg",
      "/images/RVGsensors/xpectvision (2).jpg",
      "/images/RVGsensors/xpectvision (3).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Xpect Vision RVG Sensor - High-Resolution Dental Imaging | Qualified Dental</title>
        <meta name="description" content="Buy Xpect Vision RVG sensor in Tamil Nadu and Karnataka. High-resolution CMOS technology, USB connectivity, and superior image quality. Get best prices with installation and training across Chennai, Bangalore, and all cities in TN & KA." />
        <meta name="keywords" content="Xpect Vision RVG sensor price Tamil Nadu, dental RVG sensor Chennai, digital sensor Karnataka, CMOS sensor Bangalore, dental imaging equipment, RVG sensor cost, dental digital radiography" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Xpect Vision RVG Sensor - High-Resolution Dental Imaging" />
        <meta property="og:description" content="Premium Xpect Vision RVG sensor with CMOS technology for superior dental imaging. Available in Tamil Nadu and Karnataka with installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/RVGsensors/xpectvision (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/xpectvision" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xpect Vision RVG Sensor - High-Resolution Dental Imaging" />
        <meta name="twitter:description" content="High-resolution CMOS RVG sensor for dental clinics in TN & KA with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/RVGsensors/xpectvision (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/xpectvision" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Xpect Vision RVG Sensor",
            "description": "High-resolution CMOS RVG sensor for superior dental imaging with USB connectivity",
            "brand": {
              "@type": "Brand",
              "name": "Xpect Vision"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Xpect Vision Technologies"
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
              "value": "CMOS sensor, 20+ LP/mm resolution, USB connectivity"
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
            <h1>Xpect Vision RVG Sensor</h1>
            <p>High-Resolution Digital Dental Imaging</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Xpect Vision RVG Sensor with CMOS technology")}
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
