import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButton from '../FilterButton/FilterButton';
import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';
// import { genreList } from '../../utils/filterConfigs';

function Filter({ type, config, onChange, checkedState }) {
  // const [checkedState, setCheckedState] = useState(() => {
  //   return new Array(config.length).fill(false);
  // });

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(() => {
    return false;
  });

  // console.log(`checkedState ${type} -> ${JSON.stringify(checkedState)}`);
  // console.log(`isFilterMenuOpen ${type} -> ${isFilterMenuOpen}`);

  const handleIsFilterMenuOpenOnChange = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  // console.log(
  //   '🚀 ~ file: Filter.jsx ~ line 10 ~ Filter ~ isChecked[4], isChecked[4].value ->',
  //   isChecked[4].isChecked,
  //   isChecked[4].value
  // );
  return (
    <div className="filter__container">
      <FilterButton type={type} onChange={handleIsFilterMenuOpenOnChange} />
      {isFilterMenuOpen && (
        <FilterList>
          {/* TODO: error handling really needed here? */}
          {config &&
            config.length > 0 &&
            config.map(({ name, inputType }, index) => {
              console.log(
                '🚀 ~ file: Filter.jsx ~ line 10 ~ Filter ~ checkedState[index]',
                JSON.stringify(checkedState[index])
              );
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
