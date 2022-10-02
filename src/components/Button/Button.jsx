import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, className, buttonText, handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className={`${className}__button--${type}`}>
      {buttonText}
    </button>
  );
};

// TODO: make a note about making classnames dynamic etc
// TODO: Acknowledge hot button is different than input
// TODO: Explain I made one button reusable across the app but not any other basic components (double check components)
// TODO: Add icons for down chevron, magnifying glass, checkboxes, and radio buttons? Or try change colour of default checkbox and radio buttons

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
