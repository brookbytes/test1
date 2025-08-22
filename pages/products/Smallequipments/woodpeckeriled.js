import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerIled() {
  const product = {
    title: "Woodpecker I LED Curing Light",
    description: "Experience cutting-edge dental curing technology with the Woodpecker I LED, a premium cordless curing light designed for modern dental practices. This advanced LED curing unit delivers powerful, consistent light output with optimal wavelength spectrum for rapid and complete polymerization of all light-cured dental materials. Featuring ergonomic design, long-lasting battery life, and multiple curing modes, the Woodpecker I LED ensures precise, efficient curing while maximizing patient comfort and clinical outcomes.",
    features: [
      "Advanced LED technology with 1200-1500 mW/cm² high intensity output for rapid 5-10 second curing",
      "Broad spectrum 385-515nm wavelength coverage suitable for all dental materials including composites, adhesives, and cements",
      "Cordless design with premium lithium-ion battery providing 300+ cures per full charge",
      "3 preset curing modes: Standard, Ramp, and Pulse for different clinical requirements",
      "Ergonomic lightweight design (only 180g) reduces hand fatigue during extended procedures",
      "360° rotating light guide with 10mm diameter tip for optimal access to all areas",
      "Digital OLED display showing battery status, curing time, and selected mode",
      "Automatic power-off and low battery indicator for enhanced safety and efficiency",
      "Medical-grade stainless steel construction with anti-microbial coating",
      "2-year comprehensive warranty with lifetime technical support"
    ],
    specifications: {
      "Light Source": "High-power LED array with 8 LED chips",
      "Wavelength Range": "385-515nm (broad spectrum)",
      "Light Intensity": "1200-1500 mW/cm²",
      "Curing Time": "5-20 seconds (adjustable)",
      "Battery Type": "Premium lithium-ion 2200mAh",
      "Battery Life": "300+ cures per charge",
      "Charging Time": "2.5 hours full charge",
      "Dimensions": "230mm × 28mm × 32mm",
      "Weight": "180g (lightweight design)",
      "Operating Modes": "Standard, Ramp, Pulse",
      "Display": "OLED digital screen",
      "Light Guide": "360° rotating, 10mm tip",
      "Material": "Medical-grade stainless steel",
      "Certification": "CE, FDA, ISO 13485 approved",
      "Warranty": "2 years comprehensive warranty"
    },
    images: [
      "/images/woodpecker lightcure/Woodepecker iled.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker I LED Curing Light - Advanced Dental Curing Technology | Qualified Dental</title>
        <meta name="description" content="Discover the Woodpecker I LED curing light - premium cordless LED technology with 1200-1500 mW/cm² output, broad spectrum 385-515nm, 300+ cures per charge. Available across Tamil Nadu and Karnataka with professional support." />
        <meta name="keywords" content="Woodpecker I LED curing light price, dental curing light Tamil Nadu, LED curing unit Chennai, cordless curing light Karnataka, dental light cure Bangalore, Woodpecker dental equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker I LED Curing Light - Advanced Dental Technology" />
        <meta property="og:description" content="Premium cordless LED curing light with 1200-1500 mW/cm² output, broad spectrum technology, and 300+ cures per charge. Perfect for modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/Woodepecker iled.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpeckeriled" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker I LED Curing Light" />
        <meta name="twitter:description" content="Advanced LED curing technology with 1200-1500 mW/cm² output and 300+ cures per charge. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/Woodepecker iled.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpeckeriled" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker I LED Curing Light",
            "description": "Premium cordless LED curing light with advanced technology for rapid and complete polymerization of all light-cured dental materials",
            "brand": {
              "@type": "Brand",
              "name": "Woodpecker"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Woodpecker"
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
            <h1>Woodpecker I LED Curing Light</h1>
            <p>Advanced LED curing technology with premium cordless design and broad spectrum coverage</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker I LED Curing Light")}
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
