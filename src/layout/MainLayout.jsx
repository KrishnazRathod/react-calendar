import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ThemeToggle from '../components/ThemeToggle';
import MobileMenu from '../components/MobileMenu';
import '../components/LivePlayground.css';
import './MainLayout.css';

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    javascript: true, // JavaScript section starts expanded
    react: true, // React section starts expanded
  });
  const isMobile = useMediaQuery('(max-width: 767px)');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleNavClick = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const SidebarContent = () => (
    <>
      <div className="brand">
        <h2>Interview Master</h2>
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
          <h3>
            <div
              onClick={() => toggleSection('javascript')}
              className={expandedSections.javascript ? 'nav-section-header active' : 'nav-section-header'}
              style={{ cursor: 'pointer' }}
            >
              <span>JavaScript Deep Dive</span>
              <span className="dropdown-arrow" style={{
                transform: expandedSections.javascript ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>▼</span>
            </div>
          </h3>
          {expandedSections.javascript && (
            <>
              <NavLink
                to="/javascript/es6"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                ES6+ Essentials
              </NavLink>
              <NavLink
                to="/javascript/hoisting-tdz"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Hoisting and TDZ
              </NavLink>
              <NavLink
                to="/javascript/let-var-const"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Let, Var & Const
              </NavLink>
              <NavLink
                to="/javascript/closures"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                What is Closure?
              </NavLink>
              <NavLink
                to="/javascript/call-bind-apply"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Call, Bind & Apply
              </NavLink>
              <NavLink
                to="/javascript/promises"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Promises
              </NavLink>
              <NavLink
                to="/javascript/async-await"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Async/Await
              </NavLink>
              <NavLink
                to="/javascript/map-filter-reduce"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Map, Filter & Reduce
              </NavLink>
              <NavLink
                to="/javascript/promise-race-vs-any"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Promise.race vs .any
              </NavLink>
              <NavLink
                to="/javascript/slice-vs-splice"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Slice vs Splice
              </NavLink>
              <NavLink
                to="/javascript/loop-comparison"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                for...of vs for...in vs forEach
              </NavLink>
              <NavLink
                to="/javascript/rest-vs-spread"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Rest vs Spread
              </NavLink>
              <NavLink
                to="/javascript/this-keyword"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                The 'this' Keyword
              </NavLink>
              <NavLink
                to="/javascript/null-vs-undefined"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                null vs undefined
              </NavLink>
              <NavLink
                to="/javascript/data-types"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Data Types in JS
              </NavLink>
              <NavLink
                to="/javascript/what-is-javascript"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                What is JavaScript?
              </NavLink>
              <NavLink
                to="/javascript/iife"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                IIFE
              </NavLink>
              <NavLink
                to="/javascript/settimeout-vs-setinterval"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                setTimeout vs setInterval
              </NavLink>
              <NavLink
                to="/javascript/dom-and-bom"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                DOM & BOM
              </NavLink>
              <NavLink
                to="/javascript/higher-order-function"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Higher Order Function
              </NavLink>
              <NavLink
                to="/javascript/prototype-chaining"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Prototype Chaining
              </NavLink>
              <NavLink
                to="/javascript/promise-try"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Promise.try()
              </NavLink>
              <NavLink
                to="/javascript/iterator"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Iterator in JS
              </NavLink>
              <NavLink
                to="/javascript/object-properties"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Object Properties
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
            </>
          )}
        </div>

        <div className="nav-section">
          <h3>
            <div
              onClick={() => toggleSection('react')}
              className={expandedSections.react ? 'nav-section-header active' : 'nav-section-header'}
              style={{ cursor: 'pointer' }}
            >
              <span>React Fundamentals</span>
              <span className="dropdown-arrow" style={{
                transform: expandedSections.react ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}>▼</span>
            </div>
          </h3>
          {expandedSections.react && (
            <>
              <NavLink
                to="/react/what-is-react"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                What is React?
              </NavLink>
              <NavLink
                to="/react/state-and-props"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                State & Props
              </NavLink>
              <NavLink
                to="/react/lifecycle-methods"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Lifecycle Methods
              </NavLink>
              <NavLink
                to="/react/prop-drilling"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Prop Drilling
              </NavLink>
              <NavLink
                to="/react/parent-child-communication"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Parent-Child Communication
              </NavLink>
              <NavLink
                to="/react/avoid-rerendering"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Avoid Re-rendering
              </NavLink>
              <NavLink
                to="/react/usememo-vs-usecallback"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                useMemo vs useCallback
              </NavLink>
              <NavLink
                to="/react/virtual-dom"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Virtual DOM
              </NavLink>
              <NavLink
                to="/react/class-vs-function"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Class vs Function Components
              </NavLink>
              <NavLink
                to="/react/controlled-vs-uncontrolled"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Controlled vs Uncontrolled
              </NavLink>
              <NavLink
                to="/react/usereducer-vs-usestate"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                useReducer vs useState
              </NavLink>
              <NavLink
                to="/react/react-hooks"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                React Hooks
              </NavLink>
              <NavLink
                to="/react/pure-components"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Pure Components
              </NavLink>
              <NavLink
                to="/react/react-portal"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                React Portal
              </NavLink>
              <NavLink
                to="/react/react-suspense"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                React Suspense
              </NavLink>
              <NavLink
                to="/react/strict-mode"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Strict Mode
              </NavLink>
              <NavLink
                to="/react/lazy-loading"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Lazy Loading
              </NavLink>
              <NavLink
                to="/react/reconciliation"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Reconciliation
              </NavLink>
              <NavLink
                to="/react/redux"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Redux
              </NavLink>
              <NavLink
                to="/react/synthetic-events"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Synthetic Events
              </NavLink>
              <NavLink
                to="/react/hoc"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Higher Order Component
              </NavLink>
              <NavLink
                to="/react/useeffect-vs-uselayouteffect"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                useEffect vs useLayoutEffect
              </NavLink>
              <NavLink
                to="/react/useeffect-vs-usecallback"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                useEffect vs useCallback
              </NavLink>
              <NavLink
                to="/react/form-validation"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Form Validation
              </NavLink>
              <NavLink
                to="/react/react-fiber"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                React Fiber
              </NavLink>
              <NavLink
                to="/react/server-side-rendering"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Server Side Rendering
              </NavLink>
              <NavLink
                to="/react/fundamentals"
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                onClick={handleNavClick}
              >
                Core Concepts
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
            </>
          )}
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

        <div className="nav-section">
          <h3>Interview Questions</h3>
          <NavLink
            to="/interview/html"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            HTML Questions
          </NavLink>
          <NavLink
            to="/interview/css"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            CSS Questions
          </NavLink>
          <NavLink
            to="/interview/javascript"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            JavaScript Questions
          </NavLink>
          <NavLink
            to="/interview/react"
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            onClick={handleNavClick}
          >
            React Questions
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
