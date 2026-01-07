import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CSSMethodologies from './CSSMethodologies';
import ComponentLibraries from './ComponentLibraries';
import Animations from './Animations';

export const UIUXRoutes = () => {
    return (
        <Routes>
            <Route path="css-methodologies" element={<CSSMethodologies />} />
            <Route path="component-libraries" element={<ComponentLibraries />} />
            <Route path="animations" element={<Animations />} />
        </Routes>
    );
};

