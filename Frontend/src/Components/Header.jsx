import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaMagnifyingGlass, FaSeedling, FaChevronDown } from 'react-icons/fa6'; 

const Header = () => {
    const { t, language: currentLanguage, changeLanguage } = useLanguage(); 
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a className="nav-logo">
                    Kanan Biotech
                </a>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
  <li className="nav-item">
    <a href="#services" className="nav-link">{t('services')}</a>
  </li>
  <li className="nav-item">
    <a href="/UnderConstruction" className="nav-link">{t('about_us')}</a>
  </li>
  <li className="nav-item">
    <a href="/Contact" className="nav-link">{t('contact')}</a>
  </li>

  <li className="nav-item flex items-center gap-3">
    {/* Search button */}
    <button className="search-btn" aria-label={t('search_button')}>
      <FaMagnifyingGlass className="icon" />
    </button>

    {/* Language Selector */}
    <div className="relative">
      <select
        onChange={handleLanguageChange}
        value={currentLanguage}
        className="bg-white text-gray-900 p-2 pl-3 pr-10 rounded-[10px] cursor-pointer font-semibold text-sm border border-gray-200 shadow-sm hover:shadow transition-all duration-200"
        aria-label={t('select_language')}
      >
        <option value="en">English</option>
        <option value="bn">বাংলা (Bengali)</option>
        <option value="hi">हिन्दी (Hindi)</option>
      </select>
      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 pointer-events-none text-xs" />
    </div>

    {/* Login Button */}
    <a href="/Login" className="login-btn">{t('login')}</a>
  </li>
</ul>


                
                
                <div 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
