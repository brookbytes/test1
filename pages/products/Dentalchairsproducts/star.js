import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function StarDentalChair() {
  const product = {
    title: "Star Dental Chair - Premium Comfort & Advanced Technology",
    description: "The Star Dental Chair represents the perfect blend of ergonomic design, advanced technology, and patient comfort. This premium dental chair features ultra-quiet operation, smooth hydraulic movements, and customizable positioning for optimal treatment access. Designed for modern dental practices that prioritize both practitioner efficiency and patient experience, the Star chair offers exceptional reliability with minimal maintenance requirements.",
    features: [
      "Ultra-quiet hydraulic system with smooth, precise positioning",
      "Ergonomic patient chair with memory foam cushioning for maximum comfort",
      "360° rotating doctor table with integrated instrument tray",
      "LED operating light with adjustable intensity and color temperature",
      "Multi-function foot control for hands-free operation",
      "Emergency stop button for enhanced safety",
      "Removable, autoclavable headrest and armrests",
      "Spittoon bowl with automatic flushing system",
      "Saliva ejector with high suction power",
      "Programmable chair positions with 3 memory settings",
      "Premium upholstery in multiple color options",
      "CE certified with 2 year comprehensive warranty"
    ],
    specifications: {
      "Chair Type": "Hydraulic Dental Chair",
      "Power Supply": "220V/50Hz Single Phase",
      "Motor System": "Ultra-quiet DC motor",
      "Chair Movement": "Smooth hydraulic positioning",
      "Maximum Load": "150 kg",
      "Chair Height Range": "400mm - 800mm",
      "Backrest Angle": "0° - 85° recline",
      "Operating Light": "LED with adjustable intensity",
      "Instrument Tray": "360° rotating with 3 handpiece holders",
      "Spittoon": "Ceramic with automatic flush",
      "Suction System": "High-power saliva ejector",
      "Foot Control": "Multi-function wireless",
      "Upholstery": "Premium PU leather (autoclavable)",
      "Dimensions": "1400mm x 800mm x 1200mm",
      "Weight": "180 kg",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/Dental Chairs/stardenatl.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Star Dental Chair - Premium Comfort & Technology | Qualified Dental</title>
        <meta name="description" content="Buy Star premium dental chair in Tamil Nadu and Karnataka. Advanced hydraulic system with LED light, ergonomic design, and 2-year warranty. Get best prices with installation service." />
        <meta name="keywords" content="Star dental chair price Tamil Nadu, premium dental chair Chennai, hydraulic dental chair Bangalore, modern dental chair Karnataka, Star chair with LED light, dental chair with warranty" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Star Dental Chair - Premium Comfort & Advanced Technology" />
        <meta property="og:description" content="Premium Star dental chair with hydraulic system, LED operating light, and ergonomic design. Available in Tamil Nadu and Karnataka with 2-year warranty and installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Dental Chairs/stardenatl.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Dentalchairsproducts/star" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Star Dental Chair - Premium Comfort & Technology" />
        <meta name="twitter:description" content="Premium dental chair with hydraulic system, LED light, and 2-year warranty. Available in TN & KA with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Dental Chairs/stardenatl.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Dentalchairsproducts/star" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Star Dental Chair",
            "description": "Premium dental chair with hydraulic system, LED operating light, and ergonomic design for modern dental practices",
            "brand": {
              "@type": "Brand",
              "name": "Star"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Star Dental Systems"
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
            <h1>Star Dental Chair</h1>
            <p>Advanced hydraulic dental chair with LED operating light and ergonomic design</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Star Premium Dental Chair")}
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
