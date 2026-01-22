import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const AsyncAwait = () => {
    return (
        <div className="module-container">
            <h2>Async/Await</h2>
            <p className="intro">
                <code>async</code> and <code>await</code> are syntactic sugar built on top of Promises. They allow you to
                write asynchronous code that looks and behaves like synchronous code, making it much easier to read and maintain.
                <br /><br />
                As a Full Stack Developer, you likely use this daily when fetching data in Next.js or handling database queries in Node.js.
            </p>

            <section className="example-section">
                <h3>1. How it Works</h3>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>async keyword</h4>
                        <p>
                            Placing <code>async</code> before a function means the function will <strong>always return a promise</strong>.
                            Even if you return a simple string, JavaScript automatically wraps it in a resolved promise.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>await keyword</h4>
                        <p>
                            This can only be used inside an <code>async</code> function. It tells JavaScript to "pause" the execution
                            of the function until the promise is settled (either resolved or rejected).
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>2. Why use it over .then()?</h3>
                <p>
                    When you have multiple dependent asynchronous tasks, <code>.then()</code> leads to "Callback Hell" or deeply nested
                    promise chains. <code>async/await</code> keeps the code "flat."
                </p>

                <div className="comparison-container">
                    <div className="code-block bad">
                        <h4>Using Promises:</h4>
                        <pre>{`function getData() {
  fetch('/api/user')
    .then(res => res.json())
    .then(user => fetch(\`/api/posts/\${user.id}\`))
    .then(posts => console.log(posts))
    .catch(err => console.error(err));
}`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>Using Async/Await:</h4>
                        <pre>{`async function getData() {
  try {
    const res = await fetch('/api/user');
    const user = await res.json();
    const posts = await fetch(\`/api/posts/\${user.id}\`);
    const data = await posts.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>3. Key Rules and Best Practices</h3>

                <div className="card">
                    <h4 style={{ color: 'var(--primary-color)' }}>A. Error Handling</h4>
                    <p>
                        In standard promises, you use <code>.catch()</code>. In async/await, you use <code>try...catch</code> blocks.
                        This is cleaner because it handles both asynchronous errors and synchronous logic errors in the same block.
                    </p>
                </div>

                <div className="card" style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ color: 'var(--primary-color)' }}>B. Avoiding the "Waterfall" (Performance)</h4>
                    <p>
                        A common mistake is awaiting every line when the tasks don't depend on each other. This slows down your app
                        because each line waits for the previous one to finish.
                    </p>
                </div>

                <div className="comparison-container" style={{ marginTop: '1.5rem' }}>
                    <div className="code-block bad">
                        <h4>❌ The slow way (Sequential):</h4>
                        <pre>{`const user = await fetchUser(); // Takes 2s
const settings = await fetchSettings(); // Takes 2s
// Total: 4 seconds`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>✅ The fast way (Parallel):</h4>
                        <pre>{`const [user, settings] = await Promise.all([
  fetchUser(), 
  fetchSettings()
]);
// Total: 2 seconds`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>4. Use Case in your stack (Next.js/Node.js)</h3>
                <p>
                    In Next.js Server Components, async/await is the standard way to fetch data directly inside your component:
                </p>

                <div className="code-block">
                    <pre>{`// A Next.js Server Component
export default async function ProfilePage() {
  const data = await fetchUserData(); // Server-side fetch

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Location: Indore</p> 
    </div>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>async makes a function return a Promise</h4>
                        <p>
                            Every function declared with <code>async</code> automatically wraps its return value in a Promise.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>await makes a function wait for a Promise</h4>
                        <p>
                            Use <code>await</code> to pause execution until the Promise resolves or rejects.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>try...catch for error handling</h4>
                        <p>
                            This is the standard for handling errors in async functions, catching both async and sync errors.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Eliminates Promise Chaining</h4>
                        <p>
                            Makes code more readable and debugging much simpler by avoiding nested <code>.then()</code> calls.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with async/await patterns in this live code editor:</p>
                <JsPlayground
                    title="Async/Await Playground"
                    initialCode={`// 1. Basic async function
console.log("=== BASIC ASYNC ===");
async function greet() {
  return "Hello!"; // Automatically wrapped in a Promise
}

greet().then(msg => console.log(msg)); // "Hello!"

// 2. Using await
console.log("\\n=== USING AWAIT ===");
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncDemo() {
  console.log("Starting...");
  await delay(1000);
  console.log("1 second passed");
  await delay(1000);
  console.log("2 seconds passed");
}

asyncDemo();

// 3. Error handling with try...catch
console.log("\\n=== ERROR HANDLING ===");
async function fetchData() {
  try {
    // Simulating an API call that fails
    const data = await Promise.reject("API Error!");
    console.log(data);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

fetchData();

// 4. Sequential vs Parallel
console.log("\\n=== PARALLEL EXECUTION ===");

async function slowWay() {
  const start = Date.now();
  const result1 = await delay(500);
  const result2 = await delay(500);
  console.log("Sequential took:", Date.now() - start, "ms");
}

async function fastWay() {
  const start = Date.now();
  await Promise.all([delay(500), delay(500)]);
  console.log("Parallel took:", Date.now() - start, "ms");
}

slowWay();
setTimeout(() => fastWay(), 1200);

// 5. Real-world pattern: Fetching user data
console.log("\\n=== REAL-WORLD PATTERN ===");
async function getUserProfile(userId) {
  try {
    console.log("Fetching user profile...");
    
    // Simulate API calls
    const user = await new Promise(resolve => 
      setTimeout(() => resolve({ id: userId, name: "Krishna" }), 500)
    );
    
    const posts = await new Promise(resolve => 
      setTimeout(() => resolve(["Post 1", "Post 2"]), 500)
    );
    
    console.log("User:", user);
    console.log("Posts:", posts);
    return { user, posts };
  } catch (error) {
    console.error("Failed to load profile:", error);
  }
}

getUserProfile(123);`}
                />
            </section>
        </div>
    );
};

export default AsyncAwait;
