import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import ProductSEO from '../../../components/ProductSEO'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Qualified100Chair() {
  const product = {
    title: "Qualified 100 Dental Chair",
    description: "The Qualified 100 represents the perfect balance of advanced technology and affordability in modern dental chairs. Designed for discerning dental professionals who demand precision, comfort, and reliability, this state-of-the-art chair combines ergonomic excellence with cutting-edge functionality. Featuring smooth hydraulic operation, programmable positioning, and premium upholstery, the Qualified 100 ensures optimal patient comfort while providing dentists with exceptional access and control during procedures.",
    features: [
      "Advanced hydraulic system with whisper-quiet operation and precise positioning control",
      "Programmable memory positions for quick access to preferred working positions",
      "Premium medical-grade leather upholstery with seamless design for easy cleaning",
      "Ergonomic double-articulating headrest with height and angle adjustment",
      "Integrated LED operating light with adjustable intensity and color temperature",
      "Multi-functional foot control with hands-free operation capability",
      "Emergency stop button and safety lock system for patient protection",
      "Smooth 180° rotating capability for optimal dentist access",
      "Heavy-duty casters with individual locking mechanisms for stability",
      "5-year comprehensive warranty with lifetime technical support"
    ],
    specifications: {
      "Chair Type": "Hydraulic Dental Chair",
      "Motor Power": "1.5 HP Silent Motor",
      "Voltage": "220V/50Hz Single Phase",
      "Weight Capacity": "200 kg maximum patient weight",
      "Chair Height Range": "450mm - 850mm adjustable",
      "Backrest Recline": "0° - 70° multi-angle positioning",
      "Seat Tilt": "0° - 15° Trendelenburg position",
      "Rotation": "180° smooth rotation capability",
      "Upholstery": "Medical-grade seamless leather",
      "Lighting": "LED 50,000 hour lifespan",
      "Control System": "Digital touch panel with memory",
      "Safety Features": "Emergency stop, safety lock",
      "Warranty": "5 Years comprehensive coverage"
    },
    images: [
      "/images/Dental Chairs/Qualified/QualifiedV100.png",
      "/images/Dental Chairs/Qualified/V100.png"
    ]
  }

  return (
    <>
      <ProductSEO 
        title="Qualified 100 Dental Chair - Premium Hydraulic Dental Chair Tamil Nadu & Karnataka | 牙科椅"
        description="Buy Qualified 100 Premium Hydraulic Dental Chair with advanced features across all districts of Tamil Nadu and Karnataka. Programmable positions, LED lighting, 5-year warranty. Best price for dental chairs in Chennai, Bangalore, Coimbatore, Madurai, Mysuru, and all cities. 高压牙科椅 with installation service."
        keywords="Qualified 100 dental chair price Tamil Nadu, buy hydraulic dental chair Karnataka, premium dental chair Chennai, advanced dental chair Bangalore, Qualified dental chair Coimbatore, dental chair with LED light Madurai, programmable dental chair Mysuru, dental equipment Tamil Nadu, 牙科椅, 高压灭菌牙科椅, 牙科设备, dental chair China, dental equipment Hong Kong"
        image="https://www.qualifieddental.in/images/Dental Chairs/Qualified/QualifiedV100.png"
        url="https://www.qualifieddental.in/products/Dentalchairsproducts/qualified100"
        productName="Qualified 100 Dental Chair"
        productCategory="Dental Equipment"
        breadcrumbPath={[
          { name: "Products", url: "https://www.qualifieddental.in/products" },
          { name: "Dental Chairs", url: "https://www.qualifieddental.in/products/dental-chairs" },
          { name: "Qualified 100", url: "https://www.qualifieddental.in/products/Dentalchairsproducts/qualified100" }
        ]}
        productImages={[
          "https://www.qualifieddental.in/images/Dental Chairs/Qualified/QualifiedV100.png",
          "https://www.qualifieddental.in/images/Dental Chairs/Qualified/V100.png"
        ]}
        productFeatures={product.features}
        productSpecifications={product.specifications}
        manufacturer="Qualified Dental Systems"
        model="Qualified 100"
        price="Contact for best price"
        availability="InStock"
        // Internationalization props
        chineseName="合格100牙科椅"
        chineseDescription="合格100牙科椅 - 高级液压牙科椅，具有可编程位置、LED照明和5年保修。在泰米尔纳德邦和卡纳塔克邦所有地区提供安装服务。"
        chineseKeywords="牙科椅价格, 液压牙科椅, 高级牙科椅, 牙科设备, 牙科椅中国, 香港牙科设备"
      />

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
            <h1>Qualified 100 Dental Chair</h1>
            <p>Premium quality dental chair with advanced hydraulic system and 5-year warranty</p>
          </div>

          <div className="product-detail-container">
            <div className="product-image-section">
              <ImageSlider images={product.images} />
            </div>

            <div className="product-info-section" itemScope itemType="https://schema.org/Product">
              <h2 itemProp="name">{product.title}</h2>
              
              <div className="product-description" itemProp="description">
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>Key Features</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index} itemProp="feature">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-specifications">
                <h3>Technical Specifications</h3>
                <div className="specs-grid">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="spec-item" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                      <span className="spec-label" itemProp="name">{key}:</span>
                      <span className="spec-value" itemProp="value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-cta">
                <button 
                  className="quote-btn-large"
                  onClick={() => openWhatsAppQuote(product.title, "Qualified 100 Dental Chair")}
                  itemProp="offers" itemScope itemType="https://schema.org/Offer"
                >
                  Get Quote
                </button>
                <p className="service-info">✓ Free installation & training<br/>
                ✓ 5 year comprehensive warranty<br/>
                ✓ Service across Tamil Nadu & Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
