import React from 'react';
import PropTypes from 'prop-types';

import step0 from '../assets/step0.jpg';
import step1 from '../assets/step1.jpg';
import step2 from '../assets/step2.jpg';
import step3 from '../assets/step3.jpg';
import step4 from '../assets/step4.jpg';
import step5 from '../assets/step5.jpg';
import step6 from '../assets/step6.jpg';
import step7 from '../assets/step7.jpg';
import step8 from '../assets/step8.jpg';
import step9 from '../assets/step9.jpg';
import step10 from '../assets/step10.jpg';


const Figure = ({ errorCount }) => {

  const imageForErrorCount = [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9, step10];
  let correctFigure = imageForErrorCount.find((_, index) => index === errorCount)
  return (
    <div className="figure">
      <img src={correctFigure} alt="hangman" />
    </div>
  );
}

Figure.propTypes = {
  errorCount: PropTypes.number.isRequired
}

export default Figure;