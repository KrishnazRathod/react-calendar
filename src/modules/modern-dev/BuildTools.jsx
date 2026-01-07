import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const BuildTools = () => {
    return (
        <div className="module-container">
            <h2>Build Tools & Configuration</h2>
            <p className="intro">
                Modern build tools like Vite and Webpack optimize development workflow and production builds.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Vite</h3>
                    <p>Next-generation frontend tooling with instant HMR and fast builds.</p>
                    <pre className="code-snippet">
                        {`npm create vite@latest my-app
cd my-app
npm install
npm run dev`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Webpack</h3>
                    <p>Module bundler that transforms and bundles assets.</p>
                    <pre className="code-snippet">
                        {`module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Optimization</h3>
                    <ul className="feature-list">
                        <li>Code splitting</li>
                        <li>Tree shaking</li>
                        <li>Minification</li>
                        <li>Source maps</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Package Management</h3>
                    <ul className="feature-list">
                        <li><strong>npm:</strong> Node Package Manager</li>
                        <li><strong>yarn:</strong> Fast, reliable dependency management</li>
                        <li><strong>pnpm:</strong> Efficient disk space usage</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Build Configuration Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .config { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; }
  .keyword { color: #60a5fa; }
  .string { color: #34d399; }
  .comment { color: #64748b; }
</style>

<div class="config">
  <h3>vite.config.js</h3>
  <pre>
<span class="keyword">import</span> { defineConfig } <span class="keyword">from</span> <span class="string">'vite'</span>
<span class="keyword">import</span> react <span class="keyword">from</span> <span class="string">'@vitejs/plugin-react'</span>

<span class="keyword">export default</span> defineConfig({
  plugins: [react()],
  build: {
    outDir: <span class="string">'dist'</span>,
    sourcemap: <span class="keyword">true</span>,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [<span class="string">'react'</span>, <span class="string">'react-dom'</span>]
        }
      }
    }
  }
})
  </pre>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default BuildTools;

