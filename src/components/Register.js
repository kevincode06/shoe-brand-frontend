import React, { useState } from 'react';
import axios from '../api';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    brand: 'Nike',
    role: 'brand_user',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', form);
      // ✅ Successful registration — send user to login
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <select
        name="brand"
        value={form.brand}
        onChange={handleChange}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      >
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
      </select>

      <select
        name="role"
        value={form.role}
        onChange={handleChange}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      >
        <option value="brand_user">Brand User</option>
        <option value="super_admin">Super Admin</option>
      </select>

      <button type="submit" style={{ width: '100%', padding: '0.5rem' }}>
        Register
      </button>

      <p style={{ marginTop: '1rem' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
