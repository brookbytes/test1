import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerNT5() {
  const product = {
    title: "Woodpecker NT5 Ultrasonic Scaler",
    description: "Experience superior dental scaling with the Woodpecker NT5, a state-of-the-art ultrasonic scaler designed for precise and comfortable dental procedures. This advanced scaler combines cutting-edge piezoelectric technology with ergonomic design, delivering exceptional performance for both supragingival and subgingival scaling. The NT5 features automatic frequency tracking, ensuring optimal power delivery across all clinical applications while maintaining patient comfort. Perfect for modern dental practices seeking reliable, efficient, and gentle scaling solutions.",
    features: [
      "Advanced piezoelectric ultrasonic technology with automatic frequency tracking",
      "5 preset treatment modes: Scaling, Perio, Endo, Restorative, and Ortho",
      "Intelligent power control system with real-time feedback adjustment",
      "Ergonomic lightweight handpiece with 360° rotation capability",
      "Medical-grade titanium scaling tips for superior durability",
      "LED handpiece illumination for enhanced visibility during procedures",
      "Auto-water supply system with adjustable flow rate control",
      "Built-in patient safety system with automatic power reduction",
      "Touch-sensitive control panel with intuitive operation",
      "2-year comprehensive warranty with lifetime technical support"
    ],
    specifications: {
      "Device Type": "Ultrasonic Piezoelectric Scaler",
      "Technology": "Auto-tracking frequency piezoelectric",
      "Power Output": "3W - 20W adjustable",
      "Frequency Range": "28kHz - 32kHz auto-tracking",
      "Operating Modes": "5 preset + custom settings",
      "Water Flow": "30-80ml/min adjustable",
      "Power Supply": "100-240V AC, 50/60Hz",
      "Handpiece Weight": "65g lightweight design",
      "Tip Compatibility": "Woodpecker standard tips",
      "Control Panel": "Touch-sensitive digital display",
      "Dimensions": "280mm × 190mm × 100mm",
      "Weight": "1.8kg compact design",
      "Brand": "Woodpecker - Global Leader",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/Scalar/WoodpekkerNt5 (1).png",
      "/images/Scalar/WoodpekkerNt5 (2).png"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker NT5 Ultrasonic Scaler - Advanced Piezoelectric Technology | Qualified Dental</title>
        <meta name="description" content="Discover the Woodpecker NT5 ultrasonic scaler with auto-tracking frequency, 5 treatment modes, LED illumination, and 2-year warranty. Available across Tamil Nadu and Karnataka with professional support." />
        <meta name="keywords" content="Woodpecker NT5 scaler price, ultrasonic scaler Tamil Nadu, dental scaler Chennai, piezoelectric scaler Karnataka, NT5 scaler Bangalore, dental scaling equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker NT5 Ultrasonic Scaler - Advanced Piezoelectric Technology" />
        <meta property="og:description" content="Advanced ultrasonic scaler with auto-tracking frequency, 5 treatment modes, LED illumination, and 2-year warranty. Perfect for modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Scalar/WoodpekkerNt5 (1).png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpeckernt5" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker NT5 Ultrasonic Scaler" />
        <meta name="twitter:description" content="Advanced piezoelectric scaler with 5 modes, LED illumination, and 2-year warranty. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Scalar/WoodpekkerNt5 (1).png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpeckernt5" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker NT5 Ultrasonic Scaler",
            "description": "Advanced ultrasonic scaler with piezoelectric technology, 5 treatment modes, and LED illumination for precise dental scaling",
            "brand": {
              "@type": "Brand",
              "name": "Woodpecker"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Woodpecker Medical"
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
            <h1>Woodpecker NT5 Ultrasonic Scaler</h1>
            <p>Advanced piezoelectric technology with 5 treatment modes and LED illumination</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker NT5 Ultrasonic Scaler")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 year comprehensive Woodpecker warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
