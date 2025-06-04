// src/pages/PumaPage.js
import React from 'react';
import './BrandPage.css';

const pumaShoes = [
  { id: 1, name: 'RS-X', image: '/assets/shoes/puma1.jpeg' },
  { id: 2, name: 'Clyde', image: '/assets/shoes/puma2.jpeg' },
  // Add all puma shoes...
];

const PumaPage = () => {
  return (
    <div className="brand-page">
      <div className="brand-header">
        <img src="/assets/logos/puma.png" alt="Puma" className="brand-logo" />
        <h1>Puma Collection</h1>
      </div>
      <div className="shoes-grid">
        {pumaShoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PumaPage;