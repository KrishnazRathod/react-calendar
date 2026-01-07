
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ES6Features from './ES6Features';
import DOMEvents from './DOMEvents';
import BrowserAPIs from './BrowserAPIs';

export const JavaScriptRoutes = () => {
    return (
        <Routes>
            <Route path="es6" element={<ES6Features />} />
            <Route path="dom-events" element={<DOMEvents />} />
            <Route path="browser-apis" element={<BrowserAPIs />} />
        </Routes>
    );
};
