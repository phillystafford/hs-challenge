import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({
  type = '',
  className,
  buttonText,
  handleOnClick,
  icon = null,
}) => {
  return (
    <button
      onClick={handleOnClick}
      className={`${className}__button${type === '' ? '' : `--${type}`}`}
    >
      {buttonText}
      {icon !== null ? <FontAwesomeIcon icon={icon} /> : null}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  icon: PropTypes.object,
  buttonText: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
