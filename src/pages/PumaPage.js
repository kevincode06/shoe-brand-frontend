// src/pages/PumaPage.js
import React from 'react';
import './BrandPage.css';

// Import images
import puma1 from '../assets/shoes/puma1.jpeg';
import puma2 from '../assets/shoes/puma2.jpeg';
import puma3 from '../assets/shoes/puma3.jpeg';
import puma4 from '../assets/shoes/puma4.jpeg';
import puma5 from '../assets/shoes/puma5.jpg';
import puma6 from '../assets/shoes/puma6.jpeg';
import puma7 from '../assets/shoes/puma7.jpeg';
import puma8 from '../assets/shoes/puma8.jpeg';

const pumaShoes = [
  { id: 1, name: 'Superstar', image: puma1 },
  { id: 2, name: 'New Puma', image: puma2 },
  { id: 3, name: 'RS-X', image: puma3 },
  { id: 4, name: 'New Puma', image: puma4 },
  { id: 5, name: 'Black Puma', image: puma5 },
  { id: 6, name: 'RS-X', image: puma6 },
  { id: 7, name: 'Soccer Boost', image: puma7 },
  { id: 8, name: 'Soccer Boost', image: puma8 },

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