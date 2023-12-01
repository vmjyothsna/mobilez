import React from "react";
import "./styles.css";
import About from "./About";
import Shop from "./Shop";
import WeatherApp from "./WeatherApp";
import LoginSignup from "./Login";
import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LoginSignup/>} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/WeatherApp" element={<WeatherApp/>}/>
          <Route path="/LoginSignup" element={<LoginSignup/>}/> 
        </Routes>
        <Navbar/>
      </div>
    </Router>
  );
}

function Home() {
  return 
}
