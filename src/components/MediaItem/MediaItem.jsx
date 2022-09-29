import React from 'react';
// import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function MediaItem({ title, year, poster, genre, type }) {
  console.log('in MediaItem');
  return (
    <div className="media-item__container">
      <img className="media-item__poster" src={poster} />
      <div className="media-item__title">
        {title} ({year})
      </div>
      <div className="media-item__genre">{genre}</div>
      <div className="media-item__type">{type}</div>
    </div>
  );
}

MediaItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

export default MediaItem;
