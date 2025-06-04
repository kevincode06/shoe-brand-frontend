import React, { useEffect, useState } from 'react';
import axios from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('/users');
      setUsers(data);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure to delete this user?')) return;
    try {
      await axios.delete(`/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      setError('Delete failed');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h2>Users (Super Admin Only)</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user._id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Brand:</b> {user.brand}</p>
            <p><b>Role:</b> {user.role}</p>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
