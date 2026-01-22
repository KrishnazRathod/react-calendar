import React from 'react';

const VirtualDOM = () => {
    return (
        <div className="module-container">
            <h2>Virtual DOM</h2>
            <p className="intro">
                The <strong>Virtual DOM</strong> is a lightweight copy of the real DOM kept in memory. React uses it to
                optimize updates and improve performance.
            </p>

            <section className="example-section">
                <h3>How Virtual DOM Works:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. Initial Render</h4>
                        <p>React creates Virtual DOM tree matching real DOM</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. State Changes</h4>
                        <p>New Virtual DOM tree is created</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Diffing</h4>
                        <p>React compares old and new Virtual DOM</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Update</h4>
                        <p>Only changed parts update in real DOM</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Real DOM vs Virtual DOM:</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '8px' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Real DOM</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Virtual DOM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Update Speed</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Slow</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Fast</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Memory</td>
                                <td style={{ padding: '1rem' }}>High (browser rendering)</td>
                                <td style={{ padding: '1rem' }}>Low (JavaScript object)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Updates</td>
                                <td style={{ padding: '1rem' }}>Re-renders entire tree</td>
                                <td style={{ padding: '1rem' }}>Updates only what changed</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Manipulation</td>
                                <td style={{ padding: '1rem' }}>Direct (expensive)</td>
                                <td style={{ padding: '1rem' }}>Batched (efficient)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ <strong>Performance:</strong> Minimal DOM manipulation</li>
                    <li>✅ <strong>Efficiency:</strong> Batch updates</li>
                    <li>✅ <strong>Developer Experience:</strong> Declarative UI</li>
                    <li>✅ <strong>Cross-platform:</strong> React Native uses same concept</li>
                </ul>
            </section>
        </div>
    );
};

export default VirtualDOM;
