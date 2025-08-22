import Head from 'next/head'

export default function ProductSEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  productName, 
  brand = "Qualified Dental",
  priceCurrency = "INR",
  availability = "InStock",
  price = "",
  productCategory = "Dental Equipment",
  breadcrumbPath = [],
  productImages = [],
  productFeatures = [],
  productSpecifications = {},
  manufacturer = "",
  model = "",
  sku = "",
  // New props for internationalization
  chineseName = "",
  chineseDescription = "",
  chineseKeywords = ""
}) {
  // District lists for regional targeting
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

  // Generate district-specific keywords with international support
  const districtKeywords = [
    ...tamilNaduDistricts.map(district => `${productName.toLowerCase()} ${district}`),
    ...tamilNaduDistricts.map(district => `buy ${productName.toLowerCase()} ${district}`),
    ...tamilNaduDistricts.map(district => `${productName.toLowerCase()} price ${district}`),
    ...karnatakaDistricts.map(district => `${productName.toLowerCase()} ${district}`),
    ...karnatakaDistricts.map(district => `buy ${productName.toLowerCase()} ${district}`),
    ...karnatakaDistricts.map(district => `${productName.toLowerCase()} price ${district}`),
    // Chinese keywords for international markets
    ...(chineseKeywords ? chineseKeywords.split(',') : []),
    "牙科设备", "牙科椅", "高压灭菌器", "牙科压缩机", "RVG传感器"
  ].join(', ');

  // Enhanced keywords with international support
  const enhancedKeywords = `${keywords}, ${districtKeywords}, ${productCategory}`;

  // Build breadcrumb items
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.qualifieddental.in/"
    },
    ...breadcrumbPath.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.url
    }))
  ];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="author" content="Qualified Dental Equipment Suppliers" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Additional meta tags for better international SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="safe for kids" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph - Enhanced for International Markets */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${productName} - ${brand}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="product" />
      <meta property="og:site_name" content="Qualified Dental" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="zh_CN" />
      <meta property="og:locale:alternate" content="zh_TW" />
      <meta property="og:locale:alternate" content="zh_HK" />
      <meta property="og:locale:alternate" content="ta_IN" />
      <meta property="og:locale:alternate" content="kn_IN" />
      
      {/* Enhanced Open Graph for Products */}
      <meta property="product:brand" content={brand} />
      <meta property="product:availability" content={availability.toLowerCase()} />
      <meta property="product:condition" content="new" />
      <meta property="product:price:amount" content={price || "Contact for price"} />
      <meta property="product:price:currency" content={priceCurrency} />
      <meta property="product:retailer_item_id" content={sku || model || productName.replace(/\s+/g, '_')} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@qualifieddental" />
      <meta name="twitter:creator" content="@qualifieddental" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Hreflang Tags for International Markets */}
      <link rel="alternate" href={url} hrefLang="en-in" />
      <link rel="alternate" href={url} hrefLang="zh-cn" />
      <link rel="alternate" href={url} hrefLang="zh-tw" />
      <link rel="alternate" href={url} hrefLang="zh-hk" />
      <link rel="alternate" href={url} hrefLang="x-default" />
      
      {/* Product Schema - Enhanced for International Markets */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": productName,
          "description": description,
          "image": productImages.length > 0 ? productImages : image,
          "brand": {
            "@type": "Brand",
            "name": brand,
            "description": "Premium dental equipment manufacturer and supplier"
          },
          "manufacturer": manufacturer ? {
            "@type": "Organization",
            "name": manufacturer,
            "url": "https://www.qualifieddental.in"
          } : undefined,
          "model": model || undefined,
          "sku": sku || undefined,
          "gtin": sku || undefined,
          "offers": {
            "@type": "Offer",
            "priceCurrency": priceCurrency,
            "price": price || undefined,
            "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "availability": `https://schema.org/${availability}`,
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "Qualified Dental",
              "url": "https://www.qualifieddental.in",
              "telephone": "+91-9840033666",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dental Equipment Showroom",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600001",
                "addressCountry": "IN"
              }
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
              })),
              // International markets
              {
                "@type": "Country",
                "name": "China",
                "addressCountry": "CN"
              },
              {
                "@type": "Country", 
                "name": "Hong Kong",
                "addressCountry": "HK"
              },
              {
                "@type": "Country",
                "name": "Taiwan",
                "addressCountry": "TW"
              }
            ],
            "deliveryLeadTime": {
              "@type": "QuantitativeValue",
              "minValue": 3,
              "maxValue": 7,
              "unitCode": "DAY"
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn",
              "returnPolicyCountry": "IN"
            },
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": 0,
                "currency": "INR"
              },
              "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "IN"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 1,
                  "maxValue": 2,
                  "unitCode": "DAY"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 2,
                  "maxValue": 5,
                  "unitCode": "DAY"
                }
              }
            }
          },
          "category": productCategory,
          "additionalProperty": productFeatures.length > 0 ? productFeatures.map((feature, index) => ({
            "@type": "PropertyValue",
            "name": `Feature ${index + 1}`,
            "value": feature,
            "valueReference": "https://schema.org/Text"
          })) : undefined,
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.8",
              "bestRating": "5",
              "worstRating": "1"
            },
            "author": {
              "@type": "Organization",
              "name": "Qualified Dental Customers"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Qualified Dental"
            },
            "datePublished": "2024-01-01",
            "reviewBody": "Excellent quality dental equipment with professional installation service."
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          // Enhanced for international markets
          "keywords": enhancedKeywords,
          "countryOfAssembly": "IN",
          "countryOfOrigin": "IN",
          "inLanguage": ["en", "zh", "ta", "kn"],
          "audience": {
            "@type": "Audience",
            "audienceType": "Dental Professionals",
            "geographicArea": {
              "@type": "AdministrativeArea",
              "name": "India, China, Hong Kong, Taiwan"
            }
          }
        }, null, 2)
      }} />
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems
        })
      }} />
    </Head>
  )
}
