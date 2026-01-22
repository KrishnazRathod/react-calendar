import React from 'react';

const ReactSuspense = () => {
    return (
        <div className="module-container">
            <h2>React Suspense</h2>
            <p className="intro">
                Suspense lets components "wait" for something before rendering, showing a fallback UI.
            </p>

            <section className="example-section">
                <h3>Common Use - Code Splitting:</h3>
                <div className="code-block good">
                    <pre>{`import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Code splitting and lazy loading</li>
                    <li>✅ Better user experience with loading states</li>
                    <li>✅ Future: data fetching support</li>
                </ul>
            </section>
        </div>
    );
};

export default ReactSuspense;
