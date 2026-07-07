import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ language, t }) => {
  const testimonialsData = [
    {
      name: t.testi1Name,
      text: t.testi1Text,
      rating: 5
    },
    {
      name: t.testi2Name,
      text: t.testi2Text,
      rating: 5
    },
    {
      name: t.testi3Name,
      text: t.testi3Text,
      rating: 5
    }
  ];

  return (
    <></>
  );
};

export default Testimonials;
