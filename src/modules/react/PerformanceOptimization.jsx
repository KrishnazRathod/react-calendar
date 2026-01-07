import React, { useState, memo, useMemo } from 'react';
import LivePlayground from '../../components/LivePlayground';

// Memoized component
const ExpensiveChild = memo(({ value, onUpdate }) => {
    console.log('ExpensiveChild rendered');
    return (
        <div style={{ padding: '10px', background: '#f1f5f9', borderRadius: '4px', marginTop: '10px' }}>
            <p>Child Value: {value}</p>
            <button onClick={onUpdate}>Update Child</button>
        </div>
    );
});

const PerformanceOptimization = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [childValue, setChildValue] = useState(0);

    // Memoized value
    const expensiveCalculation = useMemo(() => {
        console.log('Expensive calculation running...');
        return count * 1000;
    }, [count]);

    return (
        <div className="module-container">
            <h2>React Performance Optimization</h2>
            <p className="intro">
                Optimize React apps with code splitting, lazy loading, memoization, and other performance techniques.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>React.memo</h3>
                    <p>Prevents re-renders when props haven't changed.</p>
                    <pre className="code-snippet">
                        {`const MemoizedComponent = memo(Component);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Code Splitting</h3>
                    <p>Lazy load components to reduce initial bundle size.</p>
                    <pre className="code-snippet">
                        {`const LazyComponent = lazy(() => 
  import('./LazyComponent')
);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>useMemo & useCallback</h3>
                    <p>Memoize expensive calculations and functions.</p>
                    <pre className="code-snippet">
                        {`const value = useMemo(() => 
  expensiveCalc(a, b), [a, b]
);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Virtualization</h3>
                    <p>Render only visible items in long lists (react-window, react-virtualized).</p>
                    <pre className="code-snippet">
                        {`<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={35}
>
  {Row}
</FixedSizeList>`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: Memoization</h3>
                <p>Watch the console - ExpensiveChild only re-renders when its props change:</p>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Type here (won't trigger child re-render)"
                            style={{ padding: '8px', width: '300px', marginBottom: '10px' }}
                        />
                    </div>
                    <p>Count: {count} → Expensive: {expensiveCalculation}</p>
                    <button onClick={() => setCount(count + 1)}>Increment Count</button>
                    <ExpensiveChild 
                        value={childValue} 
                        onUpdate={() => setChildValue(childValue + 1)} 
                    />
                    <p className="note" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                        Check console: Child only logs when childValue changes, not when name or count changes!
                    </p>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 Code Splitting Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .container { padding: 20px; }
  button { padding: 10px 20px; margin: 5px; }
  .loaded { color: green; font-weight: bold; }
</style>

<div class="container">
  <h2>Lazy Loading Simulation</h2>
  <button onclick="loadComponent()">Load Heavy Component</button>
  <div id="content"></div>
</div>

<script>
  function loadComponent() {
    const content = document.getElementById('content');
    content.innerHTML = '<p class="loaded">✓ Component loaded! (Simulated lazy load)</p>';
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default PerformanceOptimization;

