import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerLightCure() {
  const product = {
    title: "Woodpecker LED Curing Light - Premium Series",
    description: "Experience superior dental curing technology with the Woodpecker LED Curing Light, designed for complete polymerization of all light-cured dental materials. This advanced curing device features high-intensity LED technology with broad spectrum output (385-515nm) ensuring optimal curing of composites, adhesives, and cements. With exceptional light intensity and precise timing control, it guarantees complete and uniform polymerization for all dental procedures. The ergonomic design combined with cordless operation provides maximum comfort and maneuverability during treatments.",
    features: [
      "High-intensity LED technology with broad spectrum 385-515nm wavelength",
      "Complete polymerization for all light-cured dental materials",
      "Precise digital timer with adjustable curing intervals",
      "Cordless operation with long-lasting lithium-ion battery",
      "360° rotatable light probe for posterior access",
      "Intuitive display showing curing time and battery level",
      "Lightweight ergonomic design reduces hand fatigue",
      "Low battery indicator and automatic sleep mode",
      "Autoclavable light probe for infection control",
      "5-year comprehensive warranty with lifetime support"
    ],
    specifications: {
      "Light Source": "High-power LED array",
      "Wavelength Range": "385-515nm (broad spectrum)",
      "Light Intensity": "High output for complete curing",
      "Curing Time": "Adjustable timer settings",
      "Battery Type": "Rechargeable lithium-ion",
      "Battery Life": "Extended operation per charge",
      "Light Probe": "360° rotatable design",
      "Display": "Digital display with indicators",
      "Weight": "Lightweight ergonomic design",
      "Sterilization": "Autoclavable components",
      "Certifications": "CE, FDA approved",
      "Warranty": "5 years comprehensive warranty"
    },
    images: [
      "/images/woodpecker lightcure/woodpecker light cure.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker LED Curing Light | Advanced Dental Curing Technology</title>
        <meta name="description" content="Discover the Woodpecker LED Curing Light with advanced technology, broad spectrum output, cordless operation, and 5-year warranty. Perfect for all light-cured dental materials." />
        <meta name="keywords" content="Woodpecker LED curing light, dental curing light price, light cure device Tamil Nadu, dental polymerization light, composite curing light Karnataka, Woodpecker light cure Chennai" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker LED Curing Light - Advanced Dental Technology" />
        <meta property="og:description" content="Advanced LED curing light with broad spectrum technology and cordless operation for complete polymerization of all dental materials." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/woodpecker light cure.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpeckerlightcure" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker LED Curing Light" />
        <meta name="twitter:description" content="High-quality LED curing light with advanced technology and cordless operation. Available in Tamil Nadu & Karnataka." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/woodpecker lightcure/woodpecker light cure.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpeckerlightcure" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker LED Curing Light",
            "description": "Advanced LED curing light with broad spectrum technology for complete polymerization of light-cured dental materials",
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
            <h1>Woodpecker LED Curing Light</h1>
            <p>Advanced LED curing technology for complete polymerization of all dental materials</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker LED Curing Light")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free demonstration & training<br/>
                ✓ 5 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
