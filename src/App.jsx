import React from 'react';
import MainPage from './pages/MainPage.jsx';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage.jsx';

function App() {
  const loggedIn = useSelector((state) => state.appSlice.loggedIn);

  return loggedIn ? <MainPage /> : <LoginPage />;
}

export default App;
