import React from 'react';

const PureComponents = () => {
    return (
        <div className="module-container">
            <h2>Pure Components</h2>
            <p className="intro">
                <strong>Pure components</strong> only re-render when props or state change (shallow comparison).
            </p>

            <section className="example-section">
                <h3>Class Pure Component:</h3>
                <div className="code-block">
                    <pre>{`import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}
// Automatically does shallow comparison`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Function Component with React.memo:</h3>
                <div className="code-block good">
                    <pre>{`const MyComponent = React.memo(({ name }) => {
  return <div>{name}</div>;
});
// Same as PureComponent for functions`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Pure vs Impure:</h3>
                <ul className="feature-list">
                    <li><strong>Pure:</strong> Same input → same output, no side effects</li>
                    <li><strong>Impure:</strong> May have side effects, unpredictable output</li>
                </ul>
            </section>
        </div>
    );
};

export default PureComponents;
