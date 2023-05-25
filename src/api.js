import axios from "axios";

const baseUrl = 'https://eliftech-testtask.onrender.com/';

axios.defaults.baseURL = baseUrl;

// Функция для получения данных товаров
export const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products'); 
      console.log("🚀 ~ file: api.js:11 ~ fetchProducts ~ response:", response.data.data.products)
      return response.data.data.products;
    } catch (error) {
      console.error('Ошибка при получении товаров:', error);
      throw error;
    }
  };

// Функция для отправки заказа
export const createOrder = async (userData, selectedProducts) => {
    try {
        const response = await axios.post('/api/products/order', { userData, selectedProducts });
        console.log(response.data.message); // Выводим сообщение об успешной проверке
      } catch (error) {
        console.error('Error during checkout', error);
      }
  };