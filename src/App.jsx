import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RatesCalculator from './components/RatesCalculator';
import ProductGallery from './components/ProductGallery';
import BridalSpotlight from './components/BridalSpotlight';
import BridalCollectionPage from './components/BridalCollectionPage';
import TrustSection from './components/TrustSection';
import SavingsScheme from './components/SavingsScheme';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

import { translations } from './data/translations';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en'); // 'en' | 'te'
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'collection' | 'bridal-collection' | 'schemes' | 'contact'
  
  // Base gold rates per gram (INR) with defaults
  const [goldRates, setGoldRates] = useState({
    gold22k: 6850,
    gold24k: 7470,
    silver999: 92
  });

  useEffect(() => {
    // Attempt to load previously cached daily rates on startup
    const cachedRates = localStorage.getItem('pm_jewelleries_rates');
    if (cachedRates) {
      try {
        setGoldRates(JSON.parse(cachedRates));
      } catch (e) {
        console.error("Error parsing cached rates", e);
      }
    }

    const fetchRates = async () => {
      try {
        // Fetch real-time Gold and Silver spot prices in INR per troy ounce from a free public API
        const goldRes = await fetch('https://api.gold-api.com/price/XAU/INR');
        const goldData = await goldRes.json();
        
        const silverRes = await fetch('https://api.gold-api.com/price/XAG/INR');
        const silverData = await silverRes.json();

        if (goldData && goldData.price && silverData && silverData.price) {
          const ouncesToGrams = 31.1034768;
          
          // Domestic 24k price: international spot * Indian import customs duty + premium factor (approx 1.15)
          const rawGold24k = goldData.price / ouncesToGrams;
          const gold24k = Math.round(rawGold24k * 1.15);
          
          // Domestic 22k price: 22/24 of 24k gold price
          const gold22k = Math.round(gold24k * (22 / 24));
          
          // Domestic silver price per gram: international spot * retail/duty factor (approx 1.35)
          const rawSilver = silverData.price / ouncesToGrams;
          const silver999 = Math.round(rawSilver * 1.35);

          const newRates = {
            gold22k,
            gold24k,
            silver999
          };

          setGoldRates(newRates);
          localStorage.setItem('pm_jewelleries_rates', JSON.stringify(newRates));
        }
      } catch (err) {
        console.error("Failed to fetch live daily metal rates: ", err);
      }
    };

    fetchRates();
  }, []);

  const t = translations[language];

  // Global navigation handler supporting section scrolling
  const handleNavigation = (page, sectionId) => {
    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="app-luxury-theme">
      {/* Header & Navigation */}
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        t={t} 
        goldRates={goldRates}
        currentPage={currentPage}
        handleNavigation={handleNavigation}
      />

      <main>
        {currentPage === 'home' && (
          <>
            {/* Hero Section Carousel */}
            <Hero 
              language={language} 
              t={t} 
              handleNavigation={handleNavigation}
            />

            {/* Live Rates Display & Estimator */}
            <RatesCalculator 
              language={language} 
              t={t} 
              goldRates={goldRates} 
            />

            {/* Exclusive Bridal Couture Showcase */}
            <BridalSpotlight 
              language={language} 
              t={t} 
              limit={2}
              handleNavigation={handleNavigation}
            />

            {/* About & Trust Certification badging */}
            <TrustSection 
              language={language} 
              t={t} 
            />
          </>
        )}

        {currentPage === 'collection' && (
          /* Product Catalog with Search & Filter */
          <ProductGallery 
            language={language} 
            t={t} 
          />
        )}

        {currentPage === 'bridal-collection' && (
          /* Dedicated Bridal Showcase Page */
          <BridalCollectionPage 
            language={language} 
            t={t} 
            handleNavigation={handleNavigation}
          />
        )}

        {currentPage === 'schemes' && (
          /* Savings Scheme Plans & Exchange */
          <SavingsScheme 
            language={language} 
            t={t} 
            goldRates={goldRates}
          />
        )}

        {currentPage === 'contact' && (
          <>
            {/* Map, Showroom Hours, Address, Coordinates */}
            <LocationMap 
              language={language} 
              t={t} 
            />

            {/* Testimonials and customer reviews */}
            <Testimonials 
              language={language} 
              t={t} 
            />
          </>
        )}
      </main>

      {/* Global footer */}
      <Footer 
        language={language} 
        t={t} 
        currentPage={currentPage}
        handleNavigation={handleNavigation}
      />

      {/* Persistent floating click-to-chat */}
      <FloatingWhatsApp 
        language={language} 
        t={t} 
      />
    </div>
  );
}

export default App;
