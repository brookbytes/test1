import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Geonary3D() {
  const product = {
    title: "Geonary 3D CBCT Imaging System",
    description: "Advanced 3D cone beam computed tomography system designed specifically for dental and maxillofacial imaging. The Geonary 3D delivers exceptional image quality with ultra-low radiation dose, providing comprehensive diagnostic capabilities for implant planning, orthodontics, endodontics, and oral surgery applications.",
    features: [
      "Ultra-high resolution 3D imaging with voxel sizes as low as 0.075mm",
      "Large field of view options: 5x5cm to 15x15cm for full arch scanning",
      "Ultra-low radiation dose with ALARA principle compliance",
      "Advanced metal artifact reduction technology for clear images",
      "Real-time 3D reconstruction with 30-second scan time",
      "Multi-planar reconstruction (MPR) with cross-sectional views",
      "Integrated implant planning software with nerve canal marking",
      "Airway analysis tools for sleep apnea assessment",
      "Panoramic and cephalometric imaging modes included",
      "Touch-screen operation with intuitive user interface",
      "DICOM 3.0 compliant for seamless PACS integration",
      "CE certified and FDA approved for medical imaging"
    ],
    specifications: {
      "Technology": "Cone Beam Computed Tomography (CBCT)",
      "Voxel Size": "0.075mm - 0.4mm selectable",
      "Field of View": "5x5cm to 15x15cm selectable",
      "Scan Time": "8-30 seconds depending on FOV",
      "Reconstruction Time": "Real-time (30 seconds)",
      "X-ray Tube": "High-frequency DC generator, 90kV/10mA",
      "Detector": "CMOS flat panel detector",
      "Software": "Integrated 3D imaging and analysis suite",
      "Power Supply": "220V/50Hz Single Phase",
      "Power Consumption": "800W",
      "Dimensions": "750mm x 1100mm x 1800mm",
      "Weight": "280 kg",
      "Warranty": "2 Years Standard Warranty"
    },
    images: [
      "/images/RVGsensors/OPG and CPT/Geonary3d (1).png",
      "/images/RVGsensors/OPG and CPT/Geonary3d (2).png"
    ]
  }

  return (
    <>
      <Head>
        <title>Geonary 3D CBCT - Advanced Dental Imaging System | Qualified Dental</title>
        <meta name="description" content="Buy Geonary 3D CBCT system for dental clinics in Tamil Nadu and Karnataka. Advanced 3D imaging with ultra-low dose, implant planning software. Get quote for best prices with installation and training." />
        <meta name="keywords" content="Geonary 3D CBCT price Tamil Nadu, dental 3D imaging Chennai, CBCT scanner Karnataka, cone beam CT Bangalore, dental implant planning, 3D radiology equipment, oral surgery imaging" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Geonary 3D CBCT - Advanced Dental Imaging System" />
        <meta property="og:description" content="Advanced 3D CBCT system for dental clinics with ultra-low radiation dose, comprehensive diagnostic capabilities, and integrated implant planning software." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/RVGsensors/OPG and CPT/Geonary3d (1).png" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/radiologyproducts/geonary3d" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Geonary 3D CBCT - Advanced Dental Imaging System" />
        <meta name="twitter:description" content="Ultra-low dose 3D CBCT for dental clinics with implant planning and comprehensive diagnostic capabilities." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/RVGsensors/OPG and CPT/Geonary3d (1).png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/radiologyproducts/geonary3d" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Geonary 3D CBCT Imaging System",
            "description": "Advanced 3D cone beam computed tomography system for dental and maxillofacial imaging with ultra-low radiation dose",
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
              "value": "CBCT technology, 0.075mm voxel size, 15x15cm FOV, ultra-low dose"
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
            <h1>Geonary 3D CBCT</h1>
            <p>Advanced Dental 3D Imaging System</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Geonary 3D CBCT system")}
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
