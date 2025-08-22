import Head from 'next/head';
import Link from 'next/link';
import ImageSlider from '../../../components/ImageSlider';
import { openWhatsAppQuote } from '../../../utils/whatsapp';

export default function EpexApexLocator() {
  const product = {
    title: "Epex Apex Locator",
    description: "Experience cutting-edge endodontic precision with the Epex Apex Locator, engineered for dental professionals who demand exceptional accuracy and advanced functionality. This sophisticated device combines state-of-the-art electronic measurement technology with an intuitive color display, delivering reliable results in root canal procedures. The Epex features advanced multi-frequency technology, real-time visual feedback, and comprehensive measurement capabilities, making it the perfect choice for modern dental practices seeking professional-grade endodontic equipment with enhanced features.",
    features: [
      "Advanced multi-frequency technology for superior accuracy",
      "Large color display with real-time visual feedback",
      "Multi-functional operation modes for various clinical needs",
      "Intelligent auto-calibration system for consistent results",
      "Wireless connectivity for data transfer and updates",
      "Extended battery life with fast charging capability",
      "Ergonomic design with premium grip materials",
      "Comprehensive measurement history and data logging",
      "User-friendly interface with customizable settings",
      "Professional-grade construction with 2-year warranty"
    ],
    specifications: {
      "Device Type": "Advanced Multi-Frequency Apex Locator",
      "Measurement Technology": "Multi-frequency electronic measurement",
      "Display": "Large color LCD with backlight",
      "Power Source": "High-capacity rechargeable battery",
      "Accuracy": "±0.3mm precision measurement",
      "Operating Modes": "Multiple clinical and diagnostic modes",
      "Connectivity": "Wireless data transfer capability",
      "Indicators": "Visual, audio, and vibration alerts",
      "Dimensions": "Ergonomic handheld design",
      "Weight": "Balanced professional build",
      "Battery Life": "12+ hours continuous operation",
      "Charging": "Fast charging with USB-C",
      "Data Storage": "Internal memory for measurements",
      "Warranty": "2 Years comprehensive warranty"
    },
    images: [
      "/images/Apex locator/epex.jpg"
    ]
  };

  return (
    <>
      <Head>
        <title>Epex Apex Locator - Advanced Multi-Frequency Endodontic Device | Qualified Dental</title>
        <meta name="description" content="Discover the Epex Apex Locator - advanced multi-frequency endodontic device with color display, ±0.3mm accuracy, wireless connectivity, and 2-year warranty. Perfect for precise root canal measurements with enhanced features." />
        <meta name="keywords" content="Epex apex locator price, multi-frequency dental apex locator Tamil Nadu, advanced endodontic equipment Chennai, color display apex locator Karnataka, wireless dental equipment Bangalore, professional root canal measurement" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Epex Apex Locator - Advanced Multi-Frequency Endodontic Device" />
        <meta property="og:description" content="Advanced multi-frequency apex locator with color display, ±0.3mm accuracy, wireless connectivity, and 2-year warranty. Perfect for precise root canal measurements with enhanced features." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Apex locator/epex.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Smallequipments/epexapex" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Epex Apex Locator" />
        <meta name="twitter:description" content="Advanced multi-frequency apex locator with color display, ±0.3mm accuracy, wireless connectivity, and 2-year warranty. Perfect for precise root canal measurements with enhanced features." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Apex locator/epex.jpg" />
      </Head>

      <main>
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .page-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .page-header h1 {
            font-size: 2.5rem;
            color: #333333;
            margin-bottom: 0.5rem;
          }

          .page-header p {
            font-size: 1.2rem;
            color: #666666;
          }

          .product-detail-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-bottom: 2rem;
          }

          .product-image-section {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 2rem;
          }

          .product-info-section {
            background: #ffffff;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

          .back-link {
            color: #00FFD1;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .back-link:hover {
            color: #00CCB8;
            text-decoration: underline;
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
            <h1>Epex Apex Locator</h1>
            <p>Advanced multi-frequency endodontic device with enhanced features</p>
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
                  onClick={() => openWhatsAppQuote(product.title, product.title)}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
                <div style={{ marginTop: '1rem' }}>
                  <Link href="/products/Smallequipments" className="back-link">
                    ← Back to Small Equipment Grid
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
