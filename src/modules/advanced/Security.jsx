import React from 'react';

const Security = () => {
    return (
        <div className="module-container">
            <h2>Web Security</h2>
            <p className="intro">
                Protect applications from common vulnerabilities like XSS, CSRF, and other security threats.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>XSS Prevention</h3>
                    <p>Cross-Site Scripting attacks inject malicious scripts.</p>
                    <pre className="code-snippet">
                        {`// React automatically escapes
<div>{userInput}</div>

// Sanitize HTML if needed
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{
  __html: DOMPurify.sanitize(html)
}} />`}
                    </pre>
                </div>

                <div className="card">
                    <h3>CSRF Protection</h3>
                    <p>Cross-Site Request Forgery prevention.</p>
                    <pre className="code-snippet">
                        {`// Use CSRF tokens
headers: {
  'X-CSRF-Token': csrfToken
}

// SameSite cookies
Set-Cookie: session=abc; SameSite=Strict`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Content Security Policy</h3>
                    <pre className="code-snippet">
                        {`Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Best Practices</h3>
                    <ul className="feature-list">
                        <li>Validate and sanitize input</li>
                        <li>Use HTTPS</li>
                        <li>Implement proper authentication</li>
                        <li>Keep dependencies updated</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Security;

