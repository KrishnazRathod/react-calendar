
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HtmlSemantics from './HtmlSemantics';
import Accessibility from './Accessibility';

export const FundamentalsRoutes = () => {
    return (
        <Routes>
            <Route path="html" element={<HtmlSemantics />} />
            <Route path="accessibility" element={<Accessibility />} />
        </Routes>
    );
};
