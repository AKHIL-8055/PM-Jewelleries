import React from 'react';
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product, language, t }) => {
  const shopPhoneNumber = "918340809394"; // Shop's WhatsApp number

  // Generate the WhatsApp message and link
  const generateWhatsAppLink = () => {
    const itemName = product.name[language] || product.name.en;
    const message = `Hi, I'm interested in this item:
${itemName} - Design #${product.designId}
Weight: ~${product.weightRange}
Can you share today's price and availability?`;

    return `https://wa.me/${shopPhoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name[language] || product.name.en} 
          className="product-image"
          loading="lazy"
        />
        <div className="product-badge">
          {product.designId}
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category-tag">
          {t[`category${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`] || product.category}
        </span>
        <h3 className="product-title">
          {product.name[language] || product.name.en}
        </h3>
        
        <div className="product-weight-row">
          <span className="weight-label">{t.approxWeight}</span>
          <span className="weight-value">{product.weightRange}</span>
        </div>

        <a 
          href={generateWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-enquire-btn"
        >
          <MessageCircle className="btn-icon" size={18} />
          {t.enquireButton}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
