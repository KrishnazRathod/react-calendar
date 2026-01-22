import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const CallBindApply = () => {
    return (
        <div className="module-container">
            <h2>What is Call, Bind and Apply?</h2>
            <p className="intro">
                In JavaScript, <code>call</code>, <code>apply</code>, and <code>bind</code> are methods used to explicitly
                set the value of the <code>this</code> keyword. Since you are working as a Full Stack Developer, you'll find
                these essential for "borrowing" methods from one object to use in another.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. The call() Method</h3>
                    <p>
                        The <code>call()</code> method invokes a function <strong>immediately</strong>. It takes the <code>this</code> context
                        as the first argument, followed by arguments for the function individually (separated by commas).
                    </p>
                    <p style={{
                        background: 'var(--bg-secondary)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        marginTop: '1rem',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem'
                    }}>
                        <strong>Syntax:</strong> function.call(thisContext, arg1, arg2, ...)
                    </p>
                </div>

                <div className="card">
                    <h3>2. The apply() Method</h3>
                    <p>
                        The <code>apply()</code> method is almost identical to <code>call()</code>, but with one key difference:
                        it takes arguments as an <strong>array</strong>.
                    </p>
                    <p style={{
                        background: 'var(--bg-secondary)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        marginTop: '1rem',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem'
                    }}>
                        <strong>Syntax:</strong> function.apply(thisContext, [argsArray])
                    </p>
                    <p style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        marginTop: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        💡 <strong>Pro Tip:</strong> Apply uses an <strong>A</strong>rray, Call uses <strong>C</strong>ommas.
                    </p>
                </div>

                <div className="card">
                    <h3>3. The bind() Method</h3>
                    <p>
                        Unlike the first two, <code>bind()</code> does <strong>not execute</strong> the function immediately.
                        Instead, it returns a new function with the <code>this</code> context permanently bound to it.
                    </p>
                    <p>
                        This is very useful for event listeners or when you want to call a function later.
                    </p>
                    <p style={{
                        background: 'var(--bg-secondary)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        marginTop: '1rem',
                        fontFamily: 'monospace',
                        fontSize: '0.9rem'
                    }}>
                        <strong>Syntax:</strong> const newFn = function.bind(thisContext, arg1, arg2, ...)
                    </p>
                </div>
            </div>

            <section className="example-section">
                <h3>Example with call():</h3>
                <div className="code-block">
                    <pre>{`function introduce(city, country) {
  console.log(\`Hi, I'm \${this.name} from \${city}, \${country}.\`);
}

const user = { name: "Krishna" };

// We call introduce and tell it that 'this' should refer to 'user'
introduce.call(user, "Indore", "India"); 
// Output: Hi, I'm Krishna from Indore, India.`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example with apply():</h3>
                <div className="code-block">
                    <pre>{`// Using the same function and user from above
introduce.apply(user, ["Indore", "India"]); 
// Output: Hi, I'm Krishna from Indore, India.`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example with bind():</h3>
                <div className="code-block">
                    <pre>{`const userIntro = introduce.bind(user, "Indore", "India");

// You can call it whenever you need it
userIntro(); 
// Output: Hi, I'm Krishna from Indore, India.`}</pre>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Execution</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Argument Format</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Creates New Function?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>call</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Immediate</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>List (Comma-separated)</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>No</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>apply</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Immediate</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Array []</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>No</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>bind</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Delayed</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>List (Comma-separated)</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with call, apply, and bind in this live code editor:</p>
                <JsPlayground
                    title="Call, Bind & Apply Playground"
                    initialCode={`// Define a function and object
function introduce(city, country) {
  console.log(\`Hi, I'm \${this.name} from \${city}, \${country}.\`);
}

const user = { name: "Krishna" };

// 1. Using call()
console.log("=== USING CALL ===");
introduce.call(user, "Indore", "India");

// 2. Using apply()
console.log("\\n=== USING APPLY ===");
introduce.apply(user, ["Indore", "India"]);

// 3. Using bind()
console.log("\\n=== USING BIND ===");
const userIntro = introduce.bind(user, "Indore", "India");
userIntro(); // Can call later!

// 4. Real-world example: Borrowing methods
console.log("\\n=== BORROWING METHODS ===");
const person1 = {
  name: "Alice",
  greet: function() {
    console.log(\`Hello, I'm \${this.name}\`);
  }
};

const person2 = { name: "Bob" };

// Bob "borrows" Alice's greet method
person1.greet.call(person2); // Hello, I'm Bob

// 5. Practical use: Finding max in array
console.log("\\n=== PRACTICAL USE ===");
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, numbers);
console.log("Max number:", max);

// Modern alternative with spread operator:
const maxModern = Math.max(...numbers);
console.log("Max (modern way):", maxModern);`}
                />
            </section>
        </div>
    );
};

export default CallBindApply;
