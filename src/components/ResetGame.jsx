import React from 'react';
import PropTypes from 'prop-types';


function ResetGame({ hiddenWord, isPlayable, resetGame }) {
  return (
    <div className="reset-game">
      {!isPlayable && hiddenWord.length ? <button onClick={resetGame}>Play again</button> : null
      }
    </div>
  );
}

ResetGame.propTypes = {
  hiddenWord: PropTypes.string.isRequired,
  isPlayable: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired
}

export default ResetGame;