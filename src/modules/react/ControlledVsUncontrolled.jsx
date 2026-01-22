import React from 'react';

const ControlledVsUncontrolled = () => {
    return (
        <div className="module-container">
            <h2>Controlled vs Uncontrolled Components</h2>
            <p className="intro">
                Form elements in React can be controlled (React manages state) or uncontrolled (DOM manages state).
            </p>

            <section className="example-section">
                <div className="comparison-container">
                    <div className="code-block good">
                        <h4>Controlled Component:</h4>
                        <pre>{`function ControlledForm() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
// React controls the value`}</pre>
                    </div>

                    <div className="code-block">
                        <h4>Uncontrolled Component:</h4>
                        <pre>{`function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} />;
}
// DOM controls the value`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>When to Use:</h3>
                <ul className="feature-list">
                    <li>✅ <strong>Controlled:</strong> Form validation, conditional rendering, most cases</li>
                    <li>⚠️ <strong>Uncontrolled:</strong> File inputs, integration with non-React code</li>
                </ul>
            </section>
        </div>
    );
};

export default ControlledVsUncontrolled;
