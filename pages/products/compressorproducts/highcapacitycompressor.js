import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function HighCapacityCompressor() {
  const product = {
    title: "High Capacity Dental Air Compressor - 3HP/5HP",
    description: "Industrial-grade high capacity dental air compressor designed for large dental clinics and hospitals. Available in 3HP and 5HP configurations, this heavy-duty compressor delivers exceptional air volume and pressure for demanding dental environments. Features oil-free technology, advanced air drying systems, and robust construction to support 6-10 dental chairs simultaneously with consistent, clean, dry compressed air supply for all pneumatic dental equipment and instruments.",
    features: [
      "Available in 3HP and 5HP high-performance motor options",
      "Oil-free technology ensures 100% clean, contaminant-free compressed air",
      "Ultra-high air delivery: 300-500 L/min depending on model",
      "Advanced multi-stage air drying and filtration system",
      "Heavy-duty construction for 24/7 continuous operation",
      "Supports 6-10 dental chairs simultaneously",
      "Automatic pressure regulation with stable air supply",
      "Thermal protection and overload safety systems",
      "Low maintenance design with easy access service points",
      "Energy-efficient operation with variable speed options",
      "Large air storage tank: 80-120 liters capacity",
      "CE certified with comprehensive 2-year warranty"
    ],
    specifications: {
      "Motor Options": "3HP (2.2kW) / 5HP (3.7kW)",
      "Voltage": "220V/50Hz Single Phase or 415V/3Phase",
      "Air Flow Rate": "300 L/min (3HP) / 500 L/min (5HP)",
      "Max Pressure": "8-10 bar (116-145 PSI)",
      "Tank Capacity": "80L (3HP) / 120L (5HP)",
      "Noise Level": "≤75 dB",
      "Dimensions": "850mm x 600mm x 900mm",
      "Weight": "95-135 kg depending on model",
      "Technology": "Oil-Free, Multi-stage Drying",
      "Applications": "6-10 Dental Chairs",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/COMPRESSOR  -G/3hp.png"
    ]
  }

  return (
    <>
      <Head>
        <title>High Capacity Dental Air Compressor - 3HP/5HP Industrial Grade | Qualified Dental</title>
        <meta name="description" content="Buy high capacity 3HP/5HP dental air compressor in Tamil Nadu and Karnataka. Industrial-grade oil-free compressor for large dental clinics. Get quote for best prices with installation service." />
        <meta name="keywords" content="high capacity compressor price Tamil Nadu, 3HP dental compressor Chennai, 5HP air compressor Karnataka, large dental clinic compressor Bangalore, industrial dental compressor, high volume air supply, multi-chair compressor" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="High Capacity Dental Air Compressor - 3HP/5HP Industrial Grade" />
        <meta property="og:description" content="Industrial-grade high capacity 3HP/5HP dental air compressor for large dental clinics and hospitals. Oil-free technology with high-volume clean air supply. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/5hp.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/compressorproducts/highcapacitycompressor" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High Capacity Dental Air Compressor - 3HP/5HP" />
        <meta name="twitter:description" content="Industrial 3HP/5HP dental compressor for large clinics with high-capacity oil-free air supply. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/COMPRESSOR -G/5hp.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/compressorproducts/highcapacitycompressor" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "High Capacity Dental Air Compressor",
            "description": "Industrial-grade high capacity dental air compressor available in 3HP and 5HP configurations for large dental clinics and hospitals",
            "brand": {
              "@type": "Brand",
              "name": "High Capacity Compressor"
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
            <h1>High Capacity Dental Air Compressor</h1>
            <p>3HP/5HP Industrial-grade compressor for large dental clinics and hospitals</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "High Capacity 3HP/5HP Compressor")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 year warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
