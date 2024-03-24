import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      // You can add your authentication logic here.
      // For this example, let's use a mock authentication function.
      if (email === 'user@example.com' && password === 'password') {
        // Successful login
        alert('Logged in successfully!');
      } else {
        setError('Invalid email or password');
      }
    };
  
    return (
      <div className="login-page">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default Login;