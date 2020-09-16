import React from 'react'


const Popup = ({ isWinner, isFinished }) => (
  <div className={!isFinished ? "popup" : "show"} >
    <p>
      {isWinner ? "You won !" : "Sorry, try again"}
    </p>
  </div>
)

export default Popup;