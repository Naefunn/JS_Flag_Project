import React from "react";
import {Link} from "react-router-dom"
import CountryDetail from "./countryDetail";
import './countryDetail.css';



const ContinentList = ({countries, continentName}) => {
  
  const countryNodes = countries.map(country => {
    return (
        <CountryDetail key={country.id} country={country}></CountryDetail>
    );

  });

  return (
    <>
    
    <div className="country-details">
      {countryNodes}
    </div>
    <div className="flag-section">
      <h3>Can you remeber all the Flags? Take the Quiz!</h3>
      <Link to={`/${continentName}/quiz`}><button className="flag-button">Flag quiz</button></Link>
    </div>

    </>

  )

};

export default ContinentList;