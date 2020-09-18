import React, { useState, useEffect } from 'react';
import Figure from './Figure';
import Header from './Header';
import Keyboard from './Keyboard';
import ResetGame from './ResetGame';
import Word from './Word';
import WrongGuesses from './WrongGuesses';

const MAX_ERRORS = 10;
const WORDS = ['almond', 'apricot', 'cashew', 'date', 'fig', 'fruit', 'grape', 'hazelnut', 'leaf', 'lemon', 'melon', 'olive', 'peach'];


const Game = () => {

  const [hiddenWord, setHiddenWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [isLoser, setIsLoser] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);


  useEffect(() => {
    checkGameScore()
  })

  function checkGameScore() {
    if (hiddenWord !== '') {
      if (hiddenWord.length === guessedLetters.length) {
        setIsPlayable(false)
        setIsWinner(true)
      }
      else if (errorCount === MAX_ERRORS) {
        setIsLoser(true)
        setIsPlayable(false)
      }
    }
  }

  function generateRandomWord() {
    let newWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    setHiddenWord(newWord);
    setIsPlayable(true)
    return newWord;
  }


  function handleGuess(letter) {
    if (hiddenWord.includes(letter)) {
      setGuessedLetters(() => [...guessedLetters, letter])
    } else {
      setWrongLetters(() => [...wrongLetters, letter])
      setErrorCount(errorCount + 1)
    }
  }

  function resetGame() {
    setHiddenWord('')
    setGuessedLetters([])
    setWrongLetters([])
    setErrorCount(0)
    setIsWinner(false)
    setIsLoser(false)
    setIsPlayable(false)
  }

  return (
    <React.Fragment>
      <Header isWinner={isWinner} isLoser={isLoser} guessedLetters={guessedLetters} hiddenWord={hiddenWord} />
      <ResetGame hiddenWord={hiddenWord} isPlayable={isPlayable} resetGame={resetGame} />
      <Figure errorCount={errorCount} isWinner={isWinner} />
      <Keyboard handleGuess={handleGuess} isPlayable={isPlayable} guessedLetters={guessedLetters} wrongLetters={wrongLetters} />
      <WrongGuesses errorCount={errorCount} />
      <Word generateRandomWord={generateRandomWord} hiddenWord={hiddenWord} guessedLetters={guessedLetters} />
    </React.Fragment >
  );
}

export default Game;