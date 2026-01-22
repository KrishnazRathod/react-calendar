import React from 'react';

const HOC = () => {
    return (
        <div className="module-container">
            <h2>Higher Order Components (HOC)</h2>
            <p className="intro">
                A Higher Order Component is a function that takes a component and returns a new enhanced component.
            </p>

            <section className="example-section">
                <h3>Example:</h3>
                <div className="code-block good">
                    <pre>{`// HOC that adds loading functionality
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}

// Usage
const UserList = ({ users }) => (
  <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
);

const UserListWithLoading = withLoading(UserList);

// Use it
<UserListWithLoading isLoading={true} users={[]} />`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Use Cases:</h3>
                <ul className="feature-list">
                    <li>Code reuse and logic sharing</li>
                    <li>Props manipulation</li>
                    <li>State abstraction</li>
                    <li>Render hijacking</li>
                </ul>
                <p style={{ marginTop: '1rem', color: '#fbbf24' }}>
                    💡 Modern alternative: Custom Hooks (preferred in new code)
                </p>
            </section>
        </div>
    );
};

export default HOC;
