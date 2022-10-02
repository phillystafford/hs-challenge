import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button as FilterButton } from '..//Button/Button';

import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';

function FilterDropdown({ type, config, onChange, checkedState, buttonText }) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(() => {
    return false;
  });

  const handleIsFilterMenuOpenOnChange = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <>
      <FilterButton
        className="dropdown-filter"
        buttonText={buttonText}
        handleOnClick={handleIsFilterMenuOpenOnChange}
      />
      {isFilterMenuOpen && (
        <FilterList>
          {/* TODO: error handling really needed here? */}
          {config &&
            config.length > 0 &&
            config.map(({ name, inputType }, index) => {
              return (
                <FilterItem
                  key={index}
                  inputType={inputType}
                  id={`${type}-checkbox-${index}`}
                  name={name}
                  value={name}
                  isChecked={checkedState[index].isChecked}
                  onChange={() => onChange(checkedState[index])}
                />
              );
            })}
        </FilterList>
      )}
    </>
  );
}

FilterDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  checkedState: PropTypes.array,
};

export default FilterDropdown;
