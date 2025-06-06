// src/pages/DashboardPage.js
import React from 'react';
import './DashboardPage.css';

// Import images
import nike1 from '../assets/shoes/nike1.jpeg';
import nike2 from '../assets/shoes/nike2.jpeg';
import nike3 from '../assets/shoes/nike3.png';
import nike4 from '../assets/shoes/nike4.jpeg';
import nike5 from '../assets/shoes/nike5.png';
import nike6 from '../assets/shoes/nike6.jpeg';
import nike7 from '../assets/shoes/nike7.jpeg';
import nike8 from '../assets/shoes/nike8.jpeg';

import puma1 from '../assets/shoes/puma1.jpeg';
import puma2 from '../assets/shoes/puma2.jpeg';
import puma3 from '../assets/shoes/puma3.jpeg';
import puma4 from '../assets/shoes/puma4.jpeg';
import puma5 from '../assets/shoes/puma5.jpg';
import puma6 from '../assets/shoes/puma6.jpeg';
import puma7 from '../assets/shoes/puma7.jpeg';
import puma8 from '../assets/shoes/puma8.jpeg';

import ad1 from '../assets/shoes/ad1.jpeg';
import ad2 from '../assets/shoes/ad2.jpeg';
import ad3 from '../assets/shoes/ad3.jpeg';
import ad4 from '../assets/shoes/ad4.jpeg';
import ad5 from '../assets/shoes/ad5.jpeg';
import ad6 from '../assets/shoes/ad6.jpeg';
import ad7 from '../assets/shoes/ad7.jpeg';
import ad8 from '../assets/shoes/ad8.jpeg';

// Shoe arrays with brand info
const nikeShoes = [
  { id: 1, name: 'Air Max', image: nike1, brand: 'Nike' },
  { id: 2, name: 'Air Force', image: nike2, brand: 'Nike' },
  { id: 3, name: 'Nike Cortez', image: nike3, brand: 'Nike' },
  { id: 4, name: 'Air Jordan', image: nike4, brand: 'Nike' },
  { id: 5, name: 'Air Jordan', image: nike5, brand: 'Nike' },
  { id: 6, name: 'Air Max', image: nike6, brand: 'Nike' },
  { id: 7, name: 'Air Force', image: nike7, brand: 'Nike' },
  { id: 8, name: 'Air Force', image: nike8, brand: 'Nike' },
];

const pumaShoes = [
  { id: 9, name: 'Superstar', image: puma1, brand: 'Puma' },
  { id: 10, name: 'New Puma', image: puma2, brand: 'Puma' },
  { id: 11, name: 'RS-X', image: puma3, brand: 'Puma' },
  { id: 12, name: 'New Puma', image: puma4, brand: 'Puma' },
  { id: 13, name: 'Black Puma', image: puma5, brand: 'Puma' },
  { id: 14, name: 'RS-X', image: puma6, brand: 'Puma' },
  { id: 15, name: 'Soccer Boost', image: puma7, brand: 'Puma' },
  { id: 16, name: 'Soccer Boost', image: puma8, brand: 'Puma' },
];

const adidasShoes = [
  { id: 17, name: 'Superstar', image: ad1, brand: 'Adidas' },
  { id: 18, name: 'Samba', image: ad2, brand: 'Adidas' },
  { id: 19, name: 'Superstar', image: ad3, brand: 'Adidas' },
  { id: 20, name: 'Superstar', image: ad4, brand: 'Adidas' },
  { id: 21, name: 'Superstar', image: ad5, brand: 'Adidas' },
  { id: 22, name: 'Slider', image: ad6, brand: 'Adidas' },
  { id: 23, name: 'Superstar', image: ad7, brand: 'Adidas' },
  { id: 24, name: 'Samba', image: ad8, brand: 'Adidas' },
];

// ✅ Combine all into one array
const allShoes = [...nikeShoes, ...pumaShoes, ...adidasShoes];

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Admin Dashboard</h1>
      <div className="shoes-grid">
        {allShoes.map(shoe => (
          <div key={shoe.id} className="shoe-card">
            <div className="brand-badge">{shoe.brand}</div>
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
