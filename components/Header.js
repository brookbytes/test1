import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            <Image 
              src="/images/LOGO.png" 
              alt="Qualified Dental Equipments Logo" 
              width={200} 
              height={100} 
              style={{ height: '40px', width: 'auto', marginRight: '10px', verticalAlign: 'middle' }}
            />
            <h1 style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              QUALIFIED DENTAL EQUIPMENTS
            </h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link href="/" className="nav-link">Home</Link>
            <div className="dropdown">
              <span className="nav-link dropdown-toggle">Products</span>
              <div className="dropdown-menu">
                <Link href="/products/dental-chairs" className="dropdown-link">Dental Chairs</Link>
                <Link href="/products/compressors" className="dropdown-link">Compressors and Suction</Link>
                <Link href="/products/scalers" className="dropdown-link">Small Equipments</Link>
                <Link href="/products/autoclaves" className="dropdown-link">Autoclaves</Link>
                <Link href="/products/rvgsensors" className="dropdown-link">Radiology Equipments</Link>
              </div>
            </div>
            <Link href="/book-service" className="nav-link">Book Service</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
