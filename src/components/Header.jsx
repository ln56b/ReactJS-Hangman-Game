import React from 'react';
import PropTypes from 'prop-types';

const WINNER_TEXT = 'Well done old pal, you won !';
const LOSER_TEXT = 'You lost. The hidden word was ';
const START_TEXT = 'Guess the word...or DIE';
const GAME_TEXT = 'Pay attention, this is a dangerous World';


function Header({ isWinner, isLoser, guessedLetters, hiddenWord }) {

  const correctSentence =
    (isWinner)
      ? WINNER_TEXT
      : (isLoser)
        ? LOSER_TEXT + hiddenWord
        : (guessedLetters.length !== hiddenWord.length)
          ? GAME_TEXT
          : (!hiddenWord.length)
            ? START_TEXT
            : ''

  return (
    < div className="header" >
      <h1>Hangman Game</h1>
      <h2>{correctSentence}</h2>
    </div >
  )
}

Header.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  isLoser: PropTypes.bool.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  hiddenWord: PropTypes.string.isRequired,
}

export default Header;