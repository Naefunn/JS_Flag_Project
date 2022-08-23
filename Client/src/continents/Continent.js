import React from "react";
import CountryDetail from "./countryDetail";


const Continent = ({countries, onCountrySelected, selectedCountry}) => (

  <div>
    <h4>Hello</h4>

    <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
    {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}

  </div>
  
);

export default Continent;