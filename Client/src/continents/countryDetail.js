import React from 'react';

const CountryDetail = ({country}) => {
  
  return (
      
    <div>
      <h4 className="country-name">{country.name}</h4>
        <div className='country-info'>
          <ul>
            <li key={country.name}>
                <p>Population: {country.population} people</p>
                <p>Currency: {country.currency}</p>
                <p>Language: {country.language}</p>
                <p>Capital: {country.captial}</p>
                <img src={country.flag} width="200" height="150"/>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default CountryDetail;