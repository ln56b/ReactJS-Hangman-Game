import React from 'react';
import PropTypes from 'prop-types';

const ALPHABET = "ABCDEFGHIJKLMNOPRSTUVWXYZ".split('');


function Keyboard({ handleGuess, guessedLetters, wrongLetters, isPlayable }) {

  function handleClick(e) {
    handleGuess(e.target.value)
  }

  return (
    <div className="keyboard">
      {ALPHABET.map((letter, index) => isPlayable ?
        <button key={index} onClick={handleClick} value={letter} disabled={guessedLetters.includes(letter) || wrongLetters.includes(letter) ? true : false}>{letter}</button> : null
      )}
    </div>
  )
}

Keyboard.propTypes = {
  handleGuess: PropTypes.func.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  isPlayable: PropTypes.bool.isRequired,
}

export default Keyboard;