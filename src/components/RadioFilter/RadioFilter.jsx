import React from 'react';
import PropTypes from 'prop-types';

import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';

function RadioFilter({ type, config, onChange, checkedState }) {
  return (
    <div className="radio-filter__container">
      <FilterList type={type}>
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

// TODO: Add icons for down chevron, magnifying glass, checkboxes, and radio buttons? Or try change colour of default checkbox and radio buttons
export default RadioFilter;
