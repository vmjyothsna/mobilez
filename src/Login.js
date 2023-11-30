// LoginSignup.js
import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

const LoginSignup = () => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleModeChange = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  const handlePost = () => {
    axios.post('http://localhost:5000/register', { email,password })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully");
          setEmail("");
        setPassword('')
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("Something went wrong when saving data.");
      });
  }

  return (
    <div className="login-signup-container">
      <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
      <form >
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" onClick={handlePost}>{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={handleModeChange}>{mode === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}</p>
    </div>
  );
};

export default LoginSignup;
