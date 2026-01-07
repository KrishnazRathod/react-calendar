import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const WebVitals = () => {
    return (
        <div className="module-container">
            <h2>Web Vitals & Performance Metrics</h2>
            <p className="intro">
                Core Web Vitals measure real-world user experience: LCP, FID, and CLS are key metrics for performance.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>LCP (Largest Contentful Paint)</h3>
                    <p>Measures loading performance. Target: &lt; 2.5s</p>
                    <ul className="feature-list">
                        <li>Optimize images</li>
                        <li>Preload key resources</li>
                        <li>Reduce server response time</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>FID (First Input Delay)</h3>
                    <p>Measures interactivity. Target: &lt; 100ms</p>
                    <ul className="feature-list">
                        <li>Reduce JavaScript execution time</li>
                        <li>Code splitting</li>
                        <li>Minimize main thread work</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>CLS (Cumulative Layout Shift)</h3>
                    <p>Measures visual stability. Target: &lt; 0.1</p>
                    <ul className="feature-list">
                        <li>Set size attributes on images</li>
                        <li>Avoid inserting content above existing</li>
                        <li>Use transform animations</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Lighthouse</h3>
                    <p>Comprehensive performance auditing tool.</p>
                    <pre className="code-snippet">
                        {`// Chrome DevTools
// Run Lighthouse audit
// Analyze performance score`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Performance Optimization Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .optimized {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<div class="container">
  <h3>Optimized Image Loading</h3>
  <img 
    src="https://via.placeholder.com/600x200" 
    alt="Optimized image"
    class="optimized"
    loading="lazy"
    width="600"
    height="200"
  />
  <p style="margin-top: 10px; color: #666;">
    ✓ Lazy loading enabled<br>
    ✓ Width/height attributes set (prevents CLS)<br>
    ✓ Optimized format
  </p>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default WebVitals;

