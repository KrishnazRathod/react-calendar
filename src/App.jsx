
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { FundamentalsRoutes } from './modules/fundamentals/routes';
import { CssRoutes } from './modules/css/routes';
import { JavaScriptRoutes } from './modules/javascript/routes';
import { ReactRoutes } from './modules/react/routes';
import { ModernDevRoutes } from './modules/modern-dev/routes';
import { UIUXRoutes } from './modules/ui-ux/routes';
import { PerformanceRoutes } from './modules/performance/routes';
import { APIRoutes } from './modules/api/routes';
import { AdvancedRoutes } from './modules/advanced/routes';
import InstallButton from './components/InstallButton';
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
          <Route path="react/*" element={<ReactRoutes />} />
          <Route path="modern-dev/*" element={<ModernDevRoutes />} />
          <Route path="ui-ux/*" element={<UIUXRoutes />} />
          <Route path="performance/*" element={<PerformanceRoutes />} />
          <Route path="api/*" element={<APIRoutes />} />
          <Route path="advanced/*" element={<AdvancedRoutes />} />
        </Route>
      </Routes>
      <InstallButton />
    </BrowserRouter>
  );
}

export default App;

