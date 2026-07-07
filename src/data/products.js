import { getAssetImageFromProductName } from '../utils/getAssetImage';

export const products = [
  // Necklaces
  {
    id: "n101",
    name: {
      en: "Royal Antique Gold Choker",
      te: "రాజకోట యాంటిక్ బంగారు చోకర్",
    },
    category: "necklaces",
    weightRange: "24g - 28g",
    approxWeightVal: 26,
    designId: "N-101",
    image: getAssetImageFromProductName("Royal Antique Gold Choker"),
    featured: true,
  },
  {
    id: "n102",
    name: {
      en: "Traditional Mango Mala Necklace",
      te: "సాంప్రదాయ మామిడిపిందెల హారం",
    },
    category: "necklaces",
    weightRange: "35g - 40g",
    approxWeightVal: 37.5,
    designId: "N-102",
    image: getAssetImageFromProductName("Traditional Mango Mala Necklace"),
    featured: false,
  },
  {
    id: "n103",
    name: {
      en: "Kundan Work Floral Haram",
      te: "కుందన్ వర్క్ పూల హారం",
    },
    category: "necklaces",
    weightRange: "48g - 55g",
    approxWeightVal: 52,
    designId: "N-103",
    image: getAssetImageFromProductName("Kundan Work Floral Haram"),
    featured: false,
  },

  // Bangles
  {
    id: "b201",
    name: {
      en: "Exquisite Gold Kadas (Pair)",
      te: "అద్భుతమైన బంగారు కడాలు (జత)",
    },
    category: "bangles",
    weightRange: "28g - 32g",
    approxWeightVal: 30,
    designId: "B-201",
    image: getAssetImageFromProductName("Exquisite Gold Kadas (Pair)"),
    featured: true,
  },
  {
    id: "b202",
    name: {
      en: "Nellore Filigree Work Bangles",
      te: "నెల్లూరు ఫిలిగ్రీ వర్క్ గాజులు",
    },
    category: "bangles",
    weightRange: "38g - 42g",
    approxWeightVal: 40,
    designId: "B-202",
    image: getAssetImageFromProductName("Nellore Filigree Work Bangles"),
    featured: false,
  },
  {
    id: "b203",
    name: {
      en: "Sleek Daily Wear Bangles Set",
      te: "రోజూ వేసుకునే సన్నని గాజుల సెట్",
    },
    category: "bangles",
    weightRange: "14g - 18g",
    approxWeightVal: 16,
    designId: "B-203",
    image: getAssetImageFromProductName("Sleek Daily Wear Bangles Set"),
    featured: false,
  },

  // Rings
  {
    id: "r301",
    name: {
      en: "Peacock Motif CZ Stone Ring",
      te: "నెమలి డిజైన్ రాళ్ల ఉంగరం",
    },
    category: "rings",
    weightRange: "6g - 8g",
    approxWeightVal: 7,
    designId: "R-301",
    image: getAssetImageFromProductName("Peacock Motif CZ Stone Ring"),
    featured: true,
  },
  {
    id: "r302",
    name: {
      en: "Traditional Lakshmi Vanki Ring",
      te: "సాంప్రదాయ లక్ష్మీ దేవి వంకీ ఉంగరం",
    },
    category: "rings",
    weightRange: "4g - 6g",
    approxWeightVal: 5,
    designId: "R-302",
    image: getAssetImageFromProductName("Traditional Lakshmi Vanki Ring"),
    featured: false,
  },
  {
    id: "r303",
    name: {
      en: "Classic Gents Signet Ring",
      te: "పురుషుల క్లాసిక్ ముద్ర ఉంగరం",
    },
    category: "rings",
    weightRange: "8g - 10g",
    approxWeightVal: 9,
    designId: "R-303",
    image: getAssetImageFromProductName("Classic Gents Signet Ring"),
    featured: false,
  },

  // Earrings
  {
    id: "e401",
    name: {
      en: "Antique Gold Temple Jhumkas",
      te: "యాంటిక్ బంగారు టెంపుల్ జుమ్కాలు",
    },
    category: "earrings",
    weightRange: "12g - 16g",
    approxWeightVal: 14,
    designId: "E-401",
    image: getAssetImageFromProductName("Antique Gold Temple Jhumkas"),
    featured: true,
  },
  {
    id: "e402",
    name: {
      en: "Royal Pearl Drop Chandbalis",
      te: "ముత్యాల చంద్ బాలి కమ్మలు",
    },
    category: "earrings",
    weightRange: "18g - 22g",
    approxWeightVal: 20,
    designId: "E-402",
    image: getAssetImageFromProductName("Royal Pearl Drop Chandbalis"),
    featured: false,
  },

  // Chains
  {
    id: "c501",
    name: {
      en: "Classic Gold Rope Chain",
      te: "క్లాసిక్ బంగారు తాడు గొలుసు",
    },
    category: "chains",
    weightRange: "15g - 18g",
    approxWeightVal: 16.5,
    designId: "C-501",
    image: getAssetImageFromProductName("Classic Gold Rope Chain"),
    featured: false,
  },
  {
    id: "c502",
    name: {
      en: "Traditional Peacock Mugappu Haram",
      te: "సాంప్రదాయ నెమలి మొగప్పు హారం",
    },
    category: "chains",
    weightRange: "24g - 30g",
    approxWeightVal: 27,
    designId: "C-502",
    image: getAssetImageFromProductName("Traditional Peacock Mugappu Haram"),
    featured: false,
  },

  // Coins
  {
    id: "m601",
    name: {
      en: "Ashta Lakshmi 24K Gold Coin",
      te: "అష్టలక్ష్మి 24K బంగారు నాణెం",
    },
    category: "coins",
    weightRange: "5g - 10g",
    approxWeightVal: 8,
    designId: "M-601",
    image: getAssetImageFromProductName("Ashta Lakshmi 24K Gold Coin"),
    featured: false,
  },
  {
    id: "m602",
    name: {
      en: "99.9% Pure Gold Bullion Bar",
      te: "99.9% స్వచ్ఛమైన బంగారు బిస్కెట్",
    },
    category: "coins",
    weightRange: "50g - 100g",
    approxWeightVal: 50,
    designId: "M-602",
    image: getAssetImageFromProductName("99.9% Pure Gold Bullion Bar"),
    featured: false,    
  },

  // Bridal
  {
    id: "br701",
    name: {
      en: "Royal Nellore Bridal Grand Set",
      te: "రాజవంశీయుల నెల్లూరు బ్రైడల్ గ్రాండ్ సెట్",
    },
    category: "bridal",
    weightRange: "120g - 150g",
    approxWeightVal: 135,
    designId: "BR-701",
    image: getAssetImageFromProductName("Royal Nellore Bridal Grand Set"),
    featured: true,
  },
  {
    id: "br702",
    name: {
      en: "Heritage Emerald Guttapusalu Haram",
      te: "సాంప్రదాయ పచ్చల గుత్తపూసల హారం",
    },
    category: "bridal",
    weightRange: "80g - 100g",
    approxWeightVal: 90,
    designId: "BR-702",
    image: getAssetImageFromProductName("Heritage Emerald Guttapusalu Haram"),
    featured: true,
  },
  {
    id: "br703",
    name: {
      en: "Nizami Antique Pearl Haram Set",
      te: "నిజామీ యాంటిక్ ముత్యాల హారం సెట్",
    },
    category: "bridal",
    weightRange: "100g - 120g",
    approxWeightVal: 110,
    designId: "BR-703",
    image: getAssetImageFromProductName("Nizami Antique Pearl Haram Set"),
    featured: false,
  },
  {
    id: "br704",
    name: {
      en: "Divine Temple Kasu Mala Set",
      te: "దివ్య టెంపుల్ కాసుల పేరు సెట్",
    },
    category: "bridal",
    weightRange: "140g - 160g",
    approxWeightVal: 150,
    designId: "BR-704",
    image: getAssetImageFromProductName("Divine Temple Kasu Mala Set"),
    featured: false,
  },
  {
    id: "br705",
    name: {
      en: "Nellore Filigree Diamond-Cut Choker",
      te: "నెల్లూరు ఫిలిగ్రీ డైమండ్ కట్ చోకర్",
    },
    category: "bridal",
    weightRange: "60g - 80g",
    approxWeightVal: 70,
    designId: "BR-705",
    image: getAssetImageFromProductName("Nellore Filigree Diamond-Cut Choker"),
    featured: false,
  },
  {
    id: "br706",
    name: {
      en: "Royal Kundan Peacock Necklace Set",
      te: "రాజ కుందన్ నెమలి డిజైన్ హారం సెట్",
    },
    category: "bridal",
    weightRange: "110g - 130g",
    approxWeightVal: 120,
    designId: "BR-706",
    image: getAssetImageFromProductName("Royal Kundan Peacock Necklace Set"),
    featured: false,
  },
];

