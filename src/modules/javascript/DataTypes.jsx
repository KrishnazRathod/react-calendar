import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const DataTypes = () => {
    return (
        <div className="module-container">
            <h2>Data Types in JavaScript</h2>
            <p className="intro">
                JavaScript has <strong>8 data types</strong>: 7 primitive types and 1 reference type (Object).
                <br /><br />
                Understanding data types is fundamental because it affects how values are stored, compared, and passed around in your code.
            </p>

            <section className="example-section">
                <h3>The 7 Primitive Types</h3>
                <p>
                    Primitive types are <strong>immutable</strong> (cannot be changed) and are stored directly in the variable.
                </p>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. String</h4>
                        <p>Text data enclosed in quotes.</p>
                        <div className="code-snippet">
                            {`let name = "Krishna";
let city = 'Indore';
let msg = \`Hello \${name}\`;`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Number</h4>
                        <p>Integers and floating-point numbers.</p>
                        <div className="code-snippet">
                            {`let age = 25;
let price = 99.99;
let infinity = Infinity;
let notANum = NaN;`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Boolean</h4>
                        <p>True or false values.</p>
                        <div className="code-snippet">
                            {`let isActive = true;
let isAdmin = false;`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Undefined</h4>
                        <p>Variable declared but not assigned.</p>
                        <div className="code-snippet">
                            {`let user;
console.log(user); // undefined`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>5. Null</h4>
                        <p>Intentional absence of value.</p>
                        <div className="code-snippet">
                            {`let data = null;`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>6. Symbol (ES6)</h4>
                        <p>Unique identifier.</p>
                        <div className="code-snippet">
                            {`let id = Symbol('id');
let id2 = Symbol('id');
// id !== id2 (always unique)`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>7. BigInt (ES2020)</h4>
                        <p>Arbitrarily large integers.</p>
                        <div className="code-snippet">
                            {`let big = 123456789012345678901n;
let huge = BigInt("999999999999");`}
                        </div>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>The Reference Type: Object</h3>
                <p>
                    Objects are <strong>mutable</strong> and store references (memory addresses) rather than the actual value.
                </p>

                <div className="code-block">
                    <pre>{`// Object types include:
const obj = { name: 'Krishna', age: 25 };        // Object
const arr = [1, 2, 3];                            // Array
const func = function() {};                       // Function
const date = new Date();                          // Date
const regex = /pattern/;                          // RegExp
const map = new Map();                            // Map
const set = new Set();                            // Set`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Primitive vs Reference Comparison</h3>

                <div className="comparison-container">
                    <div className="code-block">
                        <h4>Primitives (Value)</h4>
                        <pre>{`let a = 10;
let b = a; // Copy value
b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20

// Comparison
let x = "hello";
let y = "hello";
console.log(x === y); // true`}</pre>
                    </div>

                    <div className="code-block">
                        <h4>Objects (Reference)</h4>
                        <pre>{`let obj1 = { count: 10 };
let obj2 = obj1; // Copy reference
obj2.count = 20;

console.log(obj1.count); // 20 (changed!)
console.log(obj2.count); // 20

// Comparison
let a = { name: 'Krishna' };
let b = { name: 'Krishna' };
console.log(a === b); // false`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Type Checking</h3>

                <div className="code-block">
                    <pre>{`// Using typeof
console.log(typeof "text");         // "string"
console.log(typeof 42);              // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" ⚠️ (bug!)
console.log(typeof Symbol());        // "symbol"
console.log(typeof 123n);            // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object"
console.log(typeof function() {});   // "function"

// Better type checking for specific types
Array.isArray([]);                   // true
Array.isArray({});                   // false

value instanceof Array;              // true for arrays
value instanceof Object;             // true for objects

Object.prototype.toString.call([]);  // "[object Array]"
Object.prototype.toString.call({});  // "[object Object]"`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary Table</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Category</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>typeof</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>String</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"string"</code></td>
                                <td style={{ padding: '1rem' }}><code>"hello"</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>Number</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"number"</code></td>
                                <td style={{ padding: '1rem' }}><code>42</code>, <code>3.14</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>Boolean</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"boolean"</code></td>
                                <td style={{ padding: '1rem' }}><code>true</code>, <code>false</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>Undefined</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"undefined"</code></td>
                                <td style={{ padding: '1rem' }}><code>undefined</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>Null</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"object"</code> ⚠️</td>
                                <td style={{ padding: '1rem' }}><code>null</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>Symbol</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"symbol"</code></td>
                                <td style={{ padding: '1rem' }}><code>Symbol()</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><strong>BigInt</strong></td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Primitive</td>
                                <td style={{ padding: '1rem' }}><code>"bigint"</code></td>
                                <td style={{ padding: '1rem' }}><code>123n</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}><strong>Object</strong></td>
                                <td style={{ padding: '1rem', color: '#fbbf24' }}>Reference</td>
                                <td style={{ padding: '1rem' }}><code>"object"</code></td>
                                <td style={{ padding: '1rem' }}><code>{'{}'}</code>, <code>[]</code>, <code>function</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with all data types:</p>
                <JsPlayground
                    title="Data Types Playground"
                    initialCode={`// === ALL 8 DATA TYPES ===
console.log("=== PRIMITIVE TYPES ===\\n");

// 1. String
const name = "Krishna";
const city = 'Indore';
const greeting = \`Hello, \${name}\`;
console.log("String:", name, typeof name);

// 2. Number
const age = 25;
const price = 99.99;
const infinity = Infinity;
const notANumber = NaN;
console.log("Number:", age, typeof age);
console.log("NaN is number:", typeof NaN);

// 3. Boolean
const isActive = true;
const isAdmin = false;
console.log("Boolean:", isActive, typeof isActive);

// 4. Undefined
let user;
console.log("Undefined:", user, typeof user);

// 5. Null
const data = null;
console.log("Null:", data, typeof data); // "object" - bug!

// 6. Symbol
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log("Symbol unique:", id1 === id2); // false
console.log("Symbol typeof:", typeof id1);

// 7. BigInt
const bigNumber = 9007199254740991n;
const huge = BigInt("999999999999999999");
console.log("BigInt:", bigNumber, typeof bigNumber);

console.log("\\n=== REFERENCE TYPE ===\\n");

// 8. Object (and variations)
const obj = { name: 'Krishna', age: 25 };
const arr = [1, 2, 3];
const func = function() { return "hello"; };
const date = new Date();

console.log("Object:", typeof obj);
console.log("Array:", typeof arr); // "object"
console.log("Function:", typeof func); // "function"
console.log("Date:", typeof date); // "object"

// Better type checking
console.log("\\n=== BETTER TYPE CHECKING ===\\n");
console.log("Array.isArray(arr):", Array.isArray(arr));
console.log("Array.isArray(obj):", Array.isArray(obj));

// === PRIMITIVE VS REFERENCE ===
console.log("\\n=== PRIMITIVE (VALUE) ===");
let a = 10;
let b = a; // Copy value
b = 20;
console.log("a:", a, "b:", b); // a unchanged

console.log("\\n=== REFERENCE (MEMORY) ===");
let obj1 = { count: 10 };
let obj2 = obj1; // Copy reference
obj2.count = 20;
console.log("obj1:", obj1.count, "obj2:", obj2.count); // Both changed!

// Creating a true copy
const obj3 = { ...obj1 }; // Spread operator
obj3.count = 30;
console.log("obj1:", obj1.count, "obj3:", obj3.count); // obj1 unchanged

// === TYPE CONVERSION ===
console.log("\\n=== TYPE CONVERSION ===");
console.log("'5' + 5:", '5' + 5);        // "55" (string concatenation)
console.log("'5' - 5:", '5' - 5);        // 0 (number subtraction)
console.log("true + 1:", true + 1);      // 2 (true = 1)
console.log("'10' * '2':", '10' * '2');  // 20 (both converted to numbers)

// Manual conversion
console.log("Number('42'):", Number('42'));
console.log("String(42):", String(42));
console.log("Boolean(0):", Boolean(0));  // false
console.log("Boolean(1):", Boolean(1));  // true`}
                />
            </section>
        </div>
    );
};

export default DataTypes;
