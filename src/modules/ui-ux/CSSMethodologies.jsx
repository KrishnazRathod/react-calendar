import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const CSSMethodologies = () => {
    return (
        <div className="module-container">
            <h2>CSS Methodologies & Preprocessors</h2>
            <p className="intro">
                Organize CSS with methodologies like BEM, CSS Modules, and Styled Components for maintainable styles.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>BEM (Block Element Modifier)</h3>
                    <pre className="code-snippet">
                        {`.block { }
.block__element { }
.block--modifier { }
.block__element--modifier { }`}
                    </pre>
                    <p className="note">Example: .button, .button__icon, .button--primary</p>
                </div>

                <div className="card">
                    <h3>CSS Modules</h3>
                    <pre className="code-snippet">
                        {`// Button.module.css
.button { }
.primary { }

// Button.jsx
import styles from './Button.module.css';
<button className={styles.button}>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Styled Components</h3>
                    <pre className="code-snippet">
                        {`const Button = styled.button\`
  background: \${props => props.primary ? 'blue' : 'gray'};
  padding: 10px 20px;
\`;`}
                    </pre>
                </div>

                <div className="card">
                    <h3>SCSS/SASS</h3>
                    <pre className="code-snippet">
                        {`$primary-color: blue;

.button {
  background: $primary-color;
  &:hover {
    background: darken($primary-color, 10%);
  }
}`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 BEM Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .card__header { font-size: 1.5rem; margin-bottom: 10px; }
  .card__body { color: #666; }
  .card__footer { margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; }
  .card--highlighted { border: 2px solid #14b8a6; }
  .button { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
  .button--primary { background: #14b8a6; color: white; }
</style>

<div class="card card--highlighted">
  <div class="card__header">Card Title</div>
  <div class="card__body">This is a BEM-structured card component.</div>
  <div class="card__footer">
    <button class="button button--primary">Action</button>
  </div>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default CSSMethodologies;

