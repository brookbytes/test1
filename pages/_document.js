import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const tamilNaduDistricts = [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", 
    "Erode", "Vellore", "Thanjavur", "Thoothukudi", "Dindigul", "Cuddalore", 
    "Kanchipuram", "Nagapattinam", "Krishnagiri", "Villupuram", "Namakkal", 
    "Dharmapuri", "Ariyalur", "Karur", "Perambalur", "Sivagangai", "Virudhunagar", 
    "Ramanathapuram", "Pudukkottai", "Nilgiris", "Tenkasi", "Kallakurichi", 
    "Tirupattur", "Ranipet"
  ];

  const karnatakaDistricts = [
    "Bengaluru Urban", "Bengaluru Rural", "Mysuru", "Mangaluru (Dakshina Kannada)", 
    "Udupi", "Hubballi-Dharwad", "Belagavi", "Ballari", "Kalaburagi", "Tumakuru", 
    "Shivamogga", "Hassan", "Chitradurga", "Raichur", "Bagalkot", "Davanagere", 
    "Vijayapura", "Bidar", "Gadag", "Koppal", "Mandya", "Chikkamagaluru", 
    "Kodagu", "Haveri", "Ramanagara", "Yadgir", "Chikkaballapur"
  ];

  const districtKeywords = [
    ...tamilNaduDistricts.map(district => `dental equipment ${district}`),
    ...tamilNaduDistricts.map(district => `buy dental chair ${district}`),
    ...tamilNaduDistricts.map(district => `dental autoclave ${district}`),
    ...tamilNaduDistricts.map(district => `dental compressor ${district}`),
    ...tamilNaduDistricts.map(district => `RVG sensor ${district}`),
    ...karnatakaDistricts.map(district => `dental equipment ${district}`),
    ...karnatakaDistricts.map(district => `buy dental chair ${district}`),
    ...karnatakaDistricts.map(district => `dental autoclave ${district}`),
    ...karnatakaDistricts.map(district => `dental compressor ${district}`),
    ...karnatakaDistricts.map(district => `RVG sensor ${district}`)
  ].join(', ');

  return (
    <Html lang="en-IN" prefix="og: https://ogp.me/ns#" className="no-js">
      <Head>
        {/* Character Encoding & Internationalization */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        
        {/* Mobile Optimization */}
        <meta name="theme-color" content="#00FFD1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Qualified Dental - Premium Dental Equipment Supplier Across Tamil Nadu & Karnataka" />
        <meta name="description" content="India's leading dental equipment supplier serving all districts of Tamil Nadu and Karnataka. Buy premium dental chairs, autoclaves, RVG sensors, compressors, and complete clinic setup with installation and warranty. Free delivery across Chennai, Bangalore, Coimbatore, Madurai, Mysuru, and all cities." />
        <meta name="keywords" content={`dental equipment supplier India, dental chairs manufacturer, autoclaves sterilizers, RVG sensors dental, dental compressors, clinic setup equipment, ${districtKeywords}, dental equipment Tamil Nadu all districts, dental equipment Karnataka all districts, 牙科设备, 牙科椅, 高压灭菌器`} />
        <meta name="author" content="Qualified Dental Equipment Suppliers" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Language and Region */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-TN, IN-KA" />
        <meta name="geo.placename" content="Tamil Nadu, Karnataka" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.qualifieddental.in/" />
        <meta property="og:title" content="Qualified Dental - Premium Dental Equipment Supplier Across Tamil Nadu & Karnataka" />
        <meta property="og:description" content="Complete dental equipment solutions for clinics across all districts of Tamil Nadu and Karnataka. Premium quality dental chairs, autoclaves, RVG sensors with installation and warranty." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Qualified Dental Equipment - Premium Dental Chairs and Equipment" />
        <meta property="og:site_name" content="Qualified Dental" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="zh_CN" />
        <meta property="og:locale:alternate" content="zh_TW" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.qualifieddental.in/" />
        <meta property="twitter:title" content="Qualified Dental - Premium Dental Equipment Supplier" />
        <meta property="twitter:description" content="Complete dental equipment solutions across Tamil Nadu and Karnataka with installation and warranty service." />
        <meta property="twitter:image" content="https://www.qualifieddental.in/images/og-image.jpg" />
        <meta property="twitter:site" content="@qualifieddental" />
        <meta property="twitter:creator" content="@qualifieddental" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/" />
        
        {/* Alternate Languages - Enhanced International Support */}
        <link rel="alternate" href="https://www.qualifieddental.in/" hrefLang="en-in" />
        <link rel="alternate" href="https://www.qualifieddental.in/" hrefLang="en" />
        <link rel="alternate" href="https://www.qualifieddental.in/" hrefLang="x-default" />
        <link rel="alternate" href="https://www.qualifieddental.in/zh" hrefLang="zh" />
        <link rel="alternate" href="https://www.qualifieddental.in/zh-cn" hrefLang="zh-cn" />
        <link rel="alternate" href="https://www.qualifieddental.in/zh-tw" hrefLang="zh-tw" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/_next/static/css/styles.css" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" as="style" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["DentalClinic", "MedicalBusiness", "Organization"],
            "name": "Qualified Dental Equipment Suppliers",
            "url": "https://www.qualifieddental.in",
            "logo": "https://www.qualifieddental.in/images/logo.png",
            "description": "Leading supplier of premium dental equipment across Tamil Nadu and Karnataka, providing complete clinic setup solutions with installation and warranty services.",
            "medicalSpecialty": "Dentistry",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dental Equipment Showroom",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.0827",
              "longitude": "80.2707"
            },
            "areaServed": [
              ...tamilNaduDistricts.map(district => ({
                "@type": "City",
                "name": district,
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              })),
              ...karnatakaDistricts.map(district => ({
                "@type": "City", 
                "name": district,
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              }))
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9840033666",
                "contactType": "customer service",
                "areaServed": ["IN"],
                "availableLanguage": ["English", "Tamil", "Kannada"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-9840033666",
                "contactType": "sales",
                "areaServed": ["IN"],
                "availableLanguage": ["English", "Tamil", "Kannada"]
              }
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "priceRange": "₹₹",
            "sameAs": [
              "https://www.facebook.com/qualifieddental",
              "https://www.instagram.com/qualifieddental",
              "https://twitter.com/qualifieddental"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dental Equipment Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Dental Chairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Autoclaves"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "RVG Sensors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Dental Compressors"
                  }
                }
              ]
            }
          })
        }} />
        
        {/* Additional Schema for Breadcrumb */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.qualifieddental.in/"
              }
            ]
          })
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
