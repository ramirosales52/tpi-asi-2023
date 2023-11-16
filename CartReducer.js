import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id == action.payload.id);
      if(itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1})
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id == action.payload.id);
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id == action.payload.id);
      if(itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter((item) => item.id !== action.payload.id);
        state.cart = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },
    resetCart: (state) => {
      return initialState
    }
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;