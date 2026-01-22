import React from 'react';

const Iterator = () => {
    return (
        <div className="module-container">
            <h2>Iterators in JavaScript</h2>
            <p className="intro">
                An iterator is an object that defines a sequence and provides a <code>next()</code> method.
            </p>

            <section className="example-section">
                <h3>Basic Iterator:</h3>
                <div className="code-block">
                    <pre>{`const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    }
    return { value: undefined, done: true };
  }
};

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Built-in Iterators:</h3>
                <div className="code-block good">
                    <pre>{`// Arrays, strings, maps, sets are iterable
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }

// For...of uses iterators
for (const value of arr) {
  console.log(value); // 1, 2, 3
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Custom Iterable:</h3>
                <div className="code-block">
                    <pre>{`const range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    const last = this.end;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}`}</pre>
                </div>
            </section>
        </div>
    );
};

export default Iterator;
