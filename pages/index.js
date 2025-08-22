import Head from 'next/head'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductCarousel from '../components/ProductCarousel'
import StickyButtons from '../components/StickyButtons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Qualified Dental - Premium Dental Equipment Tamil Nadu & Karnataka</title>
        <meta name="description" content="Leading supplier of dental equipment in Tamil Nadu and Karnataka. Buy dental chairs, autoclaves, compressors, and complete clinic setup. Quality products at best prices with free delivery across Tamil Nadu and Karnataka." />
        <meta name="keywords" content="dental equipment Tamil Nadu, dental equipment Karnataka, buy dental chair Tamil Nadu, dental autoclave Karnataka, dental clinic setup Tamil Nadu, dental compressor Karnataka, dental chairs Chennai, Bangalore dental equipment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Qualified Dental - Premium Dental Equipment Tamil Nadu & Karnataka" />
        <meta property="og:description" content="Leading supplier of dental equipment in Tamil Nadu and Karnataka. Buy dental chairs, autoclaves, compressors, and complete clinic setup." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/og-home.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qualified Dental - Premium Dental Equipment Tamil Nadu & Karnataka" />
        <meta name="twitter:description" content="Leading supplier of dental equipment in Tamil Nadu and Karnataka. Quality products at best prices." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/og-home.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Qualified Dental",
            "image": "https://www.qualifieddental.in/images/logo.png",
            "description": "Leading supplier of dental equipment in Tamil Nadu and Karnataka",
            "url": "https://www.qualifieddental.in",
            "telephone": "+91-9840033666",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dental Equipment Suppliers",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0827,
              "longitude": 80.2707
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }],
            "sameAs": [
              "https://www.facebook.com/qualifieddental",
              "https://www.instagram.com/qualifieddental"
            ]
          })
        }} />
      </Head>

      <main>
        <Hero />
        <ProductGrid />
        <WhyChooseUs />
        
        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2>Leading the Future of Dental Technology</h2>
                <p>
                  With over a decade of experience in the dental equipment industry, QUALIFIED DENTAL EQUIPMENTS 
                  has established itself as a trusted partner for dental professionals across India. Our commitment 
                  to innovation, quality, and excellence drives us to deliver state-of-the-art dental solutions 
                  that enhance patient care and clinical efficiency.
                </p>
                <p>
                  From precision-engineered dental chairs to advanced sterilization systems, every product in our 
                  portfolio is carefully selected and rigorously tested to meet the highest international standards. 
                  We believe that superior dental equipment is essential for superior patient outcomes.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <h3>5000+</h3>
                    <p>Satisfied Clinics</p>
                  </div>
                  <div className="stat">
                    <h3>12+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat">
                    <h3>50+</h3>
                    <p>Cities Covered</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-wrapper">
                  <i className="fas fa-tooth medical-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductCarousel />

        {/* Support Section */}
        <section className="support-section">
          <div className="container">
            <h2>Comprehensive Support Services</h2>
            <div className="support-grid">
              <div className="support-card">
                <div className="support-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <h3>Professional Installation</h3>
                <p>Expert installation services by certified technicians to ensure optimal performance</p>
                <button className="support-btn">Learn More</button>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Extended Warranty</h3>
                <p>Comprehensive warranty coverage with hassle-free claim process</p>
                <button className="support-btn">View Terms</button>
              </div>
              <div className="support-card">
                <div className="support-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>24/7 Service Request</h3>
                <p>Round-the-clock technical support and emergency service assistance</p>
                <button className="support-btn">Request Service</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyButtons />
    </>
  )
}
