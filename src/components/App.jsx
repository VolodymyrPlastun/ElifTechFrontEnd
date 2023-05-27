import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchPizza, fetchSushi, getAllProducts } from '../api';
import Loader from './Loader';

const CartPage = lazy(() => import('../pages/CartPage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));

export const App = () => {
  const { selectedShop, startLoading, finishLoading } = useSelector(
    store => store.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedShop === 'Sushi') {
      getAllProducts(dispatch, fetchSushi);
    } else {
      getAllProducts(dispatch, fetchPizza);
    }
  }, [dispatch, finishLoading, selectedShop, startLoading]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <ShopPage />
            </Suspense>
          }
        />

        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loader />}>
              <CartPage />
            </Suspense>
          }
        />
      </Routes>
      <Toaster position="top-right" duration="5000" />
    </div>
  );
};
