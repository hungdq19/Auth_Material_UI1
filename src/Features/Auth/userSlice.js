import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/UserApi';
//action register
export const register = createAsyncThunk('users/register', async (payload) => {
   const res = await userApi.register(payload);
   console.log(res);
   localStorage.setItem('TOKEN', res.jwt);
   localStorage.setItem('Users', JSON.stringify(res.user));
   return res.user;
});
//action login
export const login = createAsyncThunk('users/login', async (payload) => {
   const res = await userApi.login(payload);
   console.log(res);
   localStorage.setItem('TOKEN', res.jwt);
   localStorage.setItem('Users', JSON.stringify(res.user));
   return res.user;
});
const userSlice = createSlice({
   name: 'users',
   initialState: {
      current: JSON.parse(localStorage.getItem('Users')) || {},
   },
   reducers: {
      logout(state) {
         localStorage.removeItem('Users');
         localStorage.removeItem('TOKEN');
         state.current = {};
      },
   },
   extraReducers: {
      [register.fulfilled]: (state, action) => {
         state.current = action.payload;
      },
      [login.fulfilled]: (state, action) => {
         state.current = action.payload;
      },
   },
});
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
