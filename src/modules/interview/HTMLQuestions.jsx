import React, { useState } from 'react';
import LivePlayground from '../../components/LivePlayground';

const HTMLQuestions = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="module-container">
            <h2>HTML Interview Questions</h2>
            <p className="intro">
                Master HTML interview questions covering semantic HTML, accessibility, SEO, and best practices.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Semantic HTML</h3>
                    <div style={{ marginBottom: '1rem' }}>
                        <p><strong>&lt;article&gt;:</strong> Standalone & reusable content</p>
                        <p><strong>&lt;section&gt;:</strong> Groups related content under a heading</p>
                    </div>
                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <p><strong>Examples:</strong></p>
                        <ul className="feature-list">
                            <li>Blog comment → <code>&lt;article&gt;</code></li>
                            <li>Pros & Cons → <code>&lt;section&gt;</code></li>
                            <li>Pricing card → <code>&lt;article&gt;</code></li>
                            <li><code>&lt;header&gt;</code> inside <code>&lt;article&gt;</code> → Allowed</li>
                            <li>Use <code>&lt;div&gt;</code> only for layout, not meaning</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <h3>&lt;main&gt; Element</h3>
                    <ul className="feature-list">
                        <li>Only ONE <code>&lt;main&gt;</code> per page</li>
                        <li>Represents primary page content</li>
                        <li>Improves screen reader navigation</li>
                        <li>Never nest inside header, footer, nav, article</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Accessibility & ARIA</h3>
                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <p><strong>Key Rules:</strong></p>
                        <ul className="feature-list">
                            <li>Native HTML always wins over ARIA</li>
                            <li>Avoid ARIA when semantic HTML exists</li>
                            <li><strong>ARIA rule #1:</strong> Don't use ARIA if HTML can do the job</li>
                            <li><code>aria-label:</code> Used when no visible text exists</li>
                            <li>Do NOT duplicate visible text with aria-label</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <h3>Headings (h1–h6)</h3>
                    <ul className="feature-list">
                        <li>Used for structure, not styling</li>
                        <li>One h1 per page (best practice)</li>
                        <li>Do not skip heading levels</li>
                        <li>Important for accessibility & SEO</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>HTML5 Tags – Differences (Quick Recall)</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>&lt;strong&gt; vs &lt;b&gt;</h4>
                        <p><code>&lt;strong&gt;</code> = importance, <code>&lt;b&gt;</code> = visual only</p>
                    </div>
                    <div className="card">
                        <h4>&lt;em&gt; vs &lt;i&gt;</h4>
                        <p><code>&lt;em&gt;</code> = emphasis, <code>&lt;i&gt;</code> = visual style</p>
                    </div>
                    <div className="card">
                        <h4>&lt;mark&gt;</h4>
                        <p>Highlights relevant text</p>
                    </div>
                    <div className="card">
                        <h4>&lt;time&gt;</h4>
                        <p>Machine-readable dates/times</p>
                    </div>
                    <div className="card">
                        <h4>&lt;figure&gt; vs &lt;img&gt;</h4>
                        <p><code>&lt;figure&gt;</code> groups media with caption</p>
                    </div>
                    <div className="card">
                        <h4>&lt;figcaption&gt;</h4>
                        <p>Caption for figure</p>
                    </div>
                    <div className="card">
                        <h4>&lt;details&gt; & &lt;summary&gt;</h4>
                        <p>Native disclosure widget</p>
                    </div>
                    <div className="card">
                        <h4>&lt;progress&gt; vs &lt;meter&gt;</h4>
                        <p><code>&lt;progress&gt;</code> = task, <code>&lt;meter&gt;</code> = value</p>
                    </div>
                    <div className="card">
                        <h4>&lt;nav&gt;</h4>
                        <p>Major navigation links only</p>
                    </div>
                    <div className="card">
                        <h4>&lt;aside&gt;</h4>
                        <p>Tangential or related content</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>SEO-Friendly Links</h3>
                <div className="card">
                    <ul className="feature-list">
                        <li>Use descriptive anchor text</li>
                        <li>Avoid 'click here'</li>
                        <li>Links must have valid href</li>
                        <li>Link text should make sense out of context</li>
                    </ul>
                </div>
            </section>

            <section className="example-section">
                <h3>Common HTML Interview Questions</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>Difference between span and div?</h4>
                        <p><strong>Answer:</strong> Inline vs Block</p>
                    </div>
                    <div className="card">
                        <h4>Can multiple elements share same id?</h4>
                        <p><strong>Answer:</strong> No</p>
                    </div>
                    <div className="card">
                        <h4>Is alt required on images?</h4>
                        <p><strong>Answer:</strong> Yes</p>
                    </div>
                    <div className="card">
                        <h4>Can nav exist inside header?</h4>
                        <p><strong>Answer:</strong> Yes</p>
                    </div>
                    <div className="card">
                        <h4>Can section exist without heading?</h4>
                        <p><strong>Answer:</strong> Not recommended</p>
                    </div>
                    <div className="card">
                        <h4>Does HTML define behavior?</h4>
                        <p><strong>Answer:</strong> No, structure only</p>
                    </div>
                    <div className="card">
                        <h4>Is semantic HTML important for SEO?</h4>
                        <p><strong>Answer:</strong> Yes</p>
                    </div>
                    <div className="card">
                        <h4>Should form inputs always have labels?</h4>
                        <p><strong>Answer:</strong> Yes</p>
                    </div>
                    <div className="card">
                        <h4>Does HTML ignore unknown tags?</h4>
                        <p><strong>Answer:</strong> Yes</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Web Components vs React</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>Web Components</h4>
                        <ul className="feature-list">
                            <li>Framework-agnostic UI</li>
                            <li>Design systems → Web Components</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4>React</h4>
                        <ul className="feature-list">
                            <li>Application-level logic</li>
                            <li>SPAs → React</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 Semantic HTML Practice</h3>
                <LivePlayground
                    initialCode={`
<style>
  body { font-family: Arial, sans-serif; padding: 20px; }
  article { background: #f8fafc; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #14b8a6; }
  section { background: #ffffff; padding: 15px; margin: 10px 0; border-radius: 6px; }
  header { background: #14b8a6; color: white; padding: 15px; border-radius: 8px; }
  nav a { color: white; margin-right: 15px; text-decoration: none; }
  nav a:hover { text-decoration: underline; }
  aside { background: #e0f2fe; padding: 15px; border-radius: 6px; margin: 20px 0; }
  footer { background: #1e293b; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; }
</style>

<header>
  <h1>My Blog</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<main>
  <article>
    <header>
      <h2>Understanding Semantic HTML</h2>
      <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    <section>
      <h3>What is Semantic HTML?</h3>
      <p>Semantic HTML uses elements that clearly describe their meaning.</p>
    </section>
    <section>
      <h3>Benefits</h3>
      <ul>
        <li>Better accessibility</li>
        <li>Improved SEO</li>
        <li>Easier maintenance</li>
      </ul>
    </section>
  </article>

  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#">HTML5 Best Practices</a></li>
      <li><a href="#">Accessibility Guide</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Blog. All rights reserved.</p>
</footer>
                    `}
                />
            </section>
        </div>
    );
};

export default HTMLQuestions;

