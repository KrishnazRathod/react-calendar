import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const DevTools = () => {
    return (
        <div className="module-container">
            <h2>Browser DevTools & Debugging</h2>
            <p className="intro">
                Master browser DevTools for debugging, performance analysis, and development productivity.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Console</h3>
                    <ul className="feature-list">
                        <li>console.log, warn, error</li>
                        <li>console.table for arrays</li>
                        <li>console.time for performance</li>
                        <li>Breakpoints and debugging</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Network Tab</h3>
                    <ul className="feature-list">
                        <li>Monitor API requests</li>
                        <li>Check response times</li>
                        <li>Inspect headers</li>
                        <li>Throttle network speed</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Performance Tab</h3>
                    <ul className="feature-list">
                        <li>Record performance</li>
                        <li>Identify bottlenecks</li>
                        <li>Analyze frame rate</li>
                        <li>Memory profiling</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>React DevTools</h3>
                    <ul className="feature-list">
                        <li>Component tree inspection</li>
                        <li>Props and state viewing</li>
                        <li>Performance profiler</li>
                        <li>Hook debugging</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Console Debugging Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .console { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; font-family: monospace; }
  .log { color: #60a5fa; }
  .error { color: #f87171; }
  .warn { color: #fbbf24; }
  button { padding: 8px 16px; margin: 5px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; }
</style>

<div class="console">
  <h3>Console Output</h3>
  <div id="output"></div>
  <button onclick="testConsole()">Test Console Methods</button>
</div>

<script>
  function testConsole() {
    const output = document.getElementById('output');
    output.innerHTML = \`
      <div class="log">console.log('Info message')</div>
      <div class="warn">console.warn('Warning message')</div>
      <div class="error">console.error('Error message')</div>
      <div class="log">console.table([{name: 'John', age: 30}])</div>
    \`;
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default DevTools;

