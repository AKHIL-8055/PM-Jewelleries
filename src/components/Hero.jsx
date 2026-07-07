// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

// const Hero = ({ language, t, handleNavigation }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "/src/assets/Regular Antique Gold Choker.png",
//       heading: language === 'en' ? "Exquisite Gold Necklaces" : "అద్భుతమైన స్వర్ణ హారాలు",

//       subheading: language === 'en' ? "Handcrafted heritage designs for special occasions" : "విశిష్టమైన శుభకార్యాల కొరకు ప్రత్యేక శైలి నమూనాలు"
//     },
//     {
//       image: "/src/assets/Heritage Emerald Guttapusalu Haram.png",
//       heading: language === 'en' ? "Exclusive Bridal Collections" : "వివాహ ఆభరణాల ప్రత్యేక కలెక్షన్",

//       subheading: language === 'en' ? "Timeless jewelry sets to celebrate your special day" : "మీ జీవితంలోని అతి ముఖ్యమైన వేడుకకు నిత్యనూతన ఆభరణాలు"
//     },
//     {
//       image: "/src/assets/Nellore Filigree Work Bangles.png",
//       heading: language === 'en' ? "Traditional Gold Bangles" : "సాంప్రదాయ సువర్ణ గాజులు",

//       subheading: language === 'en' ? "Nellore filigree craftsmanship passed down generations" : "తరాల నాటి నెల్లూరు ఫిలిగ్రీ కళాకారుల హస్తకళా నైపుణ్యం"
//     },
//     {
//       image: "/src/assets/Classic Gents Signet Ring.png",
//       heading: language === 'en' ? "Certified Diamond & Gold Rings" : "ధ్రువీకరించబడిన డైమండ్ & గోల్డ్ రింగ్స్",

//       subheading: language === 'en' ? "Celebrate milestones with premium certified purity" : "పరిశుద్ధమైన నాణ్యతతో మీ ఆనంద సమయాలను పదిలం చేసుకోండి"
//     }
//   ];

//   useEffect(() => {
//     const slideTimer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4500);
//     return () => clearInterval(slideTimer);
//   }, [slides.length]);

//   const handlePrev = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <section id="home" className="hero-section">
//       {/* Background Slides */}
//       <div className="hero-slides-container">
//         {slides.map((slide, idx) => (
//           <div 
//             key={idx} 
//             className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
//             style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.7)), url(${slide.image})` }}
//           />
//         ))}
//       </div>

//       {/* Hero Content */}
//       <div className="hero-content-container">
//         <span className="hero-welcome-badge">{t.shopTagline}</span>
//         <h1 className="hero-title">
//           {slides[currentSlide].heading}
//         </h1>
//         <p className="hero-subtitle">
//           {slides[currentSlide].subheading}
//         </p>
        
//         <div className="hero-cta-buttons">
//           <button 
//             onClick={() => handleNavigation('collection')} 
//             className="hero-primary-btn"
//           >
//             {language === 'en' ? "Browse Catalog" : "కలెక్షన్ చూడండి"}
//           </button>
//           <button 
//             onClick={() => handleNavigation('home', 'rates')} 
//             className="hero-secondary-btn"
//           >
//             {language === 'en' ? "View Live Rates" : "నేటి ధరలు"}
//           </button>
//         </div>
//       </div>

//       {/* Carousel Controls */}
//       <button className="carousel-control prev" onClick={handlePrev} aria-label="Previous Slide">
//         <ChevronLeft size={24} />
//       </button>
//       <button className="carousel-control next" onClick={handleNext} aria-label="Next Slide">
//         <ChevronRight size={24} />
//       </button>

//       {/* Slide Indicators */}
//       <div className="carousel-indicators">
//         {slides.map((_, idx) => (
//           <button 
//             key={idx} 
//             onClick={() => setCurrentSlide(idx)}
//             className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>

//       {/* Scroll Down Hint */}
//       <div className="scroll-down-hint">
//         <button 
//           onClick={() => handleNavigation('home', 'rates')} 
//           style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//           aria-label="Scroll Down"
//         >
//           <ArrowDown size={20} className="bounce-arrow" style={{ color: 'var(--text-secondary)' }} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const Hero = ({ language, t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/gold_necklace.png",

      heading: language === 'en' ? "Exquisite Gold Necklaces" : "అద్భుతమైన స్వర్ణ హారాలు",
      subheading: language === 'en' ? "Handcrafted heritage designs for special occasions" : "విశిష్టమైన శుభకార్యాల కొరకు ప్రత్యేక శైలి నమూనాలు"
    },
    {
      image: "/assets/bridal_set.png",

      heading: language === 'en' ? "Exclusive Bridal Collections" : "వివాహ ఆభరణాల ప్రత్యేక కలెక్షన్",
      subheading: language === 'en' ? "Timeless jewelry sets to celebrate your special day" : "మీ జీవితంలోని అతి ముఖ్యమైన వేడుకకు నిత్యనూతన ఆభరణాలు"
    },
    {
      image: "/assets/gold_bangle.png",

      heading: language === 'en' ? "Traditional Gold Bangles" : "సాంప్రదాయ సువర్ణ గాజులు",
      subheading: language === 'en' ? "Nellore filigree craftsmanship passed down generations" : "తరాల నాటి నెల్లూరు ఫిలిగ్రీ కళాకారుల హస్తకళా నైపుణ్యం"
    },
    {
      image: "/assets/gold_ring.png",

      heading: language === 'en' ? "Certified Diamond & Gold Rings" : "ధ్రువీకరించబడిన డైమండ్ & గోల్డ్ రింగ్స్",
      subheading: language === 'en' ? "Celebrate milestones with premium certified purity" : "పరిశుద్ధమైన నాణ్యతతో మీ ఆనంద సమయాలను పదిలం చేసుకోండి"
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Slides */}
      <div className="hero-slides-container">
        {slides.map((slide, idx) => (
          <div 
            key={idx} 
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.7)), url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content-container">
        <span className="hero-welcome-badge">{t.shopTagline}</span>
        <h1 className="hero-title">
          {slides[currentSlide].heading}
        </h1>
        <p className="hero-subtitle">
          {slides[currentSlide].subheading}
        </p>
        
        <div className="hero-cta-buttons">
          <a href="#gallery" className="hero-primary-btn">
            {language === 'en' ? "Browse Catalog" : "కలెక్షన్ చూడండి"}
          </a>
          <a href="#rates" className="hero-secondary-btn">
            {language === 'en' ? "View Live Rates" : "నేటి ధరలు"}
          </a>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control prev" onClick={handlePrev} aria-label="Previous Slide">
        <ChevronLeft size={24} />
      </button>
      <button className="carousel-control next" onClick={handleNext} aria-label="Next Slide">
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentSlide(idx)}
            className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div className="scroll-down-hint">
        <a href="#rates" aria-label="Scroll Down">
          <ArrowDown size={20} className="bounce-arrow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
