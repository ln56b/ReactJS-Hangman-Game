import React from 'react';
import PropTypes from 'prop-types';

const alphabet = "ABCDEFGHIJKLMNOPKRSTUVWXYZ".split('');


const Keyboard = ({ handleGuess, hiddenWord }) => {

  function handleClick(e) {
    handleGuess(e.target.value)
  }

  return (
    <div className="keyboard">
      {alphabet.map((letter, index) => hiddenWord.length ?
        <button key={index} onClick={handleClick} value={letter}>{letter}</button> : null
      )}
    </div>
  )
}

Keyboard.propTypes = {
  handleGuess: PropTypes.func.isRequired
}

export default Keyboard;