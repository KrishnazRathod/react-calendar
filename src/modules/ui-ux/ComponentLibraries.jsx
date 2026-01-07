import React from 'react';

const ComponentLibraries = () => {
    return (
        <div className="module-container">
            <h2>Component Libraries & Design Systems</h2>
            <p className="intro">
                Leverage component libraries and design systems to build consistent, accessible UIs faster.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Material-UI (MUI)</h3>
                    <p>React components implementing Google's Material Design.</p>
                    <pre className="code-snippet">
                        {`import { Button, TextField } from '@mui/material';

<Button variant="contained">Click me</Button>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Ant Design</h3>
                    <p>Enterprise-class UI design language and React components.</p>
                    <pre className="code-snippet">
                        {`import { Button, Input } from 'antd';

<Button type="primary">Submit</Button>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Chakra UI</h3>
                    <p>Simple, modular and accessible component library.</p>
                    <pre className="code-snippet">
                        {`import { Button, Box } from '@chakra-ui/react';

<Button colorScheme="blue">Click</Button>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Design Systems</h3>
                    <ul className="feature-list">
                        <li>Consistent design tokens</li>
                        <li>Reusable components</li>
                        <li>Accessibility built-in</li>
                        <li>Documentation & guidelines</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ComponentLibraries;

