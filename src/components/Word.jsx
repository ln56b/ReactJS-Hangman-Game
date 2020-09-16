import React from 'react'

const Word = ({ hiddenWord }) => (
  <div className="word">
    {hiddenWord.split('').map(letter =>
      <h4>{letter}</h4>
    )}
  </div>
)

export default Word;