import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const LocationMap = ({ language, t }) => {
  const mapEmbedUrl = "https://maps.google.com/maps?q=14.3840605,79.7328207&z=15&output=embed";

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p className="section-subtitle">{t.contactSubtitle}</p>
      </div>

      <div className="contact-grid-container">
        {/* Contact Info Cards */}
        <div className="contact-info-panel">
          <div className="info-item-card">
            <div className="info-icon-box">
              <MapPin size={24} />
            </div>
            <div className="info-text-box">
              <h4>{t.addressTitle}</h4>
              <p>{t.addressVal}</p>
            </div>
          </div>

          <div className="info-item-card">
            <div className="info-icon-box">
              <Clock size={24} />
            </div>
            <div className="info-text-box">
              <h4>{t.hoursTitle}</h4>
              <p>{t.hoursVal}</p>
            </div>
          </div>

          <div className="info-item-card">
            <div className="info-icon-box">
              <Phone size={24} />
            </div>
            <div className="info-text-box">
              <h4>{t.phoneTitle}</h4>
              <p>{t.phoneVal}</p>
            </div>
          </div>

          <div className="info-item-card">
            <div className="info-icon-box">
              <Mail size={24} />
            </div>
            <div className="info-text-box">
              <h4>{t.emailTitle}</h4>
              <p>{t.emailVal}</p>
            </div>
          </div>

          {/* Quick Route button */}
          <a 
            href="https://maps.app.goo.gl/xNSCqa2h2LKig4WJ8?g_st=iw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="directions-btn"
          >
            <Navigation size={18} className="btn-icon" />
            <span>{t.getDirections}</span>
          </a>
        </div>

        {/* Map Embed Frame */}
        <div className="map-embed-container">
          <div className="map-frame-wrapper">
            <iframe 
              src={mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Swarna Nellore Jewellers Location Map"
              className="google-map-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
