import React from 'react';

const UseEffectVsUseLayoutEffect = () => {
    return (
        <div className="module-container">
            <h2>useEffect vs useLayoutEffect</h2>
            <p className="intro">
                Both run side effects, but at different times in the render cycle.
            </p>

            <section className="example-section">
                <h3>Key Difference:</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '8px' }}>
                        <thead>
                            <tr style={{ background: 'var(--bg-secondary)' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>useEffect</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>useLayoutEffect</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Timing</td>
                                <td style={{ padding: '1rem' }}>After paint (async)</td>
                                <td style={{ padding: '1rem' }}>Before paint (sync)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem' }}>Blocks painting</td>
                                <td style={{ padding: '1rem' }}>No</td>
                                <td style={{ padding: '1rem' }}>Yes</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '1rem' }}>Use for</td>
                                <td style={{ padding: '1rem' }}>Most side effects</td>
                                <td style={{ padding: '1rem' }}>DOM measurements, animations</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="example-section">
                <h3>When to Use useLayoutEffect:</h3>
                <div className="code-block">
                    <pre>{`// Measuring DOM before paint
useLayoutEffect(() => {
  const height = ref.current.offsetHeight;
  setHeight(height);
}, []);

// ✅ Use for: DOM measurements, preventing flicker
// ❌ Use useEffect for: API calls, subscriptions, most cases`}</pre>
                </div>
            </section>
        </div>
    );
};

export default UseEffectVsUseLayoutEffect;
