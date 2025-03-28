import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adventureService = {
  getAllAdventures: () => api.get('/adventures'),
  getAdventureById: (id) => api.get(`/adventures/${id}`),
  getAdventuresByCategory: (category) => api.get(`/adventures/category/${category}`),
  createAdventure: (data) => api.post('/adventures', data),
  updateAdventure: (id, data) => api.put(`/adventures/${id}`, data),
  deleteAdventure: (id) => api.delete(`/adventures/${id}`),
};

export const userService = {
  register: (userData) => api.post('/users/register', userData),
  login: (credentials) => api.post('/users/login', credentials),
  getProfile: (userId) => api.get(`/users/profile?userId=${userId}`),
};

export default api; 