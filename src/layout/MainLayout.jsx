import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ThemeToggle from '../components/ThemeToggle';
import MobileMenu from '../components/MobileMenu';
import '../components/LivePlayground.css';
import './MainLayout.css';

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleNavClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const SidebarContent = () => (
    <>
      <div className="brand">
        <h2>Frontend Master</h2>
      </div>
      <nav className="nav-menu">
        <div className="nav-section">
          <h3>Core Fundamentals</h3>
          <NavLink
            to="/fundamentals/html"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            HTML5 Semantics
          </NavLink>
          <NavLink
            to="/fundamentals/accessibility"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Accessibility (ARIA)
          </NavLink>
          <NavLink
            to="/fundamentals/seo"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            SEO Best Practices
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>Advanced CSS</h3>
          <NavLink
            to="/css/flexbox"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Flexbox Playground
          </NavLink>
          <NavLink
            to="/css/grid"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Grid Layout
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>JavaScript Deep Dive</h3>
          <NavLink
            to="/javascript/es6"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            ES6+ Essentials
          </NavLink>
          <NavLink
            to="/javascript/dom-events"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            DOM & Events
          </NavLink>
          <NavLink
            to="/javascript/browser-apis"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Browser APIs
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>React Ecosystem</h3>
          <NavLink
            to="/react/fundamentals"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            React Fundamentals
          </NavLink>
          <NavLink
            to="/react/hooks"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Advanced Hooks
          </NavLink>
          <NavLink
            to="/react/state"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            State Management
          </NavLink>
          <NavLink
            to="/react/performance"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Performance
          </NavLink>
          <NavLink
            to="/react/router"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            React Router
          </NavLink>
          <NavLink
            to="/react/forms"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Form Handling
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>Modern Dev Practices</h3>
          <NavLink
            to="/modern-dev/build-tools"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Build Tools
          </NavLink>
          <NavLink
            to="/modern-dev/version-control"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Version Control
          </NavLink>
          <NavLink
            to="/modern-dev/code-quality"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Code Quality
          </NavLink>
          <NavLink
            to="/modern-dev/testing"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Testing
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>UI/UX Implementation</h3>
          <NavLink
            to="/ui-ux/css-methodologies"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            CSS Methodologies
          </NavLink>
          <NavLink
            to="/ui-ux/component-libraries"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Component Libraries
          </NavLink>
          <NavLink
            to="/ui-ux/animations"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Animations
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>Performance & Optimization</h3>
          <NavLink
            to="/performance/web-vitals"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Web Vitals
          </NavLink>
          <NavLink
            to="/performance/bundle-optimization"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Bundle Optimization
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>API Integration</h3>
          <NavLink
            to="/api/rest"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            RESTful APIs
          </NavLink>
          <NavLink
            to="/api/authentication"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Authentication
          </NavLink>
          <NavLink
            to="/api/websockets"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            WebSockets
          </NavLink>
        </div>

        <div className="nav-section">
          <h3>Advanced Topics</h3>
          <NavLink
            to="/advanced/ssr"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            SSR & SSG
          </NavLink>
          <NavLink
            to="/advanced/pwas"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Progressive Web Apps
          </NavLink>
          <NavLink
            to="/advanced/security"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            Web Security
          </NavLink>
          <NavLink
            to="/advanced/devtools"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            DevTools & Debugging
          </NavLink>
        </div>
      </nav>
    </>
  );

  return (
    <div className="layout-container">
      {/* Desktop Sidebar */}
      <aside className="sidebar sidebar-desktop">
        <SidebarContent />
      </aside>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <SidebarContent />
      </MobileMenu>

      <main className="content-area">
        <header className="top-bar">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1>Learning Dashboard</h1>
          <div className="top-bar-actions">
            <ThemeToggle />
          </div>
        </header>
        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
