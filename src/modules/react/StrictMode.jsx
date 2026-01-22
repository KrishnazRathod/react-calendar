import React from 'react';

const StrictMode = () => {
    return (
        <div className="module-container">
            <h2>React Strict Mode</h2>
            <p className="intro">
                StrictMode is a development tool that highlights potential problems in your application.
            </p>

            <section className="example-section">
                <h3>Usage:</h3>
                <div className="code-block good">
                    <pre>{`import { StrictMode } from 'react';

<StrictMode>
  <App />
</StrictMode>`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>What it Does:</h3>
                <ul className="feature-list">
                    <li>✅ Identifies unsafe lifecycles</li>
                    <li>✅ Warns about legacy APIs</li>
                    <li>✅ Detects unexpected side effects</li>
                    <li>✅ Ensures reusable state (double-invokes effects)</li>
                    <li>⚠️ Only runs in development, not production</li>
                </ul>
            </section>
        </div>
    );
};

export default StrictMode;
