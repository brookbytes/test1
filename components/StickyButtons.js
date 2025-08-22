export default function StickyButtons() {
  const handleWhatsApp = () => {
    if (typeof window !== 'undefined') {
      window.open('https://wa.me/91979095932?text=Hello, I would like to know more about your dental equipment.', '_blank')
    }
  }

  const handleCall = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+919790959232'
    }
  }

  return (
    <div className="sticky-buttons">
      <button className="sticky-btn whatsapp" onClick={handleWhatsApp}>
        <i className="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </button>
      <button className="sticky-btn call" onClick={handleCall}>
        <i className="fas fa-phone"></i>
        <span>Call Now</span>
      </button>
    </div>
  )
}
