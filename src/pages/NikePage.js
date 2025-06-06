// src/pages/NikePage.js
import React from 'react';
import './BrandPage.css';

// Import images
import nike1 from '../assets/shoes/nike1.jpeg';
import nike2 from '../assets/shoes/nike2.jpeg';
import nike3 from '../assets/shoes/nike3.png';
import nike4 from '../assets/shoes/nike4.jpeg';
import nike5 from '../assets/shoes/nike5.png';
import nike6 from '../assets/shoes/nike6.jpeg';
import nike7 from '../assets/shoes/nike7.jpeg';
import nike8 from '../assets/shoes/nike8.jpeg';

// Then use them in your array
const nikeShoes = [
  { id: 1, name: 'Air Max', image: nike1 },
  { id: 2, name: 'Air Force', image: nike2 },
  { id: 3, name: ' Nike Cortez', image: nike3 },
  { id: 4, name: 'Air Jordan', image: nike4 },
  { id: 5, name: 'Air Jordan', image: nike5 },
  { id: 6, name: 'Air Max', image: nike6 },
  { id: 7, name: 'Air Force', image: nike7 },
  { id: 8, name: 'Air Force', image: nike8 },

];

const NikePage = () => {
  return (
    <div className="brand-page">
      <div className="brand-header">
        <img src="/assets/logos/nike.png" alt="Nike" className="brand-logo" />
        <h1>Nike Collection</h1>
      </div>
      <div className="shoes-grid">
        {nikeShoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NikePage;