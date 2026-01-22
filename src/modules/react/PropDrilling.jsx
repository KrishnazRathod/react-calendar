import React from 'react';

const PropDrilling = () => {
    return (
        <div className="module-container">
            <h2>Prop Drilling & How to Avoid It</h2>
            <p className="intro">
                <strong>Prop drilling</strong> is when you pass props through multiple component layers just to reach a deeply nested component.
                <br /><br />
                While not inherently bad, excessive prop drilling makes code harder to maintain and understand.
            </p>

            <section className="example-section">
                <h3>The Problem: Prop Drilling</h3>
                <div className="code-block bad">
                    <pre>{`// ❌ Prop drilling - passing through many levels
function App() {
  const [user, setUser] = useState({ name: 'Krishna', role: 'Developer' });
  
  return <Dashboard user={user} />;
}

function Dashboard({ user }) {
  return <Sidebar user={user} />;  // Just passing through
}

function Sidebar({ user }) {
  return <UserMenu user={user} />;  // Just passing through
}

function UserMenu({ user }) {
  return <UserProfile user={user} />;  // Just passing through
}

function UserProfile({ user }) {
  return <h3>{user.name}</h3>;  // Finally used here!
}`}</pre>
                </div>
                <p style={{ marginTop: '1rem', color: '#ef4444' }}>
                    ❌ Problem: Dashboard, Sidebar, and UserMenu don't need user data, but must pass it down.
                </p>
            </section>

            <section className="example-section">
                <h3>Solutions to Prop Drilling:</h3>

                <h4>1. Context API (Built-in React Solution)</h4>
                <div className="code-block good">
                    <pre>{`// ✅ Solution 1: Context API
import { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'Krishna', role: 'Developer' });
  
  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return <Sidebar />;  // No props needed!
}

function Sidebar() {
  return <UserMenu />;  // No props needed!
}

function UserProfile() {
  const user = useContext(UserContext);  // Access directly!
  return <h3>{user.name}</h3>;
}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. Component Composition</h4>
                <div className="code-block good">
                    <pre>{`// ✅ Solution 2: Component Composition
function App() {
  const user = { name: 'Krishna', role: 'Developer' };
  
  return (
    <Dashboard>
      <Sidebar>
        <UserProfile user={user} />
      </Sidebar>
    </Dashboard>
  );
}

function Dashboard({ children }) {
  return <div className="dashboard">{children}</div>;
}

function Sidebar({ children }) {
  return <aside className="sidebar">{children}</aside>;
}

function UserProfile({ user }) {
  return <h3>{user.name}</h3>;
}`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. State Management (Redux/Zustand)</h4>
                <div className="code-block">
                    <pre>{`// ✅ Solution 3: Global State (Zustand example)
import create from 'zustand';

const useUserStore = create((set) => ({
  user: { name: 'Krishna', role: 'Developer' },
  setUser: (user) => set({ user })
}));

function UserProfile() {
  const user = useUserStore(state => state.user);
  return <h3>{user.name}</h3>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>When to Use Each Solution</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Context API</h4>
                        <p><strong>Use when:</strong></p>
                        <ul className="feature-list">
                            <li>Data needed by many components</li>
                            <li>Theme, auth, language settings</li>
                            <li>Medium-sized applications</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Component Composition</h4>
                        <p><strong>Use when:</strong></p>
                        <ul className="feature-list">
                            <li>Simple prop passing scenarios</li>
                            <li>Flexible component layouts</li>
                            <li>Children pattern works</li>
                        </ul>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>State Management</h4>
                        <p><strong>Use when:</strong></p>
                        <ul className="feature-list">
                            <li>Complex state logic</li>
                            <li>Large applications</li>
                            <li>Need devtools, persistence</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary</h3>
                <div className="card">
                    <p style={{ lineHeight: '1.8' }}>
                        <strong>Prop Drilling</strong> happens when props pass through intermediate components unnecessarily.
                        <br /><br />
                        <strong>Solutions:</strong>
                    </p>
                    <ul className="feature-list">
                        <li>✅ Context API for shared data</li>
                        <li>✅ Component composition for flexibility</li>
                        <li>✅ State management for complex apps</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default PropDrilling;
