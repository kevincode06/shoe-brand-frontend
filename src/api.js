import axios from 'axios';

// Use your env variable, fallback to localhost if undefined
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // <-- use backticks here
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error logging
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('🚨 API Error:', {
        status: error.response.status,
        message: error.response.data?.message || 'No message',
        url: error.config?.url,
        method: error.config?.method,
      });
    } else {
      console.error('🚨 API Error:', error.message); // Network errors etc
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
