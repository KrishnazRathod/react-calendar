import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SSR from './SSR';
import PWAs from './PWAs';
import Security from './Security';
import DevTools from './DevTools';

export const AdvancedRoutes = () => {
    return (
        <Routes>
            <Route path="ssr" element={<SSR />} />
            <Route path="pwas" element={<PWAs />} />
            <Route path="security" element={<Security />} />
            <Route path="devtools" element={<DevTools />} />
        </Routes>
    );
};

