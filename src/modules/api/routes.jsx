import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RESTfulAPIs from './RESTfulAPIs';
import Authentication from './Authentication';
import WebSockets from './WebSockets';

export const APIRoutes = () => {
    return (
        <Routes>
            <Route path="rest" element={<RESTfulAPIs />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="websockets" element={<WebSockets />} />
        </Routes>
    );
};

