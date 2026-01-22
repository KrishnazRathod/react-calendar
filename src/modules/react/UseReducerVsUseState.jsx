import React from 'react';

const UseReducerVsUseState = () => {
    return (
        <div className="module-container">
            <h2>useReducer vs useState</h2>
            <p className="intro">
                Both manage state, but <code>useReducer</code> is better for complex state logic.
            </p>

            <section className="example-section">
                <div className="comparison-container">
                    <div className="code-block">
                        <h4>useState:</h4>
                        <pre>{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  +
</button>`}</pre>
                    </div>

                    <div className="code-block">
                        <h4>useReducer:</h4>
                        <pre>{`const [state, dispatch] = useReducer(reducer, { count: 0 });

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

<button onClick={() => dispatch({ type: 'increment' })}>
  +
</button>`}</pre>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>When to Use:</h3>
                <ul className="feature-list">
                    <li><strong>useState:</strong> Simple state (strings, numbers, booleans)</li>
                    <li><strong>useReducer:</strong> Complex state logic, multiple sub-values, state transitions</li>
                </ul>
            </section>
        </div>
    );
};

export default UseReducerVsUseState;
