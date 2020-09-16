import React, { useState } from 'react'
import Header from './Header'
import Notification from './Notification'
import Popup from './Popup'
import Word from './Word'
import WrongLetters from './WrongLetters'

const Game = () => {
  return (
    <>
      <Header />
      <div>
        <WrongLetters />
        <Word />
      </div>
      <Popup />
      <Notification />
    </>
  );
}

export default Game;