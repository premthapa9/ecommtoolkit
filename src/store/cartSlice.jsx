import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartItem: [],
    totalPrice: 0,
    totalItem: 0,
  },
  reducers: {
    addCart(state, action) {
      state.cartItem.push(action.payload);
    },
    removeCart(state, action) {
      state.cartItem = state.cartItem.filter((el) => el.id !== +action.payload);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
