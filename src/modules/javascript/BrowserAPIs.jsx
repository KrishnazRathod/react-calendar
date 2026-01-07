import React, { useState } from 'react';
import LivePlayground from '../../components/LivePlayground';

const BrowserAPIs = () => {
    const [storageValue, setStorageValue] = useState('');
    const [storedData, setStoredData] = useState('');

    const saveToStorage = () => {
        localStorage.setItem('testData', storageValue);
        setStoredData(localStorage.getItem('testData'));
    };

    const loadFromStorage = () => {
        setStoredData(localStorage.getItem('testData') || 'No data stored');
    };

    return (
        <div className="module-container">
            <h2>Browser APIs</h2>
            <p className="intro">
                Leverage powerful browser APIs for storage, geolocation, media, and more.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>LocalStorage</h3>
                    <pre className="code-snippet">
                        {`// Save
localStorage.setItem('key', 'value');

// Retrieve
const value = localStorage.getItem('key');

// Remove
localStorage.removeItem('key');`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Geolocation API</h3>
                    <pre className="code-snippet">
                        {`navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords);
  }
);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Intersection Observer</h3>
                    <pre className="code-snippet">
                        {`const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is visible
      }
    });
  }
);`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Other APIs</h3>
                    <ul className="feature-list">
                        <li>Fetch API</li>
                        <li>Web Workers</li>
                        <li>Media APIs</li>
                        <li>Notification API</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: LocalStorage</h3>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <input
                        type="text"
                        value={storageValue}
                        onChange={(e) => setStorageValue(e.target.value)}
                        placeholder="Enter data to store"
                        style={{ padding: '8px', width: '250px', marginRight: '8px' }}
                    />
                    <button onClick={saveToStorage} style={{ padding: '8px 16px', marginRight: '8px' }}>Save</button>
                    <button onClick={loadFromStorage} style={{ padding: '8px 16px' }}>Load</button>
                    {storedData && (
                        <p style={{ marginTop: '1rem', padding: '10px', background: '#0f172a', borderRadius: '4px', color: '#22c55e' }}>
                            Stored: {storedData}
                        </p>
                    )}
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 Browser APIs Playground</h3>
                <LivePlayground
                    initialCode={`
<style>
  .container { padding: 20px; }
  button { padding: 10px 20px; margin: 5px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .result { margin-top: 15px; padding: 15px; background: #f8fafc; border-radius: 8px; }
</style>

<div class="container">
  <h3>Browser APIs Demo</h3>
  <button onclick="getLocation()">Get Location</button>
  <button onclick="getStorage()">Get LocalStorage</button>
  <button onclick="setStorage()">Set LocalStorage</button>
  <div id="result" class="result" style="display: none;"></div>
</div>

<script>
  function getLocation() {
    const result = document.getElementById('result');
    result.style.display = 'block';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          result.innerHTML = \`
            <strong>Location:</strong><br>
            Latitude: \${position.coords.latitude}<br>
            Longitude: \${position.coords.longitude}
          \`;
        },
        () => {
          result.innerHTML = 'Geolocation not available or denied';
        }
      );
    } else {
      result.innerHTML = 'Geolocation not supported';
    }
  }
  
  function getStorage() {
    const result = document.getElementById('result');
    result.style.display = 'block';
    const data = localStorage.getItem('demoData');
    result.innerHTML = data ? \`Stored: \${data}\` : 'No data stored';
  }
  
  function setStorage() {
    localStorage.setItem('demoData', 'Hello from LocalStorage!');
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = 'Data saved to LocalStorage!';
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default BrowserAPIs;

