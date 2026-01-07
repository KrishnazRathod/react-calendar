import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const PWAs = () => {
    return (
        <div className="module-container">
            <h2>Progressive Web Apps (PWAs)</h2>
            <p className="intro">
                PWAs combine the best of web and mobile apps with offline support, installability, and app-like experience.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Service Workers</h3>
                    <pre className="code-snippet">
                        {`// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Manifest.json</h3>
                    <pre className="code-snippet">
                        {`{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone"
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Features</h3>
                    <ul className="feature-list">
                        <li>Offline support</li>
                        <li>Install to home screen</li>
                        <li>Push notifications</li>
                        <li>App-like experience</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Tools</h3>
                    <ul className="feature-list">
                        <li>Workbox (service worker library)</li>
                        <li>PWA Builder</li>
                        <li>Lighthouse PWA audit</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 PWA Manifest Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .manifest { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; font-family: monospace; }
  .key { color: #60a5fa; }
  .string { color: #34d399; }
  .number { color: #fbbf24; }
</style>

<div class="manifest">
  <h3>manifest.json</h3>
  <pre>
{
  <span class="key">"name"</span>: <span class="string">"My Progressive Web App"</span>,
  <span class="key">"short_name"</span>: <span class="string">"MyPWA"</span>,
  <span class="key">"start_url"</span>: <span class="string">"/"</span>,
  <span class="key">"display"</span>: <span class="string">"standalone"</span>,
  <span class="key">"background_color"</span>: <span class="string">"#ffffff"</span>,
  <span class="key">"theme_color"</span>: <span class="string">"#3b82f6"</span>,
  <span class="key">"icons"</span>: [
    {
      <span class="key">"src"</span>: <span class="string">"/icon-192.png"</span>,
      <span class="key">"sizes"</span>: <span class="string">"192x192"</span>,
      <span class="key">"type"</span>: <span class="string">"image/png"</span>
    }
  ]
}
  </pre>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default PWAs;

