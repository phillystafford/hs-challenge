import React from 'react';
import PropTypes from 'prop-types';

function FilterItem({ inputType, isChecked }) {
  const inputComponent =
    inputType === 'text' ? (
      <input type={inputType} id={inputType} name={inputType} />
    ) : (
      <>
        <input
          type={inputType}
          id={name}
          name={name}
          value={name}
          checked={isChecked}
        />
        <label htmlFor={inputType}>{inputType.toString()}</label>
      </>
    );

  return <li className="genre-checkbox">{inputComponent}</li>;
}

FilterItem.propTypes = {
  inputType: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};

export default FilterItem;
