import React from 'react';

const ParentChildCommunication = () => {
    return (
        <div className="module-container">
            <h2>Parent-Child Data Communication</h2>
            <p className="intro">
                React uses a <strong>unidirectional data flow</strong> - data flows down from parent to child via props,
                and events flow up via callbacks.
            </p>

            <section className="example-section">
                <h3>1. Parent to Child: Props (Default)</h3>
                <p>Pass data down through props:</p>
                <div className="code-block good">
                    <pre>{`// Parent Component
function Parent() {
  const userName = "Krishna";
  const userAge = 25;

  return (
    <Child 
      name={userName} 
      age={userAge}
    />
  );
}

// Child Component
function Child({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>2. Child to Parent: Callback Functions</h3>
                <p>Pass a function from parent to child, child calls it with data:</p>
                <div className="code-block good">
                    <pre>{`// Parent Component
function Parent() {
  const [message, setMessage] = useState('');

  const handleChildData = (data) => {
    setMessage(data);
    console.log('Received from child:', data);
  };

  return (
    <div>
      <h3>Parent received: {message}</h3>
      <Child onSendData={handleChildData} />
    </div>
  );
}

// Child Component
function Child({ onSendData }) {
  const sendToParent = () => {
    onSendData('Hello from Child!');
  };

  return (
    <button onClick={sendToParent}>
      Send Data to Parent
    </button>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>3. Sibling Communication (via Parent)</h3>
                <p>Siblings communicate through their common parent:</p>
                <div className="code-block">
                    <pre>{`function Parent() {
  const [sharedData, setSharedData] = useState('');

  return (
    <div>
      <ChildA onDataChange={setSharedData} />
      <ChildB data={sharedData} />
    </div>
  );
}

function ChildA({ onDataChange }) {
  return (
    <input 
      onChange={(e) => onDataChange(e.target.value)}
      placeholder="Type here..."
    />
  );
}

function ChildB({ data }) {
  return <p>Received from sibling: {data}</p>;
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Real-World Example: Todo App</h3>
                <div className="code-block good">
                    <pre>{`function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Child to Parent: Add todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  // Child to Parent: Toggle todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    onAdd(text);  // Send to parent
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}  // Pass callback down
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggle }) {
  return (
    <li onClick={() => onToggle(todo.id)}>  {/* Call parent's function */}
      {todo.done ? '✅' : '⭕'} {todo.text}
    </li>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Summary</h3>
                <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                    <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        background: 'var(--bg-card)',
                        borderRadius: '8px',
                        overflow: 'hidden'
                    }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Direction</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Method</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Parent → Child</td>
                                <td style={{ padding: '1rem' }}>Props</td>
                                <td style={{ padding: '1rem' }}><code>&lt;Child data=&#123;value&#125; /&gt;</code></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Child → Parent</td>
                                <td style={{ padding: '1rem' }}>Callback function</td>
                                <td style={{ padding: '1rem' }}><code>&lt;Child onData=&#123;handler&#125; /&gt;</code></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>Sibling ↔ Sibling</td>
                                <td style={{ padding: '1rem' }}>Via common parent</td>
                                <td style={{ padding: '1rem' }}>Lift state up</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ParentChildCommunication;
