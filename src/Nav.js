import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo">WeatherApp</div>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/WeatherApp">Weather</Link>
        <Link to="/LoginSignup ">Login</Link>      </ul>
    </div>
  );
}
