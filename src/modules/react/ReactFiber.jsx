import React from 'react';

const ReactFiber = () => {
    return (
        <div className="module-container">
            <h2>React Fiber</h2>
            <p className="intro">
                Fiber is React's reconciliation algorithm rewrite, enabling incremental rendering and better performance.
            </p>

            <section className="example-section">
                <h3>Key Improvements:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>Incremental Rendering</h4>
                        <p>Split work into chunks, pause and resume</p>
                    </div>
                    <div className="card">
                        <h4>Priority Updates</h4>
                        <p>Prioritize urgent updates over less important ones</p>
                    </div>
                    <div className="card">
                        <h4>Better Error Handling</h4>
                        <p>Error boundaries and better recovery</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Smoother animations</li>
                    <li>✅ Better perceived performance</li>
                    <li>✅ Can pause/abort/reuse work</li>
                    <li>✅ Foundation for Concurrent Mode</li>
                </ul>
            </section>
        </div>
    );
};

export default ReactFiber;
