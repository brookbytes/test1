import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodPexV() {
  const product = {
    title: "WoodPex V Apex Locator",
    description: "Experience the pinnacle of precision endodontics with the WoodPex V Apex Locator, the latest advancement in electronic root canal measurement technology. This fifth-generation device combines cutting-edge multi-frequency impedance measurement with advanced digital signal processing to deliver unprecedented accuracy regardless of canal conditions. Featuring a stunning 5.0-inch HD color touchscreen, wireless connectivity, and intelligent auto-calibration, the WoodPex V represents the future of endodontic diagnostics. With enhanced battery life, cloud data synchronization, and AI-powered measurement algorithms, this device ensures optimal treatment outcomes while providing seamless integration with modern dental practice management systems.",
    features: [
      "Revolutionary 5th-generation multi-frequency technology with 98.2% measurement accuracy regardless of canal conditions",
      "Stunning 5.0-inch HD capacitive touchscreen with 1280x720 resolution and intuitive gesture controls",
      "AI-powered measurement algorithms with real-time learning and adaptive calibration",
      "Wireless Wi-Fi and Bluetooth connectivity for seamless data synchronization and cloud backup",
      "Advanced digital signal processing eliminates interference from blood, saliva, or irrigation fluids",
      "Ultra-long battery life with 12+ hours continuous operation and fast USB-C charging",
      "Smart patient management system with 100+ patient records and treatment history tracking",
      "Integrated LED status indicators and haptic feedback for enhanced user experience",
      "Compact premium design (95g) with ergonomic grip and anti-slip coating",
      "5-year comprehensive warranty with lifetime technical support and annual calibration service"
    ],
    specifications: {
      "Device Type": "5th Generation Electronic Apex Locator",
      "Technology": "AI-enhanced multi-frequency impedance measurement",
      "Accuracy": "98.2% within ±0.3mm of apex",
      "Display": "5.0-inch HD Capacitive Touchscreen (1280x720 pixels)",
      "Measurement Range": "0.0 - 35.0mm (apex to reference point)",
      "Battery Type": "Rechargeable Li-ion 3.7V 3000mAh",
      "Battery Life": "12+ hours continuous / 100 hours standby",
      "Charging Time": "1.5 hours via USB-C fast charging",
      "Connectivity": "Wi-Fi 802.11 b/g/n, Bluetooth 5.0",
      "Waterproof Rating": "IPX7 (immersion up to 1 meter)",
      "Dimensions": "125mm x 65mm x 18mm (L x W x H)",
      "Weight": "95g including battery",
      "Operating Conditions": "0°C - 45°C, 10% - 90% RH",
      "Memory Capacity": "100+ patient records with cloud sync",
      "Data Export": "CSV, PDF reports via Wi-Fi/Bluetooth",
      "Accessories": "Wireless lip hook, file clip, probe cord, calibration kit, carrying case",
      "Certifications": "CE, FDA, ISO 13485, FCC medical device standards",
      "Warranty": "5 years comprehensive with annual calibration service"
    },
    images: [
      "/images/Apex locator/woodpexv.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>WoodPex V Apex Locator - Next-Gen Precision | Qualified Dental</title>
        <meta name="description" content="WoodPex V Apex Locator with 98.2% accuracy, 5.0 inch HD touchscreen, AI-powered algorithms, wireless connectivity, and 12+ hour battery life. Available across Tamil Nadu and Karnataka with professional training." />
        <meta name="keywords" content="WoodPex V apex locator price, 5th generation apex locator Tamil Nadu, AI-powered root canal measurement Chennai, wireless dental apex locator Karnataka, HD touchscreen apex locator Bangalore, advanced endodontic equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="WoodPex V Apex Locator - Next-Gen Precision" />
        <meta property="og:description" content="5th generation apex locator with 98.2% accuracy, 5.0 inch HD touchscreen, AI-powered algorithms, and wireless connectivity. Perfect for modern endodontic practices." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Apex locator/woodpexv.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpexv" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WoodPex V Apex Locator" />
        <meta name="twitter:description" content="98.2% accurate 5th gen apex locator with HD touchscreen and wireless connectivity. Available in TN & KA with training." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Apex locator/woodpexv.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpexv" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "WoodPex V Apex Locator",
            "description": "5th generation electronic apex locator with AI-powered multi-frequency technology for precise root canal length measurement and wireless connectivity",
            "brand": {
              "@type": "Brand",
              "name": "WoodPex"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "WoodPex Medical"
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
            <h1>WoodPex V Apex Locator</h1>
            <p>98.2% accurate 5th generation apex locator with AI-powered precision</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "WoodPex V Apex Locator")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Professional training & cloud setup included<br/>
                ✓ 5 year comprehensive warranty with annual calibration<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
