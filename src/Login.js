import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './App.css';

const LoginSignup = () => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleModeChange = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };

  const handlePost = () => {
    mode === 'login' ? getUser() : signUp();
  }

  const signUp = () => {
    axios.post('http://localhost:5000/register', { email, password })
      .then((response) => {
        const result = response.data;
        if (result) {
          alert("Data saved successfully, Please login");
          setEmail("");
          setPassword('');
        }
      })
      .catch((error) => {
        console.error("POST request error:", error);
        alert("User already exists, Please switch to login");
      });
  }

  const getUser = () => {
    const url = `http://localhost:5000/getuser?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

    axios.get(url)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          alert("Welcome " + email);
          setEmail("");
          setPassword('');

          setLoggedIn(true);
        } else {
          alert("User doesn't exist, please sign up first");
        }
      })
      .catch((error) => {
        console.error("GET request error:", error);
        alert("User doesn't exist, please sign up first");
      });
  }

  if (loggedIn) {
    return <Link to="/WeatherApp"><button type="button" className="logged-in-button">Search Weather for a city</button></Link>;
  }

  return (
    <div className="login-signup-container">
      <h1>{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
      <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {mode !== 'login' ? (
          <button type="submit" onClick={handlePost}>Sign Up</button>
        ) : (
         <Link><button type="submit" onClick={handlePost} >Login</button></Link>
        )}
      </form>
      <p onClick={handleModeChange}>{mode === 'login' ? 'Switch to Sign Up' : 'Switch to Login'}</p>
    </div>
  );
}

export default LoginSignup;
