// src/pages/NikePage.js
import React from 'react';
import './BrandPage.css';

const nikeShoes = [
  { id: 1, name: 'Air Max', image: '/assets/shoes/nike1.jpeg' },
  { id: 2, name: 'Air Force', image: '/assets/shoes/nike2.jpeg' },
  { id: 3, name: 'Air Jordan', image: '/assets/shoes/nike3.png' },
  // Add all nike shoes...
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