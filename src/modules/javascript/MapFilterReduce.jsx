import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const MapFilterReduce = () => {
    return (
        <div className="module-container">
            <h2>Map, Filter and Reduce</h2>
            <p className="intro">
                In JavaScript, <code>map</code>, <code>filter</code>, and <code>reduce</code> are known as <strong>Higher-Order Functions</strong>.
                They are the bread and butter of modern web development because they allow you to manipulate arrays without using messy for loops.
                <br /><br />
                Since you are working with the MERN stack, you likely use these constantly to render lists in React or process data from a MongoDB query.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. Map: The "Transformer"</h3>
                    <p>
                        <code>map()</code> creates a new array by applying a function to every element of the original array.
                        It is most commonly used in React to convert an array of data into an array of JSX elements.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Result:</strong> New array of the same length.</li>
                        <li><strong>Use Case:</strong> Converting prices, formatting strings, or rendering UI lists.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>2. Filter: The "Gatekeeper"</h3>
                    <p>
                        <code>filter()</code> creates a new array containing only the elements that pass a specific test (return true).
                    </p>
                    <ul className="feature-list">
                        <li><strong>Result:</strong> New array, usually shorter than the original.</li>
                        <li><strong>Use Case:</strong> Searching a list, removing deleted items, or showing only "active" users.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>3. Reduce: The "Aggregator"</h3>
                    <p>
                        <code>reduce()</code> is the most powerful and complex of the three. It executes a reducer function on each element,
                        resulting in a single output value.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Result:</strong> A single value (number, string, object, or even another array).</li>
                        <li><strong>Use Case:</strong> Summing up a total, grouping objects by a property, or flattening a nested array.</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Map Example:</h3>
                <div className="code-block">
                    <pre>{`const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9); 

// Result: [90, 180, 270]`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Filter Example:</h3>
                <div className="code-block">
                    <pre>{`const tasks = [
  { id: 1, completed: true },
  { id: 2, completed: false }
];

const pendingTasks = tasks.filter(task => !task.completed);

// Result: [{ id: 2, completed: false }]`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Reduce Example:</h3>
                <div className="code-block">
                    <pre>{`const cart = [10, 20, 30];

// accumulator (acc) starts at 0 (the second argument)
const total = cart.reduce((acc, curr) => acc + curr, 0);

// Result: 60`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary Comparison Table</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Method</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Returns</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Length of Output</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Mutation?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>map</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>New Array</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Same as input</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>No (Immutable)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>filter</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>New Array</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Only matching items</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>No (Immutable)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>reduce</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Single Value</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>1</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>No (Immutable)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Pro Tip: Chaining</h3>
                <p>
                    One of the best things about these methods is that you can chain them together to perform complex data transformations
                    in a single, readable block.
                </p>

                <h4 style={{ marginTop: '1.5rem' }}>Example: Get the total price of only the "Electronics" items.</h4>
                <div className="code-block good">
                    <pre>{`const products = [
  { name: 'Phone', category: 'Electronics', price: 500 },
  { name: 'Shirt', category: 'Apparel', price: 20 },
  { name: 'Laptop', category: 'Electronics', price: 1000 }
];

const electronicsTotal = products
  .filter(p => p.category === 'Electronics') // Step 1: Filter
  .map(p => p.price)                          // Step 2: Extract prices
  .reduce((sum, price) => sum + price, 0);    // Step 3: Sum them up

console.log(electronicsTotal); // 1500`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with map, filter, and reduce in this live code editor:</p>
                <JsPlayground
                    title="Map, Filter & Reduce Playground"
                    initialCode={`// Sample data
const products = [
  { id: 1, name: 'Phone', category: 'Electronics', price: 500, inStock: true },
  { id: 2, name: 'Shirt', category: 'Apparel', price: 20, inStock: false },
  { id: 3, name: 'Laptop', category: 'Electronics', price: 1000, inStock: true },
  { id: 4, name: 'Headphones', category: 'Electronics', price: 100, inStock: true },
  { id: 5, name: 'Jeans', category: 'Apparel', price: 50, inStock: true }
];

// 1. MAP: Transform data
console.log("=== MAP ===");
const productNames = products.map(p => p.name);
console.log("Product names:", productNames);

const discountedPrices = products.map(p => ({
  ...p,
  price: p.price * 0.9
}));
console.log("10% discount:", discountedPrices[0]);

// 2. FILTER: Select items
console.log("\\n=== FILTER ===");
const electronics = products.filter(p => p.category === 'Electronics');
console.log("Electronics count:", electronics.length);

const inStock = products.filter(p => p.inStock);
console.log("In stock items:", inStock.map(p => p.name));

// 3. REDUCE: Aggregate data
console.log("\\n=== REDUCE ===");
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total inventory value:", totalValue);

// Group by category
const grouped = products.reduce((acc, p) => {
  if (!acc[p.category]) {
    acc[p.category] = [];
  }
  acc[p.category].push(p);
  return acc;
}, {});
console.log("Grouped by category:", grouped);

// 4. CHAINING: Combine all three
console.log("\\n=== CHAINING ===");
const electronicsTotal = products
  .filter(p => p.category === 'Electronics' && p.inStock)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);

console.log("In-stock electronics total:", electronicsTotal);

// 5. React-style rendering (simulation)
console.log("\\n=== REACT PATTERN ===");
const productCards = products
  .filter(p => p.inStock)
  .map(p => \`<ProductCard name="\${p.name}" price="$\${p.price}" />\`);

console.log("JSX-like output:", productCards.join('\\n'));`}
                />
            </section>
        </div>
    );
};

export default MapFilterReduce;
