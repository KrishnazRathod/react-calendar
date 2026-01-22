import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HTMLQuestions from './HTMLQuestions';
import CSSQuestions from './CSSQuestions';
import JavaScriptQuestions from './JavaScriptQuestions';
import ReactQuestions from './ReactQuestions';

export const InterviewRoutes = () => {
    return (
        <Routes>
            <Route path="html" element={<HTMLQuestions />} />
            <Route path="css" element={<CSSQuestions />} />
            <Route path="javascript" element={<JavaScriptQuestions />} />
            <Route path="react" element={<ReactQuestions />} />
        </Routes>
    );
};

