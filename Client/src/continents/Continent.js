import React from "react";
import CountryDetail from "./countryDetail";
import './countryDetail.css';



const ContinentList = ({countries}) => {
  
  const countryNodes = countries.map(country => {
    return (
        <CountryDetail key={country.id} country={country}></CountryDetail>
    );
  });

  return (
    <div className="country-details">
      {countryNodes}
    </div>



  )

};

export default ContinentList;