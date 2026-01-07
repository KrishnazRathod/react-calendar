import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BuildTools from './BuildTools';
import VersionControl from './VersionControl';
import CodeQuality from './CodeQuality';
import Testing from './Testing';

export const ModernDevRoutes = () => {
    return (
        <Routes>
            <Route path="build-tools" element={<BuildTools />} />
            <Route path="version-control" element={<VersionControl />} />
            <Route path="code-quality" element={<CodeQuality />} />
            <Route path="testing" element={<Testing />} />
        </Routes>
    );
};

