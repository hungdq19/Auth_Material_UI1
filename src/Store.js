import { configureStore } from '@reduxjs/toolkit';
import useReducer from './Features/Auth/userSlice.js';
const rootReducer = {
   user: useReducer,
};
const store = configureStore({ reducer: rootReducer });
export default store;
