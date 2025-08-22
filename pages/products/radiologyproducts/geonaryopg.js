import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function GeonaryOPG() {
  const product = {
    title: "Geonary OPG Digital Panoramic System",
    description: "State-of-the-art digital panoramic imaging system designed for comprehensive dental radiography. The Geonary OPG delivers exceptional image quality with advanced digital technology, providing crystal-clear panoramic views for accurate diagnosis and treatment planning in general dentistry, orthodontics, and oral surgery applications.",
    features: [
      "High-resolution digital panoramic imaging with 0.1mm pixel resolution",
      "Ultra-fast scanning time of just 9-14 seconds for patient comfort",
      "Multiple imaging programs: panoramic, TMJ, and sinus views",
      "Advanced automatic exposure control (AEC) for optimal image quality",
      "Low radiation dose with digital sensor technology",
      "Real-time image preview and enhancement capabilities",
      "Automatic patient positioning with laser guides",
      "Adjustable focal trough for different arch sizes",
      "Pediatric and adult imaging modes",
      "DICOM 3.0 compliant for seamless integration",
      "Touch-screen operation with intuitive interface",
      "Compact design suitable for small clinic spaces",
      "CE certified and FDA approved for medical imaging"
    ],
    specifications: {
      "Technology": "Digital Panoramic Radiography",
      "Image Resolution": "0.1mm pixel size",
      "Scan Time": "9-14 seconds",
      "Focal Trough": "Adjustable 110-150mm",
      "X-ray Tube": "High-frequency DC generator, 60-90kV",
      "Detector": "CMOS digital sensor",
      "Magnification": "1.2x - 1.3x",
      "Power Supply": "220V/50Hz Single Phase",
      "Power Consumption": "500W",
      "Dimensions": "600mm x 800mm x 1600mm",
      "Weight": "120 kg",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/RVGsensors/OPG and CPT/Geonaryopg (1).png",
      "/images/RVGsensors/OPG and CPT/Geonaryopg (2).png"
    ]
  }

  return (
    <>
      <Head>
        <title>Geonary OPG - Digital Panoramic Imaging System | Qualified Dental</title>
        <meta name="description" content="Buy Geonary OPG digital panoramic system for dental clinics in Tamil Nadu and Karnataka. High-resolution imaging with low radiation dose. Get quote for best prices with installation and training." />
        <meta name="keywords" content="Geonary OPG price Tamil Nadu, digital panoramic system Chennai, dental OPG Karnataka, panoramic x-ray Bangalore, dental imaging equipment, oral radiology, digital x-ray system" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Geonary OPG - Digital Panoramic Imaging System" />
        <meta property="og:description" content="State-of-the-art digital panoramic imaging system with high-resolution imaging, low radiation dose, and advanced digital technology for dental clinics." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/RVGsensors/OPG and CPT/Geonaryopg (1).png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/geonaryopg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Geonary OPG - Digital Panoramic Imaging System" />
        <meta name="twitter:description" content="High-resolution digital panoramic system with low radiation dose and advanced imaging capabilities." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/RVGsensors/OPG and CPT/Geonaryopg (1).png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/geonaryopg" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Geonary OPG Digital Panoramic System",
            "description": "State-of-the-art digital panoramic imaging system for comprehensive dental radiography with advanced digital technology",
            "brand": {
              "@type": "Brand",
              "name": "Geonary"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Geonary Medical Systems"
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
              "value": "Digital panoramic radiography, 0.1mm resolution, 9-14 second scan time"
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
            <h1>Geonary OPG</h1>
            <p>Digital Panoramic Imaging System</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Geonary OPG digital panoramic system")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 years warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
