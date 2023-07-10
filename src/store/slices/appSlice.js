import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    loggedIn: false,
    incorrect: '',
  },

  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setIncorrect: (state, action) => {
      state.incorrect = action.payload;
    },
  },
});

export const { setLoggedIn, setIncorrect } = appSlice.actions;

export default appSlice.reducer;
