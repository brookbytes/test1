import React from 'react';
import ProductDetail from '../../../components/ProductDetail';

export default function WoodpeckerUltrasonicScaler() {
  const product = {
    name: "Woodpecker Ultrasonic Scaler UDS-E LED",
    shortName: "UDS-E LED Scaler",
    category: "Small Equipment",
    price: "₹45,000",
    image: "/images/Scalar/UDSELED.jpg",
    gallery: [
      "/images/Scalar/UDSELED1.jpg",
      "/images/Scalar/UDSELED2.jpg",
      "/images/Scalar/UDSELED3.jpg"
    ],
    description: "Advanced ultrasonic scaler with LED illumination for precise dental cleaning. Features automatic frequency tracking and comfortable handpiece design.",
    features: [
      "LED illumination for better visibility",
      "Automatic frequency tracking",
      "Detachable handpiece with LED",
      "Auto-water supply system",
      "5 tips included",
      "1 year warranty"
    ],
    specifications: {
      "Power Supply": "AC 100-240V, 50/60Hz",
      "Power": "≤40VA",
      "Frequency": "28-32 kHz",
      "Water Pressure": "0.1-0.25 MPa",
      "Dimensions": "290×220×90 mm",
      "Weight": "2.5 kg"
    },
    seoTitle: "Woodpecker UDS-E LED Ultrasonic Scaler - Dental Equipment",
    seoDescription: "Buy Woodpecker UDS-E LED ultrasonic scaler with LED illumination. Get best price with 1 year warranty. Request quote now!"
  };

  return <ProductDetail product={product} />;
}
