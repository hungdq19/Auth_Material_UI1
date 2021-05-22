import { configureStore } from '@reduxjs/toolkit';
import reducer from './Features/Auth/userSlice.js';
const rootReducer = {
   user: reducer,
};
const store = configureStore({ reducer: rootReducer });
export default store;
