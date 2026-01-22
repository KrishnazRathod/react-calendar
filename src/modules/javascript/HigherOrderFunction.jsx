import React from 'react';

const HigherOrderFunction = () => {
    return (
        <div className="module-container">
            <h2>Higher Order Function (HOF)</h2>
            <p className="intro">
                A <strong>Higher Order Function</strong> is a function that either takes a function as an argument,
                returns a function, or both.
            </p>

            <section className="example-section">
                <h3>Examples of HOFs:</h3>
                <div className="code-block good">
                    <pre>{`// 1. Array methods (built-in HOFs)
const numbers = [1, 2, 3, 4, 5];

numbers.map(n => n * 2);        // [2, 4, 6, 8, 10]
numbers.filter(n => n > 2);     // [3, 4, 5]
numbers.reduce((sum, n) => sum + n, 0); // 15

// 2. Custom HOF - takes function as argument
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // Logs 0, 1, 2

// 3. Returns a function
function multiplier(factor) {
  return num => num * factor;
}
const double = multiplier(2);
console.log(double(5)); // 10`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Code reusability</li>
                    <li>✅ Abstraction and composition</li>
                    <li>✅ Functional programming patterns</li>
                    <li>✅ Cleaner, more maintainable code</li>
                </ul>
            </section>
        </div>
    );
};

export default HigherOrderFunction;
