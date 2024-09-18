import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart(state, action) {
      const  id  = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartItem(state, action) {
      const { id, flag } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        if (flag === 0 && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          existingItem.quantity += 1;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setCartNull(state, action) {
      state.cart=action.payload
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, deleteFromCart, updateCartItem ,setCartNull} = cartSlice.actions;
export default cartSlice.reducer;
