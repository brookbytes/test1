import Head from 'next/head';
import ProductDetail from '../../../components/ProductDetail';

export default function WoodpeckerApexLocator() {
  const product = {
    name: "Woodpecker Woodpex III Apex Locator",
    shortName: "Woodpex III",
    category: "Small Equipment",
    price: "₹28,000",
    image: "/images/Apex locator/woodepexiii (1).jpg",
    gallery: [
      "/images/Apex locator/woodepexiii (2).jpg"
    ],
    description: "Advanced apex locator with multi-frequency technology for precise root canal length measurement. Features color LCD display and real-time visualization.",
    features: [
      "Multi-frequency technology",
      "Color LCD display",
      "Real-time visualization",
      "Auto-calibration",
      "Battery indicator",
      "Compact design"
    ],
    specifications: {
      "Technology": "Multi-frequency impedance",
      "Display": "Color LCD",
      "Accuracy": "±0.5mm",
      "Battery": "3.7V Lithium",
      "Working Time": "8 hours",
      "Charging Time": "2 hours"
    },
    seoTitle: "Woodpecker Woodpex III Apex Locator - Root Canal Measurement",
    seoDescription: "Buy Woodpecker Woodpex III apex locator with multi-frequency technology. Color LCD display with best price. Get quote now!"
  };

  return (
    <>
      <Head>
        <title>{product.seoTitle}</title>
        <meta name="description" content={product.seoDescription} />
      </Head>
      <ProductDetail product={product} />
    </>
  );
}
