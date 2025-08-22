import Head from 'next/head'
import ImageSlider from '../../components/ImageSlider'
import ProductSEO from '../../components/ProductSEO'
import { openWhatsAppQuote } from '../../utils/whatsapp'

export default function Autoclaves() {
  const products = [
    {
      id: 1,
      title: "Cooker Autoclave",
      specs: "Pre-vacuum sterilization, 18L capacity, Digital display",
      images: [
        "/images/Autoclaves/Cooker Autoclave.jpg",
        "/images/Autoclaves/Cooker Autoclave1.jpg",
        "/images/Autoclaves/Cooker Autoclave2.jpg"
      ],
      url: "/products/Autoclaveproducts/cookerautoclave"
    },
    {
      id: 2,
      title: "Indian Autoclave",
      specs: "Compact design, Quick cycles, Easy operation",
      images: [
        "/images/Autoclaves/Indian Autoclave (1).jpg",
        "/images/Autoclaves/Indian Autoclave (2).jpg"
      ],
      url: "/products/Autoclaveproducts/indianautoclave"
    },
    {
      id: 3,
      title: "Rynes Touch Screen Autoclave",
      specs: "High-pressure steam, Multiple trays, Safety features",
      images: [
        "/images/Autoclaves/rynes touch screen Autoclave (1).jpg",
        "/images/Autoclaves/rynes touch screen Autoclave (2).jpg"
      ],
      url: "/products/Autoclaveproducts/rynestouch"
    }
  ]

  return (
    <>
      <ProductSEO 
        title="Buy Premium Dental Autoclaves Across Tamil Nadu & Karnataka - Class B Sterilizers"
        description="India's leading supplier of premium dental autoclaves serving all districts of Tamil Nadu and Karnataka. Buy Class B sterilizers, steam autoclaves, and table-top sterilizers with professional installation, warranty, and service. Best prices for dental sterilization equipment in Chennai, Bangalore, Coimbatore, Madurai, Mysuru, and all cities."
        keywords="buy dental autoclave Tamil Nadu, dental autoclave Karnataka, class B autoclave Chennai, steam sterilizer Bangalore, dental sterilization equipment Tamil Nadu, autoclave for dental clinic Karnataka, instrument sterilizer Coimbatore, dental autoclave price Madurai, sterilizer equipment Mysuru"
        image="https://www.qualifieddental.in/images/autoclaves-og.jpg"
        url="https://www.qualifieddental.in/products/autoclaves"
        productName="Dental Autoclaves & Sterilizers Collection"
        productCategory="Dental Sterilization Equipment"
        breadcrumbPath={[
          { name: "Products", url: "https://www.qualifieddental.in/products" },
          { name: "Autoclaves", url: "https://www.qualifieddental.in/products/autoclaves" }
        ]}
        productImages={[
          "https://www.qualifieddental.in/images/Autoclaves/Cooker Autoclave.jpg",
          "https://www.qualifieddental.in/images/Autoclaves/Indian Autoclave (1).jpg",
          "https://www.qualifieddental.in/images/Autoclaves/rynes touch screen Autoclave (1).jpg"
        ]}
        productFeatures={[
          "Class B sterilization technology",
          "Pre-vacuum steam sterilization",
          "Digital temperature and pressure control",
          "Multiple tray capacity",
          "Automatic cycle programming",
          "Safety lock mechanisms",
          "Energy efficient operation",
          "Professional installation service",
          "Comprehensive warranty coverage",
          "Free delivery across Tamil Nadu & Karnataka"
        ]}
        manufacturer="Multiple Brands (Cooker, Indian, Rynes)"
      />

      <main className="product-page">
        <style jsx>{`
          .button-group {
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
            flex-wrap: wrap;
          }
          
          .quote-btn,
          .view-details-btn {
            background: linear-gradient(135deg, #00FFD1, #00CCB8);
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            flex: 1;
            min-width: 100px;
            box-shadow: 0 4px 20px rgba(0, 255, 209, 0.1);
          }
          
          .quote-btn:hover,
          .view-details-btn:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 0 20px rgba(0, 255, 209, 0.3);
          }
          
          @media (max-width: 768px) {
            .button-group {
              flex-direction: column;
            }
            
            .quote-btn,
            .view-details-btn {
              width: 100%;
            }
          }
        `}</style>
        <div className="container">
          <div className="page-header">
            <h1>Autoclaves & Sterilizers</h1>
            <p>Professional sterilization equipment for safe and hygienic dental practice</p>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-images">
                  <ImageSlider images={product.images} />
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="product-specs">{product.specs}</p>
                  <div className="button-group">
                    <button 
                      className="quote-btn"
                      onClick={() => openWhatsAppQuote(product.title, product.specs)}
                    >
                      Get Quote
                    </button>
                    <button 
                      className="view-details-btn"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          window.location.href = product.url;
                        }
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
