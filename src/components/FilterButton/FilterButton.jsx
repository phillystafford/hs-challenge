import React from 'react';
import PropTypes from 'prop-types';

function FilterButton({ type }) {
  return <button className="filter__button">{type.toUpperCase()} V</button>;
}

FilterButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default FilterButton;
