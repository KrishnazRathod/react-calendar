import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const ReactRouter = () => {
    return (
        <div className="module-container">
            <h2>React Router & Navigation</h2>
            <p className="intro">
                React Router enables client-side routing, allowing you to build single-page applications with navigation.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Basic Setup</h3>
                    <pre className="code-snippet">
                        {`import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Navigation</h3>
                    <pre className="code-snippet">
                        {`import { Link, NavLink, useNavigate } from 'react-router-dom';

<Link to="/about">About</Link>
<NavLink to="/contact">Contact</NavLink>

const navigate = useNavigate();
navigate('/dashboard');`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Route Parameters</h3>
                    <pre className="code-snippet">
                        {`<Route path="/user/:id" element={<User />} />

function User() {
  const { id } = useParams();
  return <h1>User {id}</h1>;
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Protected Routes</h3>
                    <pre className="code-snippet">
                        {`function ProtectedRoute({ children }) {
  const isAuth = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
}`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Navigation Patterns Playground</h3>
                <LivePlayground
                    initialCode={`
<style>
  nav { background: #14b8a6; padding: 15px; }
  nav a { color: white; margin-right: 20px; text-decoration: none; }
  nav a:hover { text-decoration: underline; }
  .content { padding: 20px; }
  .active { font-weight: bold; border-bottom: 2px solid white; }
</style>

<nav>
  <a href="#" class="active">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<div class="content">
  <h2>Home Page</h2>
  <p>This simulates React Router navigation. In React, clicking links would update the URL and render different components without page reload.</p>
</div>

<script>
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default ReactRouter;

