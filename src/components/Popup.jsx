import React from 'react'
import PropTypes from 'prop-types';


const Popup = ({ isWinner, isFinished }) => (
  <div className={!isFinished ? "popup" : "show"} >
    <p>
      {isWinner ? "You won !" : "Sorry, you lost"}
    </p>
  </div>
)

Popup.propTypes = {
  isWinner: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired
}

export default Popup;