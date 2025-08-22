import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function AlerioNeo() {
  const product = {
    title: "Alerio Neo Portable X-Ray System",
    description: "Advanced portable dental X-ray system featuring cutting-edge technology for precise intraoral imaging. The Alerio Neo combines exceptional image quality with user-friendly operation, making it the perfect choice for modern dental practices seeking mobility without compromising diagnostic accuracy.",
    features: [
      "Ultra-lightweight design at just 2.3kg for maximum portability",
      "High-frequency DC generator (65kV/2.5mA) for consistent X-ray output",
      "Advanced 0.4mm focal spot for superior image sharpness",
      "Digital control panel with 28 preset exposure programs",
      "Rechargeable lithium-ion battery with 500+ exposures per charge",
      "Wireless remote control operation up to 10 meters range",
      "Compatible with both digital sensors and conventional film",
      "Built-in radiation safety features with automatic exposure termination",
      "Quick 2-second exposure time for patient comfort",
      "CE certified and FDA approved for dental radiography"
    ],
    specifications: {
      "Generator Type": "High-frequency DC",
      "Tube Voltage": "65 kV",
      "Tube Current": "2.5 mA",
      "Focal Spot": "0.4 mm",
      "Exposure Time": "0.02-2.0 seconds",
      "Battery Type": "Lithium-ion 14.8V/2200mAh",
      "Battery Life": "500+ exposures per charge",
      "Charging Time": "3-4 hours",
      "Weight": "2.3 kg (handpiece only)",
      "Dimensions": "140mm x 160mm x 280mm",
      "Warranty": "2 years standard warranty"
    },
    images: [
      "/images/Radiology products/portable x ray/alerio neo (1).jpg",
      "/images/Radiology products/portable x ray/alerio neo (2).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Alerio Neo Portable X-Ray - Advanced Dental Imaging | Qualified Dental</title>
        <meta name="description" content="Buy Alerio Neo portable dental X-ray system in Tamil Nadu and Karnataka. Lightweight 2.3kg design, 500+ exposures per charge, wireless operation. Get best prices with installation and training." />
        <meta name="keywords" content="Alerio Neo portable X-ray price Tamil Nadu, dental portable X-ray Chennai, mobile X-ray Karnataka, intraoral X-ray Bangalore, portable dental radiography, wireless X-ray system, dental imaging equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Alerio Neo Portable X-Ray - Advanced Dental Imaging" />
        <meta property="og:description" content="Ultra-lightweight portable dental X-ray system with 500+ exposures per charge. Perfect for modern dental practices in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/alerio neo (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/alerioneo" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alerio Neo Portable X-Ray - Advanced Dental Imaging" />
        <meta name="twitter:description" content="2.3kg portable dental X-ray with 500+ exposures per charge. Available in TN & KA with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Radiology products/portable x ray/alerio neo (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/alerioneo" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Alerio Neo Portable X-Ray System",
            "description": "Advanced portable dental X-ray system with high-frequency DC generator and wireless operation",
            "brand": {
              "@type": "Brand",
              "name": "Alerio Neo"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Alerio Medical Systems"
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
              "value": "65kV/2.5mA, 0.4mm focal spot, 2.3kg weight, 500+ exposures per charge"
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
            <h1>Alerio Neo Portable X-Ray System</h1>
            <p>Advanced Mobile Dental Imaging Solution</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Alerio Neo Portable X-Ray System")}
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
