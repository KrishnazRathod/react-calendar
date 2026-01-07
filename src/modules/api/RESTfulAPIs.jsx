import React, { useState } from 'react';
import LivePlayground from '../../components/LivePlayground';

const RESTfulAPIs = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) throw new Error('Failed to fetch');
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="module-container">
            <h2>RESTful API Consumption</h2>
            <p className="intro">
                Consume REST APIs effectively with proper error handling, loading states, and data fetching patterns.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Fetch API</h3>
                    <pre className="code-snippet">
                        {`const response = await fetch(url);
const data = await response.json();`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Axios</h3>
                    <pre className="code-snippet">
                        {`import axios from 'axios';

const { data } = await axios.get(url);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>React Query</h3>
                    <pre className="code-snippet">
                        {`const { data, isLoading } = useQuery(
  'todos',
  () => fetchTodos()
);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Error Handling</h3>
                    <pre className="code-snippet">
                        {`try {
  const data = await fetchData();
} catch (error) {
  setError(error.message);
}`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: API Fetching</h3>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <button onClick={fetchData} disabled={loading}>
                        {loading ? 'Loading...' : 'Fetch Post Data'}
                    </button>
                    {error && <p style={{ color: 'red', marginTop: '1rem' }}>Error: {error}</p>}
                    {data && (
                        <div style={{ marginTop: '1rem', padding: '1rem', background: '#0f172a', borderRadius: '6px' }}>
                            <p style={{ color: '#22c55e' }}>✓ Data loaded!</p>
                            <pre style={{ color: '#e2e8f0', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                {JSON.stringify(data, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 API Playground</h3>
                <LivePlayground
                    initialCode={`
<style>
  .container { padding: 20px; }
  button { padding: 10px 20px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .result { margin-top: 15px; padding: 15px; background: #f8fafc; border-radius: 8px; }
</style>

<div class="container">
  <h3>API Fetch Example</h3>
  <button onclick="fetchUser()">Fetch User Data</button>
  <div id="result" class="result" style="display: none;"></div>
</div>

<script>
  async function fetchUser() {
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = 'Loading...';
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
      result.innerHTML = \`
        <h4>User Data:</h4>
        <p><strong>Name:</strong> \${user.name}</p>
        <p><strong>Email:</strong> \${user.email}</p>
        <p><strong>Website:</strong> \${user.website}</p>
      \`;
    } catch (error) {
      result.innerHTML = '<p style="color: red;">Error: ' + error.message + '</p>';
    }
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default RESTfulAPIs;

