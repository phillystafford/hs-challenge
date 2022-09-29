import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

function Media() {
  const [items, setItems] = useState(() => {
    return {};
  });

  useEffect(() => {
    console.log('In useEffect');
    fetch(
      'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json'
    )
      .then((response) => response.json())
      // .then((json) => console.log(`Response - ${JSON.stringify(json)}`))
      .then((json) => setItems(json));
  }, []);

  // const mediaItems = items.map((item) => (
  //   <pre key={item.id}>{JSON.stringify(item)}</pre>
  // ));
  // return <pre className="media"> {mediaItems}</pre>;
  return (
    <>
      <div className="media">Hello</div>
      {/* {items.map((item) => {
        return <div key={item}></div>;
      })} */}
      <pre className="media">WURLD {JSON.stringify(items)}</pre>
    </>
  );
}

// Media.propTypes = {
//   description: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   ctaText: PropTypes.string.isRequired,
// };

// TODO: Make component reusable

export default Media;
