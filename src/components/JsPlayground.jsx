
import React, { useState } from 'react';
import './JsPlayground.css';

const JsPlayground = ({ initialCode = '', title = 'JS Playground' }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState([]);
    const [error, setError] = useState(null);

    const runCode = () => {
        setError(null);
        setOutput([]); // Clear previous output

        let hasLogged = false;

        // Mock console to capture output
        const mockConsole = {
            log: (...args) => {
                hasLogged = true;
                const newLog = args.map(arg =>
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' ');
                setOutput(prev => [...prev, newLog]);
            },
            warn: (...args) => {
                hasLogged = true;
                setOutput(prev => [...prev, `⚠️ ${args.join(' ')}`]);
            },
            error: (...args) => {
                hasLogged = true;
                setOutput(prev => [...prev, `🛑 ${args.join(' ')}`]);
            },
        };

        try {
            const func = new Function('console', code);
            func(mockConsole);

            // Note: We can't easily check for "no output" synchronously here because logs might come later.
            // But we can check if it was instant.
            if (!hasLogged && !code.includes('setTimeout') && !code.includes('Promise') && !code.includes('async')) {
                // only show this if it looks synchronous and empty
                setOutput(["✔️ Code ran successfully (no output immediate)"]);
            }
        } catch (err) {
            setError(err.toString());
        }
    };

    return (
        <div className="js-playground">
            <div className="js-header">
                <h4>{title}</h4>
                <button onClick={runCode} className="run-btn">
                    ▶ Run Code
                </button>
            </div>

            <div className="js-body">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck="false"
                    className="js-editor"
                />

                <div className="js-console">
                    <div className="console-label">Console Output:</div>
                    {output.map((log, i) => (
                        <div key={i} className="log-line">{log}</div>
                    ))}
                    {error && <div className="log-line error">{error}</div>}
                    {output.length === 0 && !error && (
                        <div className="empty-state">Hit "Run" to see output here...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JsPlayground;
