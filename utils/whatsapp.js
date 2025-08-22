// WhatsApp utility function for generating product inquiry messages
export const openWhatsAppQuote = (productTitle, productSpecs) => {
  const phoneNumber = '919790959232'; // WhatsApp format with country code, no plus sign
  const message = `Hello, I'm interested in the product: ${productTitle}\n\nSpecifications: ${productSpecs}\n\nPlease provide a quote and more information.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Check if window is available (client-side only)
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank');
  }
};
