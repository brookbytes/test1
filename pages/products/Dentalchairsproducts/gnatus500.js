import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Gnatus500Chair() {
  const product = {
    title: "Gnatus S500 Dental Chair",
    description: "Experience the ultimate in Brazilian dental luxury with the Gnatus S500, the crown jewel of dental chair engineering. This ultra-premium masterpiece represents the absolute pinnacle of dental technology, combining state-of-the-art electromechanical systems with unparalleled luxury and sophistication. Designed for the most discerning dental professionals who accept nothing but perfection, the S500 delivers extraordinary performance, supreme comfort, and unmatched reliability for the most demanding dental procedures in luxury practice environments.",
    features: [
      "Ultra-premium Brazilian electromechanical system with AI-assisted positioning technology",
      "Advanced 10-position memory system with AI-learning and procedure optimization",
      "Luxury seamless Italian leather upholstery with nano-coating and memory foam",
      "Precision-engineered quad-articulating headrest with 3D micro-adjustment and memory positioning",
      "Premium LED surgical lighting system with 7 intensity levels and customizable color spectrums",
      "Wireless smart foot control with AI-recognition and programmable gesture controls",
      "Comprehensive safety suite with predictive positioning and emergency protocols",
      "360° precision rotation with electromagnetic locking at any angle",
      "Ultra-heavy-duty construction supporting up to 250kg with reinforced stability",
      "Exclusive 10-year luxury warranty with dedicated concierge technical support"
    ],
    specifications: {
      "Chair Type": "Ultra-Premium Luxury Dental Chair",
      "Motor System": "AI-Enhanced Electromechanical with Quad Motors",
      "Voltage": "220V/50Hz Single Phase",
      "Weight Capacity": "250 kg ultra-heavy-duty capacity",
      "Chair Height Range": "380mm - 820mm ultra-precise adjustment",
      "Backrest Recline": "0° - 85° infinite positioning with AI-assist",
      "Seat Tilt": "0° - 30° advanced positioning with memory",
      "Rotation": "360° precision rotation with electromagnetic lock",
      "Upholstery": "Luxury Italian leather with nano-coating",
      "Lighting": "Premium LED surgical 50,000 hours, 7 spectrums",
      "Control System": "AI-enhanced 10-position memory with learning",
      "Safety Features": "AI-predictive safety, emergency protocols",
      "Brand Origin": "Gnatus Brazil - Ultra-Premium Luxury Series",
      "Warranty": "10 Years exclusive luxury warranty"
    },
    images: [
      "/images/Dental Chairs/Gnatus/gnatusS500.png",
      "/images/Dental Chairs/Gnatus/GnatusS500 1.png"
    ]
  }

  return (
    <>
      <Head>
        <title>Gnatus S500 Dental Chair - Ultra-Premium Luxury | Qualified Dental</title>
        <meta name="description" content="Discover the ultra-premium Gnatus S500 dental chair from Brazil - AI-enhanced electromechanical system, luxury Italian leather, 10-position memory, and exclusive 10-year warranty. Ultimate luxury for elite dental practices in Tamil Nadu and Karnataka." />
        <meta name="keywords" content="Gnatus S500 dental chair price, ultra-premium Brazilian dental chair, luxury dental chair Tamil Nadu, AI-enhanced dental chair Chennai, Gnatus luxury series Karnataka, S500 premium dental chair Bangalore" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gnatus S500 Dental Chair - Ultra-Premium Luxury" />
        <meta property="og:description" content="Ultra-premium Brazilian dental chair with AI-enhanced electromechanical system, luxury Italian leather, 10-position memory, and exclusive 10-year warranty. Ultimate luxury for elite practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Dental Chairs/Gnatus/gnatusS500.png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Dentalchairsproducts/gnatus500" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gnatus S500 Dental Chair" />
        <meta name="twitter:description" content="Ultra-premium Brazilian luxury dental chair with AI-enhanced system and 10-year warranty. Ultimate equipment for elite TN & KA practices." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Dental Chairs/Gnatus/gnatusS500.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Dentalchairsproducts/gnatus500" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Gnatus S500 Dental Chair",
            "description": "Ultra-premium Brazilian dental chair with AI-enhanced electromechanical system, luxury Italian leather, and 10-position memory for elite dental practices",
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
            <h1>Gnatus S500 Dental Chair</h1>
            <p>Ultra-premium Brazilian luxury with AI-enhanced technology and 10-year warranty</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Gnatus S500 Dental Chair")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ White-glove installation & training<br/>
                ✓ 10 year exclusive luxury warranty<br/>
                ✓ Concierge service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
