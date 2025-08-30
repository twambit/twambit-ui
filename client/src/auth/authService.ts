import axios from 'axios';
import { type MyUser } from '../types/auth';

const API_URL = 'http://localhost:3001/api/';

// Retrieve token from storage (e.g., localStorage or cookies)
const getToken = () => localStorage.getItem('user');

// Set token in storage
const setToken = (userData: MyUser) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

// Remove token from storage
const removeToken = () => {
  localStorage.removeItem('user');
};

// Login function
const login = async (credentials: Pick<MyUser, 'username' | 'password'>) => {
//const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + 'login', credentials);
    if (response.data.token) {
      setToken(response.data);
    }
    return response.data;
  } catch (error) {
    // Optional: Add error handling for invalid credentials
    throw error;
  }
};

// Logout function
const logout = () => {
  removeToken();
};

// Registration function
const register = async (userData: Pick<MyUser, 'phone' | 'email'>) => {
  const response = await axios.post(API_URL + 'register', userData);
  return response.data;
};

// Helper function to create an Axios instance with a token
const getAuthAxios = () => {
  const user = getToken();
  const token = user ? JSON.parse(user).token : null;
  
  const instance = axios.create({
    baseURL: API_URL.replace('/auth/', ''), // Base URL for protected routes
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  // Optional: Add an interceptor for auto-logout on 401 Unauthorized
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        logout();
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const authService = {
  register,
  login,
  logout,
  getToken,
  getAuthAxios,
};

export default authService;