import React from 'react';
import PropTypes from 'prop-types';

const ALPHABET = "ABCDEFGHIJKLMNOPKRSTUVWXYZ".split('');


const Keyboard = ({ handleGuess, hiddenWord, guessedLetters, wrongLetters }) => {

  function handleClick(e) {
    handleGuess(e.target.value)
  }

  return (
    <div className="keyboard">
      {ALPHABET.map((letter, index) => hiddenWord.length ?
        <button key={index} onClick={handleClick} value={letter} disabled={guessedLetters.includes(letter) || wrongLetters.includes(letter) ? true : false}>{letter}</button> : null
      )}
    </div>
  )
}

Keyboard.propTypes = {
  handleGuess: PropTypes.func.isRequired,
  hiddenWord: PropTypes.string.isRequired,
}

export default Keyboard;