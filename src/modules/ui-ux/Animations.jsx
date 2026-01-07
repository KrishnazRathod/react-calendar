import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const Animations = () => {
    return (
        <div className="module-container">
            <h2>Animations & Performance</h2>
            <p className="intro">
                Create smooth animations using CSS transitions, animations, and libraries like Framer Motion.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>CSS Transitions</h3>
                    <pre className="code-snippet">
                        {`.button {
  transition: all 0.3s ease;
}
.button:hover {
  transform: scale(1.1);
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>CSS Animations</h3>
                    <pre className="code-snippet">
                        {`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.element {
  animation: fadeIn 0.5s;
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Framer Motion</h3>
                    <pre className="code-snippet">
                        {`import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Performance Tips</h3>
                    <ul className="feature-list">
                        <li>Use transform and opacity</li>
                        <li>Avoid animating layout properties</li>
                        <li>Use will-change sparingly</li>
                        <li>Prefer CSS over JS animations</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Animation Playground</h3>
                <LivePlayground
                    initialCode={`
<style>
  .box {
    width: 100px;
    height: 100px;
    background: #14b8a6;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .box:hover {
    transform: scale(1.2) rotate(5deg);
    background: #0d9488;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  .animated {
    animation: bounce 1s infinite;
  }
</style>

<div style="display: flex; gap: 20px; align-items: center;">
  <div class="box"></div>
  <div class="box animated"></div>
</div>
<p style="margin-top: 20px; color: #666;">Hover over the first box, watch the second bounce!</p>
                    `}
                />
            </section>
        </div>
    );
};

export default Animations;

