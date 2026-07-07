import React from 'react';
import { Shield, Sparkles, Receipt, RefreshCw } from 'lucide-react';

const TrustSection = ({ language, t }) => {
  const trustItems = [
    {
      icon: <Shield className="trust-icon" size={36} />,
      title: t.trustBadge1Title,
      desc: t.trustBadge1Desc
    },
    {
      icon: <Receipt className="trust-icon" size={36} />,
      title: t.trustBadge2Title,
      desc: t.trustBadge2Desc
    },
    {
      icon: <Sparkles className="trust-icon" size={36} />,
      title: t.trustBadge3Title,
      desc: t.trustBadge3Desc
    },
    {
      icon: <RefreshCw className="trust-icon" size={36} />,
      title: t.trustBadge4Title,
      desc: t.trustBadge4Desc
    }
  ];

  return (
    <section id="about" className="trust-section">
      <div className="section-header">
        <h2 className="section-title">{t.trustTitle}</h2>
        <p className="section-subtitle">{t.trustSubtitle}</p>
      </div>

      <div className="trust-grid">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-card">
        
            <h3 className="trust-card-title">{item.title}</h3>
            <p className="trust-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* BIS Hallmark Spotlight Badge */}
      <div className="hallmark-badge-container">
        <div className="hallmark-inner-box">
          <div className="hallmark-graphic">
            {/* BIS Hallmark Logo simulation with gold lines */}
            <div className="bis-triangle">
              <span className="bis-text">BIS</span>
            </div>
            <div className="hallmark-codes">
              <span className="code-item">916</span>
              <span className="code-item">HM</span>
              <span className="code-item">IA</span>
            </div>
          </div>
          
          <div className="hallmark-text-content">
            <h3>{language === 'en' ? "Govt. Approved BIS 916 Hallmarking" : "ప్రభుత్వ గుర్తింపు పొందిన BIS 916 హాల్‌మార్కింగ్"}</h3>
            <p>
              {language === 'en' 
                ? "Every single piece of gold jewelry we sell carries the Government of India's official hallmarking standard. Look for the triangular BIS logo, purity grade (916 for 22K), and the unique HUID code on your jewelry for absolute confidence."
                : "మేము విక్రయించే ప్రతి బంగారు ఆభరణం భారత ప్రభుత్వ అధికారిక హాల్‌మార్క్ ప్రమాణాన్ని కలిగి ఉంటుంది. పూర్తి నమ్మకం కోసం మీ నగపై త్రిభుజాకార BIS లోగో, స్వచ్ఛత గ్రేడ్ (22K కొరకు 916), మరియు ప్రత్యేక HUID కోడ్‌ను చూసి కొనుగోలు చేయండి."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
