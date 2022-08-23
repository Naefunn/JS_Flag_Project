import React from "react";
import CountryDetail from "./countryDetail"

const ContinentList = ({countries}) => {
  
  const countryNodes = countries.map(country => {
    return (
      <CountryDetail key={country.id} country={country}></CountryDetail>
    );
  });

  return(
    <>
      {countryNodes}
    </>
  )

};

export default ContinentList;