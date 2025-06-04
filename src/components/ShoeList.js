// components/ShoeList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from '../api';
import ShoeCard from './ShoeCard';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/main.css';

function ShoeList() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/shoes');
        setShoes(res.data);
      } catch (err) {
        console.error('Full error:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status,
          url: err.config?.url
        });
        setError('Failed to load shoes. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchShoes();
  }, []);

  const filteredShoes = shoes.filter(shoe => {
    if (user.role === 'super_admin') {
      return selectedBrand === 'All' || shoe.brand === selectedBrand;
    }
    return shoe.brand === user.brand;
  });

  if (loading) return <div className="loading">Loading shoes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="shoe-list-container">
      {user.role === 'super_admin' && (
        <div className="brand-filter">
          <label>Filter by brand:</label>
          <select 
            value={selectedBrand} 
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="All">All Brands</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
          </select>
        </div>
      )}

      <div className="shoe-grid">
        {filteredShoes.length > 0 ? (
          filteredShoes.map((shoe) => (
            <ShoeCard key={shoe._id} shoe={shoe} />
          ))
        ) : (
          <p>No shoes found for this brand.</p>
        )}
      </div>
    </div>
  );
}

export default ShoeList;