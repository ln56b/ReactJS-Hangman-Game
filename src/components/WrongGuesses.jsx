import React from 'react'
import PropTypes from 'prop-types';


const WrongGuesses = ({ errorCount, maxErrors }) => (

  <div className="wrong-guesses">
    <h4>Wrong guesses</h4>
    <h3>{errorCount} / {maxErrors} </h3>
  </div>
)

WrongGuesses.propTypes = {
  errorCount: PropTypes.number.isRequired
}

export default WrongGuesses;