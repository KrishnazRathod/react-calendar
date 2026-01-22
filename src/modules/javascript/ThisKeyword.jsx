import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const ThisKeyword = () => {
    return (
        <div className="module-container">
            <h2>The 'this' Keyword</h2>
            <p className="intro">
                In JavaScript, <code>this</code> is one of the most confusing concepts because its value changes depending on
                <strong> how and where</strong> the function is called, not where it's defined.
                <br /><br />
                Think of <code>this</code> as a special variable that refers to the "context" or "owner" of the currently
                executing function.
            </p>

            <section className="example-section">
                <h3>The 4 Rules of 'this'</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>1. Global Context</h4>
                        <p>
                            In the global scope (outside any function), <code>this</code> refers to the global object
                            (<code>window</code> in browsers, <code>global</code> in Node.js).
                        </p>
                        <div className="code-snippet">
                            {`console.log(this); // window (in browser)`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>2. Function Context</h4>
                        <p>
                            In a regular function, <code>this</code> depends on how the function is called.
                        </p>
                        <div className="code-snippet">
                            {`function show() {
  console.log(this);
}
show(); // window (in non-strict mode)`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>3. Method Context</h4>
                        <p>
                            When a function is called as an object method, <code>this</code> refers to that object.
                        </p>
                        <div className="code-snippet">
                            {`const user = {
  name: 'Krishna',
  greet() {
    console.log(this.name);
  }
};
user.greet(); // 'Krishna'`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: 'var(--primary-color)' }}>4. Constructor Context</h4>
                        <p>
                            When using <code>new</code>, <code>this</code> refers to the newly created object.
                        </p>
                        <div className="code-snippet">
                            {`function Person(name) {
  this.name = name;
}
const p = new Person('Krishna');
console.log(p.name); // 'Krishna'`}
                        </div>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Arrow Functions vs Regular Functions</h3>
                <p style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-color)',
                    lineHeight: '1.7'
                }}>
                    💡 <strong>Key Difference:</strong> Arrow functions <strong>don't have their own 'this'</strong>.
                    They inherit <code>this</code> from the surrounding (lexical) scope.
                </p>

                <div className="comparison-container" style={{ marginTop: '1.5rem' }}>
                    <div className="code-block">
                        <h4>Regular Function:</h4>
                        <pre>{`const user = {
  name: 'Krishna',
  hobbies: ['coding', 'music'],
  
  showHobbies() {
    this.hobbies.forEach(function(hobby) {
      // ❌ 'this' is undefined here!
      console.log(this.name, hobby);
    });
  }
};`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>Arrow Function:</h4>
                        <pre>{`const user = {
  name: 'Krishna',
  hobbies: ['coding', 'music'],
  
  showHobbies() {
    this.hobbies.forEach((hobby) => {
      // ✅ Inherits 'this' from showHobbies
      console.log(this.name, hobby);
    });
  }
};`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Common 'this' Pitfalls</h3>

                <h4>Problem: Losing 'this' context</h4>
                <div className="code-block bad">
                    <pre>{`const user = {
  name: 'Krishna',
  greet() {
    console.log('Hello, ' + this.name);
  }
};

const greetFunc = user.greet;
greetFunc(); // ❌ undefined! ('this' is now window/undefined)`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>Solution 1: Use .bind()</h4>
                <div className="code-block good">
                    <pre>{`const greetFunc = user.greet.bind(user);
greetFunc(); // ✅ 'Hello, Krishna'`}</pre>
                </div>

                <h4 style={{ marginTop: '1.5rem' }}>Solution 2: Use arrow function in method</h4>
                <div className="code-block good">
                    <pre>{`const user = {
  name: 'Krishna',
  greet: () => {
    console.log('Hello, ' + this.name);
  }
};
// Note: This creates other issues in objects!
// Arrow functions don't bind 'this' from the object`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary Comparison</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Context</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>'this' refers to</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Global</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>window (browser) / global (Node)</td>
                                <td style={{ padding: '1rem' }}><code>console.log(this)</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Regular Function</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>window / undefined (strict mode)</td>
                                <td style={{ padding: '1rem' }}><code>function() { }</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Method</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>The object that owns the method</td>
                                <td style={{ padding: '1rem' }}><code>obj.method()</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Arrow Function</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Inherited from surrounding scope</td>
                                <td style={{ padding: '1rem' }}><code>() =&gt; { }</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Event Handler</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>The element that received the event</td>
                                <td style={{ padding: '1rem' }}><code>btn.onclick = function()</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>constructor (new)</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>The new object being created</td>
                                <td style={{ padding: '1rem' }}><code>new Person()</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Playground</h3>
                <p>Experiment with 'this' in different contexts:</p>
                <JsPlayground
                    title="'this' Keyword Playground"
                    initialCode={`// 1. Global context
console.log("=== GLOBAL CONTEXT ===");
console.log("Global this:", this);

// 2. Function context
console.log("\\n=== FUNCTION CONTEXT ===");
function regularFunc() {
  console.log("Regular function this:", this);
}
regularFunc();

// 3. Object method
console.log("\\n=== OBJECT METHOD ===");
const user = {
  name: 'Krishna',
  age: 25,
  greet() {
    console.log(\`Hi, I'm \${this.name}, age \${this.age}\`);
  }
};
user.greet();

// 4. Losing 'this' context
console.log("\\n=== LOSING CONTEXT ===");
const greetFunc = user.greet;
// greetFunc(); // Error or undefined!

// Fix with bind
const boundGreet = user.greet.bind(user);
boundGreet();

// 5. Arrow functions
console.log("\\n=== ARROW FUNCTIONS ===");
const person = {
  name: 'Krishna',
  hobbies: ['coding', 'music', 'reading'],
  
  showHobbies() {
    console.log("Using arrow function:");
    this.hobbies.forEach(hobby => {
      console.log(\`\${this.name} likes \${hobby}\`);
    });
  },
  
  showHobbiesWrong() {
    console.log("\\nUsing regular function:");
    this.hobbies.forEach(function(hobby) {
      // 'this' is undefined here!
      // console.log(\`\${this.name} likes \${hobby}\`);
      console.log("'this' is:", this);
    });
  }
};

person.showHobbies();
person.showHobbiesWrong();

// 6. Constructor function
console.log("\\n=== CONSTRUCTOR ===");
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(\`Hello from \${this.name}\`);
  };
}

const p1 = new Person('Alice', 30);
const p2 = new Person('Bob', 25);
p1.sayHello();
p2.sayHello();

// 7. call, apply, bind
console.log("\\n=== CALL, APPLY, BIND ===");
function introduce(city, country) {
  console.log(\`I'm \${this.name} from \${city}, \${country}\`);
}

const me = { name: 'Krishna' };
introduce.call(me, 'Indore', 'India');
introduce.apply(me, ['Indore', 'India']);

const myIntro = introduce.bind(me, 'Indore', 'India');
myIntro();`}
                />
            </section>
        </div >
    );
};

export default ThisKeyword;
