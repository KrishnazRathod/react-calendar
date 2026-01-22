import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const Promises = () => {
    return (
        <div className="module-container">
            <h2>Promises</h2>
            <p className="intro">
                In JavaScript, a <strong>Promise</strong> is an object representing the eventual completion (or failure)
                of an asynchronous operation and its resulting value.
                <br /><br />
                Think of it like ordering food: you get a "buzzer" (the Promise). While the food is being prepared,
                you can do other things. When the food is ready, the buzzer goes off (<strong>Resolved</strong>), or if they ran
                out of ingredients, the buzzer notifies you of the error (<strong>Rejected</strong>).
            </p>

            <section className="example-section">
                <h3>1. Promise States</h3>
                <p>A Promise is always in one of these three states:</p>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#fbbf24' }}>⏳ Pending</h4>
                        <p>Initial state, neither fulfilled nor rejected.</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Fulfilled (Resolved)</h4>
                        <p>The operation completed successfully.</p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ Rejected</h4>
                        <p>The operation failed.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>2. Static Methods of Promise</h3>
                <p>
                    Since you're building applications with Node.js and Next.js, you often have to handle multiple API calls at once.
                    These methods help you manage those scenarios efficiently.
                </p>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>A. Promise.all([promises])</h4>
                        <ul className="feature-list">
                            <li><strong>Behavior:</strong> Waits for all promises to resolve.</li>
                            <li><strong>Result:</strong> Returns an array of results.</li>
                            <li><strong>Failure:</strong> If any promise rejects, the whole thing rejects immediately.</li>
                            <li><strong>Use Case:</strong> Fetching data for a dashboard where you need all the parts before showing the page.</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>B. Promise.allSettled([promises])</h4>
                        <ul className="feature-list">
                            <li><strong>Behavior:</strong> Waits for all promises to finish, regardless of whether they succeeded or failed.</li>
                            <li><strong>Result:</strong> Returns an array of objects describing the outcome of each promise.</li>
                            <li><strong>Use Case:</strong> When you want to attempt multiple tasks and handle the ones that failed individually without crashing the whole process.</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>C. Promise.race([promises])</h4>
                        <ul className="feature-list">
                            <li><strong>Behavior:</strong> Returns the result of the first promise that settles (either resolves or rejects).</li>
                            <li><strong>Use Case:</strong> Setting a "timeout" for a network request—if the request takes too long, a timer promise "wins" the race and triggers an error.</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>D. Promise.any([promises])</h4>
                        <ul className="feature-list">
                            <li><strong>Behavior:</strong> Returns the first promise that resolves (ignores rejections unless all fail).</li>
                            <li><strong>Use Case:</strong> Requesting data from multiple mirror servers and taking the fastest successful response.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>3. Comparison Summary</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>When does it resolve?</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>When does it reject?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>.all()</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>When all succeed</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>When any one fails</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>.allSettled()</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>When all finish (any result)</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Never rejects</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>.race()</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>When the first one finishes</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>If the first one fails</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}><code style={{ background: 'var(--bg-secondary)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>.any()</code></td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>When the first one succeeds</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Only if all fail</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>4. Code Example (Real-world Scenario)</h3>
                <div className="code-block">
                    <pre>{`const fetchUser = fetch('/api/user');
const fetchPosts = fetch('/api/posts');

// Efficiently fetching both in parallel
Promise.all([fetchUser, fetchPosts])
  .then(([user, posts]) => {
    console.log("Both loaded successfully");
  })
  .catch((error) => {
    console.error("One of them failed", error);
  });`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with different Promise methods in this live code editor:</p>
                <JsPlayground
                    title="Promises Playground"
                    initialCode={`// Creating promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 500));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Third failed"), 750));

// 1. Promise.all() - Waits for all to succeed
console.log("=== PROMISE.ALL ===");
Promise.all([promise1, promise2])
  .then(results => console.log("All succeeded:", results))
  .catch(error => console.error("One failed:", error));

// 2. Promise.allSettled() - Waits for all to finish
console.log("\\n=== PROMISE.ALLSETTLED ===");
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log("All settled:");
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(\`Promise \${index + 1}: ✅\`, result.value);
      } else {
        console.log(\`Promise \${index + 1}: ❌\`, result.reason);
      }
    });
  });

// 3. Promise.race() - First to finish wins
console.log("\\n=== PROMISE.RACE ===");
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));

Promise.race([fast, slow])
  .then(result => console.log("Race winner:", result));

// 4. Promise.any() - First to succeed wins
console.log("\\n=== PROMISE.ANY ===");
const fail1 = new Promise((_, reject) => setTimeout(() => reject("Failed 1"), 100));
const fail2 = new Promise((_, reject) => setTimeout(() => reject("Failed 2"), 200));
const success = new Promise(resolve => setTimeout(() => resolve("Success!"), 300));

Promise.any([fail1, fail2, success])
  .then(result => console.log("First success:", result))
  .catch(error => console.error("All failed:", error));

// Real-world example: Timeout pattern
console.log("\\n=== TIMEOUT PATTERN ===");
const fetchData = new Promise(resolve => 
  setTimeout(() => resolve("Data loaded"), 2000)
);
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject("Timeout!"), 1000)
);

Promise.race([fetchData, timeout])
  .then(result => console.log(result))
  .catch(error => console.error(error));`}
                />
            </section>
        </div>
    );
};

export default Promises;
