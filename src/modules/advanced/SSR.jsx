import React from 'react';

const SSR = () => {
    return (
        <div className="module-container">
            <h2>Server-Side Rendering (SSR) & SSG</h2>
            <p className="intro">
                SSR and Static Site Generation improve SEO, initial load time, and user experience.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Next.js SSR</h3>
                    <pre className="code-snippet">
                        {`export async function getServerSideProps(context) {
  const data = await fetchData();
  return { props: { data } };
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Static Site Generation</h3>
                    <pre className="code-snippet">
                        {`export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Benefits</h3>
                    <ul className="feature-list">
                        <li>Better SEO</li>
                        <li>Faster initial load</li>
                        <li>Better Core Web Vitals</li>
                        <li>Social media previews</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Frameworks</h3>
                    <ul className="feature-list">
                        <li><strong>Next.js:</strong> React SSR/SSG</li>
                        <li><strong>Remix:</strong> Full-stack React</li>
                        <li><strong>Gatsby:</strong> Static site generator</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SSR;

