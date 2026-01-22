import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const EventLoop = () => {
    return (
        <div className="module-container">
            <h2>JavaScript Event Loop</h2>
            <p className="intro">
                The <strong>Event Loop</strong> is the mechanism that allows JavaScript to perform non-blocking operations
                despite being single-threaded.
                <br /><br />
                Understanding the event loop is crucial for working with async code and avoiding performance issues.
            </p>

            <section className="example-section">
                <h3>The Call Stack, Web APIs, and Queues</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. Call Stack</h4>
                        <p>LIFO (Last In, First Out) structure where function calls are tracked</p>
                        <ul className="feature-list">
                            <li>Executes synchronous code</li>
                            <li>One thing at a time</li>
                            <li>Blocking</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Web APIs</h4>
                        <p>Browser-provided APIs that handle async operations</p>
                        <ul className="feature-list">
                            <li>setTimeout/setInterval</li>
                            <li>fetch/XMLHttpRequest</li>
                            <li>DOM events</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Callback Queue</h4>
                        <p>Queue for callback functions (setTimeout, events)</p>
                        <ul className="feature-list">
                            <li>FIFO (First In, First Out)</li>
                            <li>Waits for call stack to empty</li>
                            <li>Macrotasks</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Microtask Queue</h4>
                        <p>Higher priority queue for Promises</p>
                        <ul className="feature-list">
                            <li>Promise callbacks (.then, .catch)</li>
                            <li>Runs before callback queue</li>
                            <li>Microtasks</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>How Event Loop Works:</h3>
                <div className="code-block">
                    <pre>{`// Step-by-step execution order
console.log('1. Start');                    // Call Stack

setTimeout(() => {
  console.log('2. Timeout');                // Callback Queue (Macrotask)
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise');                // Microtask Queue
});

console.log('4. End');                      // Call Stack

/* Output Order:
1. Start
4. End
3. Promise    <- Microtasks run first!
2. Timeout    <- Then macrotasks
*/`}</pre>
                </div>

                <p style={{
                    marginTop: '1.5rem',
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-color)',
                    lineHeight: '1.7'
                }}>
                    💡 <strong>Key Rule:</strong> Microtasks (Promises) always run before macrotasks (setTimeout)
                    when the call stack is empty!
                </p>
            </section>

            <section className="example-section">
                <h3>Execution Order Priority:</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Priority</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Examples</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', color: '#22c55e', fontWeight: '600' }}>1. Highest</td>
                                <td style={{ padding: '1rem' }}>Synchronous Code</td>
                                <td style={{ padding: '1rem' }}><code>console.log()</code>, function calls</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', color: '#fbbf24', fontWeight: '600' }}>2. High</td>
                                <td style={{ padding: '1rem' }}>Microtasks</td>
                                <td style={{ padding: '1rem' }}><code>Promise.then()</code>, <code>queueMicrotask()</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', color: '#ef4444', fontWeight: '600' }}>3. Lower</td>
                                <td style={{ padding: '1rem' }}>Macrotasks</td>
                                <td style={{ padding: '1rem' }}><code>setTimeout()</code>, <code>setInterval()</code>, events</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Complex Example:</h3>
                <div className="code-block">
                    <pre>{`console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve()
  .then(() => console.log('Promise 1'))
  .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');

/* Execution order:
1. Call Stack: "Start"
2. Call Stack: "End"
3. Microtask: "Promise 1"
4. Microtask: "Promise 2"
5. Macrotask: "Timeout 1"
6. Macrotask: "Timeout 2"
*/`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Event Loop Demo</h3>
                <p>See the event loop in action with this comprehensive example:</p>
                <JsPlayground
                    title="Event Loop Visualization"
                    initialCode={`console.log("=== EVENT LOOP DEMO ===\\n");

// 1. Synchronous code (Call Stack)
console.log("1. Sync: Start");

// 2. setTimeout (Macrotask - goes to Callback Queue)
setTimeout(() => {
  console.log("4. Macrotask: setTimeout 0ms");
}, 0);

// 3. Promise (Microtask Queue)
Promise.resolve()
  .then(() => {
    console.log("3. Microtask: Promise .then() 1");
  })
  .then(() => {
    console.log("5. Microtask: Promise .then() 2");
  });

// 4. Another setTimeout
setTimeout(() => {
  console.log("6. Macrotask: setTimeout 10ms");
}, 10);

// 5. More sync code
console.log("2. Sync: End");

console.log("\\n=== NESTED PROMISES & TIMEOUTS ===\\n");

setTimeout(() => {
  console.log("8. Timeout in timeout");
  Promise.resolve().then(() => {
    console.log("9. Promise in timeout (runs immediately after)");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("7. Promise with nested timeout");
  setTimeout(() => {
    console.log("10. Timeout in promise");
  }, 0);
});

console.log("\\n=== FINAL ORDER ===");
console.log("Sync code runs first (Call Stack)");
console.log("Then Microtasks (Promises)");
console.log("Finally Macrotasks (Timeouts)");`}
                />
            </section>

            <section className="example-section">
                <h3>Common Pitfalls:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ Blocking the Event Loop</h4>
                        <div className="code-snippet">
                            {`// Bad - blocks everything
for (let i = 0; i < 1000000000; i++) {
  // Heavy computation
}
console.log("Done"); // UI frozen!`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Non-blocking Solution</h4>
                        <div className="code-snippet">
                            {`// Good - split work
function processChunk(i) {
  if (i < 1000000) {
    setTimeout(() => processChunk(i + 10000), 0);
  }
}
processChunk(0); // UI responsive!`}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventLoop;
