import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Fitures from "./pages/Fitures";
import Team from "./pages/Team";


//Styles
import "./App.css";

function App() {
  return(
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/fixtures" element={<Fitures />} />
            <Route path="/team" element={<Team />} />
          </Routes>

        </div>
      </Router>
  )
}
export default App;
