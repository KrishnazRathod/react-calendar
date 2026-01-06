
import React, { useState, useEffect } from 'react';

const LivePlayground = ({ initialCode = '', title = 'Live Playground', height = '300px' }) => {
    const [code, setCode] = useState(initialCode);
    const [debouncedCode, setDebouncedCode] = useState(initialCode);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedCode(code);
        }, 500); // 500ms delay to prevent flashing updates
        return () => clearTimeout(timer);
    }, [code]);

    return (
        <div className="live-playground">
            <div className="playground-header">
                <h4>{title}</h4>
                <span className="badge">Edit Code Below</span>
            </div>
            <div className="playground-body" style={{ height }}>
                <div className="editor-pane">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck="false"
                    />
                </div>
                <div className="preview-pane">
                    <iframe
                        title="preview"
                        srcDoc={debouncedCode}
                        style={{ width: '100%', height: '100%', border: 'none', background: 'white' }}
                        sandbox="allow-scripts"
                    />
                </div>
            </div>
            <div className="playground-footer">
                <button onClick={() => setCode(initialCode)}>Reset Code</button>
            </div>
        </div>
    );
};

export default LivePlayground;
