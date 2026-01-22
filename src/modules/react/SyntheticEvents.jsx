import React from 'react';

const SyntheticEvents = () => {
    return (
        <div className="module-container">
            <h2>Synthetic Events in React</h2>
            <p className="intro">
                React's cross-browser wrapper around native browser events for consistency across all browsers.
            </p>

            <section className="example-section">
                <h3>Example:</h3>
                <div className="code-block">
                    <pre>{`function handleClick(e) {
  e.preventDefault(); // SyntheticEvent method
  console.log(e.type); // 'click'
  console.log(e.nativeEvent); // Access native event
}

<button onClick={handleClick}>Click me</button>`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Cross-browser compatibility</li>
                    <li>✅ Event pooling for performance</li>
                    <li>✅ Consistent API across browsers</li>
                    <li>✅ Automatic binding</li>
                </ul>
            </section>
        </div>
    );
};

export default SyntheticEvents;
