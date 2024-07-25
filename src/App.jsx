// src/components/RouterComponent.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Logins/Login';
import MainPage from './Components/Dashboard/MainPage/MainPage';

// eslint-disable-next-line react/prop-types
const RouterComponent = ({ children }) => {
  return (
    <Router>
      {children}
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the Main page */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
