import React from 'react';

const ReactPortal = () => {
    return (
        <div className="module-container">
            <h2>React Portal</h2>
            <p className="intro">
                Portals let you render children into a DOM node outside the parent component's hierarchy.
            </p>

            <section className="example-section">
                <h3>Use Case:</h3>
                <p>Perfect for modals, tooltips, dropdowns that need to escape parent overflow/z-index.</p>
                <div className="code-block good">
                    <pre>{`import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}

// Usage
<Modal>
  <h1>I'm rendered outside parent DOM!</h1>
</Modal>`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Benefits:</h3>
                <ul className="feature-list">
                    <li>✅ Escape CSS overflow/z-index issues</li>
                    <li>✅ Modals render at document root</li>
                    <li>✅ Event bubbling still works normally</li>
                </ul>
            </section>
        </div>
    );
};

export default ReactPortal;
