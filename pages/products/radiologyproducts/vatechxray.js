import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function VatechXray() {
  const product = {
    title: "Vatech Portable X-Ray",
    description: "Advanced portable dental X-ray system from Vatech, featuring cutting-edge technology for precise dental imaging. This lightweight, handheld device delivers exceptional image quality with minimal radiation exposure, making it ideal for modern dental practices. Perfect for both intraoral and extraoral imaging with wireless connectivity and digital workflow integration.",
    features: [
      "Ultra-lightweight handheld design at just 2.5kg for maximum portability",
      "High-frequency DC generator (60-70kHz) for consistent X-ray output",
      "Advanced 0.4mm focal spot for superior image resolution",
      "Adjustable kV range: 60-70kV with automatic exposure compensation",
      "Digital timer with 0.01-2.0 second exposure range",
      "Built-in safety features including emergency stop and collision sensor",
      "Wireless operation with rechargeable battery lasting 200+ exposures",
      "Compatible with all digital sensors and phosphor plate systems",
      "Low radiation dose with ALARA principle implementation",
      "CE certified and FDA approved for dental radiography"
    ],
    specifications: {
      "Generator Type": "High-frequency DC (60-70kHz)",
      "Tube Voltage": "60-70kV adjustable",
      "Tube Current": "2-8mA",
      "Focal Spot": "0.4mm (IEC 336)",
      "Total Filtration": "2.5mm Al equivalent",
      "Exposure Time": "0.01-2.0 seconds",
      "Battery Life": "200+ exposures per charge",
      "Weight": "2.5kg (handheld unit)",
      "Dimensions": "135mm x 155mm x 370mm",
      "Charging Time": "3-4 hours full charge",
      "Warranty": "2 years standard warranty"
    },
    images: [
      "/images/Radiology products/portable x ray/vatechxray (1).jpg",
      "/images/Radiology products/portable x ray/vatechxray (2).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Vatech Portable X-Ray - Advanced Dental Imaging | Qualified Dental</title>
        <meta name="description" content="Buy Vatech portable X-ray system in Tamil Nadu and Karnataka. Lightweight handheld dental X-ray with digital imaging, wireless operation, and low radiation dose. Get best prices with installation service." />
        <meta name="keywords" content="Vatech portable X-ray price Tamil Nadu, handheld dental X-ray Chennai, portable radiography Karnataka, dental X-ray machine Bangalore, Vatech EzRay, wireless dental X-ray, portable dental imaging" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vatech Portable X-Ray - Advanced Dental Imaging" />
        <meta property="og:description" content="Vatech portable X-ray system with wireless operation, lightweight design, and digital imaging capabilities. Available in Tamil Nadu and Karnataka with professional installation." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/vatechxray (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/vatechxray" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vatech Portable X-Ray - Advanced Dental Imaging" />
        <meta name="twitter:description" content="Lightweight Vatech portable X-ray for dental clinics with wireless operation and digital imaging. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/vatechxray (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/vatechxray" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Vatech Portable X-Ray",
            "description": "Advanced portable dental X-ray system with wireless operation and digital imaging capabilities",
            "brand": {
              "@type": "Brand",
              "name": "Vatech"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Vatech"
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
              "value": "60-70kV tube voltage, 0.4mm focal spot, 2.5kg weight, wireless operation"
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
            <h1>Vatech Portable X-Ray</h1>
            <p>Advanced Dental Imaging Technology</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Vatech Portable X-Ray wireless handheld")}
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
