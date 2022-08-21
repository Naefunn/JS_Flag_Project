import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./continents/Home";
import Europe from "./continents/Europe";

const App = () => {
  
  
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/europe" element={< Europe />} />
      </Routes>
    </Router>
  );
}

export default App;
