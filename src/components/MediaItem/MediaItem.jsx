import React from 'react';
import PropTypes from 'prop-types';

function MediaItem({ title, year, poster, genre, type }) {
  return (
    <div className="media-item__container">
      <img
        alt={`The ${
          type === 'book' ? 'cover' : 'poster'
        } of the ${type} called ${title} which was released in ${year}`}
        className="media-item__poster"
        src={poster}
      />
      <div className="media-item__title">
        {title} ({year})
      </div>
      <div className="media-item__genre">Genres: {genre.join(', ')}</div>
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
