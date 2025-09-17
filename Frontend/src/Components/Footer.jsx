import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-logo">Kanan Biotech</h3>
          <p>
            Pioneering agricultural innovation through biotechnology to foster sustainable growth and healthier yields for a growing world.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#product-views">Product Views</a></li>
            <li><a href="#explore">Explore Products</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p className="contact-info">
            <FaMapMarkerAlt className="contact-icon" />
            Kolkata, West Bengal, India
          </p>
          <p className="contact-info">
            <FaPhone className="contact-icon" />
            +91 80019 49805
          </p>
          <p className="contact-info">
            <FaEnvelope className="contact-icon" />
            info@kananbiotech.com
          </p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Instagram"><FaYoutube/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kanan Biotech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;