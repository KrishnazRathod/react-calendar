
import React, { useState } from 'react';

const Grid = () => {
    const [columns, setColumns] = useState('repeat(3, 1fr)');
    const [rows, setRows] = useState('auto');
    const [gap, setGap] = useState('1rem');

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gap: gap,
        minHeight: '300px',
        background: '#1e293b',
        border: '1px dashed #10b981',
        padding: '1rem'
    };

    const itemStyle = {
        background: '#10b981',
        color: '#022c22',
        padding: '1.5rem',
        borderRadius: '8px',
        display: 'grid',
        placeItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    };

    return (
        <div className="module-container">
            <h2>CSS Grid Layout</h2>
            <p className="intro">
                CSS Grid is a two-dimensional layout system. It handles both columns and rows simultaneously.
            </p>

            <div className="controls-grid">
                <div className="control-group">
                    <label>Grid Template Columns</label>
                    <select value={columns} onChange={(e) => setColumns(e.target.value)}>
                        <option value="repeat(3, 1fr)">repeat(3, 1fr) (Equal)</option>
                        <option value="1fr 2fr 1fr">1fr 2fr 1fr (Mixed)</option>
                        <option value="200px auto">200px auto (Fixed + Fluid)</option>
                        <option value="repeat(auto-fill, minmax(100px, 1fr))">Responsive (minmax)</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Gap</label>
                    <input
                        type="range"
                        min="0" max="50"
                        value={parseInt(gap)}
                        onChange={(e) => setGap(e.target.value + 'px')}
                        style={{ width: '100%' }}
                    />
                    <span>{gap}</span>
                </div>
            </div>

            <div className="demo-stage" style={containerStyle}>
                <div style={itemStyle}>1</div>
                <div style={itemStyle}>2</div>
                <div style={itemStyle}>3</div>
                <div style={itemStyle}>4</div>
                <div style={itemStyle}>5</div>
                <div style={itemStyle}>6</div>
            </div>

            <div className="code-block" style={{ marginTop: '2rem', borderColor: '#10b981' }}>
                <pre>
                    {`.container {
  display: grid;
  grid-template-columns: ${columns};
  gap: ${gap};
}`}
                </pre>
            </div>

            <section className="example-section">
                <h3>Common Pattern: The Holy Grail Layout</h3>
                <p>Grid makes complex layouts trivial.</p>
                <div style={{
                    display: 'grid',
                    gridTemplateAreas: `
                "header header"
                "sidebar main"
                "footer footer"
              `,
                    gridTemplateColumns: '200px 1fr',
                    gridTemplateRows: '60px 200px 50px',
                    gap: '5px'
                }}>
                    <div style={{ gridArea: 'header', background: '#3b82f6', padding: '10px' }}>Header</div>
                    <div style={{ gridArea: 'sidebar', background: '#6366f1', padding: '10px' }}>Sidebar</div>
                    <div style={{ gridArea: 'main', background: '#8b5cf6', padding: '10px' }}>Main Content</div>
                    <div style={{ gridArea: 'footer', background: '#a855f7', padding: '10px' }}>Footer</div>
                </div>
                <pre style={{ marginTop: '1rem', background: '#0f172a', padding: '1rem', borderRadius: '6px' }}>
                    {`.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
}`}
                </pre>
            </section>
        </div>
    );
};

export default Grid;
