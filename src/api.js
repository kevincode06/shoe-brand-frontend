import axios from 'axios';

// Use your env variable, fallback to localhost if undefined
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

console.log('🔧 API_URL:', API_URL);
console.log('🔧 Environment:', process.env.NODE_ENV);

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000, // 30 second timeout for slow Render wakeup
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(`🚀 Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('🚨 Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error logging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`✅ Success: ${response.config.method?.toUpperCase()} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      console.error('🚨 Request Timeout - Server might be sleeping');
    } else if (error.response) {
      console.error('🚨 API Response Error:', {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data?.message || 'No message',
        url: error.config?.url,
        method: error.config?.method?.toUpperCase(),
      });
    } else if (error.request) {
      console.error('🚨 Network Error - No response received:', {
        url: error.config?.url,
        method: error.config?.method?.toUpperCase(),
        message: 'Server might be down or sleeping (Render free tier)',
      });
    } else {
      console.error('🚨 Request Setup Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Health check function
export const checkApiHealth = async () => {
  try {
    const response = await axiosInstance.get('/');
    console.log('✅ API Health Check:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ API Health Check Failed:', error.message);
    throw error;
  }
};

export default axiosInstance;