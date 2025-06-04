// src/pages/DashboardPage.js
import React from 'react';
import './DashboardPage.css';

const allShoes = [
  // Combine all shoes from all brands
  { id: 1, name: 'Air Max', brand: 'nike', image: '/assets/shoes/nike1.jpeg' },
  { id: 2, name: 'Superstar', brand: 'adidas', image: '/assets/shoes/ad1.jpeg' },
  { id: 3, name: 'RS-X', brand: 'puma', image: '/assets/shoes/puma1.jpeg' },
  // Add all other shoes...
];

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