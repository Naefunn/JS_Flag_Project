import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";
import "./styles.css";
import './App.css';
import Home from "./continents/Home";
import Europe from "./continents/Europe";
import Africa from "./continents/Africa";
import SouthAmerica from "./continents/SouthAmerica";
import NorthAndCentralAmerica from "./continents/North&CentralAmerica";
import Asia from "./continents/Asia";
import Oceania from "./continents/Oceania";

const App = () => {

  
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/europe" element={< Europe />} />
        <Route path="/africa" element={< Africa />} />
        <Route path="/asia" element={< Asia />} />
        <Route path="/oceania" element={< Oceania />} />
        <Route path="/southamerica" element={< SouthAmerica />} />
        <Route path="/northandcentralamerica" element={< NorthAndCentralAmerica />} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
