import Head from 'next/head'
import ImageSlider from '../../components/ImageSlider'
import { openWhatsAppQuote } from '../../utils/whatsapp'

const XpectVisionImages = [
  '/images/RVGsensors/xpectvision (1).jpg',
  '/images/RVGsensors/xpectvision (2).jpg',
  '/images/RVGsensors/xpectvision (3).jpg'
]
const CarestreamImages = [
  '/images/RVGsensors/carestreemrvg (1).jpg',
  '/images/RVGsensors/carestreemrvg (2).jpg',
  '/images/RVGsensors/carestreemrvg (3).jpg',
  '/images/RVGsensors/carestreemrvg (4).jpg'
]
const WoodpeckerImages = [
  '/images/RVGsensors/woodepeckeri.jpg'
]
const VatechImages = [
  '/images/RVGsensors/vatechrvg.jpg'
]
const OPGandCPTImages1 = [
  '/images/RVGsensors/OPG and CPT/Geonary3d (1).png',
  '/images/RVGsensors/OPG and CPT/Geonary3d (2).png'
]
const OPGandCPTImages2 = [
  '/images/RVGsensors/OPG and CPT/Geonaryopg (1).png',
  '/images/RVGsensors/OPG and CPT/Geonaryopg (2).png'
]

// Portable X-Ray Products
const alerioNeoImages = [
  '/images/Radiology products/portable x ray/alerio neo (1).jpg',
  '/images/Radiology products/portable x ray/alerio neo (2).jpg'
]
const vatechXrayImages = [
  '/images/Radiology products/portable x ray/vatechxray (1).jpg',
  '/images/Radiology products/portable x ray/vatechxray (2).jpg'
]
const rynesXrayImages = [
  '/images/Radiology products/portable x ray/rynesxray (2).jpg'
]
const hyperlightXrayImages = [
  '/images/Radiology products/portable x ray/hyperlight x ray (1).jpg',
  '/images/Radiology products/portable x ray/hyperlight x ray (2).jpg',
  '/images/Radiology products/portable x ray/hyperlight x ray (3).jpg'
]
const geonaryXrayImages = [
  '/images/Radiology products/portable x ray/geonaryportxiii (1).jpg',
  '/images/Radiology products/portable x ray/geonaryportxiii (2).jpg',
  '/images/Radiology products/portable x ray/geonaryportxiii (3).jpg'
]
const amsWallmountImages = [
  '/images/Radiology products/portable x ray/AMSwallmount (1).jpg',
  '/images/Radiology products/portable x ray/AMSwallmount (2).jpg'
]

// Advanced Imaging Systems
const implantXImages = [
  '/images/Radiology products/IMPLANTX.png'
]

