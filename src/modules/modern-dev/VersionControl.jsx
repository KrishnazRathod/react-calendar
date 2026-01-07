import React from 'react';

const VersionControl = () => {
    return (
        <div className="module-container">
            <h2>Version Control & Git Workflows</h2>
            <p className="intro">
                Git workflows and branching strategies help teams collaborate effectively and maintain code quality.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Git Workflow</h3>
                    <pre className="code-snippet">
                        {`git clone <repository>
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Branching Strategies</h3>
                    <ul className="feature-list">
                        <li><strong>Git Flow:</strong> main, develop, feature branches</li>
                        <li><strong>GitHub Flow:</strong> main branch + feature branches</li>
                        <li><strong>Trunk-based:</strong> Short-lived feature branches</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Common Commands</h3>
                    <pre className="code-snippet">
                        {`git status
git log --oneline
git diff
git stash
git rebase`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Best Practices</h3>
                    <ul className="feature-list">
                        <li>Write clear commit messages</li>
                        <li>Keep commits atomic</li>
                        <li>Use .gitignore effectively</li>
                        <li>Review code before merging</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VersionControl;

