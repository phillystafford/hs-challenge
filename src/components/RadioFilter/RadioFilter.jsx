import React from 'react';
import PropTypes from 'prop-types';

import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';

function RadioFilter({ type, config, onChange, checkedState }) {
  return (
    <div className="filter__container">
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
                onChange={() => onChange(name)}
              />
            );
          })}
      </FilterList>
    </div>
  );
}

RadioFilter.propTypes = {
  type: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  checkedState: PropTypes.array,
};

export default RadioFilter;
