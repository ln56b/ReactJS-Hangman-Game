import React from 'react';

const alphabet = "ABCDEFGHIJKLMNOPKRSTUVWXYZ".toLowerCase().split('');

const Keyboard = () => (
  <div className="keyboard">
    {alphabet.map(letter =>
      <button>{letter}</button>
    )}

  </div>
)

export default Keyboard;