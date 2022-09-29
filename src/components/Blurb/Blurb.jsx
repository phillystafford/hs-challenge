import React from 'react';
import PropTypes from 'prop-types';

function Blurb({ description, author, ctaText }) {
  return (
    <div className="blurb">
      <div className="blurb__container">
        <div className="blurb__info-container">
          <p className="blurb__description">{description}</p>

          <span className="blurb__author">{author}</span>
        </div>

        <a className="blurb__cta">{ctaText}</a>
      </div>
    </div>
  );
}

Blurb.propTypes = {
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
};

// TODO: Make component reusable

export default Blurb;
