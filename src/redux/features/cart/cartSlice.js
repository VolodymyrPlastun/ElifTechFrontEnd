import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  total: 0,
  amount: 0,
  selectedItems: [],
  products: [],
  formData: {},
  selectedShop: '',
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    makeOrder: (state, {payload}) => {
      if(Object.keys(state.formData).length === 0) {
        return toast.error("Please enter your data before order")
      }
      toast.success("Your order accepted!");
    },
    selectShop: (state, {payload}) => {
      state.selectedShop = payload;
    },

    getProducts:(state, {payload}) => {
      state.products = payload;
    },
    increase: (state, { payload }) => {
      const itemInCart = state.selectedItems.find(item => item.id === payload);
      const productsItem = state.products.find(item => item._id === payload);
      itemInCart.amount++;
      productsItem.amount++;
    },
    decrease: (state, { payload }) => {
      const itemInCart = state.selectedItems.find(item => item.id === payload);
      const productsItem = state.products.find(item => item._id === payload);
      if(itemInCart.amount > 1) {
        itemInCart.amount--;
        productsItem.amount--;
      } else {
        productsItem.amount = 0;
        state.selectedItems = state.selectedItems.filter(item => item.id !== payload)
      }
    },
    AddProduct: (state, {payload}) => {
      const itemInCart = state.selectedItems.find(item => item.id === payload.id);
      const productsItem = state.products.find(item => item._id === payload.id);

      if (itemInCart) {
        itemInCart.amount++;
        
      } else {
        state.selectedItems.push({ ...payload, amount: 1 });
      }
      productsItem.amount++;
    },
    calculateTotal: (state, { payload }) => {
      let totalPrice = 0;
      state.selectedItems.forEach(item => {
        if(item.amount) {
          totalPrice += item.amount * item.price;
        }
      });
      state.total = totalPrice;
    },
    saveFormData: (state, { payload }) => {
      if(state.formData.email === payload.email) {
        toast.error("Your email already exists")
        return;
      }
      state.formData = payload;
      toast.success("Your data has been saved")
    },
    startLoading: (state, {payload}) => {
      state.isLoading = true;
    },
    finishLoading: (state, {payload}) => {
  state.isLoading = false;
    }
  },
});

export const { increase, decrease, AddProduct, calculateTotal, startLoading, finishLoading, getProducts, saveFormData, selectShop, makeOrder } =
  cartSlice.actions;

export default cartSlice.reducer;
