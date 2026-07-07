import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const BridalSpotlight = ({ language, t, limit, handleNavigation }) => {
  const bridalItems = products.filter(item => item.category === 'bridal');
  const displayedItems = limit ? bridalItems.slice(0, limit) : bridalItems;
  const shopPhoneNumber = "918340809394";

  const getWhatsAppLink = (item) => {
    const itemName = item.name[language] || item.name.en;
    const message = `Hi, I'm interested in the Bridal Collection:
${itemName} - Design #${item.designId}
Weight: ~${item.weightRange}
Can you share details, today's price and customization options?`;
    return `https://wa.me/${shopPhoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="bridal" className="bridal-spotlight-section">
      <div className="bridal-bg-decoration" />
      
      <div className="section-header">
   
        <h2 className="section-title gold-text">{t.bridalTitle}</h2>
        <p className="section-subtitle">{t.bridalSubtitle}</p>
      </div>

      <div className="bridal-showcase-container">
        {displayedItems.map((item, index) => (
          <div key={item.id} className={`bridal-highlight-card ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="bridal-image-wrapper">
              <img 
                src={item.image} 
                alt={item.name[language] || item.name.en} 
                className="bridal-featured-img"
              />
              <div className="bridal-gold-frame" />
            </div>
            
            <div className="bridal-details-box">
              <span className="bridal-tag">{t.categoryBridal}</span>
              <h3>{item.name[language] || item.name.en}</h3>
              <p className="bridal-desc">
                {language === 'en' 
                  ? "Indulge in our masterfully crafted wedding set, featuring traditional craftsmanship, fine hand-carvings, and precious gemstone embellishments. Perfect for the modern bride honoring her roots."
                  : "అత్యంత సుందరమైన డిజైన్, సాంప్రదాయ కట్టుబాట్లు ప్రతిబింబించేలా విలువైన రత్నాలతో పొదిగిన పెళ్లి హారం. మీ వివాహ మహోత్సవంలో మీకు మహారాణి వైభవాన్ని అందిస్తుంది."}
              </p>
              
              <div className="bridal-spec-row">
                <span className="spec-label">{t.approxWeight}</span>
                <span className="spec-val">{item.weightRange}</span>
              </div>

              <div className="bridal-actions">
                <a 
                  href={getWhatsAppLink(item)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bridal-enquire-btn"
                >
                  <MessageCircle className="btn-icon" size={18} />
                  {t.enquireButton}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div className="bridal-explore-more-container">
          <button 
            onClick={() => handleNavigation('bridal-collection')} 
            className="bridal-explore-btn"
          >
            <span>{t.bridalExploreMore}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
};

export default BridalSpotlight;
