import React, { useState } from 'react';
import { Search, MessageCircle, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

const BridalCollectionPage = ({ language, t, handleNavigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const shopPhoneNumber = "918340809394";

  const bridalItems = products.filter(item => item.category === 'bridal');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBridal = bridalItems.filter(item => {
    const itemName = (item.name[language] || item.name.en).toLowerCase();
    const itemDesign = item.designId.toLowerCase();
    const searchLower = searchQuery.toLowerCase();
    return itemName.includes(searchLower) || itemDesign.includes(searchLower);
  });

  const getWhatsAppLink = (item) => {
    const itemName = item.name[language] || item.name.en;
    const message = `Hi, I'm interested in the Bridal Collection:
${itemName} - Design #${item.designId}
Weight: ~${item.weightRange}
Can you share details, today's price and customization options?`;
    return `https://wa.me/${shopPhoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bridal-page-wrapper">
      {/* Premium Page Header */}
      <div className="bridal-header-banner">
        <button 
          onClick={() => handleNavigation('home')} 
          className="bridal-back-btn"
        >
          <ArrowLeft size={16} />
          <span>{language === 'en' ? "Back to Home" : "హోమ్ పేజీకి తిరిగి వెళ్ళండి"}</span>
        </button>
        <div className="bridal-header-content">
          <h1 className="gold-text">{t.bridalPageTitle}</h1>
          <p>{t.bridalPageSubtitle}</p>
        </div>
      </div>

      <div className="bridal-page-container">
        {/* Search Bar */}
        <div className="bridal-search-box">
          <div className="search-bar-container">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={handleSearchChange}
              className="gallery-search-input"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="bridal-catalog-grid">
          {filteredBridal.length > 0 ? (
            filteredBridal.map((item) => (
              <div key={item.id} className="bridal-catalog-card">
                <div className="bridal-card-img-box">
                  <img 
                    src={item.image} 
                    alt={item.name[language] || item.name.en} 
                    className="bridal-card-img"
                  />
                  <div className="bridal-card-badge">{item.designId}</div>
                </div>
                
                <div className="bridal-card-info">
                  <span className="bridal-card-tag">{t.categoryBridal}</span>
                  <h3>{item.name[language] || item.name.en}</h3>
                  <p className="bridal-card-desc">
                    {language === 'en' 
                      ? "A masterpiece of heritage craftsmanship, detailed with fine gold filigree work and semi-precious stone embellishments."
                      : "సాంప్రదాయ కళాకృతులు, సున్నితమైన డిజైన్లతో అద్భుతంగా తీర్చిదిద్దిన పెళ్ళి నగ."}
                  </p>
                  
                  <div className="bridal-card-specs">
                    <span className="spec-label">{t.approxWeight}</span>
                    <span className="spec-val">{item.weightRange}</span>
                  </div>

                  <a 
                    href={getWhatsAppLink(item)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bridal-card-btn"
                  >
                    <MessageCircle size={18} />
                    <span>{t.enquireButton}</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products-found w-full col-span-full">
              <p>{t.noProductsFound}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BridalCollectionPage;
