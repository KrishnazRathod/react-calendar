import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const SetTimeoutVsSetInterval = () => {
    return (
        <div className="module-container">
            <h2>setTimeout vs setInterval</h2>
            <p className="intro">
                Both <code>setTimeout</code> and <code>setInterval</code> are used to execute code asynchronously after a delay,
                but they behave differently.
                <br /><br />
                Understanding the difference is crucial for implementing features like animations, polling, debouncing, and throttling.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>setTimeout()</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>"Execute Once"</h4>
                    <p>
                        Executes a function <strong>once</strong> after a specified delay (in milliseconds).
                    </p>
                    <ul className="feature-list">
                        <li><strong>Runs:</strong> Only once</li>
                        <li><strong>Returns:</strong> Timer ID (can be used to cancel)</li>
                        <li><strong>Use case:</strong> Delayed actions, debouncing</li>
                    </ul>
                    <div className="code-snippet" style={{ marginTop: '1rem' }}>
                        {`setTimeout(() => {
  console.log("Runs after 2s");
}, 2000);`}
                    </div>
                </div>

                <div className="card">
                    <h3>setInterval()</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>"Execute Repeatedly"</h4>
                    <p>
                        Executes a function <strong>repeatedly</strong> at specified intervals (in milliseconds).
                    </p>
                    <ul className="feature-list">
                        <li><strong>Runs:</strong> Repeatedly until stopped</li>
                        <li><strong>Returns:</strong> Interval ID (must be cleared)</li>
                        <li><strong>Use case:</strong> Polling, animations, real-time updates</li>
                    </ul>
                    <div className="code-snippet" style={{ marginTop: '1rem' }}>
                        {`setInterval(() => {
  console.log("Runs every 2s");
}, 2000);`}
                    </div>
                </div>
            </div>

            <section className="example-section">
                <h3>Basic Examples:</h3>

                <h4>setTimeout() - Run Once:</h4>
                <div className="code-block good">
                    <pre>{`console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds (after delay)`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>setInterval() - Run Repeatedly:</h4>
                <div className="code-block">
                    <pre>{`let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(\`Count: \${count}\`);
  
  if (count === 5) {
    clearInterval(intervalId); // Stop after 5 times
    console.log("Stopped!");
  }
}, 1000);

// Output every second:
// Count: 1
// Count: 2
// ...
// Count: 5
// Stopped!`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Canceling Timers</h3>
                <div className="code-block">
                    <pre>{`// Cancel setTimeout
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 3000);

clearTimeout(timeoutId); // Canceled!

// Cancel setInterval
const intervalId = setInterval(() => {
  console.log("Repeating");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);`}</pre>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>setTimeout</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>setInterval</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Execution</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Once after delay</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Repeatedly at intervals</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Cancellation</td>
                                <td style={{ padding: '1rem' }}><code>clearTimeout(id)</code></td>
                                <td style={{ padding: '1rem' }}><code>clearInterval(id)</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Use Case</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Delayed action, debouncing</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Polling, animations, countdowns</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Must Stop Manually</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>No (stops automatically)</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Yes (runs forever unless cleared)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Common Use Cases</h3>

                <h4>1. Debouncing (setTimeout):</h4>
                <div className="code-block good">
                    <pre>{`let timeoutId;

function handleSearch(query) {
  clearTimeout(timeoutId); // Clear previous timeout
  
  timeoutId = setTimeout(() => {
    console.log("Searching for:", query);
    // Make API call
  }, 500); // Wait 500ms after user stops typing
}

// User types: "h", "he", "hel", "hell", "hello"
// API call happens only once after user stops`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. Polling API (setInterval):</h4>
                <div className="code-block">
                    <pre>{`// Check server status every 5 seconds
const pollInterval = setInterval(async () => {
  const status = await fetch('/api/status');
  const data = await status.json();
  
  console.log("Server status:", data);
  
  if (data.healthy) {
    clearInterval(pollInterval); // Stop when healthy
  }
}, 5000);`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. Countdown Timer (setInterval):</h4>
                <div className="code-block">
                    <pre>{`let seconds = 10;

const countdown = setInterval(() => {
  console.log(\`Time remaining: \${seconds}s\`);
  seconds--;
  
  if (seconds < 0) {
    clearInterval(countdown);
    console.log("Time's up!");
  }
}, 1000);`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>⚠️ Important: setInterval Timing Issues</h3>
                <p style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid #ef4444',
                    lineHeight: '1.7'
                }}>
                    <strong>Problem:</strong> If the callback takes longer than the interval, executions can queue up or overlap.
                </p>

                <div className="comparison-container" style={{ marginTop: '1.5rem' }}>
                    <div className="code-block bad">
                        <h4>❌ Problem with setInterval:</h4>
                        <pre>{`// If this takes 3 seconds
setInterval(() => {
  slowAPICall(); // Takes 3s
}, 2000); // Every 2s

// Executions can overlap!`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>✅ Solution with setTimeout:</h4>
                        <pre>{`function poll() {
  slowAPICall().then(() => {
    setTimeout(poll, 2000);
  });
}

poll(); // Waits for completion`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with setTimeout and setInterval:</p>
                <JsPlayground
                    title="setTimeout vs setInterval Playground"
                    initialCode={`// 1. setTimeout - Run once
console.log("=== setTimeout ===");
console.log("Start");

setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

console.log("End (but runs before timeout)");

// 2. setInterval - Run repeatedly
console.log("\\n=== setInterval ===");
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(\`Interval count: \${count}\`);
  
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 500);

// 3. Canceling setTimeout
console.log("\\n=== CANCELING ===");
const timeoutId = setTimeout(() => {
  console.log("This will NOT run");
}, 2000);

clearTimeout(timeoutId);
console.log("Timeout canceled");

// 4. Debounce pattern
console.log("\\n=== DEBOUNCE PATTERN ===");
let debounceTimer;

function simulateTyping(text) {
  clearTimeout(debounceTimer);
  console.log("Typing:", text);
  
  debounceTimer = setTimeout(() => {
    console.log("Search for:", text);
  }, 300);
}

simulateTyping("h");
simulateTyping("he");
simulateTyping("hel");
simulateTyping("hello");
// Only "Search for: hello" will execute

// 5. Countdown timer
console.log("\\n=== COUNTDOWN TIMER ===");
let seconds = 5;

const timer = setInterval(() => {
  console.log(\`Time: \${seconds}s\`);
  seconds--;
  
  if (seconds < 0) {
    clearInterval(timer);
    console.log("Timer finished!");
  }
}, 1000);

// 6. Recursive setTimeout (better than setInterval)
console.log("\\n=== RECURSIVE setTimeout ===");
let recursiveCount = 0;

function recursiveTimer() {
  recursiveCount++;
  console.log(\`Recursive count: \${recursiveCount}\`);
  
  if (recursiveCount < 3) {
    setTimeout(recursiveTimer, 500);
  } else {
    console.log("Recursive timer done");
  }
}

setTimeout(recursiveTimer, 100);`}
                />
            </section>
        </div>
    );
};

export default SetTimeoutVsSetInterval;
