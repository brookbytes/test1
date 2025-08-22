import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function WoodpeckerBlackProbe() {
  const product = {
    title: "Woodpecker Black Probe Apex Locator",
    description: "The Woodpecker Black Probe represents cutting-edge technology in endodontic diagnostics, providing precise root canal length measurement with advanced multi-frequency impedance technology. This premium apex locator features a sleek black design with intuitive touchscreen interface, delivering accurate readings even in wet conditions. Designed for modern endodontic practices, it offers real-time visualization of file progression, automatic calibration, and enhanced patient safety through precise apex detection. The device includes comprehensive measurement modes and data storage capabilities, making it ideal for complex endodontic procedures.",
    features: [
      "Advanced multi-frequency impedance technology for precise measurements",
      "Sleek black design with premium build quality",
      "Large touchscreen display with intuitive interface",
      "Accurate readings even in wet canal conditions",
      "Real-time visualization of file progression",
      "Automatic calibration system",
      "Enhanced patient safety with precise apex detection",
      "Multiple measurement modes (Root Canal, Perio, etc.)",
      "Data storage and recall capabilities",
      "USB connectivity for data transfer",
      "Rechargeable lithium battery with long life",
      "Compact and portable design",
      "CE certified with 1 year warranty"
    ],
    specifications: {
      "Device Type": "Digital Apex Locator",
      "Technology": "Multi-frequency Impedance",
      "Display": "5.7 inch Color Touchscreen",
      "Measurement Accuracy": "±0.5mm",
      "Battery": "Rechargeable Lithium 3.7V",
      "Battery Life": "8 hours continuous use",
      "Charging Time": "2 hours",
      "Connectivity": "USB 2.0",
      "Dimensions": "138mm x 110mm x 85mm",
      "Weight": "350g",
      "Operating Temperature": "5°C - 40°C",
      "Storage Temperature": "-10°C - 50°C",
      "Warranty": "1 Year Comprehensive",
      "Certification": "CE, FDA, ISO 13485"
    },
    images: [
      "/images/woodpecker lightcure/Woodepecker black probe.jpg",
      "/images/woodpecker lightcure/Woodepecker black min s.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Woodpecker Black Probe Apex Locator - Advanced Endodontic Device | Qualified Dental</title>
        <meta name="description" content="Buy Woodpecker Black Probe apex locator in Tamil Nadu and Karnataka. Multi-frequency technology, touchscreen display, precise measurements. Get quote for best prices with training." />
        <meta name="keywords" content="Woodpecker Black Probe price Tamil Nadu, apex locator Chennai, endodontic device Karnataka, root canal measurement Bangalore, dental apex locator" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Woodpecker Black Probe Apex Locator - Advanced Endodontic Device" />
        <meta property="og:description" content="Premium Woodpecker Black Probe apex locator with multi-frequency technology and touchscreen display. Available in Tamil Nadu and Karnataka with training support." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Apex locator/Woodepecker black probe.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/woodpeckerblackprobe" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Woodpecker Black Probe Apex Locator" />
        <meta name="twitter:description" content="Advanced apex locator with multi-frequency technology and touchscreen display. Available in TN & KA with training." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Apex locator/Woodepecker black probe.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Smallequipments/woodpeckerblackprobe" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Woodpecker Black Probe Apex Locator",
            "description": "Advanced apex locator with multi-frequency impedance technology for precise root canal measurements",
            "brand": {
              "@type": "Brand",
              "name": "Woodpecker"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Woodpecker Medical Instrument"
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

            .product-cta {
              text-align: center;
            }
          }
        `}</style>
        <div className="container">
          <div className="page-header">
            <h1>Woodpecker Black Probe Apex Locator</h1>
            <p>Advanced endodontic device with multi-frequency technology for precise root canal measurements</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Woodpecker Black Probe Apex Locator")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free training & support<br/>
                ✓ 1 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
