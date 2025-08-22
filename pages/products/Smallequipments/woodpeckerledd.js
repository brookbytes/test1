import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerLEDD() {
  const product = {
    title: "Woodpecker LED D Light Cure Unit",
    description: "Experience cutting-edge dental curing technology with the Woodpecker LED D light cure unit, designed for dental professionals who demand precision, efficiency, and reliability. This advanced LED curing light delivers powerful, consistent light output with optimal wavelength spectrum for rapid and complete polymerization of all dental composite materials. The LED D features ergonomic design, cordless operation, and intelligent battery management, making it the perfect choice for modern dental practices seeking superior curing performance and patient comfort.",
    features: [
      "Advanced LED technology with 430-490nm wavelength spectrum for universal composite compatibility",
      "High-intensity light output up to 2000mW/cm² for rapid 5-10 second curing cycles",
      "Cordless ergonomic design with 360° rotating light probe for easy access to all areas",
      "Intelligent battery management with 2-hour continuous operation and fast charging",
      "3 working modes: Full, Ramping, and Pulse for different clinical requirements",
      "Digital display showing battery level, working time, and intensity settings",
      "Lightweight handpiece at only 160g for reduced hand fatigue during procedures",
      "Auto-standby and auto-off functions for energy conservation and safety",
      "Medical-grade stainless steel construction with anti-bacterial coating",
      "2-year comprehensive warranty with lifetime technical support"
    ],
    specifications: {
      "Light Source": "High-power LED array with 430-490nm spectrum",
      "Light Intensity": "1000-2000mW/cm² adjustable",
      "Curing Time": "5-20 seconds depending on material",
      "Battery Type": "Lithium-ion 2200mAh rechargeable",
      "Battery Life": "2 hours continuous operation",
      "Charging Time": "2.5 hours full charge",
      "Dimensions": "Handpiece: 25mm × 230mm",
      "Weight": "Handpiece: 160g, Base: 450g",
      "Working Modes": "Full, Ramping, Pulse",
      "Display": "Digital OLED showing battery and settings",
      "Wavelength Range": "430-490nm (polymerization spectrum)",
      "Brand Origin": "Woodpecker China - Premium Quality",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/woodpecker lightcure/Woodepecker Ledd.jpg",
      "/images/woodpecker lightcure/Woodepecker Ledd1.jpg",
      "/images/woodpecker lightcure/Woodepecker Ledd2.jpg",
      "/images/woodpecker lightcure/Woodepecker Ledd3.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker LED D Light Cure - Advanced Curing Technology | Qualified Dental</title>
        <meta name="description" content="Discover the Woodpecker LED D light cure unit with advanced LED technology, 2000mW/cm² intensity, cordless operation, and 2-year warranty. Perfect for rapid composite polymerization in modern dental practices." />
        <meta name="keywords" content="Woodpecker LED D light cure price, dental curing light Tamil Nadu, LED curing unit Chennai, cordless light cure Karnataka, Woodpecker dental equipment, composite curing light" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker LED D Light Cure - Advanced Curing Technology" />
        <meta property="og:description" content="Advanced LED curing light with 2000mW/cm² intensity, cordless design, and universal composite compatibility for modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/Woodepecker Ledd.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpeckerledd" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker LED D Light Cure" />
        <meta name="twitter:description" content="Advanced LED curing light with cordless operation and 2000mW/cm² intensity. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/Woodepecker Ledd.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpeckerledd" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker LED D Light Cure Unit",
            "description": "Advanced LED curing light with 2000mW/cm² intensity and cordless operation for dental composite polymerization",
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
            <h1>Woodpecker LED D Light Cure Unit</h1>
            <p>Advanced LED curing technology with 2000mW/cm² intensity and cordless operation</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker LED D Light Cure")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free demonstration & training<br/>
                ✓ 2 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
