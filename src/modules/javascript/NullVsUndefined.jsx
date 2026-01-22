import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const NullVsUndefined = () => {
    return (
        <div className="module-container">
            <h2>null vs undefined</h2>
            <p className="intro">
                In JavaScript, both <code>null</code> and <code>undefined</code> represent "absence of value," but they have
                different meanings and use cases.
                <br /><br />
                Understanding the distinction is important for debugging and writing cleaner code.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>undefined</h3>
                    <h4 style={{ color: '#fbbf24', marginTop: '1rem' }}>"Not yet assigned"</h4>
                    <p>
                        <code>undefined</code> means a variable has been declared but <strong>not yet assigned a value</strong>.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Type:</strong> <code>typeof undefined === 'undefined'</code></li>
                        <li><strong>Automatic:</strong> JavaScript assigns it by default</li>
                        <li><strong>Common causes:</strong> Uninitialized variables, missing function parameters, non-existent object properties</li>
                        <li><strong>Intentional use:</strong> Rare (usually let JS handle it)</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>null</h3>
                    <h4 style={{ color: '#ef4444', marginTop: '1rem' }}>"Intentionally empty"</h4>
                    <p>
                        <code>null</code> is an <strong>intentional</strong> absence of value. You explicitly set it to indicate
                        "no value" or "empty."
                    </p>
                    <ul className="feature-list">
                        <li><strong>Type:</strong> <code>typeof null === 'object'</code> (historical bug!)</li>
                        <li><strong>Manual:</strong> You must explicitly assign it</li>
                        <li><strong>Common uses:</strong> Resetting variables, indicating "no object"</li>
                        <li><strong>Intentional use:</strong> Always (you choose to use it)</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>undefined Examples:</h3>
                <div className="code-block">
                    <pre>{`// 1. Declared but not assigned
let name;
console.log(name); // undefined

// 2. Function with no return
function doNothing() {}
console.log(doNothing()); // undefined

// 3. Missing function parameter
function greet(message) {
  console.log(message); // undefined if not passed
}
greet();

// 4. Non-existent object property
const user = { name: 'Krishna' };
console.log(user.age); // undefined

// 5. Array with empty slots
const arr = [1, , 3];
console.log(arr[1]); // undefined`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>null Examples:</h3>
                <div className="code-block">
                    <pre>{`// 1. Explicitly setting to "no value"
let currentUser = null; // No user logged in

// 2. Resetting a variable
let data = fetchData();
data = null; // Clear the data

// 3. API responses
const response = {
  user: null, // User not found
  error: 'Not found'
};

// 4. DOM queries
const element = document.querySelector('#nonexistent');
console.log(element); // null (element doesn't exist)

// 5. Intentional "empty" placeholder
const config = {
  theme: 'dark',
  userId: null // Will be set later
};`}</pre>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>undefined</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>null</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Meaning</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Variable exists but has no value yet</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Intentionally empty/no object</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>typeof</td>
                                <td style={{ padding: '1rem' }}><code>"undefined"</code></td>
                                <td style={{ padding: '1rem' }}><code>"object"</code> (bug!)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Assigned by</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>JavaScript automatically</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Developer explicitly</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Equality (==)</td>
                                <td style={{ padding: '1rem' }}><code>undefined == null</code> → true</td>
                                <td style={{ padding: '1rem' }}><code>null == undefined</code> → true</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Strict Equality (===)</td>
                                <td style={{ padding: '1rem' }}><code>undefined === null</code> → false</td>
                                <td style={{ padding: '1rem' }}><code>null === undefined</code> → false</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>JSON Serialization</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Property is omitted</td>
                                <td style={{ padding: '1rem' }}><code>null</code> is included</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Key Differences in Practice:</h3>

                <h4>1. Type Checking:</h4>
                <div className="code-block">
                    <pre>{`console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" ⚠️

// Better null check
console.log(null === null); // true
console.log(value === null || value === undefined); // Check for both`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. JSON Serialization:</h4>
                <div className="code-block">
                    <pre>{`const obj1 = { name: 'Krishna', age: undefined };
const obj2 = { name: 'Krishna', age: null };

console.log(JSON.stringify(obj1)); // {"name":"Krishna"}
console.log(JSON.stringify(obj2)); // {"name":"Krishna","age":null}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. Optional Chaining & Nullish Coalescing:</h4>
                <div className="code-block good">
                    <pre>{`const user = { name: 'Krishna' };

// Optional chaining (?.)
console.log(user?.address?.city); // undefined (no error)

// Nullish coalescing (??)
const age = user.age ?? 25; // 25 (age is undefined)
const name = user.name ?? 'Guest'; // 'Krishna' (name exists)

// ⚠️ Different from || operator
const count = 0;
console.log(count || 10);  // 10 (0 is falsy)
console.log(count ?? 10);  // 0 (0 is not null/undefined)`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Best Practices:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Use undefined when:</h4>
                        <ul className="feature-list">
                            <li>Let JavaScript handle it (don't explicitly assign)</li>
                            <li>Checking if a variable/property exists</li>
                            <li>Default function parameters</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>✅ Use null when:</h4>
                        <ul className="feature-list">
                            <li>Explicitly setting "no value"</li>
                            <li>Resetting variables</li>
                            <li>API responses for "not found"</li>
                            <li>Placeholder for objects</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with null and undefined:</p>
                <JsPlayground
                    title="null vs undefined Playground"
                    initialCode={`// 1. How they're created
console.log("=== CREATION ===");
let a; // undefined (automatic)
let b = null; // null (manual)
console.log("a:", a);
console.log("b:", b);

// 2. Type checking
console.log("\\n=== typeof ===");
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // "object" - historical bug!

// 3. Equality comparisons
console.log("\\n=== EQUALITY ===");
console.log("undefined == null:", undefined == null);   // true
console.log("undefined === null:", undefined === null); // false
console.log("!undefined:", !undefined); // true (both are falsy)
console.log("!null:", !null);           // true

// 4. Common scenarios
console.log("\\n=== COMMON SCENARIOS ===");

// Uninitialized variable
let name;
console.log("Uninitialized:", name);

// Missing property
const user = { id: 1 };
console.log("Missing property:", user.name);

// Function without return
function noReturn() {}
console.log("No return:", noReturn());

// Explicit null
let data = null;
console.log("Explicit null:", data);

// 5. JSON serialization
console.log("\\n=== JSON ===");
const obj1 = { name: 'Krishna', age: undefined, city: 'Indore' };
const obj2 = { name: 'Krishna', age: null, city: 'Indore' };
console.log("With undefined:", JSON.stringify(obj1));
console.log("With null:", JSON.stringify(obj2));

// 6. Real-world: API response
console.log("\\n=== API PATTERN ===");
function getUserById(id) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  return users.find(u => u.id === id) ?? null;
}

console.log("User 1:", getUserById(1));
console.log("User 999:", getUserById(999)); // null (not found)

// 7. Nullish coalescing
console.log("\\n=== NULLISH COALESCING ===");
const config = {
  port: 0,
  host: null,
  timeout: undefined
};

console.log("Port (||):", config.port || 3000);     // 3000 (0 is falsy)
console.log("Port (??):", config.port ?? 3000);     // 0 (only null/undefined)
console.log("Host:", config.host ?? 'localhost');   // localhost
console.log("Timeout:", config.timeout ?? 5000);    // 5000

// 8. Optional chaining
console.log("\\n=== OPTIONAL CHAINING ===");
const person = {
  name: 'Krishna',
  address: {
    city: 'Indore'
  }
};

console.log("City:", person?.address?.city);
console.log("Country:", person?.address?.country); // undefined (no error)
console.log("Invalid:", person?.contact?.phone);   // undefined (no error)`}
                />
            </section>
        </div>
    );
};

export default NullVsUndefined;
