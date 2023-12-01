import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo"><h2>WeatherApp</h2></div>
      <ul className="nav-links">
        <Link to="/WeatherApp"><h2>Home</h2></Link>
        <Link to="/about"><h2>About</h2></Link>
        <Link to="/shop"><h2>Contact</h2></Link>
        
      </ul>
    </div>
  );
}
