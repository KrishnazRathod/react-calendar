import React from 'react';

const ErrorBoundaries = () => {
    return (
        <div className="module-container">
            <h2>Error Boundaries in React</h2>
            <p className="intro">
                <strong>Error Boundaries</strong> are React components that catch JavaScript errors anywhere in their child
                component tree, log errors, and display a fallback UI.
                <br /><br />
                They prevent the entire app from crashing when a component fails.
            </p>

            <section className="example-section">
                <h3>Creating an Error Boundary:</h3>
                <div className="code-block good">
                    <pre>{`import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.error('Error caught:', error, errorInfo);
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '2px solid red' }}>
          <h2>⚠️ Something went wrong</h2>
          <p>{this.state.error}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Using Error Boundaries:</h3>
                <div className="code-block">
                    <pre>{`function App() {
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <UserProfile />
        <Dashboard />
      </ErrorBoundary>
      
      {/* Separate error boundary for different sections */}
      <ErrorBoundary>
        <Comments />
      </ErrorBoundary>
    </div>
  );
}

// Buggy component
function UserProfile() {
  const user = null; // Simulate error
  return <div>{user.name}</div>; // Will crash!
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>What Error Boundaries Catch:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ CATCHES:</h4>
                        <ul className="feature-list">
                            <li>Render phase errors</li>
                            <li>Lifecycle method errors</li>
                            <li>Constructor errors in child components</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ DOESN'T CATCH:</h4>
                        <ul className="feature-list">
                            <li>Event handlers (use try-catch)</li>
                            <li>Async code (setTimeout, promises)</li>
                            <li>Server-side rendering</li>
                            <li>Errors in the error boundary itself</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Advanced Pattern - Multiple Error Boundaries:</h3>
                <div className="code-block good">
                    <pre>{`function App() {
  return (
    <div>
      {/* Page-level error boundary */}
      <ErrorBoundary fallback={<PageError />}>
        <Header />
        
        {/* Feature-level error boundaries */}
        <ErrorBoundary fallback={<FeatureError name="sidebar" />}>
          <Sidebar />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<FeatureError name="content" />}>
          <MainContent />
        </ErrorBoundary>
      </ErrorBoundary>
    </div>
  );
}

// Different fallback UIs
function PageError() {
  return <div>Page failed to load. Please refresh.</div>;
}

function FeatureError({ name }) {
  return <div>{name} failed. Other features still work.</div>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Event Handler Errors (Manual Handling):</h3>
                <div className="code-block">
                    <pre>{`// Error boundaries don't catch event handler errors
function MyComponent() {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      // Code that might throw
      throw new Error("Button error!");
    } catch (err) {
      setError(err.message);
      // Log to error service
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <button onClick={handleClick}>Click me</button>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Production-Ready Error Boundary:</h3>
                <div className="code-block good">
                    <pre>{`class ProductionErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error reporting service (e.g., Sentry)
    if (process.env.NODE_ENV === 'production') {
      logErrorToService(error, errorInfo);
    }
    
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-container">
          <h1>Oops! Something went wrong</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Best Practices:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>1. Granular Boundaries</h4>
                        <p>Use multiple error boundaries to isolate failures</p>
                    </div>

                    <div className="card">
                        <h4>2. Informative Fallbacks</h4>
                        <p>Show helpful error messages and recovery options</p>
                    </div>

                    <div className="card">
                        <h4>3. Error Logging</h4>
                        <p>Always log errors to a service (Sentry, LogRocket)</p>
                    </div>

                    <div className="card">
                        <h4>4. Development Mode</h4>
                        <p>Show detailed errors in dev, user-friendly in production</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary:</h3>
                <div className="card">
                    <p style={{ lineHeight: '1.8' }}>
                        <strong>Error Boundaries</strong> prevent entire app crashes by catching errors in components.
                        <br /><br />
                        <strong>Key Points:</strong>
                    </p>
                    <ul className="feature-list">
                        <li>✅ Must be class components (no hooks version yet)</li>
                        <li>✅ Use <code>getDerivedStateFromError</code> and <code>componentDidCatch</code></li>
                        <li>✅ Place strategically - don't wrap everything in one boundary</li>
                        <li>✅ Handle event errors separately with try-catch</li>
                        <li>✅ Always log errors to monitoring service</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ErrorBoundaries;
