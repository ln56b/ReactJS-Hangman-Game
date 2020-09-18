import React from 'react';
import PropTypes from 'prop-types';

function Word({ generateRandomWord, hiddenWord, guessedLetters }) {
  return (
    <div className="word" >
      {
        !hiddenWord.length ?
          <button onClick={generateRandomWord}>Generate word</button>
          : null
      }
      <div className="word-display">
        {hiddenWord.split('').map((letter, index) =>
          <h4 key={index}>
            {guessedLetters.includes(letter) ? letter : '_'}
          </h4>
        )}
      </div>
    </div >
  )
}

Word.propTypes = {
  generateRandomWord: PropTypes.func.isRequired,
  hiddenWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired
}

export default Word;