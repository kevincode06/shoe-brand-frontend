import React, { useState, useEffect, useContext } from 'react';
import axios from '../api';
import { AuthContext } from '../contexts/AuthContext';

const ShoeForm = ({ editingShoe, onSubmit }) => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: '',
    brand: user?.brand || 'Nike',
    price: '',
    size: '',
    color: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingShoe) {
      setForm({
        name: editingShoe.name,
        brand: editingShoe.brand,
        price: editingShoe.price,
        size: editingShoe.size,
        color: editingShoe.color,
      });
    } else {
      setForm({
        name: '',
        brand: user?.brand || 'Nike',
        price: '',
        size: '',
        color: ''
      });
    }
  }, [editingShoe, user]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.size || !form.color) {
      setError('All fields are required');
      return;
    }
    try {
      let response;
      if (editingShoe) {
        response = await axios.put(`/shoes/${editingShoe._id}`, form);
      } else {
        response = await axios.post('/shoes', form);
      }
      onSubmit(response.data);
      setForm({
        name: '',
        brand: user?.brand || 'Nike',
        price: '',
        size: '',
        color: ''
      });
      setError('');
    } catch (err) {
      setError('Failed to save shoe');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>{editingShoe ? 'Edit Shoe' : 'Add Shoe'}</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Shoe Name"
        value={form.name}
        onChange={handleChange}
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      {(user.role === 'super_admin') && (
        <select name="brand" value={form.brand} onChange={handleChange} style={{ marginRight: '0.5rem', padding: '0.5rem' }}>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
        </select>
      )}
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <input
        type="text"
        name="size"
        placeholder="Size"
        value={form.size}
        onChange={handleChange}
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <input
        type="text"
        name="color"
        placeholder="Color"
        value={form.color}
        onChange={handleChange}
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem' }}>{editingShoe ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ShoeForm;
