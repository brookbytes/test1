import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function VatechRVG() {
  const product = {
    title: "Vatech RVG Sensor",
    description: "Experience cutting-edge digital radiography with the Vatech RVG Sensor, designed for dental professionals who demand exceptional image quality and reliability. This premium digital sensor delivers crystal-clear diagnostic images with advanced CMOS technology, ensuring precise diagnosis and enhanced patient care.",
    features: [
      "Advanced CMOS sensor technology with 20+ lp/mm resolution for exceptional image clarity",
      "Ultra-thin design (only 4.4mm thickness) for maximum patient comfort during procedures",
      "High sensitivity sensor captures detailed images at reduced radiation exposure",
      "USB 3.0 connectivity ensures fast image transfer and real-time viewing",
      "Durable construction with reinforced cable for long-lasting performance",
      "Compatible with all major dental imaging software including Eaglesoft, Dexis, and more",
      "Auto-trigger functionality for seamless integration with X-ray units",
      "Water-resistant design with IP67 rating for easy cleaning and disinfection",
      "Multiple size options available (Size 1 & Size 2) for different diagnostic needs",
      "2-year comprehensive warranty with dedicated technical support"
    ],
    specifications: {
      "Sensor Technology": "CMOS Active Pixel Sensor",
      "Resolution": "20+ lp/mm",
      "Pixel Size": "19.5 μm",
      "Sensor Thickness": "4.4 mm",
      "Active Area": "Size 1: 24.7 x 36.9 mm / Size 2: 30.0 x 40.0 mm",
      "Data Connection": "USB 3.0",
      "Image Format": "DICOM, JPEG, PNG, TIFF",
      "Operating System": "Windows 7/8/10/11, Mac OS",
      "Power Supply": "USB Powered (5V)",
      "Cable Length": "3 meters",
      "Warranty": "2 Years Standard Warranty",
      "Certifications": "CE, FDA, ISO 13485"
    },
    images: [
      "/images/RVGsensors/vatechrvg.jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Vatech RVG Sensor - Premium Digital Dental Sensor | Qualified Dental</title>
        <meta name="description" content="Buy Vatech RVG sensor in Tamil Nadu and Karnataka. Advanced CMOS technology with 20+ lp/mm resolution, ultra-thin design, and 2-year warranty. Get best prices with installation and training." />
        <meta name="keywords" content="Vatech RVG sensor price Tamil Nadu, dental RVG sensor Chennai, digital sensor Karnataka, Vatech sensor Bangalore, dental imaging equipment, RVG sensor for clinic, digital radiography sensor" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vatech RVG Sensor - Premium Digital Dental Sensor" />
        <meta property="og:description" content="Professional Vatech RVG sensor with advanced CMOS technology, 20+ lp/mm resolution, and ultra-thin design for maximum patient comfort." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/RVGsensors/vatechrvg.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/vatechrvg" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vatech RVG Sensor - Premium Digital Dental Sensor" />
        <meta name="twitter:description" content="Advanced Vatech RVG sensor with 20+ lp/mm resolution and 2-year warranty. Available in TN & KA with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/RVGsensors/vatechrvg.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/vatechrvg" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Vatech RVG Sensor",
            "description": "Premium digital dental sensor with advanced CMOS technology, 20+ lp/mm resolution, and ultra-thin design for professional dental imaging",
            "brand": {
              "@type": "Brand",
              "name": "Vatech"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Vatech Corporation"
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
              "value": "CMOS sensor, 20+ lp/mm resolution, USB 3.0 connectivity, 4.4mm thickness"
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
            <h1>Vatech RVG Sensor</h1>
            <p>Premium Digital Dental Imaging Technology</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Vatech RVG Sensor with CMOS technology")}
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 2 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
