


import React, { useState, useEffect } from 'react';
import './CountryCapital.css';

const data = {
  "India": "New Delhi",
  "Australia" : "Canberra",
  "Japan" : "Tokyo",
  "Germany" : "Berlin",
  "UAE" : "Abu Dhabi",
};

function shuffleObject(obj) {
  const keys = Object.keys(obj);
  const shuffledKeys = shuffleArray(keys);
  const shuffledValues = shuffleArray(keys.map(key => obj[key]));

  return shuffledKeys.reduce((result, key, index) => {
    result[key] = shuffledValues[index];
    return result;
  }, {});
}

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function CountryCapital() {
  const [state, setState] = useState({
    country: '',
    capital: '',
    clickedButton: null,
    changedButton: '',
  });

   const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    setShuffledData(shuffleObject(data));
  }, []);


  const handleClick = (selectedCountry, selectedCapital) => {
    setState({
      ...state,
      country: selectedCountry,
      capital: selectedCapital,
      clickedButton: selectedCountry,
      changedButton: selectedCapital,
    });
  };


  return (
    <div>
      <h1>Country Capital Game</h1>
      {Object.entries(shuffledData).map(([key, val]) => (
        <div className="button-container" key={key}>
          <button
            onClick={() => handleClick(key, null)}
            className={state.clickedButton === key ? 'blue-button' : ''}
          >
            {key}
          </button>
          <button
            onClick={() => handleClick(null, val)}
            className={state.changedButton === val ? 'blue-button' : ''}
          >
            {val}
          </button>
        </div>
      )
      )}
    </div>
  );
}

export default CountryCapital;

























