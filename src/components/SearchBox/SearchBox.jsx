import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBox({ inputValue, handleOnChange }) {
  return (
    <div className="search-box__container">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="search-box__input"
        type="text"
        id={`search-box`}
        name="search-box"
        value={inputValue}
        placeholder="Search for..."
        onChange={(event) => handleOnChange(event)}
      />
    </div>
  );
}

SearchBox.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default SearchBox;
