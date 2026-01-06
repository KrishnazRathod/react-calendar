import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const HtmlSemantics = () => {
    return (
        <div className="module-container">
            <h2>HTML5 Semantic Elements</h2>
            <p className="intro">
                Semantic HTML uses elements that clearly describe their meaning to both the browser and the developer.
                This provides better accessibility, SEO, and code maintainability.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Common Semantic Elements</h3>
                    <ul className="feature-list">
                        <li><code>&lt;header&gt;</code> - Introductory content or nav links</li>
                        <li><code>&lt;nav&gt;</code> - Navigation links</li>
                        <li><code>&lt;main&gt;</code> - Dominant content of the body</li>
                        <li><code>&lt;article&gt;</code> - Independent, self-contained content</li>
                        <li><code>&lt;section&gt;</code> - Thematic grouping of content</li>
                        <li><code>&lt;aside&gt;</code> - Content aside from the content (sidebar)</li>
                        <li><code>&lt;footer&gt;</code> - Footer for a section or page</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Why it matters?</h3>
                    <ul className="feature-list">
                        <li><strong>Accessibility:</strong> Screen readers use these to navigate.</li>
                        <li><strong>SEO:</strong> Search engines understand content hierarchy better.</li>
                        <li><strong>Maintainability:</strong> Code is easier to read and understand.</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Interactive Comparison: Div Soup vs. Semantic HTML</h3>

                <div className="comparison-container">
                    <div className="code-block bad">
                        <h4>❌ Bad (Div Soup)</h4>
                        <pre>
                            {`<div id="header">
  <div class="nav">...</div>
</div>
<div id="content">
  <div class="article">...</div>
</div>
<div id="footer">...</div>`}
                        </pre>
                    </div>

                    <div className="code-block good">
                        <h4>✅ Good (Semantic)</h4>
                        <pre>
                            {`<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>`}
                        </pre>
                    </div>
                </div>
            </section>

            <section className="challenge-section">
                <h3>🎯 Micro Challenge</h3>
                <p>Inspect this page! Look at the sidebar and the main content. We are using <code>&lt;aside&gt;</code> and <code>&lt;main&gt;</code> tags right now. Open DevTools (F12) to verify.</p>

                <div style={{ marginTop: '2rem' }}>
                    <h4>Try it yourself!</h4>
                    <p style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                        Write some semantic HTML below. Try adding a <code>&lt;nav&gt;</code> inside a <code>&lt;header&gt;</code>.
                    </p>
                    <LivePlayground
                        initialCode={`
<style>
  header { background: #3b82f6; color: white; padding: 10px; }
  nav a { color: white; margin-right: 10px; text-decoration: none; }
  main { padding: 10px; background: #f8fafc; color: #334155; }
</style>

<header>
  <h1>My Website</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>This is some semantic content.</p>
  </article>
</main>
            `}
                    />
                </div>
            </section>
        </div>
    );
};

export default HtmlSemantics;
