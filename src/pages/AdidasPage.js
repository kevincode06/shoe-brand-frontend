// src/pages/AdidasPage.js
import React from 'react';
import './BrandPage.css';

import ad1 from '../assets/shoes/ad1.jpeg';
import ad2 from '../assets/shoes/ad2.jpeg';
import ad3 from '../assets/shoes/ad3.jpeg';
import ad4 from '../assets/shoes/ad4.jpeg';
import ad5 from '../assets/shoes/ad5.jpeg';
import ad6 from '../assets/shoes/ad6.jpeg';
import ad7 from '../assets/shoes/ad7.jpeg';
import ad8 from '../assets/shoes/ad8.jpeg';

const adidasShoes = [
  { id: 1, name: 'Superstar', image: ad1 },
  { id: 2, name: 'Samba', image: ad2 },
  { id: 3, name: 'Superstar', image: ad3 },
  { id: 4, name: 'Superstar', image: ad4 },
  { id: 5, name: 'Superstar', image: ad5 },
  { id: 6, name: 'Slider', image: ad6 },
  { id: 7, name: 'Superstar', image: ad7 },
  { id: 8, name: 'Samba', image: ad8 },

  // Add all adidas shoes...
];

const AdidasPage = () => {
  return (
    <div className="brand-page">
      <div className="brand-header">
        <img src="/assets/logos/adidas.png" alt="Adidas" className="brand-logo" />
        <h1>Adidas Collection</h1>
      </div>
      <div className="shoes-grid">
        {adidasShoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdidasPage;