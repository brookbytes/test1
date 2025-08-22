import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>QUALIFIED DENTAL EQUIPMENTS</h3>
            <p>Leading provider of premium dental equipment and solutions for modern dental practices.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
                <li><a href="#support">Support</a></li>
              <li><a href="#warranty">Warranty</a></li>
    
              <li><Link href="/book-service">Book Service</Link></li>
              <li><Link href="/products/other">Other Products</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link href="/products/scalers">Small Equipments</Link></li>
              <li><Link href="/products/autoclaves">Autoclaves</Link></li>
              <li><Link href="/products/radiology">Radiology Products</Link></li>
              <li><Link href="/products/dental-chairs">Dental Chairs</Link></li>
              <li><Link href="/products/compressors">Compressors and Suction</Link></li>

            
            </ul>
          </div>
          
          <div className="footer-section" id="contact">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i>21,Thirukural Main road, Srisakthi Nagar, Thirumullaivoyal, chennai,Tamil Nadu, India</p>
              <p><i className="fas fa-phone"></i> +91 9790959232</p>
              <p><i className="fas fa-envelope"></i> qualifeddentalequipment@gmail.com</p>
              <p><i className="fas fa-clock"></i> Mon-Sat: 9AM-10PM</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="certifications">
            <span className="cert">Drug Liciense Certified</span>
            <span className="cert">CE Certified</span>
            <span className="cert">FDA Approved</span>
          </div>
          <p>&copy; 2025 QUALIFIED DENTAL EQUIPMENTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
