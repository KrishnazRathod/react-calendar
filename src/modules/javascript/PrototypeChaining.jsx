import React from 'react';

const PrototypeChaining = () => {
    return (
        <div className="module-container">
            <h2>Prototype Chaining</h2>
            <p className="intro">
                <strong>Prototype chaining</strong> is JavaScript's inheritance mechanism. Every object has a prototype,
                and objects inherit properties and methods from their prototype.
            </p>

            <section className="example-section">
                <h3>How it Works:</h3>
                <div className="code-block">
                    <pre>{`const person = {
  greet() { return 'Hello'; }
};

const employee = Object.create(person);
employee.work = function() { return 'Working'; };

console.log(employee.greet()); // 'Hello' - inherited
console.log(employee.work());  // 'Working' - own property

// Prototype chain: employee -> person -> Object.prototype -> null`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Key Points:</h3>
                <ul className="feature-list">
                    <li>Objects inherit from their prototype</li>
                    <li>Chain goes up until null is reached</li>
                    <li>Used for inheritance in JavaScript</li>
                    <li>Modern alternative: ES6 classes (syntactic sugar)</li>
                </ul>
            </section>
        </div>
    );
};

export default PrototypeChaining;
