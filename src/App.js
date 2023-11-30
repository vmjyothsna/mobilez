import React from "react";
import "./style.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import WeatherApp from "./WeatherApp";
import LoginSignup from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}
