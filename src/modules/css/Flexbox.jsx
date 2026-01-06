
import React, { useState } from 'react';
import LivePlayground from '../../components/LivePlayground';

const Flexbox = () => {
    const [direction, setDirection] = useState('row');
    const [justify, setJustify] = useState('flex-start');
    const [align, setAlign] = useState('stretch');
    const [wrap, setWrap] = useState('nowrap');

    const containerStyle = {
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        height: '300px',
        background: '#1e293b',
        border: '1px dashed #646cff',
        padding: '1rem',
        gap: '10px'
    };

    const itemStyle = {
        background: '#646cff',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '8px',
        minWidth: '60px',
        textAlign: 'center',
        fontWeight: 'bold'
    };

    return (
        <div className="module-container">
            <h2>CSS Flexbox Playground</h2>
            <p className="intro">
                Flexbox is designed for one-dimensional layouts (row or column). Adjust the controls below to see how properties interact.
            </p>

            <div className="controls-grid">
                <div className="control-group">
                    <label>Flex Direction</label>
                    <select value={direction} onChange={(e) => setDirection(e.target.value)}>
                        <option value="row">row</option>
                        <option value="row-reverse">row-reverse</option>
                        <option value="column">column</option>
                        <option value="column-reverse">column-reverse</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Justify Content</label>
                    <select value={justify} onChange={(e) => setJustify(e.target.value)}>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="space-between">space-between</option>
                        <option value="space-around">space-around</option>
                        <option value="space-evenly">space-evenly</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Align Items</label>
                    <select value={align} onChange={(e) => setAlign(e.target.value)}>
                        <option value="stretch">stretch</option>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="baseline">baseline</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Flex Wrap</label>
                    <select value={wrap} onChange={(e) => setWrap(e.target.value)}>
                        <option value="nowrap">nowrap</option>
                        <option value="wrap">wrap</option>
                        <option value="wrap-reverse">wrap-reverse</option>
                    </select>
                </div>
            </div>

            <div className="demo-stage" style={containerStyle}>
                <div style={itemStyle}>1</div>
                <div style={itemStyle}>2</div>
                <div style={itemStyle}>3</div>
                <div style={{ ...itemStyle, height: '100px' }}>4 (tall)</div>
                <div style={itemStyle}>5</div>
            </div>

            <div className="code-block" style={{ marginTop: '2rem' }}>
                <pre>
                    {`.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
}`}
                </pre>
            </div>

            <section className="example-section">
                <h3>🎨 Free Flexbox Sandbox</h3>
                <p>Want to go beyond the controls? Write raw CSS here.</p>
                <LivePlayground
                    initialCode={`
<style>
  .flex-container {
    display: flex;
    gap: 10px;
    background: #1e293b;
    padding: 20px;
    height: 200px;
  }
  .box {
    background: #646cff;
    color: white;
    padding: 20px;
    border-radius: 8px;
    font-weight: bold;
  }
</style>

<div class="flex-container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box" style="flex-grow: 1; background: #ec4899;">3 (Grow)</div>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default Flexbox;
