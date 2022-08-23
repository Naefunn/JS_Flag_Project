import React from 'react';
import './countryDetail.css';

const CountryDetail = ({country}) => {
  
  return (
      
    <div className="individual-country">
      <h4 className="country-name">{country.name}</h4>
          <ul className="country-list-details">
            <li key={country.name} className="country-info" >
                <h5 className="country-text">Population: {country.population} people</h5>
                <h5 className="country-text">Currency: {country.currency}</h5>
                <h5 className="country-text">Main language: {country.language}</h5>
                <h5 className="country-text">Capital city: {country.captial}</h5>
                <img src={country.flag} width="200" height="150" className="country-flag"/>
            </li>
          </ul>
    </div>
  )
}

export default CountryDetail;