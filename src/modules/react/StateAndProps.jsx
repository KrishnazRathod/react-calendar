import React from 'react';
import JsPlayground from '../../components/JsPlayground';

const StateAndProps = () => {
    return (
        <div className="module-container">
            <h2>State and Props in React</h2>
            <p className="intro">
                <strong>State</strong> and <strong>Props</strong> are two fundamental concepts in React that control how data flows
                through your application.
                <br /><br />
                Understanding the difference between them is crucial for building React applications effectively.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Props (Properties)</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>"Read-only Data from Parent"</h4>
                    <p>
                        Props are <strong>arguments passed to components</strong>, similar to function parameters.
                        They are immutable and flow down from parent to child.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Direction:</strong> Parent → Child (one-way)</li>
                        <li><strong>Mutable:</strong> No (read-only)</li>
                        <li><strong>Changed by:</strong> Parent component</li>
                        <li><strong>Use case:</strong> Pass data and callbacks down</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>State</h3>
                    <h4 style={{ color: 'var(--primary-color)', marginTop: '1rem' }}>"Component's Internal Data"</h4>
                    <p>
                        State is <strong>private data managed within a component</strong>. When state changes,
                        the component re-renders.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Scope:</strong> Local to the component</li>
                        <li><strong>Mutable:</strong> Yes (via setState/useState)</li>
                        <li><strong>Changed by:</strong> The component itself</li>
                        <li><strong>Use case:</strong> Interactive, dynamic data</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Props Example:</h3>
                <div className="code-block good">
                    <pre>{`// Parent Component
function App() {
  return (
    <div>
      <UserCard 
        name="Krishna" 
        age={25} 
        city="Indore" 
      />
    </div>
  );
}

// Child Component (receives props)
function UserCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

// With destructuring (cleaner)
function UserCard({ name, age, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>State Example:</h3>
                <div className="code-block good">
                    <pre>{`import { useState } from 'react';

function Counter() {
  // Declare state using useState hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// State with object
function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <input 
        name="name" 
        value={formData.name}
        onChange={handleChange}
      />
      <input 
        name="email" 
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Comparison Table</h3>
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
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>Props</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-primary)', fontWeight: '600' }}>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Source</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Passed from parent component</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Created within component</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Mutable</td>
                                <td style={{ padding: '1rem', color: '#ef4444' }}>No (read-only)</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Yes (via setState)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Changed by</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Parent component</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Component itself</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Triggers Re-render</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Yes (when parent updates)</td>
                                <td style={{ padding: '1rem', color: '#22c55e' }}>Yes (when state changes)</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem', fontWeight: '600' }}>Use Case</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Configuration, static data</td>
                                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>Interactive, dynamic data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>Props + State Together</h3>
                <p>In real applications, components often use both props and state:</p>
                <div className="code-block good">
                    <pre>{`// Parent Component (has state)
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Project', completed: false }
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div>
      <h1>My Todos</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
        />
      ))}
    </div>
  );
}

// Child Component (receives props)
function TodoItem({ todo, onToggle }) {
  return (
    <div
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.text}
    </div>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Key Rules and Best Practices</h3>
                <div className="card-grid">
                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ DON'T: Modify Props</h4>
                        <div className="code-snippet">
                            {`function User({ name }) {
  name = "New Name"; // ❌ Never!
  return <h1>{name}</h1>;
}`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ DO: Use State for Changes</h4>
                        <div className="code-snippet">
                            {`function User({ initialName }) {
  const [name, setName] = useState(initialName);
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("New")}>
        Change
      </button>
    </div>
  );
}`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#ef4444' }}>❌ DON'T: Mutate State</h4>
                        <div className="code-snippet">
                            {`const [items, setItems] = useState([]);
items.push(newItem); // ❌ Never!
setItems(items);`}
                        </div>
                    </div>

                    <div className="card">
                        <h4 style={{ color: '#22c55e' }}>✅ DO: Create New State</h4>
                        <div className="code-snippet">
                            {`const [items, setItems] = useState([]);
setItems([...items, newItem]); // ✅ Good!`}
                        </div>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>🎮 Interactive Example</h3>
                <p>Here's a conceptual example showing how state and props work:</p>
                <JsPlayground
                    title="State & Props Concept Demo"
                    initialCode={`// Simulating React's State and Props concept
console.log("=== PROPS (Parent to Child) ===");

// Parent component's data
const parentData = {
  userName: "Krishna",
  userAge: 25,
  userCity: "Indore"
};

// Passing as props (read-only for child)
function ChildComponent(props) {
  console.log("Child received props:");
  console.log("  Name:", props.name);
  console.log("  Age:", props.age);
  console.log("  City:", props.city);
  
  // ❌ Cannot modify props
  // props.name = "New Name"; // Would cause issues
}

// Parent calls child with props
ChildComponent({
  name: parentData.userName,
  age: parentData.userAge,
  city: parentData.userCity
});

console.log("\\n=== STATE (Component's Own Data) ===");

// Simulating useState
class ComponentState {
  constructor(initialValue) {
    this.state = initialValue;
  }
  
  setState(newValue) {
    this.state = newValue;
    console.log("State updated! Component will re-render");
    console.log("New state:", this.state);
  }
  
  getState() {
    return this.state;
  }
}

// Component with state
const counter = new ComponentState(0);
console.log("Initial state:", counter.getState());

// Update state (triggers re-render in real React)
counter.setState(1);
counter.setState(2);
counter.setState(3);

console.log("\\n=== PROPS + STATE TOGETHER ===");

class TodoList {
  constructor() {
    this.state = {
      todos: [
        { id: 1, text: 'Learn React', done: false },
        { id: 2, text: 'Build Project', done: false }
      ]
    };
  }
  
  toggleTodo(id) {
    this.state = {
      todos: this.state.todos.map(todo =>
        todo.id === id 
          ? { ...todo, done: !todo.done }
          : todo
      )
    };
    console.log("Todo toggled! State updated:", this.state);
  }
  
  renderTodoItem(todo, onToggle) {
    // TodoItem receives props
    console.log(\`TodoItem props: \${todo.text}, done: \${todo.done}\`);
  }
  
  render() {
    this.state.todos.forEach(todo => {
      this.renderTodoItem(todo, this.toggleTodo.bind(this));
    });
  }
}

const app = new TodoList();
app.render();
app.toggleTodo(1);`}
                />
            </section>
        </div>
    );
};

export default StateAndProps;
