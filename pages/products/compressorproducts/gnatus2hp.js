import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Gnatus2HPCompressor() {
  const product = {
    title: "Gnatus 2HP Dental Air Compressor",
    description: "Professional-grade oil-free dental air compressor from Gnatus, Brazil. This 2HP compressor provides powerful, clean, and dry compressed air for medium to large dental clinics. Features advanced noise reduction technology, energy-efficient operation, and robust construction for demanding dental environments requiring consistent air supply for multiple chairs and pneumatic equipment.",
    features: [
      "Oil-free technology guarantees 100% clean and dry compressed air",
      "2HP high-performance motor with superior efficiency",
      "Ultra-quiet operation at ≤68dB for comfortable clinic environment",
      "Advanced air drying system with multi-stage filtration",
      "Automatic pressure control with consistent air supply",
      "Robust construction for long-lasting durability",
      "Thermal overload protection prevents motor damage",
      "Easy maintenance design with quick-access components",
      "Supports 3-4 dental chairs simultaneously",
      "CE certified with 1 year comprehensive warranty"
    ],
    specifications: {
      "Motor Power": "2 HP (1.5 kW)",
      "Voltage": "220V/50Hz Single Phase",
      "Air Flow": "180 L/min @ 8 bar",
      "Max Pressure": "8 bar (116 PSI)",
      "Tank Capacity": "50 Liters",
      "Noise Level": "≤68 dB",
      "Dimensions": "700mm x 450mm x 750mm",
      "Weight": "65 kg",
      "Technology": "Oil-Free, Dry Air System",
      "Applications": "3-4 Dental Chairs",
      "Warranty": "1 Year Standard Warranty"
    },
    images: [
      "/images/COMPRESSOR  -G/2hp.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Gnatus 2HP Dental Air Compressor - Professional Grade | Qualified Dental</title>
        <meta name="description" content="Buy Gnatus 2HP oil-free dental air compressor in Tamil Nadu and Karnataka. High-capacity clean dry air supply for dental clinics. Get quote for best prices with installation service." />
        <meta name="keywords" content="Gnatus 2HP compressor price Tamil Nadu, dental air compressor Chennai, high capacity compressor Karnataka, Gnatus 2HP Bangalore, dental air supply equipment, 2HP oil-free compressor" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gnatus 2HP Dental Air Compressor - Professional Grade" />
        <meta property="og:description" content="Professional Gnatus 2HP oil-free dental air compressor for high-capacity, clean, dry compressed air supply. Available in Tamil Nadu and Karnataka with installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/2hp.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/compressorproducts/gnatus2hp" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gnatus 2HP Dental Air Compressor" />
        <meta name="twitter:description" content="Professional 2HP oil-free dental compressor for high-capacity air supply in dental clinics. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/2hp.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/compressorproducts/gnatus2hp" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Gnatus 2HP Dental Air Compressor",
            "description": "Professional oil-free dental air compressor with 2HP motor for high-capacity clean, dry compressed air supply",
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

          .view-details-btn {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            border: none;
            padding: 15px 40px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 123, 255, 0.1);
            margin-left: 10px;
          }

          .view-details-btn:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
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

            .product-cta {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            .view-details-btn {
              margin-left: 0;
            }
          }
        `}</style>
        <div className="container">
          <div className="page-header">
            <h1>Gnatus 2HP Dental Air Compressor</h1>
            <p>Professional-grade oil-free compressor for demanding dental environments</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Gnatus 2HP Oil-Free Compressor")}
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
