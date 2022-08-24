import React from "react";
import {Link} from "react-router-dom"
import CountryDetail from "./countryDetail";
import './countryDetail.css';



const ContinentList = ({countries, continentName, name}) => {
  
  const countryNodes = countries.map(country => {
    return (
        <CountryDetail key={country.id} country={country}></CountryDetail>
    );

  });

  return (
    <>
    <h1 className="continent-title">{name}</h1>
    <div className="country-details">
      {countryNodes}

      <div id="flag-section">
        <h3>Can you remember all the Flags? Beat the clock!</h3>
        <Link to={`/${continentName}/quiz`}><button className="flag-button">Flag quiz</button></Link>
      </div>
      <div id="flag-section">
        <h3>Can you remember all the capital cities? Beat the clock!</h3>
        <Link to={`/${continentName}/capitalquiz`}><button className="flag-button">Capital quiz</button></Link>
      </div>

    </div>

    </>

  )

};

export default ContinentList;