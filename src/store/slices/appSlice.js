import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    loggedIn: true,
    incorrect: '',
    sessions: [],
  },

  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setIncorrect: (state, action) => {
      state.incorrect = action.payload;
    },
    setSessions: (state, action) => {
      state.sessions = action.payload;
    },
  },
});

export const { setLoggedIn, setIncorrect, setSessions } = appSlice.actions;

export default appSlice.reducer;
