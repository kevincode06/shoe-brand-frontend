// src/pages/AdidasPage.js
import React from 'react';
import './BrandPage.css';

const adidasShoes = [
  { id: 1, name: 'Superstar', image: '/assets/shoes/ad1.jpeg' },
  { id: 2, name: 'Ultraboost', image: '/assets/shoes/ad2.jpeg' },
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