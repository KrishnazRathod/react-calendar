import React from 'react';

const FormValidation = () => {
    return (
        <div className="module-container">
            <h2>Form Validation in React</h2>
            <p className="intro">
                Validate user input before submission to ensure data quality and security.
            </p>

            <section className="example-section">
                <h3>Controlled Component Validation:</h3>
                <div className="code-block good">
                    <pre>{`function LoginForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(email)) {
      newErrors.email = 'Invalid email';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span>{errors.email}</span>}
      <button>Submit</button>
    </form>
  );
}`}</pre>
                </div>
            </section>

            <section className="example-section">
                <h3>Common Validation Techniques:</h3>
                <ul className="feature-list">
                    <li>✅ Real-time validation (onChange)</li>
                    <li>✅ On-blur validation</li>
                    <li>✅ Submit validation</li>
                    <li>✅ Libraries: Formik, React Hook Form, Yup</li>
                </ul>
            </section>
        </div>
    );
};

export default FormValidation;
