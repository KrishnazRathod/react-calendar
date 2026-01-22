import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const JavaScriptQuestions = () => {
    return (
        <div className="module-container">
            <h2>JavaScript Interview Questions</h2>
            <p className="intro">
                Master JavaScript interview questions covering closures, promises, async/await, this keyword, and more.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Closures</h3>
                    <ul className="feature-list">
                        <li>Function that has access to outer function's variables</li>
                        <li>Even after outer function returns</li>
                        <li>Used for data privacy and function factories</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>this Keyword</h3>
                    <ul className="feature-list">
                        <li>Regular function: <code>this</code> = caller</li>
                        <li>Arrow function: <code>this</code> = lexical scope</li>
                        <li><code>call()</code>, <code>apply()</code>, <code>bind()</code> change <code>this</code></li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Event Loop</h3>
                    <ul className="feature-list">
                        <li>Call Stack → Web APIs → Callback Queue → Event Loop</li>
                        <li>Microtasks (Promises) run before macrotasks (setTimeout)</li>
                        <li>Async code is non-blocking</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Promises vs Async/Await</h3>
                    <ul className="feature-list">
                        <li>Promises: <code>.then()</code> / <code>.catch()</code></li>
                        <li>Async/Await: Syntactic sugar for promises</li>
                        <li>Async/await is easier to read and debug</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Common JavaScript Questions</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>What is hoisting?</h4>
                        <p><strong>Answer:</strong> Variables and function declarations are moved to the top of their scope before execution.</p>
                    </div>
                    <div className="card">
                        <h4>let vs const vs var?</h4>
                        <p><strong>Answer:</strong> <code>var</code> - function scoped, hoisted; <code>let</code> - block scoped, can reassign; <code>const</code> - block scoped, cannot reassign</p>
                    </div>
                    <div className="card">
                        <h4>What is a closure?</h4>
                        <p><strong>Answer:</strong> Inner function that has access to outer function's variables even after outer function returns.</p>
                    </div>
                    <div className="card">
                        <h4>What is the difference between == and ===?</h4>
                        <p><strong>Answer:</strong> <code>==</code> compares values with type coercion, <code>===</code> compares values and types.</p>
                    </div>
                    <div className="card">
                        <h4>What is the event loop?</h4>
                        <p><strong>Answer:</strong> Mechanism that handles asynchronous operations in JavaScript.</p>
                    </div>
                    <div className="card">
                        <h4>What is a promise?</h4>
                        <p><strong>Answer:</strong> Object representing eventual completion or failure of an asynchronous operation.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🧠 Practice: Closures</h3>
                <JsPlayground
                    title="Closure Example"
                    initialCode={`// Closure Example
function outerFunction(x) {
  // Outer function's variable
  const outerVariable = x;
  
  // Inner function (closure)
  function innerFunction(y) {
    console.log('Outer variable:', outerVariable);
    console.log('Inner variable:', y);
    return outerVariable + y;
  }
  
  return innerFunction;
}

// Create closure
const closure = outerFunction(10);

// Call closure - still has access to outerVariable
console.log('Result:', closure(5));

// Another example: Counter
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log('Count:', counter.getCount());
console.log('After increment:', counter.increment());
console.log('After increment:', counter.increment());
console.log('Final count:', counter.getCount());
                    `}
                />
            </section>
        </div>
    );
};

export default JavaScriptQuestions;

