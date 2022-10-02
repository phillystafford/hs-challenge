import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ className, buttonText, handleOnClick }) => {
  return (
    <div className={`${className}__container`}>
      <button onClick={handleOnClick} className={`${className}__button`}>
        {buttonText}
      </button>
    </div>
  );
};

// TODO: make a note about making classnames dynamic etc
// TODO: Acknowledge hot button is different than button

Button.propTypes = {
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
