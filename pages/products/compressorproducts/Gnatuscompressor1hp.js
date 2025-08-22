import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function GnatusCompressor1HP() {
  const product = {
    title: "Gnatus 1HP Dental Air Compressor",
    description: "Premium quality oil-free dental air compressor from Gnatus, Brazil. This 1HP compressor delivers clean, dry, and oil-free compressed air essential for dental procedures. Designed with advanced noise reduction technology and energy-efficient operation, perfect for small to medium dental clinics requiring reliable air supply for handpieces, scalers, and other pneumatic dental equipment.",
    features: [
      "Oil-free technology ensures 100% clean and dry compressed air",
      "1HP motor with high efficiency and low power consumption",
      "Ultra-quiet operation at ≤65dB for peaceful clinic environment",
      "Advanced air drying system with moisture separator",
      "Automatic pressure switch control for consistent air supply",
      "Compact design saves valuable clinic space",
      "Thermal protection system prevents motor overheating",
      "Easy maintenance with accessible components",
      "Suitable for 2-3 dental chairs simultaneously",
      "CE certified with 1 year comprehensive warranty"
    ],
    specifications: {
      "Motor Power": "1 HP (0.75 kW)",
      "Voltage": "220V/50Hz Single Phase",
      "Air Flow": "110 L/min @ 8 bar",
      "Max Pressure": "8 bar (116 PSI)",
      "Tank Capacity": "30 Liters",
      "Noise Level": "≤65 dB",
      "Dimensions": "600mm x 400mm x 650mm",
      "Weight": "45 kg",
      "Technology": "Oil-Free, Dry Air System",
      "Applications": "2-3 Dental Chairs",
      "Warranty": "1 Year Standard Warranty"
    },
    images: [
      "/images/COMPRESSOR -G/Gnatus1hp.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Gnatus 1HP Dental Air Compressor - Oil-Free Technology | Qualified Dental</title>
        <meta name="description" content="Buy Gnatus 1HP oil-free dental air compressor in Tamil Nadu and Karnataka. Clean dry air supply for dental clinics. Get quote for best prices with installation service." />
        <meta name="keywords" content="Gnatus 1HP compressor price Tamil Nadu, dental air compressor Chennai, oil-free compressor Karnataka, Gnatus compressor Bangalore, dental air supply equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gnatus 1HP Dental Air Compressor - Oil-Free Technology" />
        <meta property="og:description" content="Premium Gnatus 1HP oil-free dental air compressor for clean, dry compressed air supply. Available in Tamil Nadu and Karnataka with installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/Gnatus1hp.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/compressor products/Gnatuscompressor1hp" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gnatus 1HP Dental Air Compressor" />
        <meta name="twitter:description" content="Oil-free 1HP dental compressor for clean air supply in dental clinics. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/Gnatus1hp.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/compressor products/Gnatuscompressor1hp" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Gnatus 1HP Dental Air Compressor",
            "description": "Oil-free dental air compressor with 1HP motor for clean, dry compressed air supply",
            "brand": {
              "@type": "Brand",
              "name": "Gnatus"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Gnatus, Brazil"
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
            <h1>Gnatus 1HP Dental Air Compressor</h1>
            <p>Oil-free technology for clean, dry compressed air supply</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Gnatus 1HP Oil-Free Compressor")}
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
