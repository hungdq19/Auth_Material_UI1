import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      showMiniCart: false,
      cartItems: [],
   },
   reducers: {
      showMiniCart(state) {
         state.showMiniCart = true;
      },
      hideMiniCart(state) {
         state.showMiniCart = false;
      },
      addToCard(state, action) {
         const newItem = action.payload;
         const index = state.cartItems.findIndex((x) => x.id === newItem.id);
         if (index >= 0) {
            state.cartItems[index].quantity += newItem.quantity;
         } else {
            state.cartItems.push(newItem);
         }
      },
      setQuanTity(state, action) {
         const { id, quantity } = action.payload;
         const index = state.cartItems.findIndex((x) => x.id === id);
         if (index >= 0) {
            state.cartItems[index].quantity = quantity;
         }
      },
      // remove product
      removeFromCard(state, action) {
         const idProduct = action.payload;
         state.cartItems.filter((x) => x.id !== idProduct);
      },
   },
});
const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCard, setQuanTity, removeFromCard } = actions;
export default reducer;