export default function rvgsensors() {
  const products = [
    // RVG Sensors
    {
      id: 1,
      title: "Xpect Vision RVG Sensor",
      specs: "High resolution imaging, Advanced sensor technology, USB connectivity",
      images: XpectVisionImages
    },
    {
      id: 2,
      title: "Carestream RVG Sensor",
      specs: "Premium quality, Wireless connectivity, High sensitivity",
      images: CarestreamImages
    },
    {
      id: 3,
      title: "Woodpecker RVG Sensor",
      specs: "Ultra-thin CMOS sensor technology, 20lp/mm resolution, Real-time imaging, USB 3.0 connectivity, Compatible with all dental software, 2-year warranty",
      images: WoodpeckerImages
    },
    {
      id: 4,
      title: "Vatech RVG Sensor",
      specs: "Advanced imaging technology, Durable build, Professional grade",
      images: VatechImages
    },
    
    // OPG and CPT Systems
    {
      id: 5,
      title: "Geonary 3D OPG Sensor",
      specs: "High resolution, Multi-angle imaging, Advanced diagnostics",
      images: OPGandCPTImages1
    },
    {
      id: 6,
      title: "Geonary OPG Sensor",
      specs: "Compact design, Fast processing, User-friendly interface",
      images: OPGandCPTImages2
    },
    
    // Portable X-Ray Systems
    {
      id: 7,
      title: "Alerio Neo Portable X-Ray",
      specs: "Advanced portable dental X-ray system, High-frequency generator, Digital ready",
      images: alerioNeoImages
    },
    {
      id: 8,
      title: "Vatech Portable X-Ray",
      specs: "Premium portable X-ray unit, Superior image quality, Lightweight design",
      images: vatechXrayImages
    },
    {
      id: 9,
      title: "Rynes Portable X-Ray",
      specs: "Reliable portable radiography, Easy positioning, Patient safety features",
      images: rynesXrayImages
    },
    {
      id: 10,
      title: "Hyperlight X-Ray System",
      specs: "State-of-the-art portable X-ray, Advanced imaging technology, Ergonomic design",
      images: hyperlightXrayImages
    },

    // Scaler Products for RVG Integration
    {
      id: 11,
      title: "Udes E-LED Scaler",
      specs: "30KHz ultrasonic frequency, LED light, ergonomic design",
      images: ['/images/Scalar/Udes E led.webp']
    },
    {
      id: 12,
      title: "UDS-J Scaler",
      specs: "High performance with adjustable power settings",
      images: ['/images/Scalar/UDSJ.jpg']
    },
    {
      id: 13,
      title: "UDSN-2 Scaler",
      specs: "Compact design with efficient cleaning capabilities",
      images: ['/images/Scalar/UDSN2.webp']
    },
    {
      id: 14,
      title: "UDSP Scaler",
      specs: "User-friendly interface with multiple modes",
      images: ['/images/Scalar/UDSP.jpg']
    },
    {
      id: 15,
      title: "UDSX LED Scaler",
      specs: "LED light for better visibility during procedures",
      images: ['/images/Scalar/UDSXled.jpg']
    }
  ]

  return (
    <>
      <Head>
        <title>Buy RVG Sensors & Radiology Equipment Tamil Nadu & Karnataka - Complete Dental Imaging Solutions</title>
        <meta name="description" content="Buy premium RVG sensors and complete radiology equipment in Tamil Nadu and Karnataka. High-resolution sensors, portable X-rays, OPG systems, and advanced imaging solutions for dental clinics. Best prices with installation and service across Chennai, Bangalore, and all cities in TN & KA." />
        <meta name="keywords" content="buy RVG sensor Tamil Nadu, dental sensor Karnataka, RVG sensor price Chennai, portable X-ray Bangalore, OPG system Tamil Nadu, dental imaging equipment Karnataka, radiology equipment price, dental clinic imaging setup" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Buy RVG Sensors & Radiology Equipment Tamil Nadu & Karnataka" />
        <meta property="og:description" content="Complete dental imaging solutions for Tamil Nadu and Karnataka dental clinics. RVG sensors, portable X-rays, and advanced imaging systems." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/radiology-equipment-og.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/rvgsensors" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy RVG Sensors & Radiology Equipment Tamil Nadu & Karnataka" />
        <meta name="twitter:description" content="Complete dental imaging solutions for Tamil Nadu and Karnataka clinics with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/radiology-equipment-og.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/rvgsensors" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Complete Dental Radiology Solutions",
            "description": "Professional dental imaging equipment including RVG sensors, portable X-rays, OPG systems, and advanced radiology solutions for dental clinics in Tamil Nadu and Karnataka",
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
            <h1>Radiology Equipment</h1>
            <p>Advanced imaging technology for precise dental diagnostics and treatment planning it includes RVG Sensors & Complete X-Ray Solutions</p>
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
                        let productPath = '';
                        const title = product.title.toLowerCase();
                        
                        if (title.includes('xpect vision')) {
                          productPath = 'xpectvision';
                        } else if (title.includes('carestream')) {
                          productPath = 'carestream';
                        } else if (title.includes('woodpecker') && title.includes('rvg')) {
                          productPath = 'woodpeckerrvg';
                        } else if (title.includes('vatech') && title.includes('rvg')) {
                          productPath = 'vatechrvg';
                        } else if (title.includes('geonary 3d')) {
                          productPath = 'geonary3d';
                        } else if (title.includes('geonary opg')) {
                          productPath = 'geonaryopg';
                        } else if (title.includes('alerio neo')) {
                          productPath = 'alerioneo';
                        } else if (title.includes('vatech') && title.includes('x-ray')) {
                          productPath = 'vatechxray';
                        } else if (title.includes('rynes') && title.includes('x-ray')) {
                          productPath = 'rynes';
                        } else if (title.includes('hyperlight')) {
                          productPath = 'hyperlightxray';
                        } else if (title.includes('udes e-led')) {
                          productPath = 'udeseled';
                        } else if (title.includes('uds-j')) {
                          productPath = 'udesjscaler';
                        } else if (title.includes('udsn-2')) {
                          productPath = 'udsn2';
                        } else if (title.includes('udsp')) {
                          productPath = 'udspscaler';
                        } else if (title.includes('udsx led')) {
                          productPath = 'udsxled';
                        }
                        
                        if (title.includes('udes') || title.includes('uds-') || title.includes('udsn-') || title.includes('udsp') || title.includes('udsx')) {
                          if (typeof window !== 'undefined') {
                            window.location.href = `/products/Smallequipments/${productPath}`;
                          }
                        } else {
                          if (typeof window !== 'undefined') {
                            window.location.href = `/products/radiologyproducts/${productPath}`;
                          }
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
