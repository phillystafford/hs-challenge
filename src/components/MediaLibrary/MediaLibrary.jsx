import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import MediaItem from '../MediaItem/MediaItem';
import Filter from '../Filter/Filter';
import { genreList, yearList } from '../../utils/filterConfigs';

function MediaLibrary() {
  const [mediaItems, setMediaItems] = useState(() => {
    return [];
  });
  const [filteredGenreItems, setFilteredGenreItems] = useState(() => {
    return [];
  });
  const [filteredYearItems, setFilteredYearItems] = useState(() => {
    return [];
  });

  const [checkedGenreState, setCheckedGenreState] = useState(() => {
    // TODO: try to use name of item as key. i.e. {action: false}
    return genreList.map((item) => {
      return { value: item.name, isChecked: false };
    });
  });

  const [checkedYearState, setCheckedYearState] = useState(() => {
    // TODO: try to use name of item as key. i.e. {action: false}
    return yearList.map((item) => {
      return { value: item.name, isChecked: false };
    });
  });

  useEffect(() => {
    // TODO: move into an API utility file
    fetch(
      'https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json'
    )
      .then((response) => response.json())
      .then((json) =>
        setMediaItems(
          json.media.sort((a, b) => {
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
        )
      );
  }, []);

  useEffect(() => {
    const filteredGenreState = checkedGenreState
      .map((checkedGenre) => {
        if (checkedGenre.isChecked) {
          return checkedGenre.value;
        }
      })
      .filter((genre) => genre);

    setFilteredGenreItems(filteredGenreState);
  }, [checkedGenreState]);

  useEffect(() => {
    const filteredYearState = checkedYearState
      .map((checkedGenre) => {
        if (checkedGenre.isChecked) {
          return checkedGenre.value;
        }
      })
      .filter((genre) => genre);

    setFilteredYearItems(filteredYearState);
  }, [checkedYearState]);

  useEffect(() => {
    console.log(
      '🚀 ~ file: MediaLibrary.jsx ~ line 68 ~ MediaLibrary ~ filteredGenreItems',
      filteredGenreItems
    );
    console.log(
      '🚀 ~ file: MediaLibrary.jsx ~ line 68 ~ MediaLibrary ~ filteredYearItems',
      filteredYearItems
    );
  }, [filteredGenreItems, filteredYearItems]);

  const handleCheckedGenreStateOnChange = (checkedStateValue) => {
    const updatedCheckedGenreState = checkedGenreState.map((item) => {
      return checkedStateValue.value === item.value
        ? { isChecked: !item.isChecked, value: item.value }
        : { isChecked: item.isChecked, value: item.value };
    });

    setCheckedGenreState(updatedCheckedGenreState);
  };

  const handleCheckedYearStateOnChange = (checkedStateValue) => {
    const updatedCheckedYearState = checkedYearState.map((item) => {
      return checkedStateValue.value === item.value
        ? { isChecked: !item.isChecked, value: item.value }
        : { isChecked: item.isChecked, value: item.value };
    });

    setCheckedYearState(updatedCheckedYearState);
  };

  // const handleCheckedYearStateOnChange = (position) => {
  //   const updatedCheckedYearState = checkedYearState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setCheckedYearState(updatedCheckedYearState);
  // };

  return (
    <div>
      <div className="filters-container">
        <div className="top-filters">
          <div className="dropdown-filters">
            <Filter
              type="genre"
              config={genreList}
              onChange={handleCheckedGenreStateOnChange}
              checkedState={checkedGenreState}
            />
            <Filter
              type="year"
              config={yearList}
              onChange={handleCheckedYearStateOnChange}
              checkedState={checkedYearState}
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
            mediaItems.map((item, index) => {
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
