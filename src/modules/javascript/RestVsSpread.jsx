import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const RestVsSpread = () => {
    return (
        <div className="module-container">
            <h2>Rest vs Spread Operator</h2>
            <p className="intro">
                Both rest and spread operators use the same syntax (<code>...</code>), but they serve opposite purposes.
                Understanding when to use which is crucial for writing modern JavaScript.
                <br /><br />
                <strong>Rest</strong> collects multiple elements into an array, while <strong>Spread</strong> expands an array into individual elements.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Rest Operator (...)</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>"Collect" multiple elements</h4>
                    <p>
                        The <strong>rest operator</strong> collects all remaining elements into an array.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Purpose:</strong> Collect/gather multiple values</li>
                        <li><strong>Used in:</strong> Function parameters, destructuring</li>
                        <li><strong>Direction:</strong> Many → One (Array)</li>
                        <li><strong>Position:</strong> Must be last parameter</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Spread Operator (...)</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>"Expand" elements</h4>
                    <p>
                        The <strong>spread operator</strong> expands an iterable into individual elements.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Purpose:</strong> Expand/spread values</li>
                        <li><strong>Used in:</strong> Function calls, arrays, objects</li>
                        <li><strong>Direction:</strong> One (Array) → Many</li>
                        <li><strong>Position:</strong> Can be anywhere</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Rest Operator Examples:</h3>

                <h4>1. In Function Parameters:</h4>
                <div className="code-block">
                    <pre>{`// Collect all arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(5, 10));      // 15`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. In Array Destructuring:</h4>
                <div className="code-block">
                    <pre>{`const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. In Object Destructuring:</h4>
                <div className="code-block">
                    <pre>{`const user = { name: 'Krishna', age: 25, city: 'Indore', role: 'Developer' };

const { name, age, ...otherInfo } = user;

console.log(name);      // 'Krishna'
console.log(age);       // 25
console.log(otherInfo); // { city: 'Indore', role: 'Developer' }`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Spread Operator Examples:</h3>

                <h4>1. In Function Calls:</h4>
                <div className="code-block">
                    <pre>{`const numbers = [1, 2, 3];

// Spread array into individual arguments
console.log(Math.max(...numbers)); // 3

// Without spread (doesn't work)
console.log(Math.max(numbers)); // NaN`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. Copying Arrays (Immutable):</h4>
                <div className="code-block good">
                    <pre>{`const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] (unchanged)
console.log(copy);     // [1, 2, 3, 4]`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. Merging Arrays:</h4>
                <div className="code-block">
                    <pre>{`const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>4. Copying/Merging Objects:</h4>
                <div className="code-block good">
                    <pre>{`const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { lang: 'hi', fontSize: 14 };

const config = { ...defaults, ...userPrefs };

console.log(config); 
// { theme: 'dark', lang: 'hi', fontSize: 14 }
// Note: userPrefs.lang overwrites defaults.lang`}</pre>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Rest (...rest)</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Spread (...spread)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Purpose</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Collect multiple values into ONE array</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Expand ONE array into individual values</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Direction</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Many → One</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>One → Many</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Used in</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Function parameters, destructuring</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Function calls, array/object literals</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Example</td>
                                <td style={{ padding: '1rem' }}><code>(...args) =&gt; { }</code></td>
                                <td style={{ padding: '1rem' }}><code>[...arr1, ...arr2]</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with rest and spread operators:</p>
                <JsPlayground
                    title="Rest & Spread Playground"
                    initialCode={`// === REST OPERATOR ===
console.log("=== REST (Collecting) ===");

// 1. Function parameters
function logAll(...args) {
  console.log("Received:", args);
  console.log("Count:", args.length);
}

logAll(1, 2, 3, 4, 5);
logAll('a', 'b');

// 2. Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...remaining] = numbers;
console.log("First:", first);
console.log("Remaining:", remaining);

// 3. Object destructuring
const user = {
  name: 'Krishna',
  age: 25,
  city: 'Indore',
  country: 'India',
  role: 'Developer'
};
const { name, age, ...address } = user;
console.log("Name & Age:", name, age);
console.log("Address info:", address);

// === SPREAD OPERATOR ===
console.log("\\n=== SPREAD (Expanding) ===");

// 1. Function calls
const nums = [5, 2, 8, 1, 9];
console.log("Max:", Math.max(...nums));
console.log("Min:", Math.min(...nums));

// 2. Copying arrays (immutable)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("Original:", original);
console.log("Copy:", copy);

// 3. Merging arrays
const fruits = ['apple', 'banana'];
const veggies = ['carrot', 'potato'];
const food = [...fruits, 'rice', ...veggies];
console.log("Combined:", food);

// 4. Copying objects
const defaults = { theme: 'dark', fontSize: 14 };
const userPrefs = { fontSize: 16, lang: 'hi' };
const config = { ...defaults, ...userPrefs };
console.log("Config:", config);

// 5. Real-world: React state update
console.log("\\n=== REACT PATTERN ===");
const state = { count: 0, user: 'Krishna' };
// Immutable update
const newState = { ...state, count: state.count + 1 };
console.log("Old state:", state);
console.log("New state:", newState);

// 6. Combining both!
function createUser(name, ...interests) {
  return {
    name,
    interests: [...interests, 'coding'] // spread in array
  };
}
console.log(createUser('Krishna', 'music', 'reading'));`}
                />
            </section>
        </div>
    );
};

export default RestVsSpread;
