import React from 'react';

const CustomHooks = () => {
    return (
        <div className="module-container">
            <h2>Custom Hooks in React</h2>
            <p className="intro">
                <strong>Custom Hooks</strong> let you extract component logic into reusable functions. They're regular
                JavaScript functions that can use other hooks.
                <br /><br />
                Custom hooks follow the naming convention: <code>use[HookName]</code>
            </p>

            <section className="example-section">
                <h3>Why Create Custom Hooks?</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. Reusability</h4>
                        <p>Share stateful logic across multiple components without repeating code</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Organization</h4>
                        <p>Separate concerns and keep components clean and focused</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Testability</h4>
                        <p>Test hooks in isolation without rendering components</p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Composition</h4>
                        <p>Combine multiple hooks to create powerful abstractions</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Example 1: useLocalStorage Hook</h3>
                <div className="code-block good">
                    <pre>{`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use provided default
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name (persisted!)"
    />
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example 2: useFetch Hook</h3>
                <div className="code-block good">
                    <pre>{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        
        if (!cancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true; // Cleanup to prevent state updates on unmount
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return <div>{data.name}</div>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example 3: useDebounce Hook</h3>
                <div className="code-block good">
                    <pre>{`function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage - Search with debouncing
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API call happens only after user stops typing for 500ms
      searchAPI(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example 4: useToggle Hook</h3>
                <div className="code-block">
                    <pre>{`function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle, setValue];
}

// Usage
function Modal() {
  const [isOpen, toggleOpen, setIsOpen] = useToggle(false);

  return (
    <>
      <button onClick={toggleOpen}>Toggle Modal</button>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && <div>Modal Content</div>}
    </>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Example 5: useWindowSize Hook</h3>
                <div className="code-block good">
                    <pre>{`function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

// Usage
function ResponsiveComponent() {
  const { width } = useWindowSize();

  return (
    <div>
      {width < 768 ? (
        <MobileView />
      ) : (
        <DesktopView />
      )}
    </div>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Rules for Custom Hooks:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ DO:</h4>
                        <ul className="feature-list">
                            <li>Start name with "use"</li>
                            <li>Call other hooks</li>
                            <li>Return values/functions</li>
                            <li>Follow hooks rules</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ DON'T:</h4>
                        <ul className="feature-list">
                            <li>Call conditionally</li>
                            <li>Call in loops</li>
                            <li>Call from regular JS functions</li>
                            <li>Violate hooks rules</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Advanced: Composing Custom Hooks</h3>
                <div className="code-block good">
                    <pre>{`// Combine multiple custom hooks
function useAuth() {
  return useContext(AuthContext);
}

function usePermission(permission) {
  const { user } = useAuth();
  return user?.permissions.includes(permission);
}

function useProtectedResource(url, permission) {
  const hasPermission = usePermission(permission);
  const { data, loading, error } = useFetch(url);

  return {
    data: hasPermission ? data : null,
    loading,
    error: hasPermission ? error : 'No permission',
    hasPermission
  };
}

// Usage - Combines auth, permission, and fetch logic
function AdminPanel() {
  const { data, loading, hasPermission } = useProtectedResource(
    '/api/admin/stats',
    'admin'
  );

  if (!hasPermission) return <div>Access denied</div>;
  if (loading) return <div>Loading...</div>;
  
  return <div>{JSON.stringify(data)}</div>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Popular Custom Hook Libraries:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>react-use</h4>
                        <p>Collection of 100+ essential hooks</p>
                    </div>

                    <div className="card">
                        <h4>usehooks-ts</h4>
                        <p>TypeScript-ready React hooks</p>
                    </div>

                    <div className="card">
                        <h4>ahooks</h4>
                        <p>High-quality & reliable hooks library</p>
                    </div>

                    <div className="card">
                        <h4>React Query</h4>
                        <p>Powerful data fetching hooks</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary:</h3>
                <div className="card">
                    <p style={{ lineHeight: '1.8' }}>
                        <strong>Custom Hooks</strong> are the modern way to share logic in React (replacing HOCs and render props).
                        <br /><br />
                        <strong>Key Points:</strong>
                    </p>
                    <ul className="feature-list">
                        <li>✅ Must start with "use" prefix</li>
                        <li>✅ Can call other hooks inside</li>
                        <li>✅ Great for extracting stateful logic</li>
                        <li>✅ More flexible than HOCs</li>
                        <li>✅ Composable and testable</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default CustomHooks;
