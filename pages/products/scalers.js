import Head from 'next/head'
import ImageSlider from '../../components/ImageSlider'
import { openWhatsAppQuote } from '../../utils/whatsapp'

export default function Scalers() {
  const products = [
    // APEX LOCATOR PRODUCTS
    {
      id: 1,
      title: "Aipex Apex Locator",
      specs: "Advanced apex locator with real-time display, high precision measurements, and user-friendly interface",
      images: ['/images/Apex locator/Aipex.jpg']
    },
    {
      id: 2,
      title: "Minpex Apex Locator",
      specs: "Compact design with high precision measurements, multiple working modes, and reliable performance",
      images: ['/images/Apex locator/minpex.jpg']
    },
    {
      id: 3,
      title: "Epex Apex Locator",
      specs: "Advanced technology with clear display, reliable performance, and accurate measurements",
      images: ['/images/Apex locator/epex.jpg']
    },
    {
      id: 4,
      title: "Findpex Apex Locator",
      specs: "Easy operation with accurate results, durable build quality, and professional-grade precision",
      images: ['/images/Apex locator/Findpex.jpg']
    },
    {
      id: 5,
      title: "Woodpex III Apex Locator",
      specs: "Latest technology with color display, multiple functions, and premium build quality",
      images: [
        '/images/Apex locator/woodepexiii (1).jpg',
        '/images/Apex locator/woodepexiii (2).jpg'
      ]
    },
    {
      id: 6,
      title: "Woodpex V Apex Locator",
      specs: "Premium model with advanced features and high precision measurements",
      images: ['/images/Apex locator/woodpexv.jpg']
    },

    // SCALAR PRODUCTS
    {
      id: 7,
      title: "Udes E-LED Scaler",
      specs: "High efficiency LED scaler with ergonomic design and multiple modes",
      images: ['/images/Scalar/Udes E led.webp']
    },
    {
      id: 8,
      title: "UDS-J Scaler",
      specs: "Professional ultrasonic scaler with precision control and reliable performance",
      images: ['/images/Scalar/UDSJ.jpg']
    },
    {
      id: 9,
      title: "UDSN-2 Scaler",
      specs: "Advanced scaler technology with user-friendly interface and high efficiency",
      images: ['/images/Scalar/UDSN2.webp']
    },
    {
      id: 10,
      title: "UDSP Scaler",
      specs: "Compact design with powerful performance and multiple scaling modes",
      images: ['/images/Scalar/UDSP.jpg']
    },
    {
      id: 11,
      title: "UDSX LED Scaler",
      specs: "LED display scaler with advanced features and precision scaling",
      images: ['/images/Scalar/UDSXled.jpg']
    },
    {
      id: 12,
      title: "Woodpekker NT-5",
      specs: "High efficiency and ergonomic design",
      images: ['/images/Scalar/WoodpekkerNt5 (2).png', '/images/Scalar/WoodpekkerNt5 (1).png']
    },

    // WOODPECKER LIGHT CURE PRODUCTS
    {
      id: 13,
      title: "Light Cure 61",
      specs: "High-intensity light for effective curing",
      images: ['/images/woodpecker lightcure/61.png']
    },
    {
      id: 14,
      title: "Woodepecker Black Min S",
      specs: "Compact and powerful light cure device",
      images: ['/images/woodpecker lightcure/Woodepecker black min s.jpg']
    },
    {
      id: 15,
      title: "Woodepecker Black Probe",
      specs: "Precision light cure with ergonomic design",
      images: ['/images/woodpecker lightcure/Woodepecker black probe.jpg']
    },
    {
      id: 16,
      title: "Woodepecker I-led",
      specs: "Advanced LED technology for effective curing",
      images: ['/images/woodpecker lightcure/Woodepecker iled.jpg']
    },
    {
      id: 17,
      title: "Woodepecker Led-D",
      specs: "High-performance light cure with adjustable settings",
      images: ['/images/woodpecker lightcure/Woodepecker Ledd.jpg']
    },
    {
      id: 18,
      title: "Woodepecker 0 Star",
      specs: "Compact design with high efficiency",
      images: ['/images/woodpecker lightcure/woodepecker0star.jpg']
    },
    {
      id: 19,
      title: "Woodpecker Light Cure",
      specs: "Versatile light cure device for various applications",
      images: ['/images/woodpecker lightcure/woodpecker light cure.png']
    }
  ];

  return (
    <>
      <Head>
        <title>Buy Dental Scalers, Apex Locators & Light Cure Tamil Nadu & Karnataka - Complete Dental Equipment</title>
        <meta name="description" content="Buy premium dental scalers, apex locators, and light cure devices in Tamil Nadu and Karnataka. Woodpecker, Udes, and professional-grade dental equipment with installation and service. Best prices for dental clinic setup in Chennai, Bangalore, and across TN & KA." />
        <meta name="keywords" content="buy dental scalers Tamil Nadu, ultrasonic scaler Karnataka, apex locator Chennai, light cure device Bangalore, dental equipment Tamil Nadu, woodpecker scaler price Karnataka, dental instruments Chennai, dental clinic setup equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Buy Dental Scalers, Apex Locators & Light Cure Tamil Nadu & Karnataka" />
        <meta property="og:description" content="Complete dental equipment solutions for Tamil Nadu and Karnataka dental clinics. Scalers, apex locators, and light cure devices with installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/dental-equipment-og.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/scalers" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Dental Scalers, Apex Locators & Light Cure Tamil Nadu & Karnataka" />
        <meta name="twitter:description" content="Complete dental equipment solutions for Tamil Nadu and Karnataka clinics with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/dental-equipment-og.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/scalers" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Complete Dental Equipment Collection",
            "description": "Professional dental equipment including scalers, apex locators, light cure devices, and ultrasonic systems for dental clinics in Tamil Nadu and Karnataka",
            "brand": {
              "@type": "Brand",
              "name": "Qualified Dental"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
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
            <h1>SMALL EQUIPMENTS</h1>
            <p>Complete range of professional dental equipment and instruments</p>
          </div>

          <div className="products-grid">
            {products.map(product => {
              let productUrl;
              switch(product.title) {
                case "Aipex Apex Locator":
                  productUrl = '/products/Smallequipments/aipexapex';
                  break;
                case "Minpex Apex Locator":
                  productUrl = '/products/Smallequipments/miniapex';
                  break;
                case "Epex Apex Locator":
                  productUrl = '/products/Smallequipments/epexapex';
                  break;
                case "Findpex Apex Locator":
                  productUrl = '/products/Smallequipments/findpexapex';
                  break;
                case "Woodpex III Apex Locator":
                  productUrl = '/products/Smallequipments/woodpexiii';
                  break;
                case "Woodpex V Apex Locator":
                  productUrl = '/products/Smallequipments/woodpexv';
                  break;
                case "Udes E-LED Scaler":
                  productUrl = '/products/Smallequipments/ueled';
                  break;
                case "UDS-J Scaler":
                  productUrl = '/products/Smallequipments/ueled1';
                  break;
                case "UDSN-2 Scaler":
                  productUrl = '/products/Smallequipments/ueled2';
                  break;
                case "UDSP Scaler":
                  productUrl = '/products/Smallequipments/ueled3';
                  break;
                case "UDSX LED Scaler":
                  productUrl = '/products/Smallequipments/ueled4';
                  break;
                case "Woodpekker NT-5":
                  productUrl = '/products/Smallequipments/woodpeckernt5';
                  break;
                case "Light Cure 61":
                  productUrl = '/products/Smallequipments/lightcure61';
                  break;
                case "Woodepecker Black Min S":
                  productUrl = '/products/Smallequipments/woodpeckerblackmin';
                  break;
                case "Woodepecker Black Probe":
                  productUrl = '/products/Smallequipments/woodpeckerblackprobe';
                  break;
                case "Woodepecker I-led":
                  productUrl = '/products/Smallequipments/woodpeckeriled';
                  break;
                case "Woodepecker Led-D":
                  productUrl = '/products/Smallequipments/woodpeckerledd';
                  break;
                case "Woodepecker 0 Star":
                  productUrl = '/products/Smallequipments/woodpecker0star';
                  break;
                case "Woodpecker Light Cure":
                  productUrl = '/products/Smallequipments/woodpeckerlightcure';
                  break;
                default:
                  const productSlug = product.title.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  productUrl = `/products/Smallequipments/${productSlug}`;
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
