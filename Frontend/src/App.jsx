import React, { useState } from 'react';
import { FaPaperPlane, FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6';

const PageStyles = () => (
  <style>{`
    /* --- Basic Setup & Variables --- */
    :root {
        --primary-color: #3A8D9C;
        --secondary-color: #2e717e;
        --text-color: #ffffff;
        --button-bg: #f0f8ff; /* AliceBlue */
        --button-text: #333333;
        --font-family: 'Poppins', sans-serif;
    }

    /* Basic reset and body styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--font-family);
        background-color: var(--primary-color);
        color: var(--text-color);
        overflow-x: hidden;
    }

    /* --- Header & Navigation --- */
    .header { padding: 1.5rem 5%; }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
    }
    .nav-logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-color);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: fadeInDown 0.8s ease-out;
    }
    .nav-menu {
        display: flex;
        list-style: none;
        gap: 2.5rem;
        animation: fadeInDown 0.8s ease-out 0.2s;
        animation-fill-mode: backwards;
    }
    .nav-link {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }
    .nav-link:hover { color: var(--button-bg); }
    .nav-link .icon { font-size: 0.7rem; }
    .search-btn {
        background-color: var(--button-bg);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        animation: fadeInDown 0.8s ease-out 0.4s;
        animation-fill-mode: backwards;
    }
    .search-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .search-btn .icon {
        color: var(--primary-color);
        font-size: 1rem;
    }
    .hamburger { display: none; cursor: pointer; }
    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: var(--text-color);
    }

    /* --- Hero Section --- */
    .hero {
        position: relative;
        padding: 2rem 5%;
        min-height: calc(100vh - 90px);
        display: flex;
        align-items: center;
    }
    .hero-content {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        align-items: center;
        gap: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
    }
    .hero-bg-shapes {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        overflow: hidden;
        z-index: -1;
    }
    .shape {
        position: absolute;
        border-radius: 50%;
        background-color: var(--secondary-color);
        opacity: 0.8;
    }
    .shape-1 { width: 700px; height: 700px; top: -150px; left: -200px; }
    .shape-2 { width: 500px; height: 500px; top: 20%; left: 15%; }
    .hero-text { animation: slideInFromLeft 1s ease-out; }
    .hero-text h1 {
        font-size: 5rem;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }
    .hero-text p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
        max-width: 450px;
    }
    .cta-button {
        background-color: var(--button-bg);
        color: var(--button-text);
        text-decoration: none;
        padding: 1rem 2.5rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 1rem;
        display: inline-block;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .cta-button:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }

    /* --- Hero Image Grid --- */
    .hero-images { animation: slideInFromRight 1s ease-out; }
    .image-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 1rem;
    }
    .image-grid img {
        width: 100%; height: 100%;
        object-fit: cover;
        border-radius: 15px;
        transition: transform 0.4s ease, filter 0.4s ease;
    }
    .image-grid img:hover {
        transform: scale(1.05);
        filter: brightness(1.1);
    }
    .img-large { grid-column: 1 / 3; height: 350px; }
    .img-small-1, .img-small-2 { height: 200px; }

    /* --- Animations --- */
    @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInFromLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInFromRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
    }

    /* --- Responsive & Mobile Menu Logic --- */
    @media (max-width: 992px) {
        .hero-content { grid-template-columns: 1fr; text-align: center; }
        .hero-text { order: 2; }
        .hero-images { order: 1; margin-bottom: 2rem; }
        .hero-text p { margin: 0 auto 2.5rem auto; }
        .hero-text h1 { font-size: 3.5rem; }
        .shape-1 { width: 500px; height: 500px; left: -150px; }
        .shape-2 { display: none; }
        
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 80px;
            flex-direction: column;
            background-color: var(--secondary-color);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            gap: 0;
            z-index: 100;
        }
        .nav-menu.active { left: 0; }
        .nav-item { padding: 1rem 0; }
        .hamburger { display: block; z-index: 101; }
        .hamburger.active .bar:nth-child(2) { opacity: 0; }
        .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    }
    @media (max-width: 576px) {
        .hero-text h1 { font-size: 2.8rem; }
        .img-large { height: 250px; }
        .img-small-1, .img-small-2 { height: 150px; }
    }
        /* Add this to your <style> tag or CSS file */
.login-btn {
  /* Reusing some styles from .cta-button for consistency */
  background-color: var(--button-bg);
  color: var(--button-text);
  text-decoration: none;
  padding: 0.6rem 1.2rem; /* Adjusted padding */
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem; /* Adjusted font size */
  display: inline-block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
  `}</style>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <PageStyles />
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="nav-logo">
            Kanan Biotech
          </a>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item"><a href="#home" className="nav-link" onClick={closeMenu}>Home <FaChevronDown className="icon" /></a></li>
            <li className="nav-item"><a href="#tips" className="nav-link" onClick={closeMenu}>Product Views <FaChevronDown className="icon" /></a></li>
            <li className="nav-item"><a href="#explore" className="nav-link" onClick={closeMenu}>Explore Our Products<FaChevronDown className="icon" /></a></li>
            <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact Us<FaChevronDown className="icon" /></a></li>
          </ul>
          <div className="nav-actions">
            <button className="search-btn" aria-label="Search">
              <FaMagnifyingGlass className="icon" />
            </button>
          </div>
          <div className="flex items-center gap-4"> {/* A container for both actions */}
            {/* Search Button (Unchanged) */}
            

            {/* Corrected Login Link */}
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

      <main className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Explore Biotech</h1>
            <p>We have many products according to agreculture for you every day, don't miss out. Login! our web page for grow your agreculture.</p>
            <a href="#booking" className="cta-button">Visit & Details</a>
          </div>
          <div className="hero-images">
            <div className="image-grid">
              <img src="public\Photo1.jpeg" alt="AppImageError404-1" className="img-large" />
              <img src="public\Photo2.webp" alt="AppImageError404-2" className="img-small-1" />
              <img src="public\Photo3.webp" alt="AppImageError404-3" className="img-small-2" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;