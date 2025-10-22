import React from 'react';
import './UnderConstruction.css'; 

const UnderConstruction = () => {
  return (
    <div className="construction-page-container">
      <div className="construction-content-wrapper">
        <img 
          src="public\ConstractionPic.webp" 
          alt="Construction Worker" 
          className="construction-worker-logo" 
        />
        <h1 className="construction-title">CONSTRUCTION</h1>
        <p className="construction-subtitle">WORKER</p>
        <p className="construction-message">
          We are building something amazing for you! <br/>
          This feature will be available soon.
        </p>
        <a href="/" className="cta-button construction-back-button">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;