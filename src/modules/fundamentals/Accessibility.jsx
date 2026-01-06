
import React, { useState } from 'react';

const Accessibility = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="module-container">
            <h2>Accessibility (A11y) & ARIA</h2>
            <p className="intro">
                Web accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them.
            </p>

            <section className="example-section">
                <h3>The <code>button</code> vs <code>div</code> Dilemma</h3>
                <p>Clicking a <code>div</code> implies no semantic meaning. A <code>button</code> comes with keyboard focus and active states by default.</p>

                <div className="demo-area">
                    <div className="demo-item">
                        <div
                            className="fake-button"
                            onClick={() => alert('Clicked div!')}
                        >
                            I am a DIV (Try Tabbing to me)
                        </div>
                        <p className="note">Cannot be focused with Tab key.</p>
                    </div>

                    <div className="demo-item">
                        <button onClick={() => alert('Clicked button!')}>
                            I am a BUTTON
                        </button>
                        <p className="note">Focusable, supports Enter/Space.</p>
                    </div>
                </div>
            </section>

            <section className="example-section">
                <h3>ARIA Labels for Icons</h3>
                <p>When using icon-only buttons, screen readers typically read nothing unless you provide a label.</p>

                <div className="demo-area">
                    <button className="icon-btn" aria-label="Close Menu">
                        <span aria-hidden="true">✖</span>
                    </button>
                    <span className="code-snippet">aria-label="Close Menu"</span>
                </div>
            </section>

            <section className="example-section">
                <h3>ARIA Expanded State</h3>
                <p>Use <code>aria-expanded</code> to inform screen readers about collapsible content.</p>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls="content-1"
                    className="toggle-btn"
                >
                    {isOpen ? 'Collapse' : 'Expand'} Details
                </button>

                {isOpen && (
                    <div id="content-1" className="p-4 bg-gray-800 mt-2 rounded">
                        This content is conditionally visible. The screen reader knows it is expanded.
                    </div>
                )}
            </section>
        </div>
    );
};

export default Accessibility;
