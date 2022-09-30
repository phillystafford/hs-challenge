import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import MediaItem from '../MediaItem/MediaItem';

function MediaLibrary() {
  const [mediaItems, setItems] = useState(() => {
    return [];
  });

  useEffect(() => {
    console.log('In useEffect');
    fetch(
      'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json'
    )
      .then((response) => response.json())
      // .then((json) => console.log(`Response - ${JSON.stringify(json)}`))
      .then((json) => setItems(json.media));
  }, []);

  console.log(mediaItems);

  const renderAllMediaItems = mediaItems
    .sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    })
    .map((item) => {
      return (
        <MediaItem
          key={`${item.name}-${item.year}`}
          title={item.title}
          year={item.year}
          poster={item.poster}
          genre={item.genre}
          type={item.type}
        />
      );
    });

  return (
    // <>
    //   <pre className="media">WURLD {JSON.stringify(items, null, 2)}</pre>
    // </>
    <div>
      {/* <div>drop down 1</div>
      <div>drop down 2</div>
      <div>search bar</div>
      <div>radio buttons</div>
      <div>clear filters</div> */}
      <div className="media-container">{renderAllMediaItems}</div>
    </div>
  );
}

// MediaLibrary.propTypes = {
//   description: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   ctaText: PropTypes.string.isRequired,
// };

// TODO: Use context to showcase skills

export default MediaLibrary;
