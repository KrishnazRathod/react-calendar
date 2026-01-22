import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const LoopComparison = () => {
    return (
        <div className="module-container">
            <h2>for...of vs for...in vs forEach</h2>
            <p className="intro">
                JavaScript offers multiple ways to loop through arrays and objects. Each method has its own use case,
                and understanding when to use which can make your code cleaner and more efficient.
                <br /><br />
                As a MERN stack developer, you'll encounter all three regularly when processing data from MongoDB or
                rendering lists in React.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. for...of Loop</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Iterates over VALUES</h4>
                    <p>
                        The <code>for...of</code> loop iterates over the <strong>values</strong> of iterable objects
                        (arrays, strings, maps, sets, etc.).
                    </p>
                    <ul className="feature-list">
                        <li><strong>Use with:</strong> Arrays, Strings, Maps, Sets</li>
                        <li><strong>Returns:</strong> The actual values</li>
                        <li><strong>Can use:</strong> break, continue</li>
                        <li><strong>Best for:</strong> When you need the values and want to use break/continue</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>2. for...in Loop</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Iterates over KEYS/PROPERTIES</h4>
                    <p>
                        The <code>for...in</code> loop iterates over the <strong>enumerable properties</strong> (keys) of an object.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Use with:</strong> Objects (not recommended for arrays)</li>
                        <li><strong>Returns:</strong> Property names (keys)</li>
                        <li><strong>Can use:</strong> break, continue</li>
                        <li><strong>Best for:</strong> Looping through object properties</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>3. forEach() Method</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>Executes a function for each element</h4>
                    <p>
                        The <code>forEach()</code> method executes a provided function once for each array element.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Use with:</strong> Arrays only</li>
                        <li><strong>Returns:</strong> undefined (can't return a value)</li>
                        <li><strong>Cannot use:</strong> break or continue</li>
                        <li><strong>Best for:</strong> Simple iterations where you don't need to break early</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Code Examples:</h3>

                <h4>Using for...of (for VALUES):</h4>
                <div className="code-block good">
                    <pre>{`const fruits = ['Apple', 'Banana', 'Mango'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Banana, Mango

// Can use break
for (const fruit of fruits) {
  if (fruit === 'Banana') break;
  console.log(fruit);
}
// Output: Apple`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>Using for...in (for KEYS/INDEX):</h4>
                <div className="code-block">
                    <pre>{`const user = { name: 'Krishna', age: 25, city: 'Indore' };

for (const key in user) {
  console.log(\`\${key}: \${user[key]}\`);
}
// Output:
// name: Krishna
// age: 25
// city: Indore

// ⚠️ Not recommended for arrays (but it works)
const arr = ['a', 'b', 'c'];
for (const index in arr) {
  console.log(index); // Outputs: 0, 1, 2 (indices, not values!)
}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>Using forEach():</h4>
                <div className="code-block">
                    <pre>{`const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});
// Output:
// Index 0: 1
// Index 1: 2
// ...

// ❌ Cannot use break or return to exit early
numbers.forEach((num) => {
  if (num === 3) return; // Only skips current iteration, not the loop!
  console.log(num);
});
// Still outputs: 1, 2, 4, 5`}</pre>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>for...of</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>for...in</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>forEach()</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Iterates over</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Values</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Keys/Properties</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Array elements</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Works with</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Iterables (Array, String, Map, Set)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Objects (all enumerable properties)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Arrays only</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Can use break/continue</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Yes</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Yes</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>❌ No</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Return value</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>N/A</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>N/A</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>undefined</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Best Use Case</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Looping array values with control flow</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Looping object properties</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Simple array iterations</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Which one should you use?</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Use for...of when:</h4>
                        <ul className="feature-list">
                            <li>You need to iterate over array values</li>
                            <li>You need to use break or continue</li>
                            <li>You're working with strings, Maps, or Sets</li>
                            <li>You want cleaner syntax than traditional for loop</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4 style={{ color: '#fbbf24' }}>⚠️ Use for...in when:</h4>
                        <ul className="feature-list">
                            <li>You need to loop through object properties</li>
                            <li>You're debugging and want to see all keys</li>
                            <li><strong>Avoid for arrays</strong> - use for...of instead</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>💡 Use forEach when:</h4>
                        <ul className="feature-list">
                            <li>You're doing simple array iteration</li>
                            <li>You don't need to break early</li>
                            <li>You want access to index and array</li>
                            <li>Functional programming style is preferred</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with all three loop types:</p>
                <JsPlayground
                    title="Loop Comparison Playground"
                    initialCode={`// Sample data
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
const person = { name: 'Krishna', age: 25, city: 'Indore', role: 'Developer' };

// 1. for...of - Iterates over VALUES
console.log("=== FOR...OF (Values) ===");
for (const fruit of fruits) {
  console.log(fruit);
}

// With break
console.log("\\nWith break:");
for (const fruit of fruits) {
  if (fruit === 'Mango') break;
  console.log(fruit);
}

// 2. for...in - Iterates over KEYS
console.log("\\n=== FOR...IN (Keys) ===");
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Why NOT to use for...in with arrays
console.log("\\n⚠️ for...in with array (not recommended):");
for (const index in fruits) {
  console.log(\`Index: \${index}, Type: \${typeof index}\`); // index is a string!
}

// 3. forEach - Array method
console.log("\\n=== FOREACH ===");
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// forEach cannot break (return only skips iteration)
console.log("\\nforEach with return:");
fruits.forEach((fruit) => {
  if (fruit === 'Mango') return; // Only skips this iteration
  console.log(fruit);
});

// 4. Real-world example: Finding first match
console.log("\\n=== FINDING FIRST MATCH ===");

const users = [
  { id: 1, name: 'Alice', active: false },
  { id: 2, name: 'Bob', active: true },
  { id: 3, name: 'Charlie', active: true }
];

// Using for...of (can break early - efficient!)
console.log("Using for...of:");
for (const user of users) {
  if (user.active) {
    console.log("First active user:", user.name);
    break; // Stops immediately
  }
}

// Using forEach (cannot break - checks all items)
console.log("\\nUsing forEach:");
users.forEach(user => {
  if (user.active) {
    console.log("Active user:", user.name); // Logs all active users
  }
});

// 5. Performance comparison
console.log("\\n=== PERFORMANCE ===");
const large = Array.from({ length: 1000 }, (_, i) => i);

console.time("for...of");
for (const num of large) {
  if (num === 500) break;
}
console.timeEnd("for...of");

console.time("forEach");
large.forEach(num => {
  if (num === 500) return; // Can't actually break
});
console.timeEnd("forEach");`}
                />
            </section>
        </div>
    );
};

export default LoopComparison;
