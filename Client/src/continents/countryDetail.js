import React from 'react';

const CountryDetail = ({selectedCountry}) => {
  return (
      
      <div>
          <h3>Country Name: {selectedCountry.name}</h3> 
          <p>Population: {selectedCountry.population} people</p>
          <p>Currency: {selectedCountry.currency}</p>
          <p>Language: {selectedCountry.language}</p>
          <p>Capital: {selectedCountry.captial}</p>
          <img src={selectedCountry.flag} />

      </div>
  )
}

export default CountryDetail;