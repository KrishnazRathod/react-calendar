import React from 'react';

const AvoidReRendering = () => {
    return (
        <div className="module-container">
            <h2>How to Avoid Re-rendering in React</h2>
            <p className="intro">
                React re-renders components when their state or props change. Unnecessary re-renders can slow down your app.
                <br /><br />
                Learn the techniques to optimize and prevent unnecessary re-renders.
            </p>

            <section className="example-section">
                <h3>Optimization Techniques:</h3>

                <h4>1. React.memo() - Memoize Components</h4>
                <div className="code-block good">
                    <pre>{`// ✅ Prevents re-render if props haven't changed
const ExpensiveComponent = React.memo(({ data }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = "Static data";

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveComponent data={data} />
      {/* Won't re-render when count changes! */}
    </div>
  );
}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. useMemo() - Memoize Values</h4>
                <div className="code-block good">
                    <pre>{`import { useState, useMemo } from 'react';

function TodoList({ todos }) {
  const [filter, setFilter] = useState('all');

  // ✅ Only recalculates when todos or filter changes
  const filteredTodos = useMemo(() => {
    console.log('Filtering todos...');
    return todos.filter(todo => {
      if (filter === 'completed') return todo.done;
      if (filter === 'active') return !todo.done;
      return true;
    });
  }, [todos, filter]);

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      {filteredTodos.map(todo => <div key={todo.id}>{todo.text}</div>)}
    </div>
  );
}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. useCallback() - Memoize Functions</h4>
                <div className="code-block good">
                    <pre>{`import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // ✅ Function reference stays the same
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []); // Empty deps = function never changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ChildButton onClick={handleClick} />
    </div>
  );
}

const ChildButton = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});
// Without useCallback, ChildButton would re-render every time`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>4. Split Components</h4>
                <div className="code-block good">
                    <pre>{`// ❌ Bad: Entire component re-renders
function BadExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ExpensiveList items={largeArray} />  {/* Re-renders unnecessarily */}
    </div>
  );
}

// ✅ Good: Split into smaller components
function GoodExample() {
  return (
    <div>
      <Counter />
      <ExpensiveList items={largeArray} />  {/* Doesn't re-render */}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>5. Move State Down</h4>
                <div className="code-block good">
                    <pre>{`// ✅ Keep state as close as possible to where it's used
function Parent() {
  return (
    <div>
      <StaticContent />
      <InteractiveWidget />  {/* State is here, not in Parent */}
    </div>
  );
}

function InteractiveWidget() {
  const [value, setValue] = useState('');
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Quick Comparison</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Technique</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Use For</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Prevents Re-render of</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code>React.memo()</code></td>
                                <td style={{ padding: '1rem' }}>Components</td>
                                <td style={{ padding: '1rem' }}>Entire component when props don't change</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code>useMemo()</code></td>
                                <td style={{ padding: '1rem' }}>Expensive calculations</td>
                                <td style={{ padding: '1rem' }}>Recalculating values</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code>useCallback()</code></td>
                                <td style={{ padding: '1rem' }}>Function references</td>
                                <td style={{ padding: '1rem' }}>Child components (with memo)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>Component splitting</td>
                                <td style={{ padding: '1rem' }}>Large components</td>
                                <td style={{ padding: '1rem' }}>Unrelated parts</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Best Practices</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ DO</h4>
                        <ul className="feature-list">
                            <li>Profile before optimizing</li>
                            <li>Use React DevTools Profiler</li>
                            <li>Memoize expensive calculations</li>
                            <li>Split large components</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ DON'T</h4>
                        <ul className="feature-list">
                            <li>Optimize prematurely</li>
                            <li>Memo everything blindly</li>
                            <li>Forget dependency arrays</li>
                            <li>Create functions in render</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AvoidReRendering;
