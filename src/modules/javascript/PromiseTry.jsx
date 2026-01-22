import React from 'react';

const PromiseTry = () => {
    return (
        <div className="module-container">
            <h2>Promise.try() in JavaScript</h2>
            <p className="intro">
                <code>Promise.try()</code> is a proposed method to handle both sync and async functions uniformly.
            </p>

            <section className="example-section">
                <h3>Problem it Solves:</h3>
                <div className="code-block">
                    <pre>{`// Without Promise.try
async function getData(sync) {
  if (sync) {
    return syncFunction(); // Might throw
  } else {
    return await asyncFunction(); // Might reject
  }
}

// With Promise.try (proposal)
Promise.try(() => {
  return mightBeSyncOrAsync();
})
.then(result => console.log(result))
.catch(error => console.error(error));`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Current Workaround:</h3>
                <div className="code-block good">
                    <pre>{`// Use Promise.resolve()
Promise.resolve()
  .then(() => mightThrowOrReject())
  .then(result => console.log(result))
  .catch(error => console.error(error));`}</pre>
                </div>
            </section>
        </div>
    );
};

export default PromiseTry;
