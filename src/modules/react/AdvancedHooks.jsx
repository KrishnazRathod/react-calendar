import React, { useState, useCallback, useMemo, useRef } from 'react';
import JsPlayground from '../../components/JsPlayground';

const AdvancedHooks = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [items, setItems] = useState([1, 2, 3, 4, 5]);
    const inputRef = useRef(null);

    // useMemo: Memoize expensive calculations
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value...');
        return items.reduce((sum, item) => sum + item * 2, 0);
    }, [items]);

    // useCallback: Memoize functions
    const handleAddItem = useCallback(() => {
        setItems(prev => [...prev, prev.length + 1]);
    }, []);

    const handleFocusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="module-container">
            <h2>Advanced React Hooks</h2>
            <p className="intro">
                Advanced hooks like useCallback, useMemo, useRef, and custom hooks help optimize performance and manage complex component logic.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>useCallback</h3>
                    <p>Memoizes functions to prevent unnecessary re-renders of child components.</p>
                    <pre className="code-snippet">
                        {`const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
                    </pre>
                    <p className="note">Use when passing functions to memoized children.</p>
                </div>

                <div className="card">
                    <h3>useMemo</h3>
                    <p>Memoizes expensive calculations to avoid recomputing on every render.</p>
                    <pre className="code-snippet">
                        {`const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`}
                    </pre>
                    <p className="note">Use for expensive computations or object/array creation.</p>
                </div>

                <div className="card">
                    <h3>useRef</h3>
                    <p>Creates a mutable reference that persists across renders without causing re-renders.</p>
                    <pre className="code-snippet">
                        {`const inputRef = useRef(null);
inputRef.current.focus();`}
                    </pre>
                    <p className="note">Use for DOM access, timers, or storing mutable values.</p>
                </div>

                <div className="card">
                    <h3>Custom Hooks</h3>
                    <p>Extract component logic into reusable functions.</p>
                    <pre className="code-snippet">
                        {`function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  return [count, increment];
}`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: Performance Optimization</h3>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Type to see useMemo in action"
                            style={{ padding: '8px', width: '250px', marginRight: '8px' }}
                        />
                        <button onClick={handleFocusInput}>Focus Input</button>
                    </div>
                    <p>Count: {count}</p>
                    <p>Expensive Value: {expensiveValue}</p>
                    <p>Items: [{items.join(', ')}]</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                        <button onClick={handleAddItem}>Add Item</button>
                    </div>
                    <p className="note" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
                        Check console: "Computing expensive value..." only logs when items change, not when count or name changes!
                    </p>
                </div>
            </section>

            <section className="example-section">
                <h3>🧠 Challenge: Create a Custom Hook</h3>
                <p>Create a custom <code>useLocalStorage</code> hook that syncs state with localStorage:</p>
                <JsPlayground
                    title="Custom Hook Challenge"
                    initialCode={`// Create a useLocalStorage hook
function useLocalStorage(key, initialValue) {
  // 1. Get initial value from localStorage or use initialValue
  // 2. Create state with useState
  // 3. Create useEffect to sync with localStorage
  // 4. Return [value, setValue] like useState

  // Your implementation here:
  const [value, setValue] = React.useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Test it
const [name, setName] = useLocalStorage('name', 'Guest');
console.log('Current name:', name);
setName('John Doe');
console.log('Updated name:', name);
                    `}
                />
            </section>
        </div>
    );
};

export default AdvancedHooks;

