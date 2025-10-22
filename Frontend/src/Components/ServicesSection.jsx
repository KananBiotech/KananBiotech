import React from 'react';
import { 
  FaMicroscope, 
  FaChartSimple, 
  FaStore, 
  FaComments, 
  FaFish 
} from 'react-icons/fa6'; // Or any icons you prefer

// Array of the service options
const services = [
  { name: 'Disease Diagnostic', Icon: FaMicroscope, href: '/UnderConstruction' },
  { name: 'Aquaculture Data', Icon: FaChartSimple, href: '/UnderConstruction' },
  { name: 'Stock Sells & Buyer', Icon: FaStore, href: '/UnderConstruction' },
  { name: 'Aqua Consult', Icon: FaComments, href: '/UnderConstruction' },
  { name: 'Food Protein Prep', Icon: FaFish, href: '/UnderConstruction' },
];

const ServicesSection = () => {
  return (
    <section className="services-container">
      {services.map((service) => (
        <a key={service.name} href={service.href} className="service-card">
          <service.Icon className="icon" />
          <span>{service.name}</span>
        </a>
      ))}
    </section>
  );
};

export default ServicesSection;