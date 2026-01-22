import React from 'react';

const UseMemoVsUseCallback = () => {
    return (
        <div className="module-container">
            <h2>useMemo vs useCallback</h2>
            <p className="intro">
                Both <code>useMemo</code> and <code>useCallback</code> are React hooks that help optimize performance by
                memoizing (caching) values and functions.
                <br /><br />
                The key difference: <strong>useMemo</strong> returns a memoized <em>value</em>, while <strong>useCallback</strong>
                returns a memoized <em>function</em>.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>useMemo()</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Memoize Values</h4>
                    <p>
                        Returns and caches a computed value. Recalculates only when dependencies change.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Returns:</strong> Memoized value</li>
                        <li><strong>Use for:</strong> Expensive calculations</li>
                        <li><strong>Prevents:</strong> Recalculating on every render</li>
                    </ul>
                    <div className="code-snippet" style={{ marginTop: '1rem' }}>
                        {`const value = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);`}
                    </div>
                </div>

                <div className="card">
                    <h3>useCallback()</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Memoize Functions</h4>
                    <p>
                        Returns and caches a function. Creates new function only when dependencies change.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Returns:</strong> Memoized function</li>
                        <li><strong>Use for:</strong> Callback functions</li>
                        <li><strong>Prevents:</strong> Child re-renders</li>
                    </ul>
                    <div className="code-snippet" style={{ marginTop: '1rem' }}>
                        {`const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
                    </div>
                </div>
            </div>

            <section className="example-section">
                <h3>useMemo Example:</h3>
                <div className="code-block good">
                    <pre>{`import { useState, useMemo } from 'react';

function ProductList({ products }) {
  const [filter, setFilter] = useState('');

  // ✅ useMemo: Memoize expensive calculation
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]); // Recalculate only when these change

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search products..."
      />
      {filteredProducts.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>useCallback Example:</h3>
                <div className="code-block good">
                    <pre>{`import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // ✅ useCallback: Memoize function
  const handleAddItem = useCallback((item) => {
    console.log('Adding item:', item);
    // Logic to add item
  }, []); // Function never changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ChildList onAddItem={handleAddItem} />
    </div>
  );
}

// Child component wrapped in React.memo
const ChildList = React.memo(({ onAddItem }) => {
  console.log('ChildList rendered');
  return <button onClick={() => onAddItem('New Item')}>Add</button>;
});
// Without useCallback, ChildList would re-render on every parent render`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Comparison Table</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>useMemo</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>useCallback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Returns</td>
                                <td style={{ padding: '1rem' }}>Memoized value</td>
                                <td style={{ padding: '1rem' }}>Memoized function</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Use Case</td>
                                <td style={{ padding: '1rem' }}>Expensive calculations</td>
                                <td style={{ padding: '1rem' }}>Callback functions passed to children</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Syntax</td>
                                <td style={{ padding: '1rem' }}><code>useMemo(() =&gt; value, [deps])</code></td>
                                <td style={{ padding: '1rem' }}><code>useCallback(fn, [deps])</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Equivalent</td>
                                <td style={{ padding: '1rem' }}><code>useMemo(() =&gt; fn, [deps])</code></td>
                                <td style={{ padding: '1rem' }}><code>useCallback(fn, [deps])</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>When to Use Each</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Use useMemo when:</h4>
                        <ul className="feature-list">
                            <li>Heavy computations (filtering large arrays)</li>
                            <li>Complex data transformations</li>
                            <li>Derived state calculations</li>
                            <li>Value passed to child needs stability</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Use useCallback when:</h4>
                        <ul className="feature-list">
                            <li>Passing callbacks to memoized children</li>
                            <li>Function used in dependency array</li>
                            <li>Event handlers passed as props</li>
                            <li>Avoiding function recreation</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Real-World Example: Search & Sort</h3>
                <div className="code-block good">
                    <pre>{`function ProductTable({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // useMemo: Expensive filtering and sorting
  const processedProducts = useMemo(() => {
    console.log('Processing products...');
    
    // Filter
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return a.name.localeCompare(b.name);
    });
    
    return filtered;
  }, [products, searchTerm, sortBy]);

  // useCallback: Memoize event handler
  const handleSort = useCallback((field) => {
    setSortBy(field);
  }, []);

  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <SortButtons onSort={handleSort} />
      <ProductGrid products={processedProducts} />
    </div>
  );
}

const SortButtons = React.memo(({ onSort }) => {
  console.log('SortButtons rendered');
  return (
    <div>
      <button onClick={() => onSort('name')}>Sort by Name</button>
      <button onClick={() => onSort('price')}>Sort by Price</button>
    </div>
  );
});`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Common Mistake</h3>
                <div className="comparison-container">
                    <div className="code-block bad">
                        <h4>❌ Overusing:</h4>
                        <pre>{`// Don't memoize everything!
const name = useMemo(() => user.name, [user]);
const age = useMemo(() => user.age, [user]);
// This adds unnecessary overhead`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>✅ Only when needed:</h4>
                        <pre>{`// Only memoize expensive operations
const filteredUsers = useMemo(() => {
  return users.filter(/* complex logic */)
    .map(/* expensive transformation */)
    .sort(/* heavy sorting */);
}, [users]);`}</pre>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseMemoVsUseCallback;
