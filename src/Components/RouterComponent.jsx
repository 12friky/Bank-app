// src/components/RouterComponent.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Logins/Login';
import MainPage from './Dashboard/MainPage/MainPage';

const RouterComponent = () => {
    return (
        <Router>
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
