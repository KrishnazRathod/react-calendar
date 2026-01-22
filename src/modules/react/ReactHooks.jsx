import React from 'react';

const ReactHooks = () => {
    return (
        <div className="module-container">
            <h2>React Hooks Overview</h2>
            <p className="intro">
                Hooks let you use state and other React features in function components without writing classes.
            </p>

            <section className="example-section">
                <h3>Common Hooks:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>useState</h4>
                        <p>Add state to function components</p>
                        <div className="code-snippet">
                            {`const [count, setCount] = useState(0);`}
                        </div>
                    </div>

                    <div className="card">
                        <h4>useEffect</h4>
                        <p>Side effects (API calls, subscriptions)</p>
                        <div className="code-snippet">
                            {`useEffect(() => {
  // Effect code
}, [dependencies]);`}
                        </div>
                    </div>

                    <div className="card">
                        <h4>useContext</h4>
                        <p>Access context values</p>
                        <div className="code-snippet">
                            {`const value = useContext(MyContext);`}
                        </div>
                    </div>

                    <div className="card">
                        <h4>useRef</h4>
                        <p>Access DOM elements, persist values</p>
                        <div className="code-snippet">
                            {`const inputRef = useRef(null);`}
                        </div>
                    </div>

                    <div className="card">
                        <h4>useMemo</h4>
                        <p>Memoize expensive calculations</p>
                        <div className="code-snippet">
                            {`const value = useMemo(() => compute(), [deps]);`}
                        </div>
                    </div>

                    <div className="card">
                        <h4>useCallback</h4>
                        <p>Memoize functions</p>
                        <div className="code-snippet">
                            {`const fn = useCallback(() => {}, [deps]);`}
                        </div>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Rules of Hooks:</h3>
                <ul className="feature-list">
                    <li>✅ Only call at the top level (not in loops/conditions)</li>
                    <li>✅ Only call from React functions</li>
                    <li>✅ Hooks must start with "use"</li>
                </ul>
            </section>
        </div>
    );
};

export default ReactHooks;
