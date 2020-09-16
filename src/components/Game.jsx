import React, { useState } from 'react'
import Figure from './Figure'
import Header from './Header'
import Keyboard from './Keyboard'
import Popup from './Popup'
import Word from './Word'
import WrongGuesses from './WrongGuesses'

const Game = () => {

  const [hiddenWord, setHiddenWord] = useState('Hello');

  const isWinner = false;
  const isFinished = false;

  return (
    <>
      <Header />
      <Figure />
      <WrongGuesses />
      <Word hiddenWord={hiddenWord} />
      <Keyboard />
      <Popup isWinner={isWinner} isFinished={isFinished} />
    </>
  );
}

export default Game;