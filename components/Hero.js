import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Precision-Driven Dental Equipment for the Future of Dentistry</h1>
            <p>Qualified delivers cutting-edge dental solutions for clinics and hospitals</p>
            <Link href="#products" className="cta-button">
              Explore Products
            </Link>
          </div>
          <div className="hero-image">
            <div className="hero-icon">
              <i className="fas fa-tooth"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
