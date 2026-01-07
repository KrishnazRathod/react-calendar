
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HtmlSemantics from './HtmlSemantics';
import Accessibility from './Accessibility';
import SEO from './SEO';

export const FundamentalsRoutes = () => {
    return (
        <Routes>
            <Route path="html" element={<HtmlSemantics />} />
            <Route path="accessibility" element={<Accessibility />} />
            <Route path="seo" element={<SEO />} />
        </Routes>
    );
};
