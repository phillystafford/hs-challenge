import React from 'react';
import PropTypes from 'prop-types';

function Separator({ title }) {
  return (
    <div className="exercise-header">
      <h2>{title}</h2>
    </div>
  );
}

Separator.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Separator;
