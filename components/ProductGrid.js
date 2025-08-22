import Link from 'next/link'

export default function ProductGrid() {
  const categories = [
    {
      title: 'Dental Chairs',
      icon: 'fas fa-chair',
      link: '/products/dental-chairs',
      description: 'Premium dental chairs with advanced positioning'
    },
    {
      title: 'Compressors and Suction',
      icon: 'fas fa-fan',
      link: '/products/compressors',
      description: 'Reliable air compressors for dental equipment'
    },
    {
      title: 'Small Equipments',
      icon: 'fas fa-tooth',
      link: '/products/scalers',
      description: 'Ultrasonic scalers for effective cleaning'
    },
    {
      title: 'Autoclaves',
      icon: 'fas fa-flask',
      link: '/products/autoclaves',
      description: 'Sterilization equipment for safety'
    },
    {
      title: 'Radiology Equipment',
      icon: 'fas fa-x-ray',
      link: '/products/rvgsensors',
      description: 'Digital sensors for high-quality radiography'
    }
  ]

  return (
    <section className="product-categories" id="products">
      <div className="container">
        <h2>Our Product Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <Link href={category.link} className="category-link">
                View Products
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
