
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ES6Features from './ES6Features';

export const JavaScriptRoutes = () => {
    return (
        <Routes>
            <Route path="es6" element={<ES6Features />} />
        </Routes>
    );
};
