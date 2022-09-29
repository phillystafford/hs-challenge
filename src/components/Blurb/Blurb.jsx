import React from 'react';
// import PropTypes from 'prop-types';

function Blurb() {
  return (
    <div className="blurb">
      <div className="blurb__container">
        <div className="blurb__info-container">
          <p className="blurb__description">
            Gingerbread tart cupcake cake muffin cookie liquorice tiramisu.
            Toffee cupcake cake cake croissant icing carrot cake cookie. Dessert
            chocolate bar apple pie sesame snaps liquorice carrot cake cookie
            danish.
          </p>

          <span className="blurb__author">Indiana Jones, Archaeologist</span>
        </div>

        <a className="blurb__cta">Tell Me More</a>
      </div>
    </div>
  );
}

// Blurb.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Blurb;
