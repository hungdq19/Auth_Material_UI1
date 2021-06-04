import { createSelector } from '@reduxjs/toolkit';
const cartItemSelector = (state) => state.cart.cartItems;
export const cartItemCountSelector = createSelector(cartItemSelector, (cartItems) => {
   return cartItems.reduce((count, item) => count + item.quantity, 0);
});
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) => {
   return cartItems.reduce((count, item) => count + item.salePrice * item.quantity, 0);
});
