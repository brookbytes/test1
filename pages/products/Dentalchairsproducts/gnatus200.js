import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Gnatus200Chair() {
  const product = {
    title: "Gnatus S200 Dental Chair",
    description: "Experience Brazilian engineering excellence with the Gnatus S200 dental chair, designed for dental professionals who demand precision, reliability, and patient comfort. This premium chair combines advanced ergonomic design with cutting-edge technology, featuring smooth hydraulic operation, programmable positioning, and exceptional build quality. The S200 represents the perfect fusion of functionality and aesthetics, making it the ideal choice for modern dental practices seeking world-class equipment.",
    features: [
      "Advanced Brazilian hydraulic system with ultra-smooth, whisper-quiet operation",
      "Programmable memory positions with 3 preset and 2 custom positions",
      "Premium seamless upholstery in medical-grade leather with anti-bacterial coating",
      "Ergonomic double-articulating headrest with 360° rotation and height adjustment",
      "Integrated LED operating light with 3 intensity levels and color temperature control",
      "Multi-functional foot control with hands-free operation and emergency stop",
      "Safety lock system with emergency positioning and patient protection features",
      "180° smooth rotation capability with individual wheel locking system",
      "Heavy-duty construction supporting up to 200kg patient weight",
      "5-year comprehensive warranty with lifetime technical support from Gnatus Brazil"
    ],
    specifications: {
      "Chair Type": "Premium Hydraulic Dental Chair",
      "Motor Power": "1.5 HP Silent Hydraulic Motor",
      "Voltage": "220V/50Hz Single Phase",
      "Weight Capacity": "200 kg maximum patient weight",
      "Chair Height Range": "420mm - 820mm adjustable",
      "Backrest Recline": "0° - 75° multi-angle positioning",
      "Seat Tilt": "0° - 20° Trendelenburg position",
      "Rotation": "180° smooth rotation capability",
      "Upholstery": "Medical-grade anti-bacterial leather",
      "Lighting": "LED 50,000 hour lifespan, 3 intensity levels",
      "Control System": "Digital touch panel with 5 memory positions",
      "Safety Features": "Emergency stop, safety lock, auto-positioning",
      "Brand Origin": "Gnatus Brazil - Premium Quality",
      "Warranty": "5 Years comprehensive Gnatus warranty"
    },
    images: [
      "/images/Dental Chairs/Gnatus/S200.png",
      "/images/Dental Chairs/Gnatus/S2001.png",
      "/images/Dental Chairs/Gnatus/S2002.png",
      "/images/Dental Chairs/Gnatus/S2003.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Gnatus S200 Dental Chair - Brazilian Excellence | Qualified Dental</title>
        <meta name="description" content="Discover the Gnatus S200 dental chair from Brazil - premium hydraulic system, programmable positions, LED lighting, and 5-year warranty. Available across Tamil Nadu and Karnataka with professional installation." />
        <meta name="keywords" content="Gnatus S200 dental chair price, Brazilian dental chair Tamil Nadu, premium hydraulic chair Chennai, Gnatus dental chair Karnataka, S200 dental chair Bangalore, Brazilian dental equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gnatus S200 Dental Chair - Brazilian Excellence" />
        <meta property="og:description" content="Premium Brazilian dental chair with advanced hydraulic system, programmable positions, LED lighting, and 5-year warranty. Perfect for modern dental practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Dental Chairs/Gnatus/S200.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Dentalchairsproducts/gnatus200" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gnatus S200 Dental Chair" />
        <meta name="twitter:description" content="Brazilian premium dental chair with hydraulic system, LED lighting, and 5-year warranty. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Dental Chairs/Gnatus/S200.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Dentalchairsproducts/gnatus200" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Gnatus S200 Dental Chair",
            "description": "Premium Brazilian dental chair with advanced hydraulic system, programmable positions, and LED lighting for modern dental practices",
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
            <h1>Gnatus S200 Dental Chair</h1>
            <p>Brazilian engineering excellence with premium features and 5-year warranty</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Gnatus S200 Dental Chair")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 5 year comprehensive Gnatus warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
