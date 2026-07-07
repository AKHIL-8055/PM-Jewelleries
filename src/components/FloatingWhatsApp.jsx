import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = ({ language, t }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const shopPhoneNumber = "918340809394";
  
  const generalMessage = "Hi, I'm visiting your website and would like to enquire about your designs and today's gold/silver rates.";
  const whatsappUrl = `https://wa.me/${shopPhoneNumber}?text=${encodeURIComponent(generalMessage)}`;

  useEffect(() => {
    // Show tooltip after 3 seconds, hide after 10
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="floating-whatsapp-container">
      {/* Tooltip text bubble */}
      <div className={`whatsapp-tooltip ${showTooltip ? 'visible' : ''}`}>
        <p>{t.whatsappFloatTip}</p>
        <button 
          className="tooltip-close" 
          onClick={() => setShowTooltip(false)}
          aria-label="Close tooltip"
        >
          ×
        </button>
      </div>

      {/* Floating Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float-btn"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} className="whatsapp-icon-spin" />
        <span className="pulse-ring" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
