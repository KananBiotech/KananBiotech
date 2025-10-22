import React, { createContext, useState, useContext } from 'react';

// 1. Define the Context
export const LanguageContext = createContext();

// Define the Translation Dictionary (Completed Bengali Keys)
const translations = {
  en: {
    // Header Keys
    logo: "KANAN BIOTECH",
    home: "Home",
    growth: "Growth",
    communication: "Farmer Communication",
    contact: "Contact Us",
    login: "Log In",
    // App/Hero Keys
    explore: "Explore Biotech",
    hero_text: "We have many products...",
    cta_button: "Visit & Details",
    // QuickOptions Keys
    diagnostic: "Disease Diagnostic",
    aquacultureData: "Aquaculture Data",
    stockSells: "Stock Sells & Buyer",
    aquaConsult: "Aqua Consult",
    foodPrep: "Food Protein Prep",
  },
  bn: { 
    // Header Keys
    logo: "কানন বায়োটেক", // Kanan Biotech
    home: "হোম", // Home
    growth: "বৃদ্ধি", // Growth
    communication: "কৃষক যোগাযোগ", // Farmer Communication
    contact: "যোগাযোগ", // Contact Us
    login: "লগ ইন", // Log In
    // App/Hero Keys
    explore: "বায়োটেক অন্বেষণ করুন", // Explore Biotech
    hero_text: "আমাদের অনেক পণ্য আছে...", // We have many products...
    cta_button: "ভিজিট ও বিস্তারিত", // Visit & Details
    // QuickOptions Keys
    diagnostic: "রোগ নির্ণয়", // Disease Diagnostic
    aquacultureData: "জলজ চাষের তথ্য", // Aquaculture Data
    stockSells: "স্টক বিক্রি ও ক্রেতা", // Stock Sells & Buyer
    aquaConsult: "অ্যাকুয়া পরামর্শ", // Aqua Consult
    foodPrep: "খাদ্য প্রোটিন প্রস্তুতি", // Food Protein Prep
  },
  hi: { // Hindi Translations (Add if needed, currently set to fallback)
    logo: "कानन बायोटेक",
    home: "होम",
    growth: "विकास",
    communication: "किसान संचार",
    contact: "संपर्क करें",
    login: "लॉग इन",
    explore: "बायोटेक का अन्वेषण करें",
    hero_text: "हमारे पास कई उत्पाद हैं...",
    cta_button: "देखें और विवरण",
    diagnostic: "रोग निदान",
    aquacultureData: "जलीय कृषि डेटा",
    stockSells: "स्टॉक बिक्री और खरीदार",
    aquaConsult: "एक्वा परामर्श",
    foodPrep: "खाद्य प्रोटीन तैयारी",
  },
};

// 2. Create the Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const t = (key) => {
    // Safely check if the key exists in the current language, otherwise fall back to 'en'.
    return translations[language][key] || translations['en'][key] || key;
  };

  const changeLanguage = (langKey) => {
    setLanguage(langKey);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Custom hook for convenience
export const useLanguage = () => useContext(LanguageContext);
