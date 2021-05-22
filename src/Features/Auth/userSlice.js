import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/UserApi';
export const register = createAsyncThunk('users/register', async (formdata) => {
   try {
      const res = await userApi.register(formdata);
      localStorage.setItem('TOKEN', res.jwt);
      localStorage.setItem('Users', JSON.stringify(res.user));
      return res.user;
   } catch (error) {
      console.log(`loi gi vay`, error);
   }
});
const userSlice = createSlice({
   name: 'users',
   initialState: {
      current: {},
   },
   reducers: {},
   extraReducers: {
      [register.fulfilled]: (state, action) => {
         state.current = action.payload;
      },
   },
});
const { reducer } = userSlice;
export default reducer;
