import React from 'react';

const Redux = () => {
    return (
        <div className="module-container">
            <h2>Redux - State Management</h2>
            <p className="intro">
                Redux is a predictable state container for JavaScript apps, commonly used with React.
            </p>

            <section className="example-section">
                <h3>Core Concepts:</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4>Store</h4>
                        <p>Single source of truth holding entire app state</p>
                    </div>
                    <div className="card">
                        <h4>Actions</h4>
                        <p>Plain objects describing what happened</p>
                    </div>
                    <div className="card">
                        <h4>Reducers</h4>
                        <p>Pure functions that update state based on actions</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>Basic Example:</h3>
                <div className="code-block">
                    <pre>{`// Action
const increment = () => ({ type: 'INCREMENT' });

// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);

// Dispatch
store.dispatch(increment());`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>With React:</h3>
                <div className="code-block">
                    <pre>{`import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      {count}
    </button>
  );
}`}</pre>
                </div>
            </section>
        </div>
    );
};

export default Redux;
