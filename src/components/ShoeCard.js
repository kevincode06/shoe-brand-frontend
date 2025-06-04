// components/ShoeCard.js
import React from 'react';
import nikeLogo from '../assets/logos/nike.png';
import adidasLogo from '../assets/logos/adidas.png';
import pumaLogo from '../assets/logos/puma.png';

const logos = {
  Nike: nikeLogo,
  Adidas: adidasLogo,
  Puma: pumaLogo,
};

function ShoeCard({ shoe }) {
  // Dynamically import the shoe image based on the name
  const getImagePath = () => {
    const brandPrefix = shoe.brand.toLowerCase();
    const imageName = shoe.image || `${brandPrefix} ${Math.floor(Math.random() * 8) + 1}.jpeg`;
    try {
      return require(`../assets/shoes/${imageName}`);
    } catch {
      // Fallback image if not found
      return require(`../assets/shoes/${brandPrefix}1.jpeg`);
    }
  };

  return (
    <div className="shoe-card">
      <img 
        src={getImagePath()} 
        alt={shoe.name} 
        className="shoe-img" 
        onError={(e) => {
          e.target.src = require(`../assets/shoes/${shoe.brand.toLowerCase()}1.jpeg`);
        }}
      />
      <div className="shoe-info">
        <h3>{shoe.name}</h3>
        <p>{shoe.description}</p>
        <p><strong>Price:</strong> ${shoe.price.toFixed(2)}</p>
        <img 
          src={logos[shoe.brand]} 
          alt={shoe.brand} 
          className="brand-logo" 
        />
      </div>
    </div>
  );
}

export default ShoeCard;