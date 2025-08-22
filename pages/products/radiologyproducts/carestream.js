import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Carestream() {
  const product = {
    title: "Carestream RVG Sensor",
    description: "Premium digital RVG sensor from Carestream, featuring advanced CMOS technology for exceptional image quality and reliability. This professional-grade sensor delivers crystal-clear diagnostic images with wireless connectivity options, making it ideal for modern dental practices seeking the highest standards in digital radiography.",
    features: [
      "Advanced CMOS sensor technology with superior image quality",
      "Wireless connectivity for enhanced mobility and convenience",
      "High sensitivity sensor captures detailed anatomical structures",
      "Real-time image processing with minimal radiation exposure",
      "Durable construction with reinforced cable design",
      "Compatible with all major dental imaging software platforms",
      "Multiple size options (Size 1 & Size 2) for different applications",
      "Ergonomic design for patient comfort during procedures",
      "Quick image acquisition within seconds",
      "FDA approved and CE certified for dental use"
    ],
    specifications: {
      "Sensor Technology": "Advanced CMOS Active Pixel Sensor",
      "Resolution": "25+ LP/mm theoretical resolution",
      "Pixel Size": "19.5 μm",
      "Sensor Sizes": "Size 1: 25.4×37.5mm, Size 2: 30.8×42.7mm",
      "Dynamic Range": "16-bit (65536 gray levels)",
      "Connection": "USB 2.0 High Speed / Wireless",
      "Power Supply": "USB Bus Powered (5V) / Battery (Wireless)",
      "Cable Length": "3 meters reinforced cable",
      "Compatibility": "Windows 7/8/10/11, Mac OS",
      "Warranty": "3 Years Standard Warranty"
    },
    images: [
      "/images/RVGsensors/carestreemrvg (1).jpg",
      "/images/RVGsensors/carestreemrvg (2).jpg",
      "/images/RVGsensors/carestreemrvg (3).jpg",
      "/images/RVGsensors/carestreemrvg (4).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Carestream RVG Sensor - Premium Digital Imaging | Qualified Dental</title>
        <meta name="description" content="Buy Carestream RVG sensor in Tamil Nadu and Karnataka. Premium digital sensor with wireless connectivity and advanced CMOS technology. Get best prices with installation and training across Chennai, Bangalore, and all cities in TN & KA." />
        <meta name="keywords" content="Carestream RVG sensor price Tamil Nadu, Carestream dental sensor Chennai, wireless RVG sensor Karnataka, premium dental sensor Bangalore, Carestream digital radiography, dental imaging equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Carestream RVG Sensor - Premium Digital Imaging" />
        <meta property="og:description" content="Premium Carestream RVG sensor with wireless connectivity and advanced CMOS technology for superior dental imaging. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/RVGsensors/carestreemrvg (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/carestream" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carestream RVG Sensor - Premium Digital Imaging" />
        <meta name="twitter:description" content="Premium Carestream RVG sensor with wireless connectivity for dental clinics in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/RVGsensors/carestreemrvg (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/carestream" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Carestream RVG Sensor",
            "description": "Premium digital RVG sensor with wireless connectivity and advanced CMOS technology",
            "brand": {
              "@type": "Brand",
              "name": "Carestream"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Carestream Health"
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
              "value": "Advanced CMOS sensor, 25+ LP/mm resolution, wireless connectivity"
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
            <h1>Carestream RVG Sensor</h1>
            <p>Premium Digital Dental Imaging</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Carestream RVG Sensor with wireless connectivity")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 3 years warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
