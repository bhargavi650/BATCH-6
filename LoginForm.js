import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS file

const LoginForm = () => {
  // State for storing user credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add authentication logic here
    // For simplicity, let's just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear the form fields after submission
    setUsername('');
    setPassword('');
    alert('login successful');
  };

  return (
    <div className="login-form-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
