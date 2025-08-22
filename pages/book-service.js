import Head from 'next/head'
import { useState } from 'react'
import { openWhatsAppQuote } from '../utils/whatsapp'

export default function BookService() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    equipment: '',
    issue: '',
    urgency: 'normal',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Construct WhatsApp message in the requested format with actual newlines
    const messageText = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nClinic: ${formData.clinic}\nEquipment: ${formData.equipment}\nIssue: ${formData.issue}\nUrgency: ${formData.urgency}\nMessage: ${formData.message}`
    // Use the WhatsApp utility function to open WhatsApp with the message
    openWhatsAppQuote('Service Request', messageText)
  }

  return (
    <>
      <Head>
        <title>Book Dental Equipment Service Tamil Nadu & Karnataka - 24/7 Technical Support</title>
        <meta name="description" content="Book professional dental equipment service in Tamil Nadu and Karnataka. 24/7 technical support, emergency service, and certified technicians for all dental equipment. Fast response times across Chennai, Bangalore, and all cities in TN & KA." />
        <meta name="keywords" content="dental equipment service Tamil Nadu, dental equipment repair Karnataka, dental chair service Chennai, compressor repair Bangalore, autoclave service Tamil Nadu, scaler maintenance Karnataka, 24/7 dental equipment support, emergency dental equipment service" />
        <meta name="author" content="Qualified Dental" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Book Dental Equipment Service Tamil Nadu & Karnataka - 24/7 Technical Support" />
        <meta property="og:description" content="Professional dental equipment service and technical support for Tamil Nadu and Karnataka dental clinics. 24/7 emergency service with certified technicians." />
        <meta property="og:image" content="https://www.qualifieddental.in/images/service-og.jpg" />
        <meta property="og:url" content="https://www.qualifieddental.in/book-service" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Dental Equipment Service Tamil Nadu & Karnataka" />
        <meta name="twitter:description" content="24/7 technical support and emergency service for dental equipment across Tamil Nadu and Karnataka." />
        <meta name="twitter:image" content="https://www.qualifieddental.in/images/service-og.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.qualifieddental.in/book-service" />
        
        {/* Service Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dental Equipment Service & Support",
            "description": "Professional dental equipment service, repair, and maintenance for dental clinics in Tamil Nadu and Karnataka",
            "provider": {
              "@type": "Organization",
              "name": "Qualified Dental",
              "url": "https://www.qualifieddental.in"
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
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.qualifieddental.in/book-service",
              "serviceSmsNumber": "+91-9840033666",
              "serviceUrl": "https://wa.me/919840033666"
            },
            "serviceType": "Equipment Service",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }} />
      </Head>

      <main className="service-page">
        <div className="container">
          <div className="page-header">
            <h1>Book Service Request</h1>
            <p>Professional technical support and maintenance for your dental equipment</p>
          </div>

          <div className="service-content">
            <div className="service-info">
              <h2>Why Choose Our Service?</h2>
              <div className="service-benefits">
                <div className="benefit">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Quick Response</h3>
                    <p>24-hour response time for all service requests</p>
                  </div>
                </div>
                <div className="benefit">
                  <i className="fas fa-user-cog"></i>
                  <div>
                    <h3>Expert Technicians</h3>
                    <p>Certified professionals with extensive experience</p>
                  </div>
                </div>
                <div className="benefit">
                  <i className="fas fa-tools"></i>
                  <div>
                    <h3>Genuine Parts</h3>
                    <p>Only authentic spare parts and components used</p>
                  </div>
                </div>
                <div className="benefit">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h3>Service Warranty</h3>
                    <p>Comprehensive warranty on all service work</p>
                  </div>
                </div>
              </div>

              <div className="emergency-contact">
                <h3>Emergency Service</h3>
                <p>For urgent equipment breakdowns, call our emergency hotline:</p>
                <a href="tel:+919876543210" className="emergency-phone">
                  <i className="fas fa-phone"></i>
                  call us connect with us 
                </a>
              </div>
            </div>

            <div className="service-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="clinic">Clinic/Hospital Name</label>
                  <input
                    type="text"
                    id="clinic"
                    name="clinic"
                    value={formData.clinic}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="equipment">Equipment Type *</label>
                    <select
                      id="equipment"
                      name="equipment"
                      value={formData.equipment}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Equipment</option>
                      <option value="dental-chair">Dental Chair</option>
                      <option value="compressor">Compressor</option>
                      <option value="scaler">Scaler</option>
                      <option value="autoclave">Autoclave</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="urgency">Urgency Level</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="issue">Issue Description *</label>
                  <textarea
                    id="issue"
                    name="issue"
                    rows="4"
                    value={formData.issue}
                    onChange={handleChange}
                    placeholder="Please describe the issue you're experiencing..."
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional information or special requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Submit Service Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
