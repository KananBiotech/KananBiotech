import React from 'react';
// Note: Icon imports from 'react-icons/fa6' are correct for the modern version
import { 
  FaMicroscope, 
  FaChartSimple, 
  FaStore, 
  FaComments, 
  FaFish 
} from 'react-icons/fa6'; 

// Data Array - The source of truth for the options
const options = [
  { name: 'Disease Diagnostic', Icon: FaMicroscope, href: '/UnderConstruction' },
  { name: 'Aquaculture Data', Icon: FaChartSimple, href: '/UnderConstruction' },
  { name: 'Stock Sells & Buyer', Icon: FaStore, href: '/UnderConstruction' },
  { name: 'Aqua Consult', Icon: FaComments, href: '/UnderConstruction' },
  { name: 'Food Protein Prep', Icon: FaFish, href: '/UnderConstruction' }, 
];

const QuickOptions = () => {
  return (
    // The main container for the options grid
    <section className="quick-options-container">
      {/* Map through the options array to generate dynamic links */}
      {options.map((option) => (
        // Use the option.name as the key for stability
        <a 
          key={option.name} 
          href={option.href} 
          className="quick-option-box"
        >
          {/* Render the Icon component dynamically */}
          <option.Icon className="icon" /> 
          
          {/* Display the option name */}
          <span>{option.name}</span>
        </a>
      ))}
    </section>
  );
};

export default QuickOptions;