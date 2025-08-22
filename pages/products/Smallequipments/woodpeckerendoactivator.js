import React from 'react';
import ProductDetail from '../../../components/ProductDetail';

export default function WoodpeckerEndoActivator() {
  const product = {
    name: "Woodpecker Endo Activator Plus",
    shortName: "Endo Activator Plus",
    category: "Small Equipment",
    price: "₹18,000",
    image: "/images/EndoActivator/endoactivator.jpg",
    gallery: [
      "/images/EndoActivator/endoactivator1.jpg",
      "/images/EndoActivator/endoactivator2.jpg"
    ],
    description: "Advanced endodontic activator for effective irrigation and cleaning of root canal systems. Features multiple speed settings and ergonomic design.",
    features: [
      "3 speed settings (5000-15000 rpm)",
      "Ergonomic handpiece design",
      "LED illumination",
      "Disposable tips included",
      "Battery operated",
      "Compact design"
    ],
    specifications: {
      "Speed Range": "5000-15000 rpm",
      "Battery": "3.7V Lithium",
      "Charging Time": "2 hours",
      "Working Time": "60 minutes",
      "Tips": "Disposable plastic tips",
      "Warranty": "1 year"
    },
    seoTitle: "Woodpecker Endo Activator Plus - Root Canal Irrigation",
    seoDescription: "Buy Woodpecker Endo Activator Plus for effective root canal cleaning. Multiple speed settings with best price. Get quote now!"
  };

  return <ProductDetail product={product} />;
}
