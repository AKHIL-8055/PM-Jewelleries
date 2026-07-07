import React from 'react';
import { Phone, MapPin, Landmark } from 'lucide-react';

const Footer = ({ language, t, handleNavigation }) => {
  const footerLinks = [
    { page: 'home', sectionId: null, label: t.navHome },
    { page: 'home', sectionId: 'rates', label: t.navRates },
    { page: 'collection', sectionId: null, label: t.navGallery },
    { page: 'bridal-collection', sectionId: null, label: t.navBridal },
    { page: 'schemes', sectionId: null, label: t.navSchemes },
    { page: 'contact', sectionId: null, label: t.navContact },
  ];

  return (
    <footer className="main-footer-section">
      <div className="footer-top-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand-name">{t.shopName}</h3>
          <p className="footer-brand-desc">{t.footerDesc}</p>

        </div>

        {/* Quick Links Column */}
        <div className="footer-col links-col">
          <h4>{language === 'en' ? "Quick Navigation" : "త్వరిత లింకులు"}</h4>
          <ul>
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={`#${link.sectionId || link.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.page, link.sectionId);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="footer-col contact-col">
          <h4>{language === 'en' ? "Showroom Details" : "షోరూమ్ వివరాలు"}</h4>
          <div className="footer-contact-info">
            <p className="contact-detail-line">
              <MapPin size={16} className="footer-detail-icon" />
              <span>{t.addressVal}</span>
            </p>
            <p className="contact-detail-line">
              <Phone size={16} className="footer-detail-icon" />
              <span>{t.phoneVal}</span>
            </p>
          </div>
        </div>

        {/* Trust Badges Column */}
        <div className="footer-col trust-col">
          <h4>{language === 'en' ? "Certified Purity" : "ధ్రువీకరించబడిన స్వచ్ఛత"}</h4>
          <div className="trust-seal-wrapper">
            <div className="trust-seal-item">
              <Landmark size={20} className="seal-icon" />
              <span>BIS 916 Hallmark</span>
            </div>
            <div className="trust-seal-item">
              <Landmark size={20} className="seal-icon" />
              <span>100% Hallmarked Jewellery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="footer-bottom-bar">
        <p>{t.allRightsReserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
