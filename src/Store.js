import { configureStore } from '@reduxjs/toolkit';
import reducer from './Features/Auth/userSlice.js';
import cartReducer from './Features/Cart/cartSlice';
const rootReducer = {
   user: reducer,
   cart: cartReducer,
};
const store = configureStore({ reducer: rootReducer });
export default store;
