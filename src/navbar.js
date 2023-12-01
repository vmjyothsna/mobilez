import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

 function Navbar (){

  return(
   <div className="navbar">
    <div className="logo"><h2>Weather Forecast</h2></div>
    <ul className="nav-links">
      <Link to="/WeatherApp"><h2>Home</h2></Link>
      <Link to="/about"><h2>About</h2></Link>
      <Link to="/shop"><h2>Contact</h2></Link>
      <Link to="/LoginSignup "><h2>Login</h2></Link>
    </ul>
    </div>
  );

}
export default Navbar;