import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const LetVarConst = () => {
    return (
        <div className="module-container">
            <h2>Let, Var & Const</h2>
            <p className="intro">
                In modern JavaScript, the choice between <code>var</code>, <code>let</code>, and <code>const</code> boils
                down to how you want to manage scope and mutability.
                <br /><br />
                While <code>var</code> was the only way to declare variables for years, ES6 (2015) introduced <code>let</code> and <code>const</code> to
                fix several common "gotchas" that led to bugs.
            </p>

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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>var</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>let</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>const</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Scope</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Function Scope</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Block Scope</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Block Scope</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Hoisting</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Hoisted & Initialized (undefined)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Hoisted but Uninitialized (TDZ)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Hoisted but Uninitialized (TDZ)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Redeclaration</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Allowed</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>❌ Not Allowed</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>❌ Not Allowed</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Reassignment</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Allowed</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>✅ Allowed</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>❌ Not Allowed</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Initial Value</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Optional</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Optional</td>
                                <td style={{ padding: '1rem', color: '#fbbf24' }}>⚠️ Required</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="card-grid">
                <div className="card">
                    <h3>1. Scope: Where can you use it?</h3>
                    <p>
                        <strong>var (Function Scope):</strong> If you declare a <code>var</code> inside a loop or an <code>if</code> block,
                        it "leaks" out and is available anywhere inside the enclosing function.
                    </p>
                    <p>
                        <strong>let & const (Block Scope):</strong> These are strictly confined to the curly braces <code>{'{}'}</code> they
                        are declared in. This makes code much more predictable.
                    </p>
                </div>

                <div className="card">
                    <h3>2. Mutability: Can the value change?</h3>
                    <p>
                        <strong>let:</strong> Use this for variables you know will change, like a counter in a loop or a toggle.
                    </p>
                    <p>
                        <strong>const:</strong> Use this for everything else. It creates a "constant reference."
                    </p>
                    <p style={{
                        background: 'rgba(251, 191, 36, 0.1)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        marginTop: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        <strong>Note:</strong> While you can't reassign a <code>const</code> object, you can change the properties inside that object.
                    </p>
                </div>
            </div>

            <section className="example-section">
                <h3>Scope Example:</h3>
                <div className="code-block">
                    <pre>{`if (true) {
  var leak = "I am everywhere";
  let stay = "I stay here";
}
console.log(leak); // Output: "I am everywhere"
console.log(stay); // ReferenceError: stay is not defined`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Mutability Example:</h3>
                <div className="code-block">
                    <pre>{`const user = { name: "Krishna" };
user.name = "Rathod"; // ✅ This works!
user = { name: "New" }; // ❌ TypeError: Assignment to constant variable.`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>3. Best Practices (The "Rule of Thumb")</h3>
                <p>In professional development, the standard workflow is:</p>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Default to const</h4>
                        <p>
                            Use it for about 80% of your variables. It tells other developers "this value shouldn't change."
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Use let only when necessary</h4>
                        <p>
                            Use it when you explicitly need to reassign a value (like in for loops).
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Avoid var</h4>
                        <p>
                            Unless you are maintaining legacy code from before 2015, there is almost no reason to use <code>var</code> in modern projects.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with let, var, and const behavior in this live code editor:</p>
                <JsPlayground
                    title="Let, Var & Const Playground"
                    initialCode={`// 1. Scope Comparison
console.log("=== SCOPE TEST ===");
if (true) {
  var varVariable = "I leak out!";
  let letVariable = "I stay inside";
  const constVariable = "I stay inside too";
}
console.log(varVariable); // Works
// console.log(letVariable); // ReferenceError
// console.log(constVariable); // ReferenceError

// 2. Reassignment
console.log("\\n=== REASSIGNMENT TEST ===");
let counter = 0;
counter = 1; // ✅ Works
console.log("let counter:", counter);

const PI = 3.14159;
// PI = 3.14; // ❌ TypeError

// 3. Object Mutation with const
console.log("\\n=== CONST OBJECT TEST ===");
const person = { name: "Krishna" };
person.name = "Rathod"; // ✅ This works!
console.log(person);
// person = {}; // ❌ TypeError

// 4. Best Practice Example
console.log("\\n=== BEST PRACTICE ===");
const config = { apiUrl: "https://api.example.com" };
let requestCount = 0;

for (let i = 0; i < 3; i++) {
  requestCount++;
  console.log(\`Request \${i + 1} to \${config.apiUrl}\`);
}
console.log("Total requests:", requestCount);`}
                />
            </section>
        </div>
    );
};

export default LetVarConst;
