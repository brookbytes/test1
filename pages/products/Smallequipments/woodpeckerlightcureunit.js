import React from 'react';
import ProductDetail from '../../../components/ProductDetail';

export default function WoodpeckerLightCureUnit() {
  const product = {
    name: "Woodpecker Light Cure Unit LED-B",
    shortName: "LED-B Light Cure",
    category: "Small Equipment",
    price: "₹12,500",
    image: "/images/woodpecker lightcure/woodpecker light cure.png",
    gallery: [
      "/images/woodpecker lightcure/woodpecker light cure1.jpg",
      "/images/woodpecker lightcure/woodpecker light cure2.jpg"
    ],
    description: "High-performance LED light curing unit with 360° rotating head and constant light intensity. Perfect for polymerizing all dental composite materials.",
    features: [
      "High intensity LED light",
      "360° rotating head",
      "Cordless operation",
      "3 working modes",
      "Auto power-off",
      "Battery indicator"
    ],
    specifications: {
      "Wavelength": "420-480nm",
      "Light Intensity": "≥1200 mW/cm²",
      "Battery": "Lithium 3.7V",
      "Charging Time": "3 hours",
      "Working Time": "90 minutes",
      "Dimensions": "240×150×50 mm"
    },
    seoTitle: "Woodpecker LED-B Light Cure Unit - Dental Composite Curing",
    seoDescription: "Buy Woodpecker LED-B light cure unit with 360° rotating head. Best price for dental composite curing. Get quote now!"
  };

  return <ProductDetail product={product} />;
}
