import React from 'react';

const ClassVsFunctionComponent = () => {
    return (
        <div className="module-container">
            <h2>Class vs Function Components</h2>
            <p className="intro">
                React components can be written as classes or functions. Modern React favors function components with hooks.
            </p>

            <section className="example-section">
                <h3>Comparison:</h3>
                <div className="comparison-container">
                    <div className="code-block">
                        <h4>Class Component:</h4>
                        <pre>{`import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}`}</pre>
                    </div>

                    <div className="code-block good">
                        <h4>Function Component:</h4>
                        <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Key Differences:</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '8px' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Class</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Syntax</td>
                                <td style={{ padding: '1rem' }}>More verbose</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Simpler, less code</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>State</td>
                                <td style={{ padding: '1rem' }}>this.state</td>
                                <td style={{ padding: '1rem' }}>useState hook</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Lifecycle</td>
                                <td style={{ padding: '1rem' }}>Lifecycle methods</td>
                                <td style={{ padding: '1rem' }}>useEffect hook</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>Recommended</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>Legacy</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Modern approach</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ClassVsFunctionComponent;
