import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ type, onChange }) {
  return (
    <button onClick={onChange} className="filter__button">
      {type.toUpperCase()} V
    </button>
  );
}

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterButton;
