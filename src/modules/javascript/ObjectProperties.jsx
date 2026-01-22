import React from 'react';

const ObjectProperties = () => {
    return (
        <div className="module-container">
            <h2>Object Properties in JavaScript</h2>
            <p className="intro">
                JavaScript objects have various types of properties with different characteristics and access patterns.
            </p>

            <section className="example-section">
                <h3>Property Types:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>Data Properties</h4>
                        <p>Regular key-value pairs</p>
                        <div className="code-snippet">
                            {`const obj = { name: 'Krishna' };`}
                        </div>
                    </div>

                    <div className="card">
                        <h4>Accessor Properties</h4>
                        <p>Getters and setters</p>
                        <div className="code-snippet">
                            {`const obj = {
  get name() { return this._name; },
  set name(val) { this._name = val; }
};`}
                        </div>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Property Descriptors:</h3>
                <div className="code-block">
                    <pre>{`const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'Krishna',
  writable: true,      // Can be changed
  enumerable: true,    // Shows in for...in
  configurable: true   // Can be deleted/redefined
});

// Get descriptor
const desc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(desc);`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Common Methods:</h3>
                <div className="code-block good">
                    <pre>{`const obj = { a: 1, b: 2, c: 3 };

// Get keys, values, entries
Object.keys(obj);      // ['a', 'b', 'c']
Object.values(obj);    // [1, 2, 3]
Object.entries(obj);   // [['a', 1], ['b', 2], ['c', 3]]

// Check property
obj.hasOwnProperty('a'); // true
'a' in obj;              // true

// Prevent modification
Object.freeze(obj);      // Immutable
Object.seal(obj);        // No add/delete, can modify`}</pre>
                </div>
            </section>
        </div>
    );
};

export default ObjectProperties;
