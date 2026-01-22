import React from 'react';

const LazyLoading = () => {
    return (
        <div className="module-container">
            <h2>Lazy Loading in React</h2>
            <p className="intro">
                Lazy loading splits code into chunks that load on demand, improving initial load time.
            </p>

            <section className="example-section">
                <h3>Implementation:</h3>
                <div className="code-block good">
                    <pre>{`import { lazy, Suspense } from 'react';

// Lazy load component
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
      <Profile />
    </Suspense>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Smaller initial bundle size</li>
                    <li>✅ Faster initial page load</li>
                    <li>✅ Load code only when needed</li>
                    <li>✅ Better performance for large apps</li>
                </ul>
            </section>
        </div>
    );
};

export default LazyLoading;
