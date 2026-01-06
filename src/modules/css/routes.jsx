
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Flexbox from './Flexbox';
import Grid from './Grid';

export const CssRoutes = () => {
    return (
        <Routes>
            <Route path="flexbox" element={<Flexbox />} />
            <Route path="grid" element={<Grid />} />
        </Routes>
    );
};
