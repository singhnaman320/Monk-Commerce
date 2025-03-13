import axios from 'axios';

const API_KEY = '72njgfa948d9aS7gs5';
const BASE_URL = 'https://stageapi.monkcommerce.app/task';

// const API_KEY = import.meta.env.VITE_API_KEY;
// const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY
  }
});

export const searchProducts = async (search = '', page = 0, limit = 10) => {
  try {
    const response = await api.get(`/products/search`, {
      params: { search, page, limit }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};