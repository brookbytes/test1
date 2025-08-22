export default function WhyChooseUs() {
  const features = [
    {
      icon: 'fas fa-hospital',
      title: '5000+ Clinics Served',
      description: 'Trusted by dental professionals All over Tamil Nadu and India'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Drug License Certified',
      description: 'International quality standards guaranteed'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Technical Support',
      description: 'Round-the-clock assistance and maintenance'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Pan-India Delivery',
      description: 'Fast and secure delivery nationwide'
    }
  ]

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose QUALIFIED DENTAL EQUIPMENTS?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
