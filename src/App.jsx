import React, { useState } from 'react';
import './App.css';
import Cashflow_logo from './assets/Cashflow_logo.png';
import './Login.css'; // Make sure to import the login styles

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // If showLogin is true, render the Login component
  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  // Otherwise render the home page
  return (
    <>
      <div>
        <img src={Cashflow_logo} className="logo" alt="logo" />
      </div>
      <h2>Where you monitor your cash</h2>
      <div className="card">
        <button onClick={() => setShowLogin(true)}>LOG IN</button>
      </div>
      <br />
      <p>A project made by Team Cash-Flow</p>
    </>
  );
}

// Login Component
const Login = ({ onBack }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { employeeId, password, userType });
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Back button */}
        <button 
          onClick={onBack} 
          style={{
            background: 'none',
            border: 'none',
            color: '#667eea',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '20px',
            padding: '5px 0'
          }}
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="login-header">
          <img src= {Cashflow_logo} className="login-logo" alt="logo" />
          <h2 className="login-title">LOGIN</h2>
        </div>

        {/* User Type Selection */}
        <div className="user-type-selector">
          <button
            className={`user-type-btn ${userType === 'employee' ? 'active' : ''}`}
            onClick={() => setUserType('employee')}
            type="button"
          >
            EMPLOYEE
          </button>
          <button
            className={`user-type-btn ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => setUserType('admin')}
            type="button"
          >
            ADMIN
          </button>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">EMPLOYEE/ADMIN ID</label>
            <input
              type="text"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter you ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;