import React, { useState, useEffect } from 'react'; 
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  
  const closeMenu = () => setIsMenuOpen(false);


  useEffect(() => {
    const controlHeader = () => {
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) { 
        if (currentScrollY > lastScrollY) {
         
          setIsVisible(false);
        } else {
        
          setIsVisible(true);
        }
      } else {
       
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);

   
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY, isMenuOpen]); 
  return (
   
    <header className={`header ${!isVisible ? 'header--hidden' : ''}`}>
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          KANAN BIOTECH
        </a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* ...your nav-items... */}
          <li className="nav-item"><a href="/" className="nav-link" onClick={closeMenu}>Home <FaChevronDown className="icon" /></a></li>
          <li className="nav-item"><a href="/UnderConstruction" className="nav-link" onClick={closeMenu}> Growth <FaChevronDown className="icon" /></a></li>
          <li className="nav-item"><a href="/UnderConstruction" className="nav-link" onClick={closeMenu}>Farmer Commiunication<FaChevronDown className="icon" /></a></li>
          <li className="nav-item"><a href="/Contact" className="nav-link" onClick={closeMenu}>Contact Us<FaChevronDown className="icon" /></a></li>
        </ul>

        {/* ...your action buttons... */}
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