import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// ✅ Request interceptor to attach token
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// ✅ Response interceptor for errors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('🚨 API Error:', {
        status: error.response.status,
        message: error.response.data?.message || 'No message',
        url: error.config?.url,
        method: error.config?.method,
      });
    } else {
      console.error('🚨 API Error:', error.message); // This is where "Network Error" shows
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
