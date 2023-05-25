import CartPage from 'pages/CartPage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { calculateTotal } from 'redux/features/cart/cartSlice';
import PizzaPage from '../pages/PizzaPage';
import Layout from './Layout';
import {fetchProducts} from '../api';

export const App = () => {
  // const { pizzaArr } = useSelector(store => store.cart);
  // const dispatch = useDispatch();
const [pizzaArr, setPizzaArr] = useState([]);
console.log("🚀 ~ file: App.jsx:14 ~ App ~ pizzaArr:", pizzaArr)

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await fetchProducts();
      setPizzaArr(products)
    }
    getAllProducts();
  }, []);
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PizzaPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
};
