import React, { useState } from 'react';
import { Calendar, RefreshCcw, Award, ArrowRight, Sparkles, Calculator, Check, X, ShieldCheck, CreditCard } from 'lucide-react';

const SavingsScheme = ({ language, t, goldRates }) => {
  const shopPhoneNumber = "918340809394";
  const [emi, setEmi] = useState(5000);
  
  // Use gold rate from props, or fallback to standard Nellore rate if not available
  const rate22k = goldRates ? goldRates.gold22k : 6850;

  const totalPaid = emi * 11;
  const estimatedSavings = Math.round(totalPaid * 0.12); // Assuming 12% average VA savings
  const totalValue = totalPaid + estimatedSavings;
  const goldAccumulated = (totalPaid / rate22k).toFixed(3);

  const getSchemeWhatsAppLink = (schemeName) => {
    const message = `Hi, I would like to know more about the:
${schemeName}
Can you share the eligibility, monthly options, and benefits?`;
    return `https://wa.me/${shopPhoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const getCalculatorWhatsAppLink = () => {
    const message = `Hi, I calculated my Swarna Varsha Gold Scheme benefits online:
Monthly Installment: ₹${emi}
Total Invested: ₹${totalPaid}
Estimated Gold Accumulated: ~${goldAccumulated}g
Estimated Savings (Zero VA): ~₹${estimatedSavings}
I'd like to open this scheme. Please share the details!`;
    return `https://wa.me/${shopPhoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="schemes" className="savings-scheme-section">
      <div className="section-header">
        <h2 className="section-title">{t.schemesTitle}</h2>
        <p className="section-subtitle">{t.schemesSubtitle}</p>
      </div>

      <div className="schemes-container">
        {/* Scheme 1: Savings Plan */}
        <div className="scheme-item-card savings-plan">
          <div className="scheme-badge-ribbon">
            <Sparkles size={16} className="ribbon-icon" />
            <span>Popular Plan</span>
          </div>
          <div className="scheme-card-header">
            <Calendar className="scheme-icon" size={32} />
            <h3>{t.scheme1Title}</h3>
          </div>
          
          <div className="scheme-details">
            <p className="scheme-description">{t.scheme1Desc}</p>
            
            <ul className="scheme-benefits-list">
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "11 Easy monthly installments" : "11 నెలల సులువైన వాయిదాలు"}</span>
              </li>
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Zero Making Charges on maturity jewelry" : "మెచ్యూరిటీ నగలపై సున్నా మేకింగ్ చార్జీలు"}</span>
              </li>
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Zero Wastage charges (Up to 12% VA)" : "తరుగు ఖర్చులు లేవు (12% వరకు)"}</span>
              </li>
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Lock-in gold weight option to beat inflation" : "బంగారం బరువును లాక్ చేసుకునే సదుపాయం"}</span>
              </li>
            </ul>
          </div>

          <a 
            href={getSchemeWhatsAppLink("Swarna Varsha Savings Scheme")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="scheme-cta-btn"
          >
            <span>{t.scheme1Btn}</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Scheme 2: Old Gold Exchange */}
        <div className="scheme-item-card old-gold-exchange">
          <div className="scheme-card-header">
            <RefreshCcw className="scheme-icon" size={32} />
            <h3>{t.scheme2Title}</h3>
          </div>

          <div className="scheme-details">
            <p className="scheme-description">{t.scheme2Desc}</p>

            <ul className="scheme-benefits-list">
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Instant Computerized Purity Report" : "తక్షణ కంప్యూటరైజ్డ్ స్వచ్ఛత నివేదిక"}</span>
              </li>
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Exchange for 100% metal weight value" : "100% బరువుకు సమానమైన విలువతో మార్పిడి"}</span>
              </li>
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Transparent melting and testing process" : "కళ్ళముందే కరిగించి ఉచితంగా స్వచ్ఛత పరీక్ష"}</span>
              </li>
              <li>
                <Award size={16} className="benefit-icon" />
                <span>{language === 'en' ? "Upgrade old items to modern designer ornaments" : "పాత నగలను సరికొత్త ఆధునిక డిజైన్లుగా మార్చడం"}</span>
              </li>
            </ul>
          </div>

          <a 
            href={getSchemeWhatsAppLink("Old Gold Exchange Scheme")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="scheme-cta-btn secondary"
          >
            <span>{t.scheme2Btn}</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* EMI & Savings Calculator Section */}
      <div className="scheme-calculator-container">
        <div className="calculator-header">
          <Calculator className="calc-icon" size={28} />
          <div>
            <h3>{t.schemeCalcTitle}</h3>
            <p>{t.schemeCalcSubtitle}</p>
          </div>
        </div>

        <div className="calculator-grid">
          {/* Inputs Panel */}
          <div className="calc-inputs-panel">
            <div className="input-group">
              <label>{t.schemeMonthlyEMI}</label>
              <div className="emi-value-display">₹{emi.toLocaleString('en-IN')}</div>
              <input 
                type="range" 
                min="2000" 
                max="50000" 
                step="1000" 
                value={emi} 
                onChange={(e) => setEmi(parseInt(e.target.value))}
                className="emi-slider"
              />
              <div className="slider-limits">
                <span>₹2,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div className="preset-buttons">
              {[2000, 5000, 10000, 20000, 30000].map((val) => (
                <button 
                  key={val} 
                  type="button" 
                  onClick={() => setEmi(val)}
                  className={`preset-btn ${emi === val ? 'active' : ''}`}
                >
                  ₹{val.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <div className="calculator-info-box">
              <ShieldCheck className="info-icon" size={18} />
              <span>
                {language === 'en' 
                  ? `Gold rate calculated at ₹${rate22k}/g for 22K Hallmarked Gold.`
                  : `నేటి 22 క్యారెట్ల బంగారం ధర గ్రాముకు ₹${rate22k} చొప్పున లెక్కించబడింది.`}
              </span>
            </div>
          </div>

          {/* Results Panel */}
          <div className="calc-results-panel">
            <div className="results-rows">
              <div className="res-row">
                <span className="res-label">{t.schemeTerm}</span>
                <span className="res-val highlight-white">{t.schemeTermVal}</span>
              </div>
              <div className="res-row">
                <span className="res-label">{t.schemeTotalInvested}</span>
                <span className="res-val highlight-white">₹{totalPaid.toLocaleString('en-IN')}</span>
              </div>
              <div className="res-row">
                <span className="res-label">{t.schemeApproxSavings}</span>
                <span className="res-val highlight-gold">+ ₹{estimatedSavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="divider-line" />
              <div className="res-row total-row">
                <span className="res-label">{t.schemePurchasingPower}</span>
                <span className="res-val highlight-green">₹{totalValue.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="gold-accumulated-indicator">
              <span className="label">{t.schemeEstGoldWeight}</span>
              <span className="weight">~ {goldAccumulated} grams</span>
              <span className="desc">
                {language === 'en' 
                  ? "*Locked monthly to beat gold price rises" 
                  : "*ధరల పెరుగుదల నష్టం లేకుండా ప్రతి నెల బంగారం బరువు లాక్ చేయబడుతుంది"}
              </span>
            </div>

            <a 
              href={getCalculatorWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="calc-join-btn"
            >
              <span>{language === 'en' ? "Open Scheme on WhatsApp" : "వాట్సాప్ ద్వారా పథకంలో చేరండి"}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="scheme-reality-check">
        <div className="reality-header">
          <h3>{t.schemeRealityCheckTitle}</h3>
          <p>{t.schemeRealityCheckSubtitle}</p>
        </div>

        <div className="reality-table-wrapper">
          <table className="reality-table">
            <thead>
              <tr>
                <th>{t.schemeFeatureHeader}</th>
                <th className="highlight-column">{t.schemeSwarnaVarshaHeader}</th>
                <th>{t.schemeDirectPurchaseHeader}</th>
                <th>{t.schemeBankRDHeader}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="feat-name">{t.schemeFeatWastage}</td>
                <td className="feat-val sv-cell"><Check size={16} className="table-icon check" /> {t.schemeFeatWastageVarsha}</td>
                <td className="feat-val"><X size={16} className="table-icon cross" /> {t.schemeFeatWastageDirect}</td>
                <td className="feat-val"><X size={16} className="table-icon cross" /> {t.schemeFeatWastageBank}</td>
              </tr>
              <tr>
                <td className="feat-name">{t.schemeFeatPriceLock}</td>
                <td className="feat-val sv-cell"><Check size={16} className="table-icon check" /> {t.schemeFeatPriceLockVarsha}</td>
                <td className="feat-val"><X size={16} className="table-icon cross" /> {t.schemeFeatPriceLockDirect}</td>
                <td className="feat-val"><X size={16} className="table-icon cross" /> {t.schemeFeatPriceLockBank}</td>
              </tr>
              <tr>
                <td className="feat-name">{t.schemeFeatPurityTest}</td>
                <td className="feat-val sv-cell"><Check size={16} className="table-icon check" /> {t.schemeFeatPurityTestVarsha}</td>
                <td className="feat-val"><X size={16} className="table-icon cross" /> {t.schemeFeatPurityTestDirect}</td>
                <td className="feat-val">{t.schemeFeatPurityTestBank}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* EMI Auto-Debit & Payment Flexibility */}
      <div className="scheme-payment-flex">
        <div className="payment-flex-card">
          <div className="icon-box">
            <CreditCard size={28} />
          </div>
          <div className="content">
            <h4>{t.schemeEmiSupportTitle}</h4>
            <p>{t.schemeEmiSupportDesc}</p>
            <div className="upi-badges">
              <span className="upi-badge">Google Pay</span>
              <span className="upi-badge">PhonePe</span>
              <span className="upi-badge">Paytm</span>
              <span className="upi-badge">Net Banking</span>
              <span className="upi-badge">eNACH Auto-Debit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsScheme;
