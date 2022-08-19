import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./continents/Home";

const App = () => {
  
  
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
      </Routes>
    </Router>
  );
}

export default App;
