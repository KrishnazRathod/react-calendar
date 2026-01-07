import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const CodeQuality = () => {
    return (
        <div className="module-container">
            <h2>Code Quality & TypeScript</h2>
            <p className="intro">
                Maintain code quality with linting, formatting, and type safety using ESLint, Prettier, and TypeScript.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>ESLint</h3>
                    <p>Find and fix problems in JavaScript code.</p>
                    <pre className="code-snippet">
                        {`// .eslintrc.js
module.exports = {
  extends: ['react-app'],
  rules: {
    'no-console': 'warn'
  }
};`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Prettier</h3>
                    <p>Opinionated code formatter for consistent style.</p>
                    <pre className="code-snippet">
                        {`// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>TypeScript</h3>
                    <p>Add static type checking to JavaScript.</p>
                    <pre className="code-snippet">
                        {`interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30
};`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Benefits</h3>
                    <ul className="feature-list">
                        <li>Catch errors early</li>
                        <li>Better IDE support</li>
                        <li>Self-documenting code</li>
                        <li>Refactoring confidence</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 TypeScript Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .code { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; font-family: monospace; }
  .keyword { color: #60a5fa; }
  .type { color: #fbbf24; }
  .string { color: #34d399; }
</style>

<div class="code">
  <h3>TypeScript Interface Example</h3>
  <pre>
<span class="keyword">interface</span> <span class="type">Product</span> {
  id: <span class="type">number</span>;
  name: <span class="type">string</span>;
  price: <span class="type">number</span>;
  inStock: <span class="type">boolean</span>;
}

<span class="keyword">const</span> product: <span class="type">Product</span> = {
  id: 1,
  name: <span class="string">"Laptop"</span>,
  price: 999.99,
  inStock: <span class="keyword">true</span>
};
  </pre>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default CodeQuality;

