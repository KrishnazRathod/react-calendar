import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const LifecycleMethods = () => {
    return (
        <div className="module-container">
            <h2>React Lifecycle Methods</h2>
            <p className="intro">
                Lifecycle methods are special methods in <strong>class components</strong> that run at specific times during
                a component's life: mounting, updating, and unmounting.
                <br /><br />
                With modern React (hooks), we use <code>useEffect</code> instead of lifecycle methods in functional components.
            </p>

            <section className="example-section">
                <h3>Three Phases of Component Lifecycle</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>1. Mounting</h4>
                        <p>Component is being created and inserted into the DOM</p>
                        <ul className="feature-list">
                            <li>constructor()</li>
                            <li>render()</li>
                            <li>componentDidMount()</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#fbbf24' }}>2. Updating</h4>
                        <p>Component is re-rendered due to state/props changes</p>
                        <ul className="feature-list">
                            <li>shouldComponentUpdate()</li>
                            <li>render()</li>
                            <li>componentDidUpdate()</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>3. Unmounting</h4>
                        <p>Component is being removed from the DOM</p>
                        <ul className="feature-list">
                            <li>componentWillUnmount()</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Class Component Lifecycle Example:</h3>
                <div className="code-block">
                    <pre>{`import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
    console.log('1. Constructor - Component initialized');
  }

  componentDidMount() {
    console.log('2. componentDidMount - Component mounted');
    // Perfect for API calls
    fetch(\`/api/user/\${this.props.userId}\`)
      .then(res => res.json())
      .then(user => this.setState({ user, loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('3. componentDidUpdate - Component updated');
    // Respond to prop/state changes
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser(this.props.userId);
    }
  }

  componentWillUnmount() {
    console.log('4. componentWillUnmount - Component will unmount');
    // Cleanup: cancel subscriptions, timers, etc.
  }

  render() {
    console.log('Render - Component rendering');
    if (this.state.loading) return <div>Loading...</div>;
    return <div>{this.state.user.name}</div>;
  }
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Modern Approach with Hooks (useEffect):</h3>
                <div className="code-block good">
                    <pre>{`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('Fetching user...');
    setLoading(true);
    
    fetch(\`/api/user/\${userId}\`)
      .then(res => res.json())
      .then(user => {
        setUser(user);
        setLoading(false);
      });

    // componentWillUnmount (cleanup)
    return () => {
      console.log('Cleanup on unmount or before next effect');
      // Cancel requests, clear timers, etc.
    };
  }, [userId]); // Runs when userId changes

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Lifecycle to Hooks Mapping</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Class Component</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Functional Component (Hooks)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code>constructor()</code></td>
                                <td style={{ padding: '1rem' }}><code>useState()</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code>componentDidMount()</code></td>
                                <td style={{ padding: '1rem' }}><code>useEffect(() =&gt; {'{'}, [])</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}><code>componentDidUpdate()</code></td>
                                <td style={{ padding: '1rem' }}><code>useEffect(() =&gt; {'{'}, [deps])</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}><code>componentWillUnmount()</code></td>
                                <td style={{ padding: '1rem' }}><code>useEffect(() =&gt; &#123; return () =&gt; &#123; &#125; &#125;)</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Common Use Cases:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>componentDidMount / useEffect([], [])</h4>
                        <ul className="feature-list">
                            <li>Fetch initial data from API</li>
                            <li>Setup subscriptions</li>
                            <li>Initialize third-party libraries</li>
                            <li>Add event listeners</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4>componentDidUpdate / useEffect([deps])</h4>
                        <ul className="feature-list">
                            <li>Respond to prop/state changes</li>
                            <li>Refetch data when filters change</li>
                            <li>Update document title</li>
                            <li>Sync with external systems</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4>componentWillUnmount / cleanup</h4>
                        <ul className="feature-list">
                            <li>Clear timers/intervals</li>
                            <li>Cancel pending requests</li>
                            <li>Remove event listeners</li>
                            <li>Unsubscribe from services</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 useEffect Examples</h3>
                <p>Understanding different useEffect patterns:</p>
                <JsPlayground
                    title="useEffect Patterns"
                    initialCode={`// Simulating useEffect behavior
console.log("=== USEEFFECT PATTERNS ===\\n");

// 1. Run once on mount (componentDidMount)
function simulateDidMount() {
  console.log("1. componentDidMount equivalent");
  console.log("   useEffect(() => { ... }, [])");
  console.log("   - Runs once after first render");
  console.log("   - Perfect for initial API calls\\n");
}

simulateDidMount();

// 2. Run on every render (no dependency array)
function simulateEveryRender() {
  console.log("2. Run on every render");
  console.log("   useEffect(() => { ... })");
  console.log("   - Runs after every render");
  console.log("   - Usually not recommended\\n");
}

// 3. Run when dependencies change
function simulateWithDeps(userId) {
  console.log("3. Run when dependencies change");
  console.log(\`   useEffect(() => \{ ... \}, [userId])\`);
  console.log(\`   - Current userId: \${userId}\`);
  console.log("   - Runs when userId changes\\n");
}

simulateWithDeps(123);

// 4. Cleanup function (componentWillUnmount)
function simulateCleanup() {
  console.log("4. Cleanup function");
  console.log("   useEffect(() => {");
  console.log("     const timer = setInterval(() => {}, 1000);");
  console.log("     return () => clearInterval(timer);");
  console.log("   }, [])");
  console.log("   - Cleanup runs before unmount");
  console.log("   - Or before next effect run\\n");
}

simulateCleanup();

// Real-world example
console.log("=== REAL EXAMPLE ===");

class ComponentLifecycle {
  constructor() {
    this.userId = 1;
    this.mounted = false;
  }
  
  mount() {
    console.log("Component mounting...");
    this.mounted = true;
    this.fetchData();
  }
  
  update(newUserId) {
    if (this.userId !== newUserId) {
      console.log(\`UserId changed: \${this.userId} -> \${newUserId}\`);
      this.userId = newUserId;
      this.fetchData();
    }
  }
  
  fetchData() {
    console.log(\`Fetching data for user \${this.userId}...\`);
  }
  
  unmount() {
    console.log("Component unmounting - cleanup!");
    this.mounted = false;
  }
}

const component = new ComponentLifecycle();
component.mount();
component.update(2);
component.update(3);
component.unmount();`}
                />
            </section>
        </div>
    );
};

export default LifecycleMethods;
