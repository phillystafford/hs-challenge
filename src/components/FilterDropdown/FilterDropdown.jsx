import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { faSquareCheck, faSquare } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button as FilterButton } from '../Button/Button';

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
        type={type}
        className="filter-dropdown"
        buttonText={buttonText}
        handleOnClick={handleIsFilterMenuOpenOnChange}
        icon={faChevronDown}
      />
      {isFilterMenuOpen && (
        <FilterList type={type}>
          {config &&
            config.length > 0 &&
            config.map(({ name, inputType }, index) => {
              return (
                <FilterItem
                  type={type}
                  key={index}
                  inputType={inputType}
                  id={`${type}-checkbox-${index}`}
                  name={name}
                  value={name}
                  isChecked={checkedState[index].isChecked}
                  onChange={() => onChange(checkedState[index])}
                  icon={
                    checkedState[index].isChecked ? faSquareCheck : faSquare
                  }
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
