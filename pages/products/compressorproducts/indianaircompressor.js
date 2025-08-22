import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function IndianAirCompressor() {
  const product = {
    title: "Indian Air Compressor",
    description: "High-quality Indian air compressor designed specifically for dental applications. This reliable compressor provides consistent air pressure for all dental instruments, ensuring smooth operation of handpieces, scalers, and other pneumatic equipment. Built with robust components for long-lasting performance in busy dental practices.",
    features: [
      "Oil-free operation for clean, contaminant-free air",
      "Silent operation with noise reduction technology",
      "Multiple chair support capability",
      "Automatic pressure regulation system",
      "Built-in moisture separator for dry air output",
      "Energy-efficient motor design",
      "Compact footprint for space-saving installation",
      "Low maintenance requirements",
      "Thermal protection system prevents overheating",
      "Easy-to-read pressure gauge and controls"
    ],
    specifications: {
      "Motor Power": "2 HP / 1.5 kW",
      "Air Flow": "200 L/min @ 8 bar",
      "Tank Capacity": "50 Liters",
      "Max Pressure": "8 bar / 116 PSI",
      "Noise Level": "≤65 dB",
      "Power Supply": "220V/50Hz Single Phase",
      "Dimensions": "650mm x 400mm x 700mm",
      "Weight": "65 kg",
      "Material": "Powder-coated steel frame",
      "Warranty": "1 Year Standard Warranty"
    },
    images: [
      "/images/COMPRESSOR  -G/51.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Indian Air Compressor - Dental Compressor | Qualified Dental</title>
        <meta name="description" content="Buy Indian air compressor for dental clinics in Tamil Nadu and Karnataka. 2HP motor, 50L tank, oil-free operation. Get quote for best prices with installation service." />
        <meta name="keywords" content="Indian air compressor Tamil Nadu, dental compressor Chennai, 2HP compressor Karnataka, oil-free compressor Bangalore, dental air compressor price, clinic compressor Tamil Nadu" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Indian Air Compressor - Dental Compressor" />
        <meta property="og:description" content="Premium Indian air compressor for dental clinics with 2HP motor, 50L tank, and oil-free operation. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/COMPRESSOR  -G/51.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/compressorproducts/indianaircompressor" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indian Air Compressor - Dental Compressor" />
        <meta name="twitter:description" content="Indian air compressor for dental clinics with 2HP motor and 50L tank. Available in TN & KA with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/COMPRESSOR  -G/51.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/compressorproducts/indianaircompressor" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Indian Air Compressor",
            "description": "High-quality Indian air compressor for dental clinics with 2HP motor and 50L tank capacity",
            "brand": {
              "@type": "Brand",
              "name": "Indian Air Compressor"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Indian Healthcare Equipment"
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
              "value": "2HP motor, 50L tank, 200L/min air flow, 8 bar max pressure"
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
            <h1>Indian Air Compressor</h1>
            <p>Reliable and efficient air compressor for dental applications</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Indian Air Compressor 2HP 50L")}
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
