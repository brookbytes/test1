import Head from 'next/head'
import ImageSlider from '../../components/ImageSlider'
import { openWhatsAppQuote } from '../../utils/whatsapp'

const Gnatus1hpCompressorImages = [
  '/images/COMPRESSOR  -G/Gnatus1hp.png',
]
const Gnatus2hpCompressorImages = [
  '/images/COMPRESSOR  -G/2hp.png'
]
const Gnatus3hpCompressorImages = [
  '/images/COMPRESSOR  -G/3hp.png'
]
const IndianAircompressorImages = [
  '/images/COMPRESSOR  -G/51.png'
]
const vmaxsuctionImages = [
  '/images/COMPRESSOR  -G/Vmax suction/vmaxxsuction.jpg'
]

export default function Compressors() {
  const products = [
    {
      id: 1,
      title: "Gnatus Compressor 1HP",
      specs: "Silent operation, 50L tank capacity, Automatic drainage",
      images: Gnatus1hpCompressorImages
    },
    {
      id: 2,
      title: "Gnatus Compressor 2HP",
      specs: "Compact design, Easy mobility, Low maintenance",
      images: Gnatus2hpCompressorImages
    },
    {
      id: 3,
      title: "High-Capacity Compressor",
      specs: "Multiple chair support, 100L tank, Energy efficient",
      images: Gnatus3hpCompressorImages
    },
    {
      id: 4,
      title: "Indian Air Compressor",
      specs: "Multiple chair support, 100L tank, Energy efficient",
      images: IndianAircompressorImages
    },
    {
      id: 5,
      title: "V-Max Suction",
      specs: "Multiple chair support, 100L tank, Energy efficient",
      images: vmaxsuctionImages
    }
  ]

  return (
    <>
      <Head>
        <title>Buy Dental Compressors & Suction Tamil Nadu & Karnataka - Gnatus & Indian Brands</title>
        <meta name="description" content="Buy premium dental compressors and suction devices in Tamil Nadu and Karnataka. Gnatus, Indian, and V-Max compressors available with installation and service. Best prices for dental clinic setup in Chennai, Bangalore, and across TN & KA." />
        <meta name="keywords" content="buy dental compressor Tamil Nadu, dental compressor Karnataka, Gnatus compressor Chennai, Indian compressor Bangalore, dental suction Tamil Nadu, V-Max suction Karnataka, dental air compressor price, dental clinic setup equipment" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Buy Dental Compressors & Suction Tamil Nadu & Karnataka" />
        <meta property="og:description" content="Premium dental compressors and suction devices for Tamil Nadu and Karnataka dental clinics. Gnatus and Indian brands with installation service." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/compressors-og.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/products/compressors" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Dental Compressors & Suction Tamil Nadu & Karnataka" />
        <meta name="twitter:description" content="Premium dental compressors and suction devices for Tamil Nadu and Karnataka clinics with installation service." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/compressors-og.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/products/compressors" />
        
        {/* Product Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Dental Compressors & Suction Collection",
            "description": "Professional dental compressors and suction devices for dental clinics in Tamil Nadu and Karnataka",
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
            <h1>Dental Compressors and Suction Devices</h1>
            <p>Reliable and efficient dental compressors for consistent air supply</p>
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
                        if (product.title === "Gnatus Compressor 1HP") {
                          productPath = '/products/compressorproducts/Gnatuscompressor1hp';
                        } else if (product.title === "Gnatus Compressor 2HP") {
                          productPath = '/products/compressorproducts/gnatus2hp';
                        } else if (product.title === "High-Capacity Compressor") {
                          productPath = '/products/compressorproducts/highcapacitycompressor';
                        } else if (product.title === "Indian Air Compressor") {
                          productPath = '/products/compressorproducts/indianaircompressor';
                        } else if (product.title === "V-Max Suction") {
                          productPath = '/products/compressorproducts/vmaxsuction';
                        }
                        if (typeof window !== 'undefined') {
                          window.location.href = productPath;
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
