import React from "react";
import {Link} from "react-router-dom"
import CountryDetail from "./countryDetail";
import './countryDetail.css';



const ContinentList = ({countries}) => {
  
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

    <Link to={`/${countries[0].continent}/quiz`}><button>Flag quiz</button></Link>

    </>
  
  )

};

export default ContinentList;