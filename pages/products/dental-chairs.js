import Head from 'next/head'
import ImageSlider from '../../components/ImageSlider'
import ProductSEO from '../../components/ProductSEO'
import { openWhatsAppQuote } from '../../utils/whatsapp'
// import ff from '../../Public/images/DentalChairs/Flare/1.png'
const QualifiedV100Images = [
  '/images/DentalChairs/Qualified/QualifiedV100.png',
  '/images/V100.png',
]
const Qualified200Images = [
  '/images/DentalChairs/Qualified/Qualified 200 (1).png',
  '/images/DentalChairs/Qualified/Qualified 200 (2).png',
]
const GnatusS200Images = [
  '/images/Dental Chairs/Gnatus/GnatusS400.png',
  '/images/Dental Chairs/Gnatus/S2001.png',
  '/images/Dental Chairs/Gnatus/S2002.png',
]
const GnatusS300Images = [
  '/images/Dental Chairs/Gnatus/gnatusS400.png',
  '/images/Dental Chairs/Gnatus/S2003.png',
]

const GnatusS400Images = [
  '/images/Dental Chairs/Gnatus/S2003.png',
  '/images/Dental Chairs/Gnatus/S2003.png',
]
const GnatusS500Images = [
  '/images/Dental Chairs/Gnatus/GnatusS500.png',
  '/images/Dental Chairs/Gnatus/GnatusS500 1.png',
]
const UrekaImages = [
  '/images/Dental Chairs/Ureka/ureaka.png',
  '/images/Dental Chairs/Ureka/ureka2.png',
]
const FlareImages = [
  '../../Public/images/DentalChairs/Flare/1.png',
  '/images/Dental Chairs/Flare/2.png',
  '/images/Dental Chairs/Flare/3.png',
  '/images/Dental Chairs/Flare/4.png',
]
const StarImages = [
  '/images/Dental Chairs/stardenatl.jpg'
]

export default function DentalChairs() {
  const products = [
    {
      id: 1,
      title: "Qualified 100 Dental Chair",
      specs: "360° rotation, Memory foam cushioning, LED light system",
      images: QualifiedV100Images
    },
    {
      id: 2,
      title: "Qualified 200 Dental Chair",
      specs: "Manual positioning, Durable hydraulic system, Easy maintenance",
      images: Qualified200Images
    },
    {
      id: 3,
      title: "Gnatus S200 Dental Chair",
      specs: "360° rotation, Memory foam cushioning, LED light system",
      images: GnatusS200Images
    },
    {
      id: 4,
      title: "Gnatus S300 Dental Chair",
      specs: "Advanced positioning, Premium cushioning, LED light system",
      images: GnatusS300Images
    },
    {
      id: 5,
      title: "Gnatus S500 Dental Chair",
      specs: "Premium features, Advanced positioning, LED light system",
      images: GnatusS500Images
    },
    {
      id: 6,
      title: "Ureka Dental Chair",
      specs: "Child-friendly design, Colorful themes, Safety features",
      images: UrekaImages
    },
    {
      id: 7,
      title: "Flare Dental Chair",
      specs: "Modern design, Advanced features, LED light system",
      images: FlareImages
    },
    {
      id: 8,
      title: "Star Dental Chair",
      specs: "Modern design, Advanced features, LED light system",
      images: StarImages
    },
  ]

  return (
    <>
      <ProductSEO 
        title="Buy Premium Dental Chairs Across Tamil Nadu & Karnataka - Gnatus, Qualified, Ureka Brands"
        description="India's largest collection of premium dental chairs available across all districts of Tamil Nadu and Karnataka. Buy Gnatus, Qualified, Ureka dental chairs with professional installation, warranty, and service. Best prices for dental clinic setup in Chennai, Bangalore, Coimbatore, Madurai, Mysuru, and all cities."
        keywords="buy dental chair Tamil Nadu, dental chairs Karnataka, Gnatus dental chair price, Qualified dental chairs, Ureka dental chair, premium dental chairs Chennai, dental chair installation Bangalore, dental clinic setup Coimbatore, dental equipment Madurai, Mysuru dental chairs"
        image="https://www.qualifieddental.in/images/dental-chairs-og.jpg"
        url="https://www.qualifieddental.in/products/dental-chairs"
        productName="Dental Chairs Collection"
        productCategory="Dental Equipment"
        breadcrumbPath={[
          { name: "Products", url: "https://www.qualifieddental.in/products" },
          { name: "Dental Chairs", url: "https://www.qualifieddental.in/products/dental-chairs" }
        ]}
        productImages={[
          "https://www.qualifieddental.in/images/Dental Chairs/Gnatus/S200.png",
          "https://www.qualifieddental.in/images/Dental Chairs/Qualified/QualifiedV100.png",
          "https://www.qualifieddental.in/images/Dental Chairs/Ureka/ureaka.png"
        ]}
        productFeatures={[
          "Premium Brazilian hydraulic systems",
          "Programmable memory positions",
          "Medical-grade anti-bacterial upholstery",
          "Integrated LED operating lights",
          "360° rotation capability",
          "5-year comprehensive warranty",
          "Professional installation service",
          "Free delivery across Tamil Nadu & Karnataka"
        ]}
        manufacturer="Multiple Brands (Gnatus, Qualified, Ureka)"
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
            <h1>Dental Chairs</h1>
            <p>Professional dental chairs designed for comfort, functionality, and durability</p>
          </div>

          <div className="products-grid">
            {products.map(product => {
              let productUrl;
              switch(product.title) {
                case "Qualified 100 Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/qualified100';
                  break;
                case "Qualified 200 Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/qualified200';
                  break;
                case "Gnatus S200 Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/gnatus200';
                  break;
                case "Gnatus S300 Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/gnatus300';
                  break;
                case "Gnatus S500 Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/gnatus500';
                  break;
                case "Ureka Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/ureaka';
                  break;
                case "Flare Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/flare';
                  break;
                case "Star Dental Chair":
                  productUrl = '/products/Dentalchairsproducts/star';
                  break;
                default:
                  const productSlug = product.title.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  productUrl = `/products/Dentalchairsproducts/${productSlug}`;
              }
              
              return (
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
                            window.location.href = productUrl;
                          }
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  )
}
