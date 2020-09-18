import React, { useState, useEffect } from 'react';
import Figure from './Figure';
import Header from './Header';
import Keyboard from './Keyboard';
import Popup from './Popup';
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
  const [isFinished, setIsFinished] = useState(false);
  const [isPlayable, setIsPlayable] = useState(true);


  useEffect(() => {
    checkGameScore()
  })

  function checkGameScore() {
    if (hiddenWord !== '') {
      if (hiddenWord.length === guessedLetters.length) {
        setIsFinished(true)
        setIsPlayable(false)
        setIsWinner(true)
      }
      else if (errorCount === MAX_ERRORS) {
        setIsLoser(true)
        setIsFinished(true)
        setIsPlayable(false)
      }
    }
  }

  function generateRandomWord() {
    let newWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    setHiddenWord(newWord);
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
    setIsFinished(false)
    setIsPlayable(true)
  }

  return (
    <React.Fragment>
      <Header isWinner={isWinner} isLoser={isLoser} guessedLetters={guessedLetters} hiddenWord={hiddenWord} />
      <Figure errorCount={errorCount} isWinner={isWinner} />
      <Keyboard handleGuess={handleGuess} hiddenWord={hiddenWord} guessedLetters={guessedLetters} wrongLetters={wrongLetters} />
      <WrongGuesses errorCount={errorCount} />
      <Word generateRandomWord={generateRandomWord} hiddenWord={hiddenWord} guessedLetters={guessedLetters} />
      <Popup isWinner={isWinner} isFinished={isFinished} />
      <ResetGame isPlayable={isPlayable} resetGame={resetGame} />
    </React.Fragment >
  );
}

export default Game;