import React from 'react';

const CountryDetail = ({selectedCountry}) => {
  return (
      
      <div>
          <h3>{selectedCountry.name}</h3>
          <p>{selectedCountry.currency}</p>
      </div>
  )
}

export default CountryDetail;