import React from "react";
import CountrySelector from "./countrySelect";
import CountryDetail from "./countryDetail";
import onCountrySelected from "../App";
import selectedCountry from "../App";


const Continent = ({countries, onCountrySelected, selectedCountry}) => (

  <div>
    <h4>Hello</h4>

    <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
    {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} /> : null}

  </div>
  
);

export default Continent;