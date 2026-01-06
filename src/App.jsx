
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { FundamentalsRoutes } from './modules/fundamentals/routes';
import { CssRoutes } from './modules/css/routes';
import { JavaScriptRoutes } from './modules/javascript/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/fundamentals/html" replace />} />
          <Route path="fundamentals/*" element={<FundamentalsRoutes />} />
          <Route path="css/*" element={<CssRoutes />} />
          <Route path="javascript/*" element={<JavaScriptRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

