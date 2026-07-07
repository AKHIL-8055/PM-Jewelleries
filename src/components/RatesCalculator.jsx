import React, { useState } from 'react';
import { DollarSign, Landmark, HelpCircle, TrendingUp, ShieldCheck } from 'lucide-react';

const RatesCalculator = ({ language, t, goldRates }) => {
  const [weight, setWeight] = useState(10);
  const [purity, setPurity] = useState('gold22k'); // 'gold22k' | 'gold24k' | 'silver999'

  // Calculate estimated price
  const calculateEstimate = () => {
    if (!weight || isNaN(weight) || weight <= 0) return 0;
    const rate = goldRates[purity];
    return (weight * rate).toFixed(2);
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="rates" className="rates-calculator-section">
      <div className="section-header">
        <h2 className="section-title">{t.ratesTitle}</h2>
        <p className="section-subtitle">{t.ratesSubtitle}</p>
      </div>

      <div className="rates-grid-container">
        {/* Rate Cards */}
        <div className="rates-card-list">
          <div className="rate-card gold-22">
            <div className="rate-card-header">
              <span className="purity-tag">22K</span>
             
            </div>
            <h3>{t.gold22k}</h3>
            <div className="price-display">
              <span className="currency-symbol">₹</span>
              <span className="price-value">{goldRates.gold22k}</span>
              <span className="per-gram">/ gram</span>
            </div>
            <div className="rate-footer">
              
              <span>BIS 916 Hallmark Standard</span>
            </div>
          </div>

          <div className="rate-card gold-24">
            <div className="rate-card-header">
              <span className="purity-tag">24K</span>
              
            </div>
            <h3>{t.gold24k}</h3>
            <div className="price-display">
              <span className="currency-symbol">₹</span>
              <span className="price-value">{goldRates.gold24k}</span>
              <span className="per-gram">/ gram</span>
            </div>
            <div className="rate-footer">
             
              <span>99.9% Pure Bullion Standard</span>
            </div>
          </div>



          <div className="rate-card ">
            <div className="rate-card-header">
              <span className="purity-tag">999</span>
              
            </div>
            <h3>{t.silver999}</h3>
            <div className="price-display">
              <span className="currency-symbol">₹</span>
              <span className="price-value">{goldRates.silver999}</span>
              <span className="per-gram">/ gram</span>
            </div>
            <div className="rate-footer">
              
              <span>Chandi / Silver Standard</span>
            </div>
          </div>


          
        </div>

        {/* Calculator Widget */}
        <div className="calculator-widget">
          <h3 className="calculator-title">
            
            {t.calcTitle}
          </h3>
          
          <div className="calculator-form">
            <div className="form-group">
              <label htmlFor="purity-select">{t.calcPurityLabel}</label>
              <select 
                id="purity-select" 
                value={purity} 
                onChange={(e) => setPurity(e.target.value)}
                className="calc-select"
              >
                <option value="gold22k">{t.gold22k} (₹{goldRates.gold22k}/g)</option>
                <option value="gold24k">{t.gold24k} (₹{goldRates.gold24k}/g)</option>
                <option value="silver999">{t.silver999} (₹{goldRates.silver999}/g)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="weight-input">{t.calcWeightLabel}</label>
              <div className="weight-input-container">
                <input 
                  type="number" 
                  id="weight-input" 
                  value={weight} 
                  onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                  placeholder="e.g. 10"
                  className="calc-input"
                  min="0"
                  step="0.01"
                />
                <span className="input-unit">grams</span>
              </div>
            </div>

            <div className="calculator-result">
              <span className="result-label">{t.calcResultLabel}</span>
              <div className="result-price">
                {formatCurrency(calculateEstimate())}
              </div>
            </div>

            <p className="calculator-disclaimer">
              <HelpCircle size={14} className="disclaimer-icon" />
              {t.calcDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesCalculator;
