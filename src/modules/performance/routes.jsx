import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WebVitals from './WebVitals';
import BundleOptimization from './BundleOptimization';

export const PerformanceRoutes = () => {
    return (
        <Routes>
            <Route path="web-vitals" element={<WebVitals />} />
            <Route path="bundle-optimization" element={<BundleOptimization />} />
        </Routes>
    );
};

