import React from 'react';

const DOMandBOM = () => {
    return (
        <div className="module-container">
            <h2>DOM and BOM</h2>
            <p className="intro">
                <strong>DOM (Document Object Model)</strong> and <strong>BOM (Browser Object Model)</strong> are two essential
                JavaScript APIs for web development.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>DOM - Document Object Model</h3>
                    <p>Tree structure representing HTML/XML document. Allows JavaScript to manipulate page content.</p>
                    <ul className="feature-list">
                        <li><strong>Purpose:</strong> Manipulate page content</li>
                        <li><strong>Root:</strong> <code>document</code></li>
                        <li><strong>Examples:</strong> getElementById, querySelector, createElement</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>BOM - Browser Object Model</h3>
                    <p>Interface for interacting with the browser window and environment.</p>
                    <ul className="feature-list">
                        <li><strong>Purpose:</strong> Control browser behavior</li>
                        <li><strong>Root:</strong> <code>window</code></li>
                        <li><strong>Examples:</strong> location, history, navigator, screen</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>DOM Examples:</h3>
                <div className="code-block">
                    <pre>{`// Select elements
const el = document.getElementById('myId');
const els = document.querySelectorAll('.myClass');

// Create and append
const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);

// Modify content
el.innerHTML = '<h1>Title</h1>';
el.style.color = 'red';

// Event handling
el.addEventListener('click', () => {
  console.log('Clicked!');
});`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>BOM Examples:</h3>
                <div className="code-block">
                    <pre>{`// Window object
window.alert('Hello');
window.innerWidth; // Browser width
window.scrollTo(0, 100);

// Location (URL)
window.location.href; // Current URL
window.location.reload(); // Refresh page

// History (navigation)
window.history.back();
window.history.forward();

// Navigator (browser info)
navigator.userAgent;
navigator.geolocation;

// Screen (display info)
screen.width;
screen.height;`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Key Differences:</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '8px' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>DOM</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>BOM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Purpose</td>
                                <td style={{ padding: '1rem' }}>Manipulate document content</td>
                                <td style={{ padding: '1rem' }}>Control browser behavior</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Root Object</td>
                                <td style={{ padding: '1rem' }}><code>document</code></td>
                                <td style={{ padding: '1rem' }}><code>window</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Standardized</td>
                                <td style={{ padding: '1rem' }}>✅ Yes (W3C)</td>
                                <td style={{ padding: '1rem' }}>❌ No (browser-specific)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default DOMandBOM;
