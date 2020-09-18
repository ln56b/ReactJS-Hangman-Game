import React from 'react';


const Header = ({ isWinner, isLoser, guessedLetters, hiddenWord }) => {

  const correctSentence =
    (isWinner)
      ? 'Well done old pal, you won !'
      : (isLoser)
        ? 'You lost...crows should be your friends now'
        : (guessedLetters.length !== hiddenWord.length)
          ? 'Pay attention, this is a dangerous World'
          : (!hiddenWord.length)
            ? 'Guess the word...or DIE'
            : 'Toto'

  return (
    < div className="header" >
      <h1>Hangman Game</h1>
      <h2>{correctSentence}</h2>
    </div >
  )
}

export default Header;