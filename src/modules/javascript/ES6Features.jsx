
import React, { useState } from 'react';
import JsPlayground from '../../components/JsPlayground';

const ES6Features = () => {
    const [data, setData] = useState(null);
    const [showSolution, setShowSolution] = useState(false);

    // Example of modern JS features in action
    const originalUser = { name: "Alex", age: 30, city: "London" };
    const updates = { age: 31, status: "Active" };

    // Spread operator for immutability
    const updatedUser = { ...originalUser, ...updates };

    // Destructuring
    const { name, city } = updatedUser;

    // Simulate an Async call (Promises/Async-Await)
    const fetchData = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: "Data loaded successfully!", timestamp: new Date().toLocaleTimeString() });
            }, 1500);
        });
    };

    const handleFetch = async () => {
        setData("Loading...");
        const result = await fetchData();
        setData(result);
    };

    return (
        <div className="module-container">
            <h2>ES6+ Essentials</h2>
            <p className="intro">
                Modern JavaScript introduces powerful features like destructuring, spread operators, and async/await that are fundamental to React development.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>1. Destructuring & Spread</h3>
                    <p><strong>Destructuring</strong> extracts values cleaner.</p>
                    <pre className="code-snippet">
                        {`const user = { name: "Alex", age: 30 };
// Old: const name = user.name;
// New: const { name } = user;`}
                    </pre>

                    <p style={{ marginTop: '1rem' }}><strong>Spread</strong> copies and merges.</p>
                    <pre className="code-snippet">
                        {`const newUser = { ...user, active: true };`}
                    </pre>
                </div>

                <div className="card">
                    <h3>2. Live object merging</h3>
                    <p>Combined Result:</p>
                    <pre className="code-snippet" style={{ fontSize: '0.9rem' }}>
                        {JSON.stringify(updatedUser, null, 2)}
                    </pre>
                    <p className="note">Name: {name}, City: {city}</p>
                </div>
            </div>

            <section className="example-section">
                <h3>3. Async / Await</h3>
                <p>Handling asynchronous operations effectively.</p>

                <div className="demo-area" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <button onClick={handleFetch} disabled={data === "Loading..."}>
                        {data === "Loading..." ? "Fetching..." : "Fetch Data"}
                    </button>

                    {data && (
                        <div style={{ marginTop: '1rem', padding: '1rem', background: '#0f172a', borderRadius: '6px', width: '100%' }}>
                            {typeof data === 'string' ? data : (
                                <div>
                                    <span style={{ color: '#22c55e' }}>✓ {data.message}</span>
                                    <br />
                                    <small style={{ color: '#94a3b8' }}>At: {data.timestamp}</small>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="code-block" style={{ marginTop: '1rem' }}>
                    <pre>
                        {`const fetchData = async () => {
  const result = await apiCall();
  setData(result);
};`}
                    </pre>
                </div>
            </section>

            <section className="example-section">
                <h3>4. 🧠 Challenge: Refactor Callback to Async/Await</h3>
                <p>The code below uses an old-school callback. Your task: rewrite <code>handleLogin</code> to use <code>async/await</code>.</p>

                <div className="code-block bad">
                    <h4>Legacy Code (Callback)</h4>
                    <pre>
                        {`const loginUser = (username, callback) => {
  setTimeout(() => {
    callback({ user: username, token: "123" });
  }, 1000);
};

const handleLogin = () => {
  loginUser("Alex", (response) => {
    console.log("Logged in:", response);
  });
};`}
                    </pre>
                </div>
                <button
                    onClick={() => setShowSolution(!showSolution)}
                    style={{ marginTop: '1rem', background: '#334155' }}
                >
                    {showSolution ? 'Hide Solution' : 'Show Solution'}
                </button>

                {showSolution && (
                    <div className="code-block good" style={{ marginTop: '1rem', animation: 'fadeIn 0.3s' }}>
                        <h4>✅ Refactored (Async/Await)</h4>
                        <pre>
                            {`const loginUser = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: username, token: "123" });
    }, 1000);
  });
};

const handleLogin = async () => {
  const response = await loginUser("Alex");
  console.log("Logged in:", response);
};`}
                        </pre>
                    </div>
                )}

                <div style={{ marginTop: '2rem' }}>
                    <p><strong>Test your solution here:</strong></p>
                    <JsPlayground
                        title="Challenge Playground"
                        initialCode={`// 1. Refactor this to return a Promise
const loginUser = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: username, token: "123" });
    }, 1000);
  });
};

// 2. Use async/await here
const handleLogin = async () => {
  console.log("Logging in...");
  const response = await loginUser("Alex");
  console.log("Logged in:", response);
};

handleLogin();`}
                    />
                </div>

            </section>
        </div>
    );
};

export default ES6Features;
