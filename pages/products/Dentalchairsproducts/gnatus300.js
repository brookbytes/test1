import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Gnatus300Chair() {
  const product = {
    title: "Gnatus S300 Dental Chair",
    description: "Experience the pinnacle of Brazilian dental engineering with the Gnatus S300, designed for elite dental practices that demand uncompromising quality and advanced functionality. This flagship chair represents the perfect synthesis of cutting-edge technology, ergonomic excellence, and sophisticated design. Featuring state-of-the-art electromechanical systems, intelligent positioning controls, and premium materials throughout, the S300 delivers exceptional performance for complex dental procedures while ensuring maximum patient comfort and practitioner efficiency.",
    features: [
      "Advanced Brazilian electromechanical system with ultra-precise positioning control",
      "Intelligent 7-position memory system with customizable procedure-specific settings",
      "Premium seamless anti-bacterial leather upholstery with stain-resistant coating",
      "Ergonomic triple-articulating headrest with 360° rotation and micro-adjustment",
      "Advanced LED operating light with 5 intensity levels and color temperature adjustment",
      "Wireless foot control with programmable functions and emergency positioning",
      "Integrated safety systems with auto-return and patient protection protocols",
      "360° smooth rotation capability with precision locking at any angle",
      "Heavy-duty reinforced construction supporting up to 220kg patient weight",
      "Premium 7-year comprehensive warranty with dedicated technical support"
    ],
    specifications: {
      "Chair Type": "Flagship Electromechanical Dental Chair",
      "Motor System": "Advanced Electromechanical with Dual Motors",
      "Voltage": "220V/50Hz Single Phase",
      "Weight Capacity": "220 kg maximum patient weight",
      "Chair Height Range": "400mm - 800mm ultra-precise adjustment",
      "Backrest Recline": "0° - 80° infinite positioning",
      "Seat Tilt": "0° - 25° Trendelenburg and reverse positions",
      "Rotation": "360° continuous rotation capability",
      "Upholstery": "Premium anti-bacterial medical leather",
      "Lighting": "Advanced LED 50,000 hours, 5 intensity levels",
      "Control System": "Intelligent 7-position memory with presets",
      "Safety Features": "Auto-return, emergency positioning, safety lock",
      "Brand Origin": "Gnatus Brazil - Flagship Model",
      "Warranty": "7 Years premium warranty"
    },
    images: [
      "/images/Dental Chairs/Gnatus/gnatusS400.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Gnatus S300 Dental Chair - Flagship Brazilian Excellence | Qualified Dental</title>
        <meta name="description" content="Discover the flagship Gnatus S300 dental chair from Brazil - advanced electromechanical system, 7-position memory, premium upholstery, and 7-year warranty. Elite dental equipment for Tamil Nadu and Karnataka." />
        <meta name="keywords" content="Gnatus S300 dental chair price, flagship Brazilian dental chair, advanced electromechanical chair Tamil Nadu, premium dental chair Chennai, Gnatus flagship model Karnataka, S300 dental chair Bangalore" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gnatus S300 Dental Chair - Flagship Brazilian Excellence" />
        <meta property="og:description" content="Flagship Brazilian dental chair with advanced electromechanical system, 7-position memory, premium upholstery, and 7-year warranty. Elite equipment for modern practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Dental Chairs/Gnatus/gnatusS400.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Dentalchairsproducts/gnatus300" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gnatus S300 Dental Chair" />
        <meta name="twitter:description" content="Flagship Brazilian dental chair with advanced electromechanical system and 7-year warranty. Elite equipment for TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Dental Chairs/Gnatus/gnatusS400.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Dentalchairsproducts/gnatus300" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Gnatus S300 Dental Chair",
            "description": "Flagship Brazilian dental chair with advanced electromechanical system, 7-position memory, and premium upholstery for elite dental practices",
            "brand": {
              "@type": "Brand",
              "name": "Gnatus"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Gnatus Brazil"
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
            <h1>Gnatus S300 Dental Chair</h1>
            <p>Flagship Brazilian excellence with advanced electromechanical system and 7-year warranty</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Gnatus S300 Dental Chair")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 7 year premium Gnatus warranty<br/>
                ✓ Elite service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
