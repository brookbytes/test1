import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function FindPexApex() {
  const product = {
    title: "FindPex Apex Locator",
    description: "Experience precision endodontics with the FindPex Apex Locator, a cutting-edge electronic device designed for accurate root canal length determination. This advanced apex locator utilizes multi-frequency technology to provide real-time, precise measurements regardless of fluid conditions in the root canal. With its intuitive color LCD display and ergonomic design, FindPex ensures optimal treatment outcomes while minimizing patient discomfort. The device features automatic calibration, pulp vitality testing capabilities, and exceptional accuracy even in wet conditions, making it an indispensable tool for modern endodontic procedures.",
    features: [
      "Advanced multi-frequency technology for 97.5% measurement accuracy regardless of canal conditions",
      "Large 3.5-inch color LCD display with high-resolution graphics and intuitive interface",
      "Real-time apex detection with audio and visual alerts for precise working length determination",
      "Automatic calibration system eliminates manual adjustments and ensures consistent accuracy",
      "Pulp vitality testing function with adjustable current levels for comprehensive diagnostics",
      "IPX7 waterproof rating - operates reliably even in heavily irrigated canals",
      "Rechargeable lithium-ion battery provides 8+ hours continuous operation",
      "Compact, lightweight design (120g) for comfortable handheld use during procedures",
      "Memory function stores up to 50 patient measurements for treatment documentation",
      "5-year warranty with lifetime technical support and calibration service"
    ],
    specifications: {
      "Device Type": "Electronic Apex Locator with Pulp Tester",
      "Technology": "Multi-frequency impedance measurement",
      "Accuracy": "97.5% within ±0.5mm of apex",
      "Display": "3.5-inch TFT Color LCD (320x240 pixels)",
      "Measurement Range": "0.0 - 30.0mm (apex to reference point)",
      "Battery Type": "Rechargeable Li-ion 3.7V 2000mAh",
      "Battery Life": "8+ hours continuous / 72 hours standby",
      "Charging Time": "2.5 hours via USB-C fast charging",
      "Waterproof Rating": "IPX7 (immersion up to 1 meter)",
      "Dimensions": "125mm x 75mm x 25mm (L x W x H)",
      "Weight": "120g including battery",
      "Operating Conditions": "5°C - 40°C, 15% - 85% RH",
      "Memory Capacity": "50 patient records with date/time stamp",
      "Accessories": "Lip hook, file clip, probe cord, calibration kit",
      "Certifications": "CE, FDA, ISO 13485 medical device standards",
      "Warranty": "5 years comprehensive with calibration service"
    },
    images: [
      "/images/Apex locator/Findpex.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>FindPex Apex Locator - Precision Endodontics | Qualified Dental</title>
        <meta name="description" content="FindPex Apex Locator with 97.5% accuracy, multi-frequency technology, color LCD display, and pulp testing. Available across Tamil Nadu and Karnataka with professional training." />
        <meta name="keywords" content="FindPex apex locator price, endodontic apex locator Tamil Nadu, root canal length measurement device Chennai, dental apex locator Karnataka, electronic apex locator Bangalore, endodontic equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FindPex Apex Locator - Precision Endodontics" />
        <meta property="og:description" content="Advanced apex locator with 97.5% accuracy, multi-frequency technology, color display, and pulp testing. Perfect for precise root canal treatments." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Apex locator/Findpex.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/findpexapex" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FindPex Apex Locator" />
        <meta name="twitter:description" content="97.5% accurate apex locator with color display and pulp testing. Available in TN & KA with training." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Apex locator/Findpex.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/findpexapex" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "FindPex Apex Locator",
            "description": "Advanced electronic apex locator with multi-frequency technology for precise root canal length measurement and pulp vitality testing",
            "brand": {
              "@type": "Brand",
              "name": "FindPex"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "FindPex Medical"
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
            <h1>FindPex Apex Locator</h1>
            <p>97.5% accurate root canal measurement with advanced multi-frequency technology</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "FindPex Apex Locator")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Professional training & calibration included<br/>
                ✓ 5 year comprehensive warranty with calibration service<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
