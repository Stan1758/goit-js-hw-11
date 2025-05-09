
import axios from 'axios';


const API_KEY = '50197209-2a2796b344803c480c3c957e7';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Помилка при запиті до Pixabay:', error);
    throw error;
  }
}