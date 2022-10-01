import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButton from '../FilterButton/FilterButton';
import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';

function Filter({ type, config, onChange, checkedState }) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(() => {
    return false;
  });

  const handleIsFilterMenuOpenOnChange = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <div className="filter__container">
      <FilterButton type={type} onChange={handleIsFilterMenuOpenOnChange} />
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
    </div>
  );
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  checkedState: PropTypes.array,
};

export default Filter;
