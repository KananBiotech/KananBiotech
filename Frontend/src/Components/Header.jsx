import React, { useState } from 'react';
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          KANAN BIOTECH
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href="/" className="nav-link" onClick={closeMenu}>Home <FaChevronDown className="icon" /></a></li>
          <li className="nav-item"><a href="#tips" className="nav-link" onClick={closeMenu}> Growth <FaChevronDown className="icon" /></a></li>
          <li className="nav-item"><a href="/FarmerSellingComunityPage" className="nav-link" onClick={closeMenu}>Farmer Commiunication<FaChevronDown className="icon" /></a></li>
          <li className="nav-item"><a href="/Contact" className="nav-link" onClick={closeMenu}>Contact Us<FaChevronDown className="icon" /></a></li>
        </ul>

        {/* Container for action buttons */}
        <div className="flex items-center gap-1">
          <button className="search-btn" aria-label="Search">
            <FaMagnifyingGlass className="icon" />
          </button>
          <a href="/login" className="login-btn">
            Log In
          </a>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;