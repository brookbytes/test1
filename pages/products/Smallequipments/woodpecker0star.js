import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Woodpecker0Star() {
  const product = {
    title: "Woodpecker 0Star LED Light Cure Unit",
    description: "Experience cutting-edge dental curing technology with the Woodpecker 0Star LED light cure unit. This premium device from Woodpecker combines powerful 1000mW/cm² output with advanced LED technology to deliver fast, reliable curing for all dental composite materials. The 0Star features a unique 360° rotating light probe, ergonomic design, and intelligent battery management system, making it the perfect choice for modern dental practices seeking precision and efficiency in restorative procedures.",
    features: [
      "High-intensity 1000mW/cm² LED output for rapid 5-10 second curing",
      "Advanced 360° rotating light probe with 8mm diameter for precise placement",
      "Dual wavelength technology (420-480nm) compatible with all composite materials",
      "Intelligent battery management with 200+ curing cycles per full charge",
      "Ergonomic pistol-grip design reduces hand fatigue during extended procedures",
      "Digital display shows battery level and curing time countdown",
      "Auto-shutoff feature prevents overheating and extends LED lifespan",
      "Lightweight 180g design with anti-slip grip for comfortable handling",
      "Memory function saves last used settings for consistent results",
      "Includes 3 interchangeable light guides for different clinical applications"
    ],
    specifications: {
      "Light Source": "High-power LED array with dual wavelength",
      "Wavelength Range": "420-480nm (blue light spectrum)",
      "Light Intensity": "1000-1200 mW/cm² adjustable",
      "Curing Time": "5-20 seconds programmable",
      "Battery Type": "Lithium-ion 2200mAh rechargeable",
      "Battery Life": "200+ curing cycles per charge",
      "Charging Time": "2.5 hours for full charge",
      "Dimensions": "210mm × 60mm × 40mm (L×W×H)",
      "Weight": "180g (including battery)",
      "Light Probe": "360° rotating, 8mm diameter",
      "Display": "Digital OLED with battery and timer",
      "Operating Temperature": "5°C - 40°C",
      "Storage Temperature": "-10°C - 60°C",
      "Warranty": "2 years comprehensive Woodpecker warranty"
    },
    images: [
      "/images/woodpecker lightcure/woodepecker0star.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker 0Star LED Light Cure Unit - Advanced Curing Technology | Qualified Dental</title>
        <meta name="description" content="Discover the Woodpecker 0Star LED light cure unit with 1000mW/cm² output, 360° rotating probe, and intelligent battery management. Perfect for all dental composite materials. Available across Tamil Nadu and Karnataka with professional support." />
        <meta name="keywords" content="Woodpecker 0Star light cure, LED curing unit Tamil Nadu, dental light cure Karnataka, composite curing device Chennai, Woodpecker dental equipment, light cure unit price India" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker 0Star LED Light Cure Unit - Advanced Curing Technology" />
        <meta property="og:description" content="Premium LED light cure unit with 1000mW/cm² output, 360° rotating probe, and intelligent battery management for all dental composite materials." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/woodepecker0star.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpecker0star" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker 0Star LED Light Cure Unit" />
        <meta name="twitter:description" content="Advanced LED curing technology with 1000mW/cm² output and 360° rotating probe for precise dental composite curing." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/woodepecker0star.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpecker0star" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker 0Star LED Light Cure Unit",
            "description": "Advanced LED light cure unit with 1000mW/cm² output and 360° rotating probe for precise dental composite curing",
            "brand": {
              "@type": "Brand",
              "name": "Woodpecker"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Woodpecker China"
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
            <h1>Woodpecker 0Star LED Light Cure Unit</h1>
            <p>Advanced LED curing technology with 1000mW/cm² output and 360° rotating probe for precise dental composite curing</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker 0Star LED Light Cure Unit")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free demonstration & training<br/>
                ✓ 2 years comprehensive Woodpecker warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
