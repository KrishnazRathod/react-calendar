import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const IIFE = () => {
    return (
        <div className="module-container">
            <h2>IIFE - Immediately Invoked Function Expression</h2>
            <p className="intro">
                An <strong>IIFE (Immediately Invoked Function Expression)</strong> is a JavaScript function that runs as soon
                as it is defined.
                <br /><br />
                It's a design pattern used to create a private scope and avoid polluting the global namespace.
            </p>

            <section className="example-section">
                <h3>Basic Syntax</h3>
                <div className="code-block">
                    <pre>{`// Basic IIFE structure
(function() {
  console.log("I run immediately!");
})();

// With arrow function (ES6)
(() => {
  console.log("I also run immediately!");
})();

// With parameters
(function(name) {
  console.log("Hello, " + name);
})("Krishna");`}</pre>
                </div>

                <p style={{
                    marginTop: '1.5rem',
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-color)',
                    lineHeight: '1.7'
                }}>
                    💡 <strong>Key Point:</strong> The function is wrapped in parentheses <code>()</code> to make it a function
                    expression, then immediately invoked with another set of parentheses <code>()</code>.
                </p>
            </section>

            <section className="example-section">
                <h3>Why Use IIFE?</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. Avoid Global Pollution</h4>
                        <p>
                            Variables declared inside an IIFE don't leak into the global scope, preventing naming conflicts.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Create Private Scope</h4>
                        <p>
                            Data privacy - variables inside IIFE are not accessible from outside.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Module Pattern</h4>
                        <p>
                            Before ES6 modules, IIFE was used to create module-like structures.
                        </p>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Execute Code Once</h4>
                        <p>
                            Initialization code that should run immediately without creating reusable functions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>IIFE vs Regular Function</h3>
                <div className="comparison-container">
                    <div className="code-block">
                        <h4>Regular Function:</h4>
                        <pre>{`// Declared but not executed
function greet() {
  console.log("Hello!");
}

// Must be called explicitly
greet();

// Variables leak to global
var name = "Krishna"; // Global!`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>IIFE:</h4>
                        <pre>{`// Executes immediately
(function() {
  console.log("Hello!");
})();

// No need to call

// Variables stay private
(function() {
  var name = "Krishna"; // Private!
})();
// console.log(name); // Error!`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Common Use Cases</h3>

                <h4>1. Data Privacy (Module Pattern):</h4>
                <div className="code-block good">
                    <pre>{`const counter = (function() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// console.log(count); // Error - count is private!`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>2. Avoiding Variable Conflicts:</h4>
                <div className="code-block good">
                    <pre>{`// Library A
(function() {
  var $ = "My library";
  console.log($);
})();

// Library B  
(function() {
  var $ = "Another library";
  console.log($);
})();

// No conflict! Both $ are in different scopes`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>3. Loop Variable Closure (Before ES6):</h4>
                <div className="code-block">
                    <pre>{`// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 3, 3, 3
  }, 100);
}

// Solution with IIFE
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      console.log(index); // Prints 0, 1, 2
    }, 100);
  })(i);
}

// Modern solution: use let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Prints 0, 1, 2
  }, 100);
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Modern Alternatives</h3>
                <p>
                    With ES6+, many IIFE use cases are replaced by modern features:
                </p>

                <div className="comparison-container">
                    <div className="code-block">
                        <h4>Old Way (IIFE):</h4>
                        <pre>{`(function() {
  var config = {
    apiUrl: "https://api.com"
  };
  
  function fetchData() {
    // use config
  }
})();`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>Modern Way (Modules):</h4>
                        <pre>{`// config.js
const config = {
  apiUrl: "https://api.com"
};

function fetchData() {
  // use config
}

export { config, fetchData };`}</pre>
                    </div>
                </div>

                <div className="comparison-container" style={{ marginTop: '1.5rem' }}>
                    <div className="code-block">
                        <h4>Old Way (IIFE):</h4>
                        <pre>{`(function() {
  var temp = expensive();
  process(temp);
})();`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>Modern Way (Block Scope):</h4>
                        <pre>{`{
  const temp = expensive();
  process(temp);
}`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary</h3>
                <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        background: 'var(--bg-card)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Purpose</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Execute code immediately and create private scope</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Syntax</td>
                                <td style={{ padding: '1rem' }}><code>(function() {'{'}...{'}'})();</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Benefits</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>No global pollution, data privacy, module pattern</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Modern Alternative</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>ES6 modules, block scope (let/const), arrow functions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with IIFE patterns:</p>
                <JsPlayground
                    title="IIFE Playground"
                    initialCode={`// 1. Basic IIFE
console.log("=== BASIC IIFE ===");
(function() {
  console.log("I run immediately!");
})();

// With arrow function
(() => {
  console.log("Arrow IIFE!");
})();

// 2. IIFE with parameters
console.log("\\n=== WITH PARAMETERS ===");
(function(name, age) {
  console.log(\`Hello \${name}, you are \${age} years old\`);
})("Krishna", 25);

// 3. Returning values
console.log("\\n=== RETURNING VALUES ===");
const result = (function(a, b) {
  return a + b;
})(5, 10);
console.log("Result:", result);

// 4. Module Pattern (Data Privacy)
console.log("\\n=== MODULE PATTERN ===");
const calculator = (function() {
  let history = []; // Private

  return {
    add(a, b) {
      const result = a + b;
      history.push(\`\${a} + \${b} = \${result}\`);
      return result;
    },
    getHistory() {
      return history;
    }
  };
})();

console.log(calculator.add(5, 3));
console.log(calculator.add(10, 2));
console.log("History:", calculator.getHistory());
// console.log(history); // Error - private!

// 5. Avoiding global pollution
console.log("\\n=== GLOBAL POLLUTION ===");

// Without IIFE
var globalVar = "I'm global!";

// With IIFE
(function() {
  var privateVar = "I'm private!";
  console.log("Inside IIFE:", privateVar);
})();

console.log("Global var:", globalVar);
// console.log(privateVar); // Error!

// 6. Loop closure fix
console.log("\\n=== LOOP CLOSURE FIX ===");

// Problem (with var)
for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(() => {
      console.log("IIFE solution:", index);
    }, 100);
  })(i);
}

// Modern solution (with let)
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log("Let solution:", j);
  }, 200);
}`}
                />
            </section>
        </div>
    );
};

export default IIFE;
