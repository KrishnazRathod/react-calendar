import React from 'react';

const BundleOptimization = () => {
    return (
        <div className="module-container">
            <h2>Bundle Size Optimization</h2>
            <p className="intro">
                Reduce bundle size with tree shaking, code splitting, and optimization techniques.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Tree Shaking</h3>
                    <p>Remove unused code from bundles.</p>
                    <pre className="code-snippet">
                        {`// Only import what you need
import { debounce } from 'lodash-es';
// Not: import _ from 'lodash';`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Code Splitting</h3>
                    <p>Split code into smaller chunks loaded on demand.</p>
                    <pre className="code-snippet">
                        {`const LazyComponent = lazy(() => 
  import('./HeavyComponent')
);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Image Optimization</h3>
                    <ul className="feature-list">
                        <li>Use modern formats (WebP, AVIF)</li>
                        <li>Lazy loading</li>
                        <li>Responsive images</li>
                        <li>CDN delivery</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Caching Strategies</h3>
                    <ul className="feature-list">
                        <li>Browser caching</li>
                        <li>Service workers</li>
                        <li>CDN caching</li>
                        <li>Cache headers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BundleOptimization;

