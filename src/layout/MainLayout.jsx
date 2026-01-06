
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="brand">
          <h2>Frontend Master</h2>
        </div>
        <nav className="nav-menu">
          <div className="nav-section">
            <h3>Core Fundamentals</h3>
            <NavLink to="/fundamentals/html" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              HTML5 Semantics
            </NavLink>
            <NavLink to="/fundamentals/accessibility" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Accessibility (ARIA)
            </NavLink>
          </div>

          <div className="nav-section">
            <h3>Advanced CSS</h3>
            <NavLink to="/css/flexbox" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Flexbox Playground
            </NavLink>
            <NavLink to="/css/grid" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              Grid Layout
            </NavLink>
          </div>

          <div className="nav-section">
            <h3>JavaScript Deep Dive</h3>
            <NavLink to="/javascript/es6" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
              ES6+ Essentials
            </NavLink>
          </div>
        </nav>
      </aside>
      <main className="content-area">
        <header className="top-bar">
          <h1>Learning Dashboard</h1>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
