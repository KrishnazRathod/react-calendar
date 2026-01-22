import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const Closures = () => {
    return (
        <div className="module-container">
            <h2>What is Closure?</h2>
            <p className="intro">
                A <strong>closure</strong> is one of the most powerful features of JavaScript. In simple terms:
                <br /><br />
                <em>A closure is a function that "remembers" its outer variables even after the outer function has finished executing.</em>
                <br /><br />
                Every time you create a function in JavaScript, a closure is created. It gives an inner function access to the scope of its outer function.
            </p>

            <section className="example-section">
                <h3>1. How does it work?</h3>
                <p>
                    Normally, when a function finishes running, all its local variables are destroyed (removed from memory).
                    However, if an inner function is still being used elsewhere, JavaScript keeps the outer function's variables alive.
                </p>

                <h4 style={{ marginTop: '1.5rem' }}>Example:</h4>
                <div className="code-block">
                    <pre>{`function outer() {
  let counter = 0; // This variable "lives" inside outer()

  function inner() {
    counter++; 
    console.log(counter);
  }

  return inner; // We return the function, not the value
}

const myCounter = outer(); 
myCounter(); // Output: 1
myCounter(); // Output: 2
myCounter(); // Output: 3`}</pre>
                </div>

                <p style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--primary-color)',
                    marginTop: '1.5rem'
                }}>
                    💡 In this example, even though <code>outer()</code> has finished executing, <code>myCounter</code> (the inner function)
                    still has access to the <code>counter</code> variable. This "link" is the <strong>Closure</strong>.
                </p>
            </section>

            <section className="example-section">
                <h3>2. Practical Use Cases</h3>
                <p>
                    Since you are a Full Stack Developer working with React, you likely use closures every day without realizing it.
                </p>

                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Data Privacy (Encapsulation)</h4>
                        <p>
                            You can create "private" variables that can't be accessed or changed from the outside.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Function Factories</h4>
                        <p>
                            Creating multiple functions with different preset behaviors.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>State Management</h4>
                        <p>
                            This is exactly how the <code>useState</code> hook in React works under the hood—it uses closures
                            to "remember" your state between re-renders.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>3. The "Closure in a Loop" Problem</h3>
                <p>
                    This is a classic interview question. Using <code>var</code> in a loop often causes issues because
                    <code>var</code> is function-scoped, whereas <code>let</code> creates a new closure for every iteration.
                </p>

                <div className="comparison-container">
                    <div className="code-block bad">
                        <h4>❌ The Buggy Way (var):</h4>
                        <pre>{`for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // Prints "4" three times
  }, 1000);
}`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>✅ The Modern Way (let):</h4>
                        <pre>{`for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // Prints 1, 2, 3 correctly
  }, 1000);
}`}</pre>
                    </div>
                </div>

                <p style={{
                    background: 'rgba(34, 197, 94, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginTop: '1.5rem',
                    borderLeft: '3px solid #22c55e'
                }}>
                    ✅ Using <code>let</code> creates a separate closure for each loop iteration, "locking in" the value of <code>i</code> for that specific turn.
                </p>
            </section>

            <section className="example-section">
                <h3>Summary</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Closure = Function + Lexical Environment</h4>
                        <p>
                            A closure is created when a function "remembers" the variables from its surrounding scope.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Persistent State Without Globals</h4>
                        <p>
                            It allows for persistent state without using global variables, keeping your code clean and modular.
                        </p>
                    </div>
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>Foundation for React Hooks</h4>
                        <p>
                            It is the foundation for hooks like <code>useEffect</code> and <code>useCallback</code> in React.
                        </p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with closures in this live code editor:</p>
                <JsPlayground
                    title="Closures Playground"
                    initialCode={`// 1. Basic Closure Example
console.log("=== BASIC CLOSURE ===");
function outer() {
  let counter = 0;
  
  function inner() {
    counter++;
    console.log("Counter:", counter);
  }
  
  return inner;
}

const myCounter = outer();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

// 2. Function Factory Pattern
console.log("\\n=== FUNCTION FACTORY ===");
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5)); // 10
console.log("Triple 5:", triple(5)); // 15

// 3. Private Variables
console.log("\\n=== DATA PRIVACY ===");
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit(amount) {
      balance += amount;
      console.log(\`Deposited: $\${amount}, New Balance: $\${balance}\`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(\`Withdrew: $\${amount}, New Balance: $\${balance}\`);
      } else {
        console.log("Insufficient funds!");
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log("Final Balance:", myAccount.getBalance());
// balance is NOT accessible from outside!

// 4. The Loop Problem
console.log("\\n=== LOOP CLOSURE ===");
// Using let (correct)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("With let:", i);
  }, i * 100);
}`}
                />
            </section>
        </div>
    );
};

export default Closures;
