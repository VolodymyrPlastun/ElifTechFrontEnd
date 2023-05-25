import { createSlice } from '@reduxjs/toolkit';
import products from '../../../products';

const initialState = {
  pizzaArr: products,
  total: 0,
  amount: 0,
  selectedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      const index = state.pizzaArr.findIndex(item => item.id === payload);
      state.pizzaArr[index].number++;
      state.amount++;
    //   const cartItem = state.selectedItems.find(item => item.id === payload);
    // cartItem.number++;
      // console.log(cartItem.number);

    },
    decrease: (state, { payload }) => {
      const index = state.pizzaArr.findIndex(item => item.id === payload);
      state.amount--;
       if (state.pizzaArr[index].number > 1) {
        state.pizzaArr[index].number--;
        // state.amount--;
        console.log(state.pizzaArr[index].number, 'minus number');
        
      } else {
        state.selectedItems = state.selectedItems.filter(item => item.id !== payload);
        state.pizzaArr[index].number = 0;
        // state.amount--;
        console.log(state.selectedItems);
        
      }
      // const cartItem = state.selectedItems.find(item => item.id === payload);
      // if(cartItem.number === 1) {
      //   cartItem.number = 1;
      // } else {
      //   cartItem.number--;
      // }

    },
    AddPizza: (state, {payload}) => {
      const index = state.pizzaArr.findIndex(item => item.id === payload);
      
      // const cartItem = state.selectedItems.find(item => item.id === payload);
      state.pizzaArr[index].number = 1;
      state.amount++;
      // console.log(cartItem);
      // if (cartItem) {
      //   return;
      // } else {
        state.selectedItems.push(state.pizzaArr[index]);
      // }

    },
    calculateTotal: (state, { payload }) => {
      let totalPrice = 0;
      state.pizzaArr.forEach(item => {
        if(item.number) {
          totalPrice += item.number * item.price;
        }
        
      });
      state.total = totalPrice;
    },
    clearCart: (state, { payload }) => {
      state.selectedItems = [];
      state.amount = 0;
    },
    removeItem: (state, {payload}) => {
      const removedItem = state.selectedItems.filter((item) => item.id !== payload);
      let itemNumber = state.pizzaArr.find(item => item.id === payload).number;

        console.log(removedItem);
        const newAmount = state.amount - itemNumber;
        state.total = newAmount * removedItem.price;
        state.selectedItems = removedItem;
        state.amount = newAmount;
        // itemNumber = 0;
      },
  },
});

export const { increase, decrease, AddPizza, calculateTotal, clearCart, removeItem, getProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
