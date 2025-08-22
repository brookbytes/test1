import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function VmaxSuction() {
  const product = {
    title: "Vmax Suction System - High Performance Dental Suction",
    description: "Professional-grade Vmax suction system designed for modern dental clinics requiring powerful and reliable suction performance. This advanced suction unit features high vacuum capacity, quiet operation, and energy-efficient design. Perfect for dental procedures requiring consistent suction power including oral surgery, endodontics, and general dentistry applications with superior fluid and debris removal capabilities.",
    features: [
      "High-performance suction motor with powerful vacuum capacity",
      "Ultra-quiet operation at ≤65dB for comfortable clinic environment",
      "Oil-free technology ensures clean, contamination-free suction",
      "Large capacity collection tank with easy disposal system",
      "Automatic overflow protection with safety shut-off",
      "Advanced filtration system prevents contamination",
      "Energy-efficient operation with low power consumption",
      "Compact design saves valuable clinic space",
      "Easy maintenance with quick-access components",
      "Supports multiple operatories simultaneously",
      "Variable suction control for different procedures",
      "CE certified with 1 year comprehensive warranty"
    ],
    specifications: {
      "Motor Power": "1.5 HP (1.1 kW)",
      "Voltage": "220V/50Hz Single Phase",
      "Max Vacuum": "-0.9 bar (-90 kPa)",
      "Air Flow": "180 L/min suction capacity",
      "Tank Capacity": "25 Liters waste collection",
      "Noise Level": "≤65 dB",
      "Dimensions": "550mm x 400mm x 650mm",
      "Weight": "45 kg",
      "Technology": "Oil-Free, High Vacuum",
      "Applications": "2-4 Dental Chairs",
      "Warranty": "1 Year Standard Warranty"
    },
    images: [
      "/images/COMPRESSOR  -G/Vmax suction/vmaxxsuction.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Vmax Suction System - High Performance Dental Suction | Qualified Dental</title>
        <meta name="description" content="Buy Vmax suction system in Tamil Nadu and Karnataka. High-performance dental suction unit for modern clinics. Get quote for best prices with installation service." />
        <meta name="keywords" content="Vmax suction price Tamil Nadu, dental suction system Chennai, high vacuum suction Karnataka, Vmax suction pump Bangalore, dental suction equipment, oral surgery suction, clinic suction system" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vmax Suction System - High Performance Dental Suction" />
        <meta property="og:description" content="Professional Vmax suction system with high vacuum capacity and quiet operation for modern dental clinics. Available in Tamil Nadu and Karnataka with installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/Vmax suction/vmaxxsuction.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/compressorproducts/vmaxsuction" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vmax Suction System - High Performance Dental Suction" />
        <meta name="twitter:description" content="Professional dental suction system with high vacuum capacity for modern clinics. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/Vmax suction/vmaxxsuction.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/compressorproducts/vmaxsuction" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Vmax Suction System",
            "description": "Professional-grade high performance dental suction system with powerful vacuum capacity for modern dental clinics",
            "brand": {
              "@type": "Brand",
              "name": "Vmax"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Professional Dental Equipment"
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
            <h1>Vmax Suction System</h1>
            <p>High-performance dental suction for modern clinics</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Vmax Suction System")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 1 year warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
