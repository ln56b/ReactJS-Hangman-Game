import React from 'react';
import PropTypes from 'prop-types';


const MAX_ERRORS = 10;

function WrongGuesses({ errorCount }) {

  return (
    <div className="wrong-guesses">
      <h4>Wrong guesses</h4>
      <h3>{errorCount} / {MAX_ERRORS} </h3>
    </div>
  )
}

WrongGuesses.propTypes = {
  errorCount: PropTypes.number.isRequired
}

export default WrongGuesses;