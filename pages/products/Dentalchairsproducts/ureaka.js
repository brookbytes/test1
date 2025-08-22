import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function UrekaChair() {
  const product = {
    title: "Ureka Dental Chair",
    description: "Experience the perfect fusion of European design excellence and advanced functionality with the Ureka dental chair. This sophisticated masterpiece represents the ideal balance of contemporary aesthetics, ergonomic innovation, and reliable performance. Designed for modern dental practices that demand both style and substance, the Ureka delivers exceptional patient comfort while providing practitioners with intuitive controls and smooth operation. With its sleek European styling and proven reliability, the Ureka is the perfect choice for practices seeking premium quality at exceptional value.",
    features: [
      "European-inspired design with contemporary aesthetics and premium finish",
      "Advanced hydraulic system with whisper-quiet operation and precise positioning",
      "Ergonomic memory foam cushioning with medical-grade antimicrobial upholstery",
      "Multi-adjustable headrest with 360° rotation and height positioning",
      "Integrated LED operating light with adjustable intensity and color temperature",
      "Intuitive foot control with hands-free operation and emergency positioning",
      "Comprehensive safety suite with emergency stop and auto-return",
      "Smooth 180° rotation capability with precision locking mechanism",
      "Heavy-duty construction supporting up to 200kg patient weight",
      "6-year comprehensive warranty with dedicated technical support"
    ],
    specifications: {
      "Chair Type": "European Design Dental Chair",
      "Motor System": "Advanced Hydraulic with Silent Operation",
      "Voltage": "220V/50Hz Single Phase",
      "Weight Capacity": "200 kg maximum patient weight",
      "Chair Height Range": "430mm - 830mm smooth adjustment",
      "Backrest Recline": "0° - 75° multi-angle positioning",
      "Seat Tilt": "0° - 20° Trendelenburg positioning",
      "Rotation": "180° smooth rotation capability",
      "Upholstery": "Premium medical-grade with memory foam",
      "Lighting": "LED 50,000 hour lifespan with adjustment",
      "Control System": "Intuitive touch panel with memory positions",
      "Safety Features": "Emergency stop, safety lock, auto-return",
      "Design Origin": "European-inspired contemporary styling",
      "Warranty": "6 Years comprehensive warranty"
    },
    images: [
      "/images/Dental Chairs/Ureka/ureaka.png",
      "/images/Dental Chairs/Ureka/ureka2.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Ureka Dental Chair - European Design Excellence | Qualified Dental</title>
        <meta name="description" content="Discover the Ureka dental chair with European design excellence - advanced hydraulic system, memory foam cushioning, LED lighting, and 6-year warranty. Perfect for modern dental practices in Tamil Nadu and Karnataka." />
        <meta name="keywords" content="Ureka dental chair price, European design dental chair Tamil Nadu, contemporary dental chair Chennai, Ureka chair Karnataka, modern dental chair Bangalore, European styling dental equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ureka Dental Chair - European Design Excellence" />
        <meta property="og:description" content="European design dental chair with advanced hydraulic system, memory foam cushioning, and 6-year warranty. Perfect for modern dental practices in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Dental Chairs/Ureka/ureaka.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Dentalchairsproducts/ureaka" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ureka Dental Chair" />
        <meta name="twitter:description" content="European design dental chair with advanced features and 6-year warranty for modern TN & KA dental practices." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Dental Chairs/Ureka/ureaka.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Dentalchairsproducts/ureaka" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Ureka Dental Chair",
            "description": "European design dental chair with advanced hydraulic system, memory foam cushioning, and 6-year warranty for modern dental practices",
            "brand": {
              "@type": "Brand",
              "name": "Ureka"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Qualified Dental"
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
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding: 0 1rem;
          }

          .product-image-section {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
            transition: transform 0.3s ease;
          }

          .product-image-section:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 255, 209, 0.15);
          }

          .product-info-section {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
            transition: transform 0.3s ease;
          }

          .product-info-section:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(0, 255, 209, 0.15);
          }

          .product-info-section h2 {
            color: #333333;
            margin-bottom: 1.5rem;
            font-size: 2rem;
            font-weight: 700;
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
            font-weight: 600;
            border-bottom: 2px solid #00FFD1;
            padding-bottom: 0.5rem;
          }

          .product-description p {
            color: #666666;
            line-height: 1.7;
            font-size: 1rem;
          }

          .product-features ul {
            list-style: none;
            padding: 0;
          }

          .product-features li {
            color: #666666;
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            position: relative;
            line-height: 1.6;
          }

          .product-features li::before {
            content: "✓";
            color: #00FFD1;
            font-weight: bold;
            position: absolute;
            left: 0;
            font-size: 1.1rem;
          }

          .specs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid #f0f0f0;
            transition: background-color 0.2s ease;
          }

          .spec-item:hover {
            background-color: #f9f9f9;
            padding-left: 0.5rem;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
            padding-right: 0.5rem;
          }

          .spec-label {
            font-weight: 600;
            color: #333333;
            flex: 1;
          }

          .spec-value {
            color: #666666;
            flex: 1;
            text-align: right;
          }

          .product-cta {
            text-align: center;
            margin-top: 2.5rem;
            padding-top: 2rem;
            border-top: 1px solid #f0f0f0;
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
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.2);
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .quote-btn-large:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 8px 30px rgba(0, 255, 209, 0.4);
          }

          .service-info {
            color: #666666;
            font-size: 14px;
            line-height: 1.6;
            margin-top: 1rem;
          }

          .service-info strong {
            color: #333333;
          }

          .page-header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem 0;
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border-radius: 12px;
            margin-top: 1rem;
          }

          .page-header h1 {
            color: #333333;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .page-header p {
            color: #666666;
            font-size: 1.1rem;
            margin: 0;
          }

          @media (max-width: 768px) {
            .product-detail-container {
              grid-template-columns: 1fr;
              gap: 2rem;
              padding: 0 0.5rem;
            }

            .product-info-section {
              padding: 1.5rem;
            }

            .specs-grid {
              grid-template-columns: 1fr;
            }

            .page-header h1 {
              font-size: 2rem;
            }

            .page-header p {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .product-detail-container {
              gap: 1.5rem;
            }

            .product-info-section {
              padding: 1rem;
            }

            .quote-btn-large {
              padding: 12px 30px;
              font-size: 14px;
            }
          }
        `}</style>
        <div className="container">
          <div className="page-header">
            <h1>Ureka Dental Chair</h1>
            <p>European Design Excellence with Advanced Functionality - Perfect for Modern Dental Practices</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Ureka Dental Chair")}
                >
                  Get Instant Quote
                </button>
                <p className="service-info">
                  <strong>✓ Free Installation & Training</strong><br/>
                  <strong>✓ 6 Year Comprehensive Warranty</strong><br/>
                  <strong>✓ Pan-India Service Network</strong><br/>
                  <strong>✓ Serving Tamil Nadu & Karnataka</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
