import React from 'react';

const UseEffectVsUseCallback = () => {
    return (
        <div className="module-container">
            <h2>useEffect vs useCallback</h2>
            <p className="intro">
                While both are hooks, they serve completely different purposes and shouldn't be confused.
            </p>

            <section className="example-section">
                <h3>Key Differences:</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '8px' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>useEffect</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>useCallback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Purpose</td>
                                <td style={{ padding: '1rem' }}>Run side effects</td>
                                <td style={{ padding: '1rem' }}>Memoize functions</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Returns</td>
                                <td style={{ padding: '1rem' }}>Nothing (cleanup function)</td>
                                <td style={{ padding: '1rem' }}>Memoized function</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>Use for</td>
                                <td style={{ padding: '1rem' }}>API calls, subscriptions, DOM updates</td>
                                <td style={{ padding: '1rem' }}>Event handlers, callback props</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <div className="comparison-container">
                    <div className="code-block">
                        <h4>useEffect:</h4>
                        <pre>{`// Runs after render
useEffect(() => {
  fetchData();
  return () => cleanup();
}, [deps]);

// Side effect execution`}</pre>
                    </div>

                    <div className="code-block">
                        <h4>useCallback:</h4>
                        <pre>{`// Returns memoized function
const handleClick = useCallback(() => {
  doSomething();
}, [deps]);

// Function reference stability`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary:</h3>
                <ul className="feature-list">
                    <li><strong>useEffect:</strong> Execute code (side effects)</li>
                    <li><strong>useCallback:</strong> Optimize performance (memoize functions)</li>
                    <li>They're not interchangeable!</li>
                </ul>
            </section>
        </div>
    );
};

export default UseEffectVsUseCallback;
