import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const SliceVsSplice = () => {
    return (
        <div className="module-container">
            <h2>Slice vs Splice</h2>
            <p className="intro">
                In JavaScript, the names <code>slice</code> and <code>splice</code> are very similar, but they perform
                completely different operations. One is used for "copying" and the other for "modifying."
                <br /><br />
                Since you're building your house right now, you can think of it like this: <strong>Slice</strong> is like taking a photo
                of a section of your floor plan to show someone, while <strong>Splice</strong> is like actually cutting out a piece
                of the wall to install a window.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. The slice() Method</h3>
                    <p>
                        The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Original Array:</strong> It is not modified (Immutable).</li>
                        <li><strong>Arguments:</strong> <code>slice(startIndex, endIndex)</code> — The endIndex is not included in the result.</li>
                        <li><strong>Use Case:</strong> Copying an array or getting a sub-section of data without changing the original source.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>2. The splice() Method</h3>
                    <p>
                        The <code>splice()</code> method changes the contents of an array by removing or replacing existing elements
                        and/or adding new elements in place.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Original Array:</strong> It is directly modified (Mutable).</li>
                        <li><strong>Arguments:</strong> <code>splice(startIndex, deleteCount, item1, item2, ...)</code></li>
                        <li><strong>Use Case:</strong> Deleting a specific item from a list, inserting an item into the middle of an array, or replacing an element.</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>slice() Example:</h3>
                <div className="code-block good">
                    <pre>{`const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Kiwi'];

const citrus = fruits.slice(2, 4); 

console.log(citrus); // ['Mango', 'Orange']
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange', 'Kiwi'] (Unchanged)`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>splice() Example:</h3>
                <div className="code-block bad">
                    <pre>{`const tools = ['Hammer', 'Screwdriver', 'Drill'];

// At index 1, remove 1 item, and add 'Saw'
const removed = tools.splice(1, 1, 'Saw');

console.log(tools);   // ['Hammer', 'Saw', 'Drill'] (Modified!)
console.log(removed); // ['Screwdriver'] (Returns the deleted items)`}</pre>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>slice()</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>splice()</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Mutation</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Does not change original array</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Changes the original array</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Return Value</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>A new array containing the extracted elements</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>An array containing the deleted elements</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Arguments</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>(start, end)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>(start, deleteCount, itemsToAdd)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Core Purpose</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>To extract or copy a part of an array</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>To add, remove, or replace items</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Why this matters for a React Developer:</h3>
                <p style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid #ef4444',
                    lineHeight: '1.7'
                }}>
                    ⚠️ In React, you should almost always <strong>avoid splice()</strong> when updating state because React relies on
                    immutability to detect changes. If you use <code>splice()</code> on a state array, you are mutating the data directly,
                    and your component might not re-render.
                </p>
                <p style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid #22c55e',
                    marginTop: '1rem',
                    lineHeight: '1.7'
                }}>
                    ✅ Instead, React developers usually use <code>slice()</code> (to copy) or <code>filter()</code> (to remove items)
                    to ensure a brand-new array is created.
                </p>
            </section>

            <section className="example-section">
                <h3>React Best Practice Examples:</h3>

                <div className="comparison-container">
                    <div className="code-block bad">
                        <h4>❌ Wrong (Mutates state):</h4>
                        <pre>{`// Bad: Direct mutation
const [items, setItems] = useState([1, 2, 3]);

const handleRemove = (index) => {
  items.splice(index, 1); // Mutates!
  setItems(items); // Won't trigger re-render
};`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>✅ Correct (Immutable):</h4>
                        <pre>{`// Good: Create new array
const [items, setItems] = useState([1, 2, 3]);

const handleRemove = (index) => {
  const newItems = items.filter((_, i) => i !== index);
  setItems(newItems); // Creates new array
};`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with slice() and splice() to see the difference:</p>
                <JsPlayground
                    title="Slice vs Splice Playground"
                    initialCode={`// Original arrays for testing
const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Kiwi'];
const tools = ['Hammer', 'Screwdriver', 'Drill', 'Wrench'];

// 1. SLICE - Non-mutating (safe for React)
console.log("=== SLICE ===");
console.log("Original:", fruits);

const sliced = fruits.slice(1, 3);
console.log("Sliced (1, 3):", sliced);
console.log("Original after slice:", fruits); // Unchanged!

// Negative indices work too
const lastTwo = fruits.slice(-2);
console.log("Last two items:", lastTwo);

// 2. SPLICE - Mutating (dangerous for React)
console.log("\\n=== SPLICE ===");
console.log("Original tools:", tools);

// Remove 1 item at index 1
const removed = tools.splice(1, 1);
console.log("Removed:", removed);
console.log("Tools after splice:", tools); // Modified!

// 3. Common Splice Use Cases
console.log("\\n=== SPLICE USE CASES ===");

// A. Add items without removing
const numbers = [1, 2, 5, 6];
console.log("Before:", numbers);
numbers.splice(2, 0, 3, 4); // At index 2, remove 0, add 3 and 4
console.log("After insert:", numbers);

// B. Replace items
const colors = ['red', 'green', 'blue'];
console.log("\\nBefore:", colors);
colors.splice(1, 1, 'yellow', 'purple'); // Replace 'green'
console.log("After replace:", colors);

// 4. React-Safe Alternatives
console.log("\\n=== REACT-SAFE PATTERNS ===");

const state = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
console.log("Original state:", state);

// Remove item at index 2 (immutably)
const newState = state.filter((_, i) => i !== 2);
console.log("After remove (filter):", newState);
console.log("Original state unchanged:", state);

// Add item at index 2 (immutably using spread + slice)
const inserted = [
  ...state.slice(0, 2),
  'New Item',
  ...state.slice(2)
];
console.log("After insert (spread):", inserted);

// 5. Performance tip
console.log("\\n=== COPYING ARRAYS ===");
const original = [1, 2, 3, 4, 5];

// Three ways to copy
const copy1 = original.slice();
const copy2 = [...original];
const copy3 = Array.from(original);

console.log("All create new arrays:", copy1, copy2, copy3);
console.log("Are they the same reference?", copy1 === original); // false`}
                />
            </section>
        </div>
    );
};

export default SliceVsSplice;
