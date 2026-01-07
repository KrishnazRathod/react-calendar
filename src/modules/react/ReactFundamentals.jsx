import React, { useState, useEffect } from 'react';
import LivePlayground from '../../components/LivePlayground';

const ReactFundamentals = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: 'John', age: 25 });

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="module-container">
            <h2>React Fundamentals</h2>
            <p className="intro">
                Understanding React's core concepts: components, props, state, lifecycle, and hooks is essential for building modern web applications.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Components</h3>
                    <p>React components are reusable pieces of UI. They can be function components or class components.</p>
                    <pre className="code-snippet">
                        {`// Function Component
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Props</h3>
                    <p>Props (properties) pass data from parent to child components. They are read-only.</p>
                    <pre className="code-snippet">
                        {`<Welcome name="Sarah" />
<Welcome name="Alex" />`}
                    </pre>
                </div>

                <div className="card">
                    <h3>State</h3>
                    <p>State allows components to create and manage their own data that can change over time.</p>
                    <pre className="code-snippet">
                        {`const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Lifecycle & useEffect</h3>
                    <p>useEffect handles side effects and component lifecycle events like mounting, updating, and unmounting.</p>
                    <pre className="code-snippet">
                        {`useEffect(() => {
  // Runs after render
  document.title = \`Count: \${count}\`;
}, [count]); // Dependency array`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Example: State Management</h3>
                <p>Watch how state updates trigger re-renders:</p>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <p>Count: <strong>{count}</strong></p>
                    <p>User: <strong>{user.name}</strong> (Age: {user.age})</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        <button onClick={() => setCount(count + 1)}>Increment</button>
                        <button onClick={() => setCount(count - 1)}>Decrement</button>
                        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Age++</button>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 Try it yourself!</h3>
                <p>Create a component that displays a user profile with editable fields:</p>
                <LivePlayground
                    initialCode={`
<style>
  .profile {
    padding: 20px;
    background: #f8fafc;
    border-radius: 8px;
    max-width: 400px;
  }
  input {
    padding: 8px;
    margin: 5px 0;
    width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
  }
  button {
    padding: 8px 16px;
    background: #14b8a6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
</style>

<div class="profile">
  <h2>User Profile</h2>
  <input type="text" id="name" placeholder="Name" value="John Doe">
  <input type="email" id="email" placeholder="Email" value="john@example.com">
  <button onclick="updateProfile()">Update Profile</button>
  <div id="display"></div>
</div>

<script>
  function updateProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('display').innerHTML = 
      \`<p><strong>Name:</strong> \${name}</p><p><strong>Email:</strong> \${email}</p>\`;
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default ReactFundamentals;

