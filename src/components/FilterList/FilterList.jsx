import React from 'react';
import PropTypes from 'prop-types';

function FilterList({ children, type }) {
  return (
    <div className={`filter-list__container--${type}`}>
      <ul className={`filter-list__list--${type}`}>{children}</ul>
    </div>
  );
}

FilterList.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default FilterList;
