import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Landmark } from 'lucide-react';

const Navbar = ({ language, setLanguage, t, goldRates, currentPage, handleNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  const navLinks = [
    { page: 'home', sectionId: null, label: t.navHome },
    { page: 'home', sectionId: 'rates', label: t.navRates },
    { page: 'collection', sectionId: null, label: t.navGallery },
    { page: 'bridal-collection', sectionId: null, label: t.navBridal },
    { page: 'home', sectionId: 'about', label: t.navTrust },
    { page: 'contact', sectionId: null, label: t.navContact },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    handleNavigation(link.page, link.sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Live Rate Ticker */}
      <div className="rate-ticker">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            <span className="ticker-item"><Landmark size={12} className="ticker-icon" /> {t.gold22k}: <strong>₹{goldRates.gold22k}/g</strong></span>
            <span className="ticker-item"><Landmark size={12} className="ticker-icon" /> {t.gold24k}: <strong>₹{goldRates.gold24k}/g</strong></span>
            <span className="ticker-item"><Landmark size={12} className="ticker-icon" /> {t.silver999}: <strong>₹{goldRates.silver999}/g</strong></span>
            
            {/* Duplicate for infinite scrolling effect in CSS */}
            <span className="ticker-item"><Landmark size={12} className="ticker-icon" /> {t.gold22k}: <strong>₹{goldRates.gold22k}/g</strong></span>
            <span className="ticker-item"><Landmark size={12} className="ticker-icon" /> {t.gold24k}: <strong>₹{goldRates.gold24k}/g</strong></span>
            <span className="ticker-item"><Landmark size={12} className="ticker-icon" /> {t.silver999}: <strong>₹{goldRates.silver999}/g</strong></span>
          </div>
        </div>
      </div>

      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <a 
            href="#home" 
            className="logo-area"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('home');
            }}
          >
            <span className="gold-text">{t.shopName}</span>
            <span className="sub-logo">{t.locationName}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link, idx) => {
              // Highlight active link if page matches (and if it's home, check section context if desired)
              const isActive = currentPage === link.page && (link.page !== 'home' || !link.sectionId);
              return (
                <a 
                  key={idx} 
                  href={`#${link.sectionId || link.page}`} 
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`nav-link ${isActive ? 'active-tab' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="nav-actions">
            <button 
              onClick={toggleLanguage} 
              className="lang-switcher-btn"
              title="Change Language / భాష మార్చండి"
            >
              <Globe size={18} className="lang-icon" />
              <span>{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="mobile-menu-toggle"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isOpen ? 'active' : ''}`}>
          <nav className="mobile-nav-links">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={`#${link.sectionId || link.page}`} 
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
