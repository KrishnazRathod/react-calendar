import React, { useState } from 'react';
import LivePlayground from '../../components/LivePlayground';

const FormHandling = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (data) => {
        const newErrors = {};
        if (!data.name.trim()) newErrors.name = 'Name is required';
        if (!data.email.includes('@')) newErrors.email = 'Valid email required';
        if (data.age && (data.age < 18 || data.age > 100)) {
            newErrors.age = 'Age must be between 18 and 100';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate(formData);
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="module-container">
            <h2>Form Handling & Validation</h2>
            <p className="intro">
                Handle forms effectively with controlled components, validation, and error management in React.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Controlled Components</h3>
                    <pre className="code-snippet">
                        {`const [value, setValue] = useState('');

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Form Validation</h3>
                    <pre className="code-snippet">
                        {`const validate = (data) => {
  const errors = {};
  if (!data.email) errors.email = 'Required';
  return errors;
};`}
                    </pre>
                </div>

                <div className="card">
                    <h3>Form Libraries</h3>
                    <ul className="feature-list">
                        <li><strong>React Hook Form:</strong> Minimal re-renders</li>
                        <li><strong>Formik:</strong> Full-featured form management</li>
                        <li><strong>Yup:</strong> Schema validation</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>Error Handling</h3>
                    <pre className="code-snippet">
                        {`{errors.email && (
  <span className="error">{errors.email}</span>
)}`}
                    </pre>
                </div>
            </div>

            <section className="example-section">
                <h3>Live Demo: Form Validation</h3>
                <form onSubmit={handleSubmit} style={{ maxWidth: '400px', padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        />
                        {errors.name && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.name}</span>}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        />
                        {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email}</span>}
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        />
                        {errors.age && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.age}</span>}
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Submit
                    </button>
                    {submitted && <p style={{ color: 'green', marginTop: '1rem' }}>✓ Form submitted successfully!</p>}
                </form>
            </section>

            <section className="example-section">
                <h3>🎯 Form Playground</h3>
                <LivePlayground
                    initialCode={`
<style>
  .form { max-width: 400px; padding: 20px; background: #f8fafc; border-radius: 8px; }
  input { width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #cbd5e1; border-radius: 4px; }
  button { padding: 10px 20px; background: #14b8a6; color: white; border: none; border-radius: 4px; cursor: pointer; }
  .error { color: red; font-size: 0.85rem; }
  .success { color: green; margin-top: 10px; }
</style>

<div class="form">
  <h3>Contact Form</h3>
  <input type="text" id="name" placeholder="Your Name">
  <input type="email" id="email" placeholder="Your Email">
  <textarea id="message" placeholder="Your Message" style="width: 100%; padding: 8px; margin: 5px 0; min-height: 80px;"></textarea>
  <button onclick="submitForm()">Send Message</button>
  <div id="result"></div>
</div>

<script>
  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const result = document.getElementById('result');
    
    if (!name || !email || !message) {
      result.innerHTML = '<p class="error">Please fill all fields</p>';
    } else {
      result.innerHTML = '<p class="success">✓ Message sent successfully!</p>';
    }
  }
</script>
                    `}
                />
            </section>
        </div>
    );
};

export default FormHandling;

