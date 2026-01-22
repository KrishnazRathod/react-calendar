import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const ReactQuestions = () => {
    return (
        <div className="module-container">
            <h2>React Interview Questions</h2>
            <p className="intro">
                Master React interview questions covering hooks, lifecycle, state management, performance, and more.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>React Hooks</h3>
                    <ul className="feature-list">
                        <li><code>useState</code> - Manage component state</li>
                        <li><code>useEffect</code> - Handle side effects</li>
                        <li><code>useContext</code> - Access context</li>
                        <li><code>useMemo</code> - Memoize expensive calculations</li>
                        <li><code>useCallback</code> - Memoize functions</li>
                        <li><code>useRef</code> - Access DOM or store mutable values</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Component Lifecycle</h3>
                    <ul className="feature-list">
                        <li><strong>Mount:</strong> Component created and inserted</li>
                        <li><strong>Update:</strong> Component re-rendered</li>
                        <li><strong>Unmount:</strong> Component removed</li>
                        <li>useEffect handles all lifecycle events</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>State Management</h3>
                    <ul className="feature-list">
                        <li><code>useState</code> - Local component state</li>
                        <li><code>useContext</code> - Global state (small apps)</li>
                        <li><code>Redux</code> - Complex state management</li>
                        <li><code>Zustand</code> - Lightweight alternative</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Performance Optimization</h3>
                    <ul className="feature-list">
                        <li><code>React.memo</code> - Prevent unnecessary re-renders</li>
                        <li><code>useMemo</code> - Memoize values</li>
                        <li><code>useCallback</code> - Memoize functions</li>
                        <li>Code splitting with <code>lazy()</code></li>
                        <li>Virtualization for long lists</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Common React Questions</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>What is JSX?</h4>
                        <p><strong>Answer:</strong> JavaScript XML - syntax extension that allows writing HTML-like code in JavaScript.</p>
                    </div>
                    <div className="card">
                        <h4>What is Virtual DOM?</h4>
                        <p><strong>Answer:</strong> In-memory representation of the real DOM. React uses it to optimize updates.</p>
                    </div>
                    <div className="card">
                        <h4>What are props?</h4>
                        <p><strong>Answer:</strong> Properties passed from parent to child components. They are read-only.</p>
                    </div>
                    <div className="card">
                        <h4>What is state?</h4>
                        <p><strong>Answer:</strong> Component's internal data that can change over time, triggering re-renders.</p>
                    </div>
                    <div className="card">
                        <h4>Props vs State?</h4>
                        <p><strong>Answer:</strong> Props are passed down, state is managed internally. Props are immutable, state is mutable.</p>
                    </div>
                    <div className="card">
                        <h4>What are keys in React?</h4>
                        <p><strong>Answer:</strong> Special attributes that help React identify which items changed, added, or removed.</p>
                    </div>
                    <div className="card">
                        <h4>What is useEffect cleanup?</h4>
                        <p><strong>Answer:</strong> Function returned from useEffect that runs when component unmounts or before re-running effect.</p>
                    </div>
                    <div className="card">
                        <h4>What is the difference between controlled and uncontrolled components?</h4>
                        <p><strong>Answer:</strong> Controlled: form data handled by React state. Uncontrolled: form data handled by DOM.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 React Practice</h3>
                <LivePlayground
                    initialCode={`
<style>
  .container { padding: 20px; }
  button { padding: 10px 20px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 5px; }
  .card { background: #f8fafc; padding: 15px; border-radius: 8px; margin: 10px 0; }
</style>

<div class="container">
  <h2>React Concepts Demo</h2>
  <div class="card">
    <h3>Component Example</h3>
    <p>This simulates a React component structure.</p>
    <button onclick="alert('State updated!')">Update State</button>
  </div>
</div>

<script>
  // Simulating React useState
  let count = 0;
  function updateCount() {
    count++;
    document.querySelector('.card p').textContent = \`Count: \${count}\`;
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default ReactQuestions;

