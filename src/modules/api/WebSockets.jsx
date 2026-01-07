import React from 'react';

const WebSockets = () => {
    return (
        <div className="module-container">
            <h2>WebSocket & Real-time Features</h2>
            <p className="intro">
                Implement real-time communication using WebSockets for chat, notifications, and live updates.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>WebSocket Connection</h3>
                    <pre className="code-snippet">
                        {`const ws = new WebSocket('wss://example.com');

ws.onopen = () => {
  console.log('Connected');
};

ws.onmessage = (event) => {
  console.log('Message:', event.data);
};`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Socket.io (React)</h3>
                    <pre className="code-snippet">
                        {`import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('message', (data) => {
  console.log(data);
});`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Use Cases</h3>
                    <ul className="feature-list">
                        <li>Real-time chat</li>
                        <li>Live notifications</li>
                        <li>Collaborative editing</li>
                        <li>Live dashboards</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Best Practices</h3>
                    <ul className="feature-list">
                        <li>Handle reconnection</li>
                        <li>Clean up on unmount</li>
                        <li>Error handling</li>
                        <li>Heartbeat/ping</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WebSockets;

