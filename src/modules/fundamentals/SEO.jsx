import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const SEO = () => {
    return (
        <div className="module-container">
            <h2>SEO Best Practices</h2>
            <p className="intro">
                Optimize your website for search engines with proper meta tags, semantic HTML, and SEO techniques.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Meta Tags</h3>
                    <pre className="code-snippet">
                        {`<head>
  <title>Page Title</title>
  <meta name="description" content="Page description">
  <meta name="keywords" content="keyword1, keyword2">
</head>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Open Graph</h3>
                    <pre className="code-snippet">
                        {`<meta property="og:title" content="Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="image.jpg">`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Semantic HTML</h3>
                    <ul className="feature-list">
                        <li>Use proper heading hierarchy</li>
                        <li>Alt text for images</li>
                        <li>Descriptive link text</li>
                        <li>Structured data (JSON-LD)</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Performance</h3>
                    <ul className="feature-list">
                        <li>Fast page load times</li>
                        <li>Mobile-friendly design</li>
                        <li>Optimized images</li>
                        <li>Clean URL structure</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 SEO Meta Tags Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .meta { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; font-family: monospace; }
  .tag { color: #60a5fa; }
  .attr { color: #34d399; }
  .value { color: #fbbf24; }
</style>

<div class="meta">
  <h3>HTML Head Section</h3>
  <pre>
&lt;<span class="tag">head</span>&gt;
  &lt;<span class="tag">title</span>&gt;<span class="value">My Awesome Page</span>&lt;/<span class="tag">title</span>&gt;
  &lt;<span class="tag">meta</span> <span class="attr">name</span>=<span class="value">"description"</span> <span class="attr">content</span>=<span class="value">"This is a great page"</span>&gt;
  &lt;<span class="tag">meta</span> <span class="attr">property</span>=<span class="value">"og:title"</span> <span class="attr">content</span>=<span class="value">"My Awesome Page"</span>&gt;
  &lt;<span class="tag">meta</span> <span class="attr">property</span>=<span class="value">"og:description"</span> <span class="attr">content</span>=<span class="value">"This is a great page"</span>&gt;
&lt;/<span class="tag">head</span>&gt;
  </pre>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default SEO;

