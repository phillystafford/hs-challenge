import React from 'react';
import PropTypes from 'prop-types';

// TODO: explain difference between this and button
function SearchBox({ inputValue, handleOnChange }) {
  return (
    <div className="search-box__container">
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

// TODO: Add icons for down chevron, magnifying glass, checkboxes, and radio buttons? Or try change colour of default checkbox and radio buttons
export default SearchBox;
