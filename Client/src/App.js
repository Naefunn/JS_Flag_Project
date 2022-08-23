import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ReactDOM from "react-dom";
// import ReactTooltip from "react-tooltip";

import "./styles.css";
import './App.css';
import AfricaQuiz from './components/AfricaQuiz';
import AsiaQuiz from './components/AsiaQuiz';
import EuropeQuiz from './components/EuropeQuiz';
import NorthAmericaQuiz from './components/NorthAndCentralAmericaQuiz';
import OceaniaQuiz from './components/OceaniaQuiz';
import SouthAmericaQuiz from './components/SouthAmericaQuiz';

import Navbar from "./components/Navbar";
import Home from "./continents/Home";
import Continent from "./continents/Continent";


const App = () => {

    const [countries, setCountries] = useState([]);
    const [europeCountries, setEuropeCountries] = useState([]);
    const [africaCountries, setAfricaCountries] = useState([]);
    const [asiaCountries, setAsiaCountries] = useState([]);
    const [southAmericaCountries, setSouthAmericaCountries] = useState([]);
    const [oceaniaCountries, setOceaniaCountries] = useState([]);
    const [northCentralAmericaCountries, setNorthCentralAmericaCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = function(){
        fetch("http://localhost:9000/api/countries")
        .then(res => res.json())
        .then(countries => {
          setCountries(countries)
          setEuropeCountries(countries[0].Europe)
          setSouthAmericaCountries(countries[1].southAmerica)
          setAsiaCountries(countries[2].Asia)
          setAfricaCountries(countries[3].Africa)
          setNorthCentralAmericaCountries(countries[4].NorthAndCentralAmerica)
          setOceaniaCountries(countries[5].Oceana)
        })
    }

  
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/Europe" element={< Continent countries={europeCountries} />} />
        <Route path="/Africa" element={< Continent countries={africaCountries} />} />
        <Route path="/Asia" element={< Continent countries={asiaCountries} />} />
        <Route path="/Oceania" element={< Continent countries={oceaniaCountries} />} />
        <Route path="/southAmerica" element={< Continent countries={southAmericaCountries} />} />
        <Route path="/NorthandCentralAmerica" element={< Continent countries={northCentralAmericaCountries} />} />
        <Route path="/Europe/quiz" element={< EuropeQuiz quiz={EuropeQuiz} />} />
        <Route path="/Africa/quiz" element={< AfricaQuiz quiz={AfricaQuiz} />} />
        <Route path="/Asia/quiz"   element={< AsiaQuiz quiz={AsiaQuiz} />} />
        <Route path="/Oceana/quiz" element={< OceaniaQuiz quiz={OceaniaQuiz} />} />
        <Route path="/southAmerica/quiz" element={< SouthAmericaQuiz quiz={SouthAmericaQuiz} />} />
        <Route path="/Northandcentralamerica/quiz" element={< NorthAmericaQuiz quiz={NorthAmericaQuiz} />} />
      </Routes>
    </Router>
    </>
  );

  
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
