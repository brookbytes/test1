import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function RynesPortableXRay() {
  const product = {
    title: "Rynes Portable X-Ray",
    description: "Advanced portable dental X-ray system designed for modern dental practices. This lightweight, compact unit delivers exceptional image quality with precise radiation control, making it perfect for both clinic and mobile dental services. Features cutting-edge technology with user-friendly operation and enhanced safety protocols.",
    features: [
      "Ultra-portable design weighing only 2.3kg for easy mobility",
      "High-frequency DC generator (60kHz) for consistent X-ray output",
      "Digital LCD display with intuitive touch controls",
      "Adjustable exposure time: 0.01-2.0 seconds",
      "Tube voltage: 70kV with precise current control",
      "Built-in rechargeable battery with 200+ exposures per charge",
      "Wireless remote control operation up to 30 meters",
      "Multiple preset programs for different dental procedures",
      "Low radiation leakage with advanced shielding technology",
      "Compatible with both digital sensors and traditional films",
      "Quick charging system - full charge in 2 hours",
      "CE certified and FDA approved medical device"
    ],
    specifications: {
      "Generator Type": "High-frequency DC (60kHz)",
      "Tube Voltage": "70kV ± 10%",
      "Tube Current": "2.5mA",
      "Exposure Time": "0.01-2.0 seconds",
      "Battery Capacity": "14.8V 6400mAh Li-ion",
      "Charging Time": "2 hours (100%)",
      "Weight": "2.3 kg (main unit)",
      "Dimensions": "138mm × 165mm × 185mm",
      "Radiation Leakage": "<0.25mGy/h",
      "Operating Temperature": "5°C - 40°C",
      "Storage Temperature": "-20°C - 60°C",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      
      "/images/Radiology products/portable x ray/rynesxray (2).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Rynes Portable X-Ray - Advanced Dental Imaging | Qualified Dental</title>
        <meta name="description" content="Buy Rynes portable dental X-ray system in Tamil Nadu and Karnataka. Lightweight 2.3kg unit with 70kV output, wireless operation, and 200+ exposures per charge. Get best prices with installation service." />
        <meta name="keywords" content="Rynes portable X-ray price Tamil Nadu, dental portable X-ray Chennai, mobile dental X-ray Karnataka, 70kV portable X-ray Bangalore, wireless dental X-ray, battery operated X-ray, dental imaging equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Rynes Portable X-Ray - Advanced Dental Imaging" />
        <meta property="og:description" content="Lightweight 2.3kg portable dental X-ray with 70kV output, wireless operation, and 200+ exposures per charge. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/rynesxray (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/rynes" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rynes Portable X-Ray - Advanced Dental Imaging" />
        <meta name="twitter:description" content="2.3kg portable dental X-ray with 70kV output and wireless operation. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/rynesxray (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/rynes" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rynes Portable X-Ray",
            "description": "Advanced portable dental X-ray system with 70kV output, wireless operation, and lightweight 2.3kg design for mobile dental services",
            "brand": {
              "@type": "Brand",
              "name": "Rynes"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Rynes Medical Systems"
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
              "value": "70kV output, 2.3kg weight, wireless operation, 200+ exposures per charge"
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
            <h1>Rynes Portable X-Ray</h1>
            <p>Advanced Dental Imaging Solution</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Rynes Portable X-Ray 70kV output")}
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
