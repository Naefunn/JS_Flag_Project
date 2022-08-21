import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "./styles.css";
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
