import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function HyperlightXRay() {
  const product = {
    title: "Hyperlight X-Ray System",
    description: "Advanced portable dental X-ray system featuring cutting-edge technology for precise diagnostic imaging. The Hyperlight X-Ray delivers exceptional image quality with minimal radiation exposure, designed for modern dental practices requiring mobility and reliability.",
    features: [
      "Ultra-portable design weighing only 2.2kg for easy mobility between operatories",
      "High-frequency DC generator ensures consistent X-ray output and sharp images",
      "Digital control panel with preset exposure programs for all dental procedures",
      "Adjustable kV range (60-70kV) and mA settings for optimal image quality",
      "Long-lasting lithium-ion battery provides up to 500 exposures per charge",
      "Zero warm-up time enables immediate use after power-on",
      "Low radiation dose with advanced beam collimation and filtration",
      "Compatible with both digital sensors and conventional film",
      "Ergonomic hand-held design reduces operator fatigue",
      "Built-in safety features including emergency stop and exposure indicator"
    ],
    specifications: {
      "Generator Type": "High-frequency DC (40kHz)",
      "Tube Voltage": "60-70kV (adjustable)",
      "Tube Current": "2.0-2.5mA",
      "Exposure Time": "0.01-2.0 seconds",
      "Battery Type": "Lithium-ion 14.8V 6400mAh",
      "Battery Life": "500+ exposures per charge",
      "Charging Time": "3-4 hours full charge",
      "Focal Spot": "0.4mm (IEC 60336)",
      "Total Filtration": "2.5mm Al equivalent",
      "Weight": "2.2 kg (including battery)",
      "Dimensions": "140mm x 180mm x 400mm",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/Radiology products/portable x ray/hyperlight x ray (1).jpg",
      "/images/Radiology products/portable x ray/hyperlight x ray (2).jpg",
      "/images/Radiology products/portable x ray/hyperlight x ray (3).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Hyperlight X-Ray System - Portable Dental X-Ray | Qualified Dental</title>
        <meta name="description" content="Buy Hyperlight portable dental X-ray system in Tamil Nadu and Karnataka. Advanced imaging technology with 500+ exposures per charge. Get quote for best prices with installation service." />
        <meta name="keywords" content="Hyperlight X-ray price Tamil Nadu, portable dental X-ray Chennai, mobile dental X-ray Karnataka, handheld X-ray Bangalore, dental imaging equipment, portable radiography system" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hyperlight X-Ray System - Advanced Portable Dental X-Ray" />
        <meta property="og:description" content="Premium portable dental X-ray system with 500+ exposures per charge, high-frequency DC generator, and advanced safety features. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/hyperlight x ray (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/hyperlightxray" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyperlight X-Ray System - Portable Dental X-Ray" />
        <meta name="twitter:description" content="Advanced portable dental X-ray with 500+ exposures per charge. Available in TN & KA with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/hyperlight x ray (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/hyperlightxray" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Hyperlight X-Ray System",
            "description": "Advanced portable dental X-ray system with high-frequency DC generator and 500+ exposures per charge",
            "brand": {
              "@type": "Brand",
              "name": "Hyperlight"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Hyperlight Medical Systems"
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
              "value": "60-70kV, 2.0-2.5mA, 2.2kg weight, 500+ exposures per charge"
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
            <h1>Hyperlight X-Ray System</h1>
            <p>Advanced Portable Dental X-Ray Technology</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Hyperlight X-Ray System portable dental X-ray")}
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
