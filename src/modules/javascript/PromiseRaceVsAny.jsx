import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const PromiseRaceVsAny = () => {
    return (
        <div className="module-container">
            <h2>Promise.race() vs Promise.any()</h2>
            <p className="intro">
                While <code>Promise.race()</code> and <code>Promise.any()</code> look similar because they both deal with the
                "first" promise to finish, they behave very differently when it comes to errors (rejections).
                <br /><br />
                Here is the breakdown of how they differ.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. Promise.race()</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>The "First Finisher"</h4>
                    <p>
                        This method returns a promise that settles as soon as <strong>any</strong> of the input promises settles,
                        whether it resolves or rejects.
                    </p>
                    <ul className="feature-list">
                        <li><strong>If the first one succeeds:</strong> The returned promise resolves.</li>
                        <li><strong>If the first one fails:</strong> The returned promise rejects immediately.</li>
                        <li><strong>Use Case:</strong> Setting a request timeout. If your API call takes 5 seconds but your timer promise finishes in 2 seconds, the timer "wins" the race and you can trigger an error.</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>2. Promise.any()</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>The "First Success"</h4>
                    <p>
                        This method ignores rejections and waits for the <strong>first promise to resolve (succeed)</strong>.
                        It only rejects if all of the input promises fail.
                    </p>
                    <ul className="feature-list">
                        <li><strong>If the first one succeeds:</strong> The returned promise resolves.</li>
                        <li><strong>If the first one fails:</strong> It ignores it and waits for the next one.</li>
                        <li><strong>If all fail:</strong> It returns an AggregateError (a special error containing all individual errors).</li>
                        <li><strong>Use Case:</strong> Requesting data from three different mirrors or servers. You don't care if one server is down; you just want the fastest one that is actually working.</li>
                    </ul>
                </div>
            </div>

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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Promise.race()</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Promise.any()</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Wins when...</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Any promise settles (first one to finish)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>The first promise resolves (succeeds)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Reacts to Rejection?</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Yes, if the first one fails, the whole thing fails</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>No, it ignores rejections unless all fail</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Output on Success</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Value of the first settled promise</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Value of the first successful promise</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Output on Failure</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Error of the first settled promise</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>AggregateError (only if all promises fail)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Code Example: The Difference in Action</h3>
                <div className="code-block">
                    <pre>{`const pFastFailure = new Promise((_, reject) => 
  setTimeout(() => reject("Fast Fail"), 100)
);
const pSlowSuccess = new Promise((resolve) => 
  setTimeout(() => resolve("Slow Success"), 500)
);

// Promise.race will catch the "Fast Fail"
Promise.race([pFastFailure, pSlowSuccess])
  .then(val => console.log("Race won by:", val))
  .catch(err => console.log("Race failed because of:", err)); 
  // Output: Race failed because of: Fast Fail

// Promise.any will ignore the failure and wait for the "Slow Success"
Promise.any([pFastFailure, pSlowSuccess])
  .then(val => console.log("Any won by:", val))
  .catch(err => console.log("Any failed because all failed"));
  // Output: Any won by: Slow Success`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Visual Summary</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>⚡ Promise.race()</h4>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                            <strong>Like a sprint race:</strong> Whoever crosses the finish line first (success or failure) determines the outcome.
                        </p>
                        <p style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            padding: '0.75rem',
                            borderRadius: '6px',
                            marginTop: '1rem',
                            fontSize: '0.9rem'
                        }}>
                            ❌ Fast failures immediately end the race
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ Promise.any()</h4>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                            <strong>Like finding the first working solution:</strong> Failures are ignored until you find the first success.
                        </p>
                        <p style={{
                            background: 'rgba(34, 197, 94, 0.1)',
                            padding: '0.75rem',
                            borderRadius: '6px',
                            marginTop: '1rem',
                            fontSize: '0.9rem'
                        }}>
                            ✅ Keeps trying until it finds a winner
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with the difference between Promise.race() and Promise.any():</p>
                <JsPlayground
                    title="Promise.race() vs Promise.any() Playground"
                    initialCode={`// Setup: Create promises with different timing
const fastFailure = new Promise((_, reject) => 
  setTimeout(() => reject("Fast Fail"), 100)
);
const mediumFailure = new Promise((_, reject) => 
  setTimeout(() => reject("Medium Fail"), 300)
);
const slowSuccess = new Promise((resolve) => 
  setTimeout(() => resolve("Slow Success"), 500)
);

// 1. Promise.race() - First to finish wins
console.log("=== PROMISE.RACE ===");
Promise.race([fastFailure, slowSuccess])
  .then(val => console.log("race() resolved:", val))
  .catch(err => console.log("race() rejected:", err));
  // fast failure wins!

// 2. Promise.any() - First success wins
console.log("\\n=== PROMISE.ANY ===");
Promise.any([fastFailure, mediumFailure, slowSuccess])
  .then(val => console.log("any() resolved:", val))
  .catch(err => console.log("any() rejected:", err));
  // ignores failures, waits for slow success!

// 3. Real-world: Timeout pattern with race()
console.log("\\n=== TIMEOUT PATTERN ===");
const fetchData = new Promise(resolve => 
  setTimeout(() => resolve("Data loaded"), 2000)
);
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject("Timeout after 1s"), 1000)
);

Promise.race([fetchData, timeout])
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// 4. Real-world: Fallback servers with any()
console.log("\\n=== FALLBACK SERVERS ===");
const server1 = new Promise((_, reject) => 
  setTimeout(() => reject("Server 1 down"), 100)
);
const server2 = new Promise((_, reject) => 
  setTimeout(() => reject("Server 2 down"), 200)
);
const server3 = new Promise(resolve => 
  setTimeout(() => resolve("Server 3 OK!"), 300)
);

Promise.any([server1, server2, server3])
  .then(data => console.log("Connected to:", data))
  .catch(err => console.log("All servers failed:", err));

// 5. What if ALL fail with any()?
console.log("\\n=== ALL FAILURES ===");
const fail1 = Promise.reject("Fail 1");
const fail2 = Promise.reject("Fail 2");

Promise.any([fail1, fail2])
  .then(val => console.log("Success:", val))
  .catch(err => console.log("AggregateError:", err.errors));`}
                />
            </section>
        </div>
    );
};

export default PromiseRaceVsAny;
