import React from 'react';
import PropTypes from 'prop-types';

// TODO: Remove id
function FilterItem({ inputType, id, name, value, isChecked, onChange }) {
  return (
    <>
      <li className={`filter-list__item--${inputType}`}>
        <input
          className="filter-list__input"
          type={inputType}
          id={id}
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
        />
        <label className={`filter-list__label--${inputType}`} htmlFor={id}>
          {name}
        </label>
      </li>
      {/* <div id="inputPreview">
        <input
          name="cssCheckbox"
          id="demo_opt_1"
          type="checkbox"
          className="css-checkbox"
        />
        <label htmlFor="demo_opt_1">Option 1</label>
        <input
          name="cssCheckbox"
          id="demo_opt_2"
          type="checkbox"
          className="css-checkbox"
          checked=""
        />
        <label htmlFor="demo_opt_2">Option 2</label>
        <input
          name="cssCheckbox"
          id="demo_opt_3"
          type="checkbox"
          className="css-checkbox"
        />
        <label htmlFor="demo_opt_3">Option 3</label>
      </div> */}
    </>
  );
}

FilterItem.propTypes = {
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FilterItem;
