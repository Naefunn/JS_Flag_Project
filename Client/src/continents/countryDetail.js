import React from 'react';
import './countryDetail.css';

const CountryDetail = ({country}) => {
  
  return (
      
    <div className="individual-country">
      <h4 className="country-name">{country.name}</h4>
          <ul className="country-list-details">
            <li key={country.name} className="country-info" >
                <p>Population: {country.population} people</p>
                <p>Currency: {country.currency}</p>
                <p>Language: {country.language}</p>
                <p>Capital: {country.captial}</p>
                <img src={country.flag} width="200" height="150" className='country-flag'/>
            </li>
          </ul>
    </div>
  )
}

export default CountryDetail;