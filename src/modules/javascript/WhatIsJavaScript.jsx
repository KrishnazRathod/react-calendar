import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const WhatIsJavaScript = () => {
    return (
        <div className="module-container">
            <h2>What is JavaScript?</h2>
            <p className="intro">
                JavaScript is a <strong>high-level, interpreted programming language</strong> that is one of the core technologies
                of the World Wide Web, alongside HTML and CSS.
                <br /><br />
                As a full-stack developer, JavaScript is your primary language for building both frontend (React) and backend
                (Node.js) applications in the MERN stack.
            </p>

            <section className="example-section">
                <h3>Key Characteristics</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. High-Level Language</h4>
                        <p>
                            Provides abstractions that hide complex low-level details like memory management. You don't need to
                            manually allocate or deallocate memory.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Interpreted</h4>
                        <p>
                            Code is executed line-by-line by a JavaScript engine (V8 in Chrome/Node.js, SpiderMonkey in Firefox).
                            No compilation step needed.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Dynamically Typed</h4>
                        <p>
                            Variables don't have fixed types. The same variable can hold a string, then a number, then an object.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Single-Threaded</h4>
                        <p>
                            JavaScript executes one task at a time, but uses an event loop and callbacks for asynchronous operations.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>5. Multi-Paradigm</h4>
                        <p>
                            Supports procedural, object-oriented (prototypal), and functional programming styles.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>6. First-Class Functions</h4>
                        <p>
                            Functions are treated as values - they can be assigned to variables, passed as arguments, and returned
                            from other functions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Where JavaScript Runs</h3>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>🌐 Browser (Frontend)</h4>
                        <ul className="feature-list">
                            <li>Manipulate DOM (HTML elements)</li>
                            <li>Handle user interactions</li>
                            <li>Make API calls (fetch, axios)</li>
                            <li>Create animations</li>
                            <li>Frameworks: React, Vue, Angular</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>⚙️ Server (Backend)</h4>
                        <ul className="feature-list">
                            <li>Node.js runtime environment</li>
                            <li>Build REST APIs</li>
                            <li>Database operations</li>
                            <li>File system access</li>
                            <li>Frameworks: Express, Nest.js</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>📱 Mobile (Hybrid)</h4>
                        <ul className="feature-list">
                            <li>React Native</li>
                            <li>Ionic</li>
                            <li>NativeScript</li>
                            <li>Cross-platform development</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>🖥️ Desktop</h4>
                        <ul className="feature-list">
                            <li>Electron (VS Code, Slack)</li>
                            <li>Tauri</li>
                            <li>Build cross-platform apps</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>JavaScript Engine & Runtime</h3>
                <div className="code-block">
                    <pre>{`// JavaScript Engine Components:

1. Call Stack - Executes code (LIFO)
2. Heap - Memory allocation for objects
3. Event Loop - Handles async operations
4. Callback Queue - Queues async callbacks

// Popular Engines:
- V8: Chrome, Node.js, Edge
- SpiderMonkey: Firefox
- JavaScriptCore: Safari`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>ECMAScript Versions</h3>
                <p>
                    JavaScript is standardized as ECMAScript (ES). Major versions include:
                </p>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Year</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Version</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Key Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>2015</td>
                                <td style={{ padding: '1rem' }}><strong>ES6 (ES2015)</strong></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>let/const, arrow functions, classes, promises, modules</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>2016</td>
                                <td style={{ padding: '1rem' }}>ES7</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Array.includes(), ** (exponentiation)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>2017</td>
                                <td style={{ padding: '1rem' }}>ES8</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>async/await, Object.entries(), Object.values()</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>2020</td>
                                <td style={{ padding: '1rem' }}>ES11</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Optional chaining (?.), Nullish coalescing (??), BigInt</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>2022</td>
                                <td style={{ padding: '1rem' }}>ES13</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Top-level await, Array.at()</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Why JavaScript is Popular</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Universal Language</h4>
                        <p>Only language that runs natively in browsers. Full-stack development with one language.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Huge Ecosystem</h4>
                        <p>npm has over 2 million packages. Massive community and resources.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Easy to Learn</h4>
                        <p>Beginner-friendly syntax. See results immediately in the browser console.</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ In High Demand</h4>
                        <p>Most popular language for web development. Required skill for frontend and increasingly backend.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experience JavaScript's key features:</p>
                <JsPlayground
                    title="JavaScript Features Demo"
                    initialCode={`// 1. Dynamically Typed
console.log("=== DYNAMIC TYPING ===");
let value = 42;
console.log("Number:", value, typeof value);

value = "Now I'm a string";
console.log("String:", value, typeof value);

value = { name: "Krishna" };
console.log("Object:", value, typeof value);

// 2. First-Class Functions
console.log("\\n=== FIRST-CLASS FUNCTIONS ===");
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

function executeFunction(fn, arg) {
  return fn(arg);
}

console.log(executeFunction(greet, "Krishna"));

// 3. Multi-Paradigm
console.log("\\n=== MULTI-PARADIGM ===");

// Procedural
function addProcedural(a, b) {
  return a + b;
}

// OOP (Object-Oriented)
class Calculator {
  add(a, b) {
    return a + b;
  }
}

// Functional
const addFunctional = (a, b) => a + b;

console.log("Procedural:", addProcedural(2, 3));
console.log("OOP:", new Calculator().add(2, 3));
console.log("Functional:", addFunctional(2, 3));

// 4. Async Programming
console.log("\\n=== ASYNC PROGRAMMING ===");
console.log("Start");

setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);

console.log("End (but runs before timeout)");

// 5. Modern ES6+ Features
console.log("\\n=== ES6+ FEATURES ===");

// Destructuring
const user = { name: "Krishna", age: 25, city: "Indore" };
const { name, age } = user;
console.log("Destructured:", name, age);

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread:", arr2);

// Template literals
console.log(\`My name is \${name} and I'm \${age} years old\`);

// Arrow functions
const multiply = (x, y) => x * y;
console.log("Arrow function:", multiply(5, 3));`}
                />
            </section>
        </div>
    );
};

export default WhatIsJavaScript;
