import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerBlackMinS() {
  const product = {
    title: "Woodpecker Black Min S Light Cure Unit",
    description: "Experience cutting-edge dental curing technology with the Woodpecker Black Min S, a premium LED light cure unit designed for modern dental practices. This advanced curing light delivers exceptional performance with its high-intensity LED technology, ensuring rapid and complete polymerization of dental composites. The sleek black design combines ergonomic comfort with professional aesthetics, while the compact size makes it perfect for any dental operatory. With multiple curing modes and precise light intensity control, the Black Min S offers versatility for all your composite curing needs.",
    features: [
      "Advanced high-intensity LED technology with 1200-1400 mW/cm² light output",
      "Multiple curing modes: Standard, Ramp, Pulse, and Turbo for different composite types",
      "360° rotating light guide with 10mm diameter for optimal access",
      "Digital display with real-time light intensity monitoring",
      "Ergonomic lightweight design reduces hand fatigue during procedures",
      "Built-in radiometer for accurate light intensity verification",
      "Auto-sleep function to preserve battery life",
      "Cordless operation with long-lasting lithium battery",
      "Fast charging capability - fully charged in 90 minutes",
      "3-year comprehensive warranty with lifetime technical support"
    ],
    specifications: {
      "Light Source": "High-power LED array (440-480nm wavelength)",
      "Light Intensity": "1200-1400 mW/cm²",
      "Curing Modes": "Standard, Ramp, Pulse, Turbo",
      "Light Guide": "10mm diameter, 360° rotatable",
      "Battery Type": "Lithium-ion 2200mAh",
      "Battery Life": "500+ curing cycles per charge",
      "Charging Time": "90 minutes fast charge",
      "Display": "Digital OLED with intensity indicator",
      "Dimensions": "230mm × 25mm × 25mm",
      "Weight": "145g lightweight design",
      "Warranty": "3 years comprehensive warranty",
      "Certifications": "CE, FDA, ISO 13485 approved"
    },
    images: [
      "/images/woodpecker lightcure/Woodepecker black min s.jpg",
      "/images/woodpecker lightcure/Woodepecker black min s.jpg",
      "/images/woodpecker lightcure/Woodepecker black min s.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker Black Min S Light Cure Unit - Advanced LED Curing | Qualified Dental</title>
        <meta name="description" content="Discover the Woodpecker Black Min S LED light cure unit - high-intensity 1200-1400 mW/cm² output, multiple curing modes, cordless operation, and 3-year warranty. Perfect for modern dental practices across Tamil Nadu and Karnataka." />
        <meta name="keywords" content="Woodpecker Black Min S price, LED light cure unit Tamil Nadu, dental curing light Chennai, Woodpecker light cure Karnataka, Black Min S Bangalore, dental composite curing light" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker Black Min S Light Cure Unit - Advanced LED Curing" />
        <meta property="og:description" content="Premium LED light cure unit with 1200-1400 mW/cm² output, multiple curing modes, cordless operation, and 3-year warranty. Ideal for modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/Woodepecker black min s.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpeckerblackmin" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker Black Min S Light Cure Unit" />
        <meta name="twitter:description" content="Advanced LED curing light with 1200-1400 mW/cm² output, multiple modes, and 3-year warranty. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/Woodepecker black min s.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpeckerblackmin" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker Black Min S Light Cure Unit",
            "description": "Advanced LED light cure unit with high-intensity output and multiple curing modes for dental composite polymerization",
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
            <h1>Woodpecker Black Min S Light Cure Unit</h1>
            <p>Advanced LED curing technology with high-intensity output and multiple modes</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker Black Min S Light Cure Unit")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 3 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}