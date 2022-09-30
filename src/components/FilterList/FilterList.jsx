import React from 'react';
import PropTypes from 'prop-types';

function FilterList({ children }) {
  return <ul className={`filter-list`}>{children}</ul>;
}

FilterList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterList;
