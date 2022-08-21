import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

import Home from "./continents/Home";
import Europe from "./continents/Europe";


const App = () => {
  
  
  
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/europe" element={< Europe />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
