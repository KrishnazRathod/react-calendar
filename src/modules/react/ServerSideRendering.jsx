import React from 'react';

const ServerSideRendering = () => {
    return (
        <div className="module-container">
            <h2>Server Side Rendering (SSR)</h2>
            <p className="intro">
                SSR renders React components on the server and sends HTML to the client, improving initial load and SEO.
            </p>

            <section className="example-section">
                <h3>SSR vs CSR:</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '8px' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>SSR</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>CSR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Initial Load</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Faster</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Slower</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>SEO</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Better</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Worse</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>Framework</td>
                                <td style={{ padding: '1rem' }}>Next.js, Remix</td>
                                <td style={{ padding: '1rem' }}>Create React App</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Better SEO</li>
                    <li>✅ Faster First Contentful Paint</li>
                    <li>✅ Social media sharing (meta tags)</li>
                    <li>✅ Better performance on slow devices</li>
                </ul>
            </section>
        </div>
    );
};

export default ServerSideRendering;
