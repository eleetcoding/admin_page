import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.myState = action.payload;
    },
  },
});

export const { setLoggedIn } = appSlice.actions;

export default appSlice.reducer;
