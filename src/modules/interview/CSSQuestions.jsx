import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const CSSQuestions = () => {
    return (
        <div className="module-container">
            <h2>CSS Interview Questions</h2>
            <p className="intro">
                Master CSS interview questions covering layout, selectors, specificity, flexbox, grid, and more.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Box Model</h3>
                    <ul className="feature-list">
                        <li>Content → Padding → Border → Margin</li>
                        <li><code>box-sizing: border-box</code> includes padding & border in width</li>
                        <li><code>box-sizing: content-box</code> (default) excludes padding & border</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Display Properties</h3>
                    <ul className="feature-list">
                        <li><code>block</code> - Full width, new line</li>
                        <li><code>inline</code> - Only takes needed space</li>
                        <li><code>inline-block</code> - Inline with block properties</li>
                        <li><code>flex</code> - Flexbox layout</li>
                        <li><code>grid</code> - Grid layout</li>
                        <li><code>none</code> - Removes from flow</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Position Property</h3>
                    <ul className="feature-list">
                        <li><code>static</code> - Default, normal flow</li>
                        <li><code>relative</code> - Relative to normal position</li>
                        <li><code>absolute</code> - Relative to nearest positioned parent</li>
                        <li><code>fixed</code> - Relative to viewport</li>
                        <li><code>sticky</code> - Sticks when scrolling</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>CSS Specificity</h3>
                    <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                        <p><strong>Order (highest to lowest):</strong></p>
                        <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                            <li>Inline styles (1000)</li>
                            <li>IDs (100)</li>
                            <li>Classes, attributes, pseudo-classes (10)</li>
                            <li>Elements, pseudo-elements (1)</li>
                        </ol>
                    </div>
                </div>
            </div>

            <section className="example-section">
                <h3>Flexbox vs Grid</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>Flexbox</h4>
                        <ul className="feature-list">
                            <li>One-dimensional (row or column)</li>
                            <li>Best for component layout</li>
                            <li>Content-driven sizing</li>
                            <li>Use for navigation, cards, forms</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4>Grid</h4>
                        <ul className="feature-list">
                            <li>Two-dimensional (rows & columns)</li>
                            <li>Best for page layout</li>
                            <li>Container-driven sizing</li>
                            <li>Use for page structure, complex layouts</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Common CSS Questions</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>What is CSS specificity?</h4>
                        <p><strong>Answer:</strong> Rules that determine which CSS rule applies when multiple rules target the same element.</p>
                    </div>
                    <div className="card">
                        <h4>Difference between margin and padding?</h4>
                        <p><strong>Answer:</strong> Margin is space outside the element, padding is space inside the element.</p>
                    </div>
                    <div className="card">
                        <h4>What is z-index?</h4>
                        <p><strong>Answer:</strong> Controls stacking order of positioned elements. Higher values appear on top.</p>
                    </div>
                    <div className="card">
                        <h4>What is the cascade?</h4>
                        <p><strong>Answer:</strong> Process of combining multiple stylesheets and resolving conflicts.</p>
                    </div>
                    <div className="card">
                        <h4>What are CSS variables?</h4>
                        <p><strong>Answer:</strong> Custom properties defined with <code>--</code> prefix, accessed with <code>var()</code>.</p>
                    </div>
                    <div className="card">
                        <h4>What is BEM?</h4>
                        <p><strong>Answer:</strong> Block Element Modifier - CSS naming methodology for maintainable code.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 CSS Practice</h3>
                <LivePlayground
                    initialCode={`
<style>
  .container {
    display: flex;
    gap: 20px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 8px;
  }
  .card {
    flex: 1;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .card h3 {
    color: #14b8a6;
    margin-top: 0;
  }
  .button {
    background: #14b8a6;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .button:hover {
    transform: translateY(-2px);
  }
</style>

<div class="container">
  <div class="card">
    <h3>Card 1</h3>
    <p>This demonstrates flexbox layout.</p>
    <button class="button">Click Me</button>
  </div>
  <div class="card">
    <h3>Card 2</h3>
    <p>Cards are evenly distributed.</p>
    <button class="button">Click Me</button>
  </div>
  <div class="card">
    <h3>Card 3</h3>
    <p>Responsive and flexible design.</p>
    <button class="button">Click Me</button>
  </div>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default CSSQuestions;

