import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FilterItem({
  type = '',
  inputType,
  id,
  name,
  value,
  isChecked,
  onChange,
  icon,
}) {
  return (
    <>
      <li
        className={`filter-list__item--${inputType}${
          type.length > 0 ? `--${type}` : ''
        }`}
      >
        <FontAwesomeIcon icon={icon} />
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
    </>
  );
}

FilterItem.propTypes = {
  type: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  icon: PropTypes.func,
};

export default FilterItem;
