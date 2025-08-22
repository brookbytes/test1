import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function RynesTouch() {
  const product = {
    title: "Rynes Touch Screen Autoclave",
    description: "Advanced touch screen autoclave featuring cutting-edge technology for modern dental practices. This premium sterilization unit combines intuitive touchscreen controls with high-pressure steam sterilization, offering multiple tray configurations and comprehensive safety features. Designed for busy dental clinics requiring reliable, fast, and efficient instrument sterilization.",
    features: [
      "Large 7-inch color touchscreen display with intuitive navigation",
      "Advanced pre-vacuum and post-vacuum technology for complete sterilization",
      "Multiple sterilization programs: 121°C, 134°C, and prion cycles",
      "Touch screen operation with programmable user profiles",
      "Built-in USB port for cycle data recording and software updates",
      "Automatic door locking with safety pressure release system",
      "316L stainless steel chamber with electro-polished finish",
      "Rapid cooling system reduces cycle time by 30%",
      "Built-in water quality monitoring and automatic alerts",
      "Wi-Fi connectivity for remote monitoring and maintenance alerts",
      "Multiple tray configurations: 3-5 trays depending on model",
      "Energy-efficient operation with eco-mode settings"
    ],
    specifications: {
      "Chamber Capacity": "23 Liters (Standard) / 18L (Compact)",
      "Sterilization Temperature": "105°C - 138°C (Programmable)",
      "Working Pressure": "1.2-2.5 bar",
      "Power Supply": "220V/50Hz Single Phase",
      "Power Consumption": "2200W",
      "Chamber Dimensions": "250mm x 450mm (23L) / 250mm x 350mm (18L)",
      "Overall Dimensions": "480mm x 620mm x 450mm",
      "Net Weight": "65 kg (23L) / 55 kg (18L)",
      "Material": "Stainless Steel 316L Grade",
      "Display": "7-inch Color Touch Screen",
      "Connectivity": "USB, Wi-Fi, Ethernet",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/Autoclaves/rynes touch screen Autoclave (1).jpg",
      "/images/Autoclaves/rynes touch screen Autoclave (2).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Rynes Touch Screen Autoclave - Advanced Dental Sterilizer | Qualified Dental</title>
        <meta name="description" content="Buy Rynes Touch Screen autoclave for dental clinics in Tamil Nadu and Karnataka. 23L/18L capacity, touch screen controls, Wi-Fi connectivity. Get quote for best prices with installation service." />
        <meta name="keywords" content="Rynes touch screen autoclave price Tamil Nadu, dental autoclave Chennai, touch screen sterilizer Karnataka, 23L autoclave Bangalore, dental sterilization equipment, Wi-Fi autoclave, Rynes autoclave" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Rynes Touch Screen Autoclave - Advanced Dental Sterilizer" />
        <meta property="og:description" content="Advanced Rynes touch screen autoclave for dental clinics with 23L/18L capacity, touch screen controls, and Wi-Fi connectivity. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Autoclaves/rynes touch screen Autoclave (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Autoclaveproducts/rynestouch" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rynes Touch Screen Autoclave - Advanced Dental Sterilizer" />
        <meta name="twitter:description" content="23L/18L Rynes touch screen autoclave for dental clinics with advanced features and Wi-Fi connectivity. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Autoclaves/rynes touch screen Autoclave (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Autoclaveproducts/rynestouch" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Rynes Touch Screen Autoclave",
            "description": "Advanced touch screen autoclave with 7-inch display, Wi-Fi connectivity, and multiple sterilization programs for modern dental practices",
            "brand": {
              "@type": "Brand",
              "name": "Rynes"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Rynes Healthcare Solutions"
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
            ],
            "technicalSpecifications": {
              "@type": "PropertyValue",
              "name": "Technical Specifications",
              "value": "23L/18L capacity, 105°C-138°C programmable sterilization, 7-inch touch screen, Wi-Fi connectivity"
            }
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
            <h1>Rynes Touch Screen Autoclave</h1>
            <p>Advanced Touch Screen Dental Sterilization Technology</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Indian Autoclave 18L capacity")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 1 year warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
