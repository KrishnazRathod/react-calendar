import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const HoistingTDZ = () => {
    return (
        <div className="module-container">
            <h2>Hoisting and Temporal Dead Zone (TDZ)</h2>
            <p className="intro">
                In JavaScript, understanding how variables and functions are initialized is crucial for writing bug-free code.
                These two concepts—<strong>Hoisting</strong> and <strong>TDZ</strong>—describe the behavior of the JavaScript
                engine during the execution process.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. What is Hoisting?</h3>
                    <p>
                        <strong>Hoisting</strong> is a behavior where variable and function declarations are moved to the top
                        of their containing scope (global or function scope) during the compilation phase, before the code is executed.
                    </p>
                    <p style={{
                        background: 'rgba(251, 191, 36, 0.1)',
                        padding: '1rem',
                        borderRadius: '8px',
                        borderLeft: '3px solid #fbbf24',
                        marginTop: '1rem'
                    }}>
                        ⚠️ <strong>Important:</strong> Only the <em>declarations</em> are hoisted, not the <em>initializations</em>.
                    </p>
                </div>

                <div className="card">
                    <h3>2. Temporal Dead Zone (TDZ)</h3>
                    <p>
                        The <strong>Temporal Dead Zone</strong> is the period between the start of a block's scope and the moment
                        a variable is declared with <code>let</code> or <code>const</code>.
                    </p>
                    <p>
                        While <code>let</code> and <code>const</code> variables are technically "hoisted",
                        they are not initialized. Accessing them before declaration throws a <code>ReferenceError</code>.
                    </p>
                </div>
            </div>

            <section className="example-section">
                <h3>How it works for different declarations:</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Hoisted?</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Initial Value</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Behavior</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>var</code></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Yes</td>
                                <td style={{ padding: '1rem' }}><code>undefined</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Can be accessed before declaration (returns undefined)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>function</code></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Yes</td>
                                <td style={{ padding: '1rem' }}>The actual function</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Can be called before the line where it's defined</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>let / const</code></td>
                                <td style={{ padding: '1rem', color: '#fbbf24' }}>⚡ Yes (Technically)</td>
                                <td style={{ padding: '1rem' }}>Uninitialized</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Accessible only after the declaration line</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Example of Function Hoisting:</h3>
                <div className="code-block">
                    <pre>{`greet(); // Output: "Hello!"

function greet() {
  console.log("Hello!");
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example of var Hoisting:</h3>
                <div className="code-block">
                    <pre>{`console.log(name); // Output: undefined
var name = "Krishna";`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example of TDZ:</h3>
                <div className="code-block bad">
                    <pre>{`{
  // --- TDZ starts for 'age' ---
  console.log(age); // ReferenceError: Cannot access 'age' before initialization
  
  let age = 25; // --- TDZ ends ---
  console.log(age); // Output: 25
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Why does TDZ exist?</h3>
                <p>
                    The TDZ was introduced in ES6 to make code more predictable and to help developers catch bugs.
                    It ensures that you cannot use a variable before it is properly defined.
                </p>
            </section>

            <section className="example-section">
                <h3>Summary of Differences</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>var variables</h4>
                        <p>
                            Are hoisted and initialized as <code>undefined</code>. They do not have a TDZ.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>let and const variables</h4>
                        <p>
                            Are hoisted but remain uninitialized. They live in the TDZ from the start of the block until the code reaches their declaration.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Function declarations</h4>
                        <p>
                            Are fully hoisted, meaning both the name and the function body are available immediately.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with hoisting and TDZ behavior in this live code editor:</p>
                <JsPlayground
                    title="Hoisting & TDZ Playground"
                    initialCode={`// Try uncommenting different lines to see the behavior

// Example 1: var hoisting
console.log("var example:");
console.log(x); // undefined (hoisted)
var x = 10;
console.log(x); // 10

// Example 2: let and TDZ
console.log("\\nlet example:");
// console.log(y); // ReferenceError (in TDZ)
let y = 20;
console.log(y); // 20

// Example 3: Function hoisting
console.log("\\nFunction hoisting:");
sayHello(); // Works!
function sayHello() {
  console.log("Hello from hoisted function!");
}

// Example 4: const TDZ
console.log("\\nconst example:");
// console.log(z); // ReferenceError (in TDZ)
const z = 30;
console.log(z); // 30`}
                />
            </section>
        </div>
    );
};

export default HoistingTDZ;
