import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const Authentication = () => {
    return (
        <div className="module-container">
            <h2>Authentication & Authorization</h2>
            <p className="intro">
                Implement secure authentication flows with JWT tokens, session management, and protected routes.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>JWT Tokens</h3>
                    <pre className="code-snippet">
                        {`// Store token
localStorage.setItem('token', token);

// Include in requests
headers: {
  'Authorization': \`Bearer \${token}\`
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Protected Routes</h3>
                    <pre className="code-snippet">
                        {`function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>OAuth Flow</h3>
                    <ul className="feature-list">
                        <li>User redirects to provider</li>
                        <li>Provider returns with code</li>
                        <li>Exchange code for token</li>
                        <li>Store and use token</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Security Best Practices</h3>
                    <ul className="feature-list">
                        <li>HTTPS only</li>
                        <li>Token expiration</li>
                        <li>Refresh tokens</li>
                        <li>CSRF protection</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Auth Flow Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .auth { max-width: 400px; padding: 20px; background: #f8fafc; border-radius: 8px; }
  input { width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #cbd5e1; border-radius: 4px; }
  button { padding: 10px 20px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; width: 100%; margin-top: 10px; }
  .success { color: green; margin-top: 10px; }
</style>

<div class="auth">
  <h3>Login</h3>
  <input type="email" id="email" placeholder="Email" value="user@example.com">
  <input type="password" id="password" placeholder="Password" value="password123">
  <button onclick="login()">Login</button>
  <div id="result"></div>
</div>

<script>
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    
    // Simulate authentication
    if (email && password) {
      const token = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('token', token);
      result.innerHTML = '<p class="success">✓ Logged in! Token stored.</p>';
    } else {
      result.innerHTML = '<p style="color: red;">Please fill all fields</p>';
    }
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default Authentication;

