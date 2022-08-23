import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ReactDOM from "react-dom";
// import ReactTooltip from "react-tooltip";

import "./styles.css";
import './App.css';

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
        <Route path="/europe" element={< Continent countries={europeCountries} />} />
        <Route path="/africa" element={< Continent countries={africaCountries} />} />
        <Route path="/asia" element={< Continent countries={asiaCountries} />} />
        <Route path="/oceania" element={< Continent countries={oceaniaCountries} />} />
        <Route path="/southamerica" element={< Continent countries={southAmericaCountries} />} />
        <Route path="/northandcentralamerica" element={< Continent countries={northCentralAmericaCountries} />} />
      </Routes>
    </Router>
    </>
  );
  
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
