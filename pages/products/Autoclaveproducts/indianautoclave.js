import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function IndianAutoclave() {
  const product = {
    title: "Indian Autoclave",
    description: "Premium quality Indian autoclave designed specifically for dental clinics and hospitals. This compact yet powerful sterilization unit ensures complete instrument sterilization with advanced safety features and user-friendly operation.",
    features: [
      "Compact tabletop design perfect for small to medium dental clinics",
      "18-liter chamber capacity for efficient sterilization cycles",
      "Fully automatic operation with digital display and touch controls",
      "Multiple sterilization programs: 121°C and 134°C cycles",
      "Pre-vacuum and post-vacuum drying system for complete moisture removal",
      "Safety door locking system prevents opening during operation",
      "Stainless steel chamber construction for durability and hygiene",
      "Low water consumption with automatic water level detection",
      "Built-in printer option for cycle documentation",
      "CE certified and FDA approved for medical use"
    ],
    specifications: {
      "Chamber Capacity": "18 Liters",
      "Sterilization Temperature": "121°C / 134°C",
      "Working Pressure": "1.1-2.3 bar",
      "Power Supply": "220V/50Hz Single Phase",
      "Power Consumption": "1800W",
      "Chamber Dimensions": "250mm x 350mm",
      "Overall Dimensions": "445mm x 400mm x 640mm",
      "Net Weight": "48 kg",
      "Material": "Stainless Steel 304 Grade",
      "Warranty": "1 Year Standard Warranty"
    },
    images: [
      "/images/Autoclaves/Indian Autoclave (2).jpg"
    ]
  }

  return (
    <>
      <Head>
        <title>Indian Autoclave - Premium Dental Sterilizer | Qualified Dental</title>
        <meta name="description" content="Buy Indian autoclave for dental clinics in Tamil Nadu and Karnataka. 18L capacity, Class B sterilizer with advanced features. Get quote for best prices with installation service." />
        <meta name="keywords" content="Indian autoclave price Tamil Nadu, dental autoclave Chennai, sterilizer Karnataka, 18L autoclave Bangalore, dental sterilization equipment, autoclave for clinic, Indian made autoclave" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Indian Autoclave - Premium Dental Sterilizer" />
        <meta property="og:description" content="Premium Indian autoclave for dental clinics with 18L capacity, Class B sterilization, and advanced safety features. Available in Tamil Nadu and Karnataka." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/Autoclaves/Indian Autoclave (1).jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/Autoclaveproducts/indianautoclave" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indian Autoclave - Premium Dental Sterilizer" />
        <meta name="twitter:description" content="18L Indian autoclave for dental clinics with Class B sterilization and advanced features. Available in TN & KA." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/Autoclaves/Indian Autoclave (1).jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/Autoclaveproducts/indianautoclave" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Indian Autoclave",
            "description": "Premium quality Indian autoclave for dental clinics with 18L capacity and advanced sterilization features",
            "brand": {
              "@type": "Brand",
              "name": "Indian Autoclave"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Indian Healthcare Equipment"
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
              "value": "18L capacity, 121°C/134°C sterilization, 220V operation"
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
            <h1>Indian Autoclave</h1>
            <p>Premium Dental Sterilization Equipment</p>
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
