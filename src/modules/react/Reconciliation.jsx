import React from 'react';

const Reconciliation = () => {
    return (
        <div className="module-container">
            <h2>Reconciliation in React</h2>
            <p className="intro">
                Reconciliation is React's algorithm for efficiently updating the DOM by comparing Virtual DOM trees.
            </p>

            <section className="example-section">
                <h3>How It Works:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>1. Diffing</h4>
                        <p>Compares old and new Virtual DOM</p>
                    </div>
                    <div className="card">
                        <h4>2. Identify Changes</h4>
                        <p>Finds minimum changes needed</p>
                    </div>
                    <div className="card">
                        <h4>3. Batch Update</h4>
                        <p>Updates real DOM efficiently</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Key Optimization - Keys:</h3>
                <div className="code-block good">
                    <pre>{`// ✅ Always use unique keys in lists
{items.map(item => (
  <div key={item.id}>{item.name}</div>
))}

// ❌ Never use index as key if list can reorder
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}`}</pre>
                </div>
            </section>
        </div>
    );
};

export default Reconciliation;
