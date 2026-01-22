import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const WhatIsReact = () => {
    return (
        <div className="module-container">
            <h2>What is React?</h2>
            <p className="intro">
                React is a <strong>JavaScript library</strong> for building user interfaces, developed and maintained by Facebook (Meta).
                It allows you to create interactive, component-based UIs efficiently.
                <br /><br />
                As a MERN stack developer, React is your primary tool for building the frontend of modern web applications.
            </p>

            <section className="example-section">
                <h3>Key Features of React</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. Component-Based</h4>
                        <p>
                            Build encapsulated components that manage their own state, then compose them to make complex UIs.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Declarative</h4>
                        <p>
                            Design simple views for each state in your application. React efficiently updates and renders the right components when data changes.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Virtual DOM</h4>
                        <p>
                            React creates a virtual representation of the DOM in memory. When state changes, React updates only what's necessary in the real DOM.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. One-Way Data Flow</h4>
                        <p>
                            Data flows from parent to child components through props, making applications easier to understand and debug.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>5. JSX Syntax</h4>
                        <p>
                            Write HTML-like syntax directly in JavaScript. JSX makes your component code more readable and expressive.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>6. Rich Ecosystem</h4>
                        <p>
                            Massive ecosystem of libraries, tools, and community support for routing, state management, styling, and more.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Why Use React?</h3>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Reusable Components</h4>
                        <p>Build once, use everywhere. Components can be shared across different parts of your application.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Fast Performance</h4>
                        <p>Virtual DOM ensures efficient updates and minimal manipulation of the actual DOM.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Easy Testing</h4>
                        <p>Component-based architecture makes unit testing straightforward and reliable.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ SEO Friendly</h4>
                        <p>With Next.js (React framework), you can build SEO-optimized server-rendered applications.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Large Community</h4>
                        <p>Huge community means extensive documentation, tutorials, and third-party libraries.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Industry Standard</h4>
                        <p>Used by top companies like Facebook, Instagram, Netflix, Airbnb, and thousands more.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Basic React Example:</h3>
                <div className="code-block">
                    <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>React vs Other Frameworks</h3>
                <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        background: 'var(--bg-card)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>React</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Vue</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Angular</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Type</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Library</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Framework</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Framework</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Learning Curve</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Moderate</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Easy</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Steep</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Data Binding</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>One-way</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Two-way</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Two-way</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Performance</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Excellent (Virtual DOM)</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Excellent</td>
                                <td style={{ padding: '1rem', color: '#fbbf24' }}>Good</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Community</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Very Large</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Large</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Large</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>The React Ecosystem</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Core Library</h4>
                        <ul className="feature-list">
                            <li>React DOM</li>
                            <li>React Hooks</li>
                            <li>JSX</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>State Management</h4>
                        <ul className="feature-list">
                            <li>Redux / Redux Toolkit</li>
                            <li>Context API</li>
                            <li>Zustand, Recoil</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Routing</h4>
                        <ul className="feature-list">
                            <li>React Router</li>
                            <li>Next.js (built-in)</li>
                            <li>TanStack Router</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Frameworks</h4>
                        <ul className="feature-list">
                            <li>Next.js (SSR/SSG)</li>
                            <li>Remix</li>
                            <li>Gatsby</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Styling</h4>
                        <ul className="feature-list">
                            <li>Tailwind CSS</li>
                            <li>Styled Components</li>
                            <li>CSS Modules</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Testing</h4>
                        <ul className="feature-list">
                            <li>Jest</li>
                            <li>React Testing Library</li>
                            <li>Cypress</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Example</h3>
                <p>Here's a simple React component pattern in vanilla JavaScript to understand the concept:</p>
                <JsPlayground
                    title="React Concept Demo"
                    initialCode={`// Simulating React's component concept
console.log("=== REACT COMPONENT CONCEPT ===\\n");

// 1. Component is just a function that returns UI
function Button(props) {
  return {
    type: 'button',
    props: {
      onClick: props.onClick,
      text: props.text
    }
  };
}

// 2. State management concept
class Counter {
  constructor() {
    this.state = { count: 0 };
  }
  
  increment() {
    this.state = { count: this.state.count + 1 };
    this.render();
  }
  
  render() {
    console.log(\`Current count: \${this.state.count}\`);
    return {
      type: 'div',
      children: [
        { type: 'h1', props: { text: \`Count: \${this.state.count}\` } },
        Button({ text: 'Increment', onClick: () => this.increment() })
      ]
    };
  }
}

const counter = new Counter();
console.log("Initial render:");
counter.render();

console.log("\\nAfter increment:");
counter.increment();

console.log("\\nAfter another increment:");
counter.increment();

// 3. Component composition
function Card(props) {
  return {
    type: 'div',
    className: 'card',
    children: [
      { type: 'h2', props: { text: props.title } },
      { type: 'p', props: { text: props.content } }
    ]
  };
}

function App() {
  return {
    type: 'div',
    children: [
      Card({ title: 'Welcome', content: 'This is how React components work!' }),
      Card({ title: 'Composable', content: 'Build complex UIs from simple parts' })
    ]
  };
}

console.log("\\n=== COMPONENT COMPOSITION ===");
console.log(JSON.stringify(App(), null, 2));`}
                />
            </section>
        </div>
    );
};

export default WhatIsReact;
