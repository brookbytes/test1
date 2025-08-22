import Head from 'next/head'
import ImageSlider from '../../../components/ImageSlider'
import ProductSEO from '../../../components/ProductSEO'
import { openWhatsAppQuote } from '../../../utils/whatsapp'

export default function Qualified200DentalChair() {
  const product = {
    title: "Qualified 200 Dental Chair",
    description: "The Qualified 200 represents the pinnacle of dental chair engineering, combining cutting-edge technology with ergonomic excellence. This premium dental unit features advanced hydraulic systems, integrated LED lighting, and intuitive touch-screen controls. Designed for modern dental practices, it offers exceptional patient comfort with memory foam upholstery and smooth, quiet operation. The chair includes a comprehensive delivery system with high-speed handpieces, ultrasonic scaler, and LED curing light, making it ideal for general dentistry, endodontics, and cosmetic procedures.",
    features: [
      "Advanced hydraulic lift system with smooth, quiet operation",
      "Premium memory foam upholstery for maximum patient comfort",
      "Integrated LED operating light with adjustable intensity",
      "Touch-screen control panel with preset positions",
      "Multi-functional foot control for hands-free operation",
      "Built-in ultrasonic scaler with LED display",
      "High-speed handpiece with fiber optic illumination",
      "LED curing light with multiple wavelength options",
      "Automatic cup filler and spittoon flush system",
      "Emergency stop button for safety",
      "Memory foam headrest with adjustable positioning",
      "LED X-ray viewer integrated into chair",
      "USB charging ports for patient convenience",
      "CE certified with 2 year comprehensive warranty"
    ],
    specifications: {
      "Chair Type": "Hydraulic Dental Chair",
      "Motor Power": "1.5 HP Silent Motor",
      "Voltage": "220V/50Hz Single Phase",
      "Chair Movement": "Smooth Hydraulic System",
      "Maximum Load": "200 kg",
      "Chair Positions": "9 Preset + Manual",
      "Upholstery": "Premium Memory Foam",
      "Operating Light": "LED with 50,000 Lux",
      "Handpieces": "3 High-speed + 1 Low-speed",
      "Scaler": "Ultrasonic with LED Display",
      "Curing Light": "LED 450-490nm Wavelength",
      "Dimensions": "1200mm x 800mm x 1200mm",
      "Weight": "180 kg",
      "Warranty": "2 Years Comprehensive",
      "Certification": "CE, ISO 13485"
    },
    images: [
      "/images/Dental Chairs/Qualified/Qualified 200 (1).png",
      "/images/Dental Chairs/Qualified/Qualified 200 (2).png"
    ]
  }

  return (
    <>
      <ProductSEO 
        title="Qualified 200 Dental Chair - Premium Hydraulic Dental Chair Tamil Nadu & Karnataka | 牙科椅"
        description="Buy Qualified 200 Premium Hydraulic Dental Chair with advanced features across all districts of Tamil Nadu and Karnataka. Touch-screen controls, LED lighting, 2-year warranty. Best price for premium dental chairs in Chennai, Bangalore, Coimbatore, Madurai, Mysuru, and all cities. 高级牙科椅 with installation service."
        keywords="Qualified 200 dental chair price Tamil Nadu, buy hydraulic dental chair Karnataka, premium dental chair Chennai, advanced dental chair Bangalore, Qualified dental chair Coimbatore, dental chair with touch screen Madurai, programmable dental chair Mysuru, dental equipment Tamil Nadu, 牙科椅, 高级牙科椅, 牙科设备, dental chair China, dental equipment Hong Kong"
        image="https://www.qualifieddental.in/images/Dental Chairs/Qualified/Qualified 200 (1).png"
        url="https://www.qualifieddental.in/products/Dentalchairsproducts/qualified200"
        productName="Qualified 200 Dental Chair"
        productCategory="Dental Equipment"
        breadcrumbPath={[
          { name: "Products", url: "https://www.qualifieddental.in/products" },
          { name: "Dental Chairs", url: "https://www.qualifieddental.in/products/dental-chairs" },
          { name: "Qualified 200", url: "https://www.qualifieddental.in/products/Dentalchairsproducts/qualified200" }
        ]}
        productImages={[
          "https://www.qualifieddental.in/images/Dental Chairs/Qualified/Qualified 200 (1).png",
          "https://www.qualifieddental.in/images/Dental Chairs/Qualified/Qualified 200 (2).png"
        ]}
        productFeatures={product.features}
        productSpecifications={product.specifications}
        manufacturer="Qualified Dental Systems"
        model="Qualified 200"
        price="Contact for best price"
        availability="InStock"
        // Internationalization props
        chineseName="合格200牙科椅"
        chineseDescription="合格200牙科椅 - 高级液压牙科椅，具有触摸屏控制、LED照明和2年保修。在泰米尔纳德邦和卡纳塔克邦所有地区提供安装服务。"
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

            .product-cta {
              text-align: center;
            }
          }
        `}</style>
        <div className="container">
          <div className="page-header">
            <h1>Qualified 200 Dental Chair</h1>
            <p>Premium hydraulic dental chair with advanced LED lighting and touch-screen controls</p>
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
                  onClick={() => openWhatsAppQuote(product.title, "Qualified 200 Premium Dental Chair")}
                  itemProp="offers" itemScope itemType="https://schema.org/Offer"
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
