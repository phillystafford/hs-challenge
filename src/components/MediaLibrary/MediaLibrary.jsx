import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import MediaItem from '../MediaItem/MediaItem';
import Filter from '../Filter/Filter';
import { genreList, yearList } from '../../utils/filterConfigs';

function MediaLibrary() {
  const [mediaItems, setMediaItems] = useState(() => {
    return [];
  });
  const [filteredMediaItems, setFilteredMediaItems] = useState(() => {
    return [];
  });

  const [checkedGenreState, setCheckedGenreState] = useState(() => {
    return new Array(genreList.length).fill(false);
  });

  const [checkedYearState, setCheckedYearState] = useState(() => {
    return new Array(yearList.length).fill(false);
  });

  useEffect(() => {
    // TODO: move into an API utility file
    fetch(
      'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json'
    )
      .then((response) => response.json())
      .then((json) => setMediaItems(json.media));
  }, []);

  useEffect(() => {
    console.log(`NEW LOG checkedGenreState -> ${checkedGenreState}`);
  }, [checkedGenreState]);

  const handleCheckedGenreStateOnChange = (position) => {
    const updatedCheckedGenreState = checkedGenreState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedGenreState(updatedCheckedGenreState);
    // testFunc(`JSON.stringify(checkedState) -> ${JSON.stringify(checkedState)}`);
  };

  const handleCheckedYearStateOnChange = (position) => {
    const updatedCheckedYearState = checkedYearState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedYearState(updatedCheckedYearState);
    // testFunc(`JSON.stringify(checkedState) -> ${JSON.stringify(checkedState)}`);
  };

  return (
    <div>
      <div className="filters-container">
        <div className="top-filters">
          <div className="dropdown-filters">
            {/* <Filter config={genreList} /> */}
            <Filter
              type="genre"
              config={genreList}
              onChange={handleCheckedGenreStateOnChange}
              isChecked={checkedGenreState}
            />
            <Filter
              type="year"
              config={yearList}
              onChange={handleCheckedYearStateOnChange}
              isChecked={checkedYearState}
            />
            {/* <Filter type="year" inputType="radio" /> */}
          </div>
          <div className="search-filter">
            <input type="text" className="" placeholder="Search" />
          </div>
        </div>

        {/* <div>
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML</label>
            <input type="radio" id="lmth" name="fav_food" value="FOD" />
            <label htmlFor="lmth">FOOD</label>
          </div>
          <div>clear filters</div>
        </div> */}
      </div>
      {mediaItems && (
        <div className="media-item-container">
          {mediaItems && mediaItems.length > 0 ? (
            mediaItems
              .sort((a, b) => {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (titleA < titleB) {
                  return -1;
                }
                if (titleA > titleB) {
                  return 1;
                }
                return 0;
              })
              .map((item, index) => {
                return (
                  <MediaItem
                    key={index}
                    title={item.title}
                    year={item.year}
                    poster={item.poster}
                    genre={item.genre}
                    type={item.type}
                  />
                );
              })
          ) : (
            <div>
              Ooops :( there seems to be a problem loading the media library
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// MediaLibrary.propTypes = {
//   description: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   ctaText: PropTypes.string.isRequired,
// };

// TODO: Use context to showcase skills
// TODO: mention I would have liked to setup storybook for dev purposes etc
// TODO: Swing back for chevron caret
// TODO: fix styling on title, year and genre's
// TODO: nicer error handling

export default MediaLibrary;
