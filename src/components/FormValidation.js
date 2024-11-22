import React, { useState, useEffect } from 'react';
import './form.css';  // Import the CSS file

const FormWithValidation = () => {
    // States for form fields, submission status, and messages
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Password strength regex pattern
    const passwordStrengthPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!firstName || !lastName || !email || !password || !confirmPassword || !dob) {
            setErrorMessage('All fields are required.');
            setSuccessMessage('');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Please enter a valid email.');
            setSuccessMessage('');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            setSuccessMessage('');
            return;
        }

        if (!passwordStrengthPattern.test(password)) {
            setErrorMessage('Password must be at least 8 characters long, contain at least one letter and one number.');
            setSuccessMessage('');
            return;
        }

        // Clear error messages and show success message
        setErrorMessage('');
        setSuccessMessage('Form submitted successfully!');

        // Clear form fields after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDob('');
    };

    // Automatically clear success or error messages after a few seconds
    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
                setErrorMessage('');
            }, 5000); // Clear messages after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Form with Validation</h2>

                <label>First Name:</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="input"
                />
                <label>Last Name:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="input"
                />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input"
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input"
                />
                <label>Date of Birth:</label>
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="input"
                />

                {/* Display error message if any */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button type="submit" className="button">Submit</button>
            </form>

            {/* Display success message if form is successfully submitted */}
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default FormWithValidation;
