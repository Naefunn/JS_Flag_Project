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
import AfricaCapitalQuiz from './components/AfricaCapitalQuiz';
import AsiaCapitalQuiz from './components/AsiaCapitalQuiz';
import EuropeCapitalQuiz from './components/EuropeCapitalQuiz';
import NorthAmericaCapitalQuiz from './components/NorthAmericaCapitalQuiz';
import OceaniaCapitalQuiz from './components/OceaniaCapitalQuiz';
import SouthAmericaCapitalQuiz from './components/SouthAmericaCapitalQuiz';


import Navbar from "./components/Navbar";
import Home from "./continents/Home";
import Continent from "./continents/Continent";
import Footer from './components/Footer';


const App = () => {

    const [countries, setCountries] = useState([]);
    const [europeCountries, setEuropeCountries] = useState([]);
    const [africaCountries, setAfricaCountries] = useState([]);
    const [asiaCountries, setAsiaCountries] = useState([]);
    const [southAmericaCountries, setSouthAmericaCountries] = useState([]);
    const [oceaniaCountries, setOceaniaCountries] = useState([]);
    const [northCentralAmericaCountries, setNorthCentralAmericaCountries] = useState([]);
    const [europeName, setEuropeName] = useState(null);
    const [africaName, setAfricaName] = useState(null);
    const [asiaName, setAsiaName] = useState(null);
    const [southAmericaName, setSouthAmericaName] = useState(null);
    const [oceaniaName, setOceaniaName] = useState(null);
    const [northCentralAmericaName, setNorthCentralAmericaName] = useState(null);

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
          
          setEuropeName(countries[0].Europe[0].continent)
          setSouthAmericaName(countries[1].southAmerica[0].continent)
          setAsiaName(countries[2].Asia[0].continent)
          setAfricaName(countries[3].Africa[0].continent)
          setNorthCentralAmericaName(countries[4].NorthAndCentralAmerica[0].continent)
          setOceaniaName(countries[5].Oceana[0].continent)

        })
    }




  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/Europe" element={< Continent countries={europeCountries} continentName={europeName}/>} />
        <Route path="/Africa" element={< Continent countries={africaCountries} continentName={africaName}/>} />
        <Route path="/Asia" element={< Continent countries={asiaCountries} continentName={asiaName}/>} />
        <Route path="/Oceania" element={< Continent countries={oceaniaCountries} continentName={oceaniaName}/>} />
        <Route path="/southAmerica" element={< Continent countries={southAmericaCountries} continentName={southAmericaName}/>} />
        <Route path="/NorthandCentralAmerica" element={< Continent countries={northCentralAmericaCountries} continentName={northCentralAmericaName}/>} />
       
        <Route path="/Europe/quiz" element={< EuropeQuiz quiz={EuropeQuiz} />} />
        <Route path="/Africa/quiz" element={< AfricaQuiz quiz={AfricaQuiz} />} />
        <Route path="/Asia/quiz"   element={< AsiaQuiz quiz={AsiaQuiz} />} />
        <Route path="/Oceana/quiz" element={< OceaniaQuiz quiz={OceaniaQuiz} />} />
        <Route path="/southAmerica/quiz" element={< SouthAmericaQuiz quiz={SouthAmericaQuiz} />} />
        <Route path="/Northandcentralamerica/quiz" element={< NorthAmericaQuiz quiz={NorthAmericaQuiz} />} />
       
       <Route path="/Europe/capitalquiz" element={< EuropeCapitalQuiz quiz={EuropeCapitalQuiz} />} />
        <Route path="/Africa/capitalquiz" element={< AfricaCapitalQuiz quiz={AfricaCapitalQuiz} />} />
        <Route path="/Asia/capitalquiz"   element={< AsiaCapitalQuiz quiz={AsiaCapitalQuiz} />} />
        <Route path="/Oceana/capitalquiz" element={< OceaniaCapitalQuiz quiz={OceaniaCapitalQuiz} />} />
        <Route path="/southAmerica/capitalquiz" element={< SouthAmericaCapitalQuiz quiz={SouthAmericaCapitalQuiz} />} />
        <Route path="/Northandcentralamerica/capitalquiz" element={< NorthAmericaCapitalQuiz quiz={NorthAmericaCapitalQuiz} />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );

  
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
