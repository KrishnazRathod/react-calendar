import React, { useState, useRef, useEffect } from 'react';
import LivePlayground from '../../components/LivePlayground';

const DOMEvents = () => {
    const [clickCount, setClickCount] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const inputRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="module-container">
            <h2>DOM Manipulation & Event Handling</h2>
            <p className="intro">
                Master DOM manipulation and event handling for interactive web applications.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>DOM Selection</h3>
                    <pre className="code-snippet">
                        {`// Vanilla JS
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('div');

// React Refs
const ref = useRef(null);
<input ref={ref} />`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Event Listeners</h3>
                    <pre className="code-snippet">
                        {`// Vanilla JS
element.addEventListener('click', handler);

// React
<button onClick={handleClick}>
  Click me
</button>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Event Delegation</h3>
                    <pre className="code-snippet">
                        {`// Listen on parent
parent.addEventListener('click', (e) => {
  if (e.target.matches('.child')) {
    // Handle click
  }
});`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Browser APIs</h3>
                    <ul className="feature-list">
                        <li>LocalStorage / SessionStorage</li>
                        <li>Geolocation API</li>
                        <li>Fetch API</li>
                        <li>Intersection Observer</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: Event Handling</h3>
                <div className="demo-area" style={{ padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <button onClick={() => setClickCount(clickCount + 1)} style={{ padding: '10px 20px', marginBottom: '1rem' }}>
                        Clicked {clickCount} times
                    </button>
                    <div style={{ marginTop: '1rem' }}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Focus me and press Enter"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    alert(`You typed: ${e.target.value}`);
                                }
                            }}
                            style={{ padding: '8px', width: '250px' }}
                        />
                    </div>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                        Mouse Position: X: {mousePosition.x}, Y: {mousePosition.y}
                    </p>
                </div>
            </section>

            <section className="example-section">
                <h3>🎯 Event Handling Playground</h3>
                <LivePlayground
                    initialCode={`
<style>
  .container { padding: 20px; }
  button { padding: 10px 20px; margin: 5px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .box { width: 100px; height: 100px; background: #14b8a6; margin: 10px 0; border-radius: 8px; transition: all 0.3s; }
  .box:hover { transform: scale(1.1); background: #0d9488; }
  input { padding: 8px; margin: 5px 0; }
</style>

<div class="container">
  <h3>Event Examples</h3>
  <button onclick="handleClick()">Click Event</button>
  <button onmouseover="handleHover()">Hover Event</button>
  <div class="box" onclick="changeColor(this)"></div>
  <input type="text" placeholder="Type and press Enter" onkeydown="handleKey(event)">
  <div id="output" style="margin-top: 15px; padding: 10px; background: #f8fafc; border-radius: 4px;"></div>
</div>

<script>
  let clickCount = 0;
  function handleClick() {
    clickCount++;
    document.getElementById('output').innerHTML = 'Button clicked ' + clickCount + ' times!';
  }
  function handleHover() {
    document.getElementById('output').innerHTML = 'Mouse hovered over button!';
  }
  function changeColor(box) {
    box.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  function handleKey(e) {
    if (e.key === 'Enter') {
      document.getElementById('output').innerHTML = 'You pressed Enter! Value: ' + e.target.value;
    }
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default DOMEvents;

