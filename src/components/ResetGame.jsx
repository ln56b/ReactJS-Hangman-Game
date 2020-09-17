import React from 'react';
import PropTypes from 'prop-types';


const ResetGame = ({ isPlayable, resetGame }) => {
  return (
    <div className="reset-game">
      {isPlayable ? null : <button onClick={resetGame}>Play again</button>
      }
    </div>
  );
}

ResetGame.propTypes = {
  isPlayable: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired
}

export default ResetGame;