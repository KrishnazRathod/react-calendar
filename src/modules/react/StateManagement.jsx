import React, { createContext, useContext, useState, useReducer } from 'react';
import LivePlayground from '../../components/LivePlayground';

// Context API Example
const ThemeContext = createContext();

const StateManagement = () => {
    const [theme, setTheme] = useState('light');
    const [count, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                return state;
        }
    }, 0);

    return (
        <div className="module-container">
            <h2>State Management Patterns</h2>
            <p className="intro">
                Managing state effectively is crucial. React offers Context API for prop drilling, Redux for complex apps, and Zustand for simplicity.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Context API</h3>
                    <p>Share state across components without prop drilling.</p>
                    <pre className="code-snippet">
                        {`const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>useReducer</h3>
                    <p>Manage complex state logic with reducers (Redux pattern).</p>
                    <pre className="code-snippet">
                        {`const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'increment' });`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Redux</h3>
                    <p>Predictable state container for JavaScript apps. Best for large applications.</p>
                    <pre className="code-snippet">
                        {`// Store, Actions, Reducers
const store = createStore(reducer);
store.dispatch({ type: 'ACTION' });`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Zustand</h3>
                    <p>Lightweight state management with minimal boilerplate.</p>
                    <pre className="code-snippet">
                        {`const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: useReducer</h3>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <p>Count: <strong>{count}</strong></p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 Context API Playground</h3>
                <p>Try implementing a theme context:</p>
                <LivePlayground
                    initialCode={`
<style>
  .app { padding: 20px; }
  .light { background: white; color: black; }
  .dark { background: #1e293b; color: white; }
  button { padding: 8px 16px; margin: 5px; }
</style>

<div class="app light" id="app">
  <h2>Theme Context Example</h2>
  <p>Current theme: <span id="theme">light</span></p>
  <button onclick="toggleTheme()">Toggle Theme</button>
</div>

<script>
  let currentTheme = 'light';
  
  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    const app = document.getElementById('app');
    const themeSpan = document.getElementById('theme');
    app.className = 'app ' + currentTheme;
    themeSpan.textContent = currentTheme;
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default StateManagement;

