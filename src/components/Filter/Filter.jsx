import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButton from '../FilterButton/FilterButton';
import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';
// import { genreList } from '../../utils/filterConfigs';

function Filter({ type, config }) {
  const [checkedState, setCheckedState] = useState(() => {
    return new Array(config.length).fill(false);
  });

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(() => {
    return false;
  });

  console.log(`checkedState ${type} -> ${JSON.stringify(checkedState)}`);
  console.log(`isFilterMenuOpen ${type} -> ${isFilterMenuOpen}`);

  const handleIsFilterMenuOpenOnChange = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleCheckedStateOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="filter__container">
      <FilterButton type={type} onChange={handleIsFilterMenuOpenOnChange} />
      {isFilterMenuOpen && (
        <FilterList>
          {config.length > 0 &&
            config.map(({ name, inputType }, index) => {
              return (
                <FilterItem
                  key={index}
                  inputType={inputType}
                  id={`${type}-checkbox-${index}`}
                  name={name}
                  value={name}
                  isChecked={checkedState[index]}
                  onChange={() => handleCheckedStateOnChange(index)}
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
};

export default Filter;
