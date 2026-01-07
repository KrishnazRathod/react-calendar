import React from 'react';
import LivePlayground from '../../components/LivePlayground';

const Testing = () => {
    return (
        <div className="module-container">
            <h2>Testing Strategies</h2>
            <p className="intro">
                Comprehensive testing with unit tests, integration tests, and E2E testing ensures code reliability.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Unit Testing</h3>
                    <p>Test individual functions and components in isolation.</p>
                    <pre className="code-snippet">
                        {`import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Integration Testing</h3>
                    <p>Test how multiple components work together.</p>
                    <pre className="code-snippet">
                        {`test('form submission', async () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@example.com' }
  });
  fireEvent.click(screen.getByText('Submit'));
  await waitFor(() => {
    expect(screen.getByText('Success')).toBeInTheDocument();
  });
});`}
                    </pre>
                </div>

                <div className="card">
                    <h3>E2E Testing</h3>
                    <p>Test complete user flows (Cypress, Playwright).</p>
                    <pre className="code-snippet">
                        {`cy.visit('/login');
cy.get('[data-cy=email]').type('user@test.com');
cy.get('[data-cy=password]').type('password');
cy.get('[data-cy=submit]').click();
cy.url().should('include', '/dashboard');`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Testing Tools</h3>
                    <ul className="feature-list">
                        <li><strong>Jest:</strong> Test runner</li>
                        <li><strong>React Testing Library:</strong> Component testing</li>
                        <li><strong>Cypress:</strong> E2E testing</li>
                        <li><strong>Vitest:</strong> Fast unit testing</li>
                    </ul>
                </div>
            </div>

            <section className="example-section">
                <h3>🎯 Testing Example</h3>
                <LivePlayground
                    initialCode={`
<style>
  .test { background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 8px; }
  .pass { color: #34d399; }
  .fail { color: #f87171; }
</style>

<div class="test">
  <h3>Test Results</h3>
  <div class="pass">✓ Button renders correctly</div>
  <div class="pass">✓ Form validation works</div>
  <div class="pass">✓ API call succeeds</div>
  <div class="fail">✗ Error handling test failed</div>
  <p style="margin-top: 15px; color: #94a3b8;">
    Tests: 4 | Passed: 3 | Failed: 1
  </p>
</div>
                    `}
                />
            </section>
        </div>
    );
};

export default Testing;

