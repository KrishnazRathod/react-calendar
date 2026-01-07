import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactFundamentals from './ReactFundamentals';
import AdvancedHooks from './AdvancedHooks';
import StateManagement from './StateManagement';
import PerformanceOptimization from './PerformanceOptimization';
import ReactRouter from './ReactRouter';
import FormHandling from './FormHandling';

export const ReactRoutes = () => {
    return (
        <Routes>
            <Route path="fundamentals" element={<ReactFundamentals />} />
            <Route path="hooks" element={<AdvancedHooks />} />
            <Route path="state" element={<StateManagement />} />
            <Route path="performance" element={<PerformanceOptimization />} />
            <Route path="router" element={<ReactRouter />} />
            <Route path="forms" element={<FormHandling />} />
        </Routes>
    );
};

