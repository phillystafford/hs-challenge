import React, { useEffect, useState } from 'react';

import MediaItem from '../MediaItem/MediaItem';
import Filter from '../Filter/Filter';
import RadioFilter from '../RadioFilter/RadioFilter';
import SearchBox from '../SearchBox/SearchBox';
import { Button as ClearFilterButton } from '..//Button/Button';
import {
  initialFilterBuilder,
  genreList,
  yearList,
  formatTypeList,
} from '../../utils/filterUtils';

function MediaLibrary() {
  // TODO: add the word State to all the state functions
  const [mediaItems, setMediaItems] = useState(() => {
    return [];
  });
  const [filteredGenreItems, setFilteredGenreItems] = useState(() => {
    return [];
  });
  const [filteredYearItems, setFilteredYearItems] = useState(() => {
    return [];
  });
  // TODO: investigate why this isn't called
  const [filteredFormatTypeItems, setFilteredFormatTypeItems] = useState(() => {
    return [];
  });
  const [searchBoxInputValue, setSearchBoxInputValue] = useState(() => {
    return '';
  });

  const [checkedGenreState, setCheckedGenreState] = useState(() => {
    // TODO: try to use name of item as key. i.e. {action: false}
    return initialFilterBuilder(genreList);
  });

  const [checkedYearState, setCheckedYearState] = useState(() => {
    // TODO: try to use name of item as key. i.e. {action: false}
    return initialFilterBuilder(yearList);
  });

  const [checkedFormatTypeState, setCheckedFormatTypeState] = useState(() => {
    // TODO: try to use name of item as key. i.e. {action: false}
    return initialFilterBuilder(formatTypeList);
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
    // console.log(
    //   '🚀🚀🚀🚀🚀🚀 ~ checkedFormatTypeState',
    //   checkedFormatTypeState
    // );
    // debugger;
    const filteredFormatTypeState = checkedFormatTypeState
      .map((checkedFormatType) => {
        if (checkedFormatType.isChecked) {
          return checkedFormatType.value;
        }
      })
      .filter((formatType) => formatType);

    setFilteredFormatTypeItems(filteredFormatTypeState);
  }, [checkedFormatTypeState]);

  useEffect(() => {
    // console.log(
    //   '🚀 ~ file: MediaLibrary.jsx ~ line 68 ~ MediaLibrary ~ filteredGenreItems',
    //   filteredGenreItems
    // );
    // console.log(
    //   '🚀 ~ file: MediaLibrary.jsx ~ line 68 ~ MediaLibrary ~ filteredYearItems',
    //   filteredYearItems
    // );
    // console.log(
    //   '🚀🚀🚀🚀🚀🚀 ~ filteredFormatTypeItems',
    //   filteredFormatTypeItems
    // );
    // console.log('🚀🚀🚀🚀🚀🚀 ~ MEDIAITEMS', mediaItems);
    // console.log(
    //   '🚀🚀🚀🚀🚀🚀 ~ CHECKEDFORMATTYPESTATE',
    //   checkedFormatTypeState
    // );
  }, [
    // mediaItems,
    // filteredGenreItems,
    // filteredYearItems,
    // filteredFormatTypeItems,
    checkedFormatTypeState,
    checkedFormatTypeState,
  ]);

  // TODO: change name of checkedStateValue parameter
  const handleCheckedGenreStateOnChange = (checkedStateValue) => {
    const updatedCheckedGenreState = checkedGenreState.map((item) => {
      return checkedStateValue.value === item.value
        ? { isChecked: !item.isChecked, value: item.value }
        : { isChecked: item.isChecked, value: item.value };
    });

    setCheckedGenreState(updatedCheckedGenreState);
  };

  // TODO: change name of checkedStateValue parameter
  const handleCheckedYearStateOnChange = (checkedStateValue) => {
    const updatedCheckedYearState = checkedYearState.map((item) => {
      return checkedStateValue.value === item.value
        ? { isChecked: !item.isChecked, value: item.value }
        : { isChecked: item.isChecked, value: item.value };
    });

    setCheckedYearState(updatedCheckedYearState);
  };

  // TODO: change name of checkedStateValue parameter
  const handleCheckedFormatTypeStateOnChange = (formatType) => {
    console.log(
      '🚀 ~ file: MediaLibrary.jsx ~ line 158 ~ formatType',
      formatType
    );
    let updatedCheckedFormatTypeState;

    if (formatType === 'movies') {
      updatedCheckedFormatTypeState = [
        { isChecked: true, value: 'movies' },
        { isChecked: false, value: 'books' },
      ];
    } else if (formatType === 'books') {
      updatedCheckedFormatTypeState = [
        { isChecked: false, value: 'movies' },
        { isChecked: true, value: 'books' },
      ];
    }

    setCheckedFormatTypeState(updatedCheckedFormatTypeState);
  };

  const handleOnChange = (event) => {
    setSearchBoxInputValue(event.target.value);
  };

  let displayData = [];
  let isGenreFilterActive = filteredGenreItems.length > 0;

  const applyGenreFilterActive = () => {
    if (filteredGenreItems.length > 0) {
      mediaItems.forEach((item, index) => {
        for (let i = 0; i < item.genre.length; i++) {
          for (let j = 0; j < filteredGenreItems.length; j++) {
            if (item.genre[i] === filteredGenreItems[j]) {
              displayData.push(mediaItems[index]);
            }
          }
        }
      });
    }
  };

  let isYearFilterActive = filteredYearItems.length > 0;
  const applyYearFilter = () => {
    if (filteredYearItems.length > 0) {
      displayData = mediaItems.filter((item) =>
        filteredYearItems.includes(item.year)
      );
    }
  };

  let isRadioFilterActive = checkedFormatTypeState.some(
    (item) => item.isChecked === true
  );
  const applyRadioFilter = () => {
    if (checkedFormatTypeState.some((item) => item.isChecked === true)) {
      let formatTypeToDisplay = checkedFormatTypeState.filter((item) => {
        return item.isChecked === true;
      });
      displayData = mediaItems.filter((item) => {
        return formatTypeToDisplay[0].value.includes(item.type);
      });
    }
  };

  let isTextFilterActive = searchBoxInputValue.length > 0;
  const applyTextFilter = () => {
    if (searchBoxInputValue.length > 0) {
      displayData = mediaItems.filter((item) => {
        const lowerCaseInputValue = searchBoxInputValue.toLowerCase();
        return item.title.toLowerCase().includes(lowerCaseInputValue);
      });
    }
  };

  const handleClearFilter = () => {
    console.log('Clear Filters');
    setCheckedGenreState(initialFilterBuilder(genreList));
    setCheckedYearState(initialFilterBuilder(yearList));
    setCheckedFormatTypeState(initialFilterBuilder(formatTypeList));
    setSearchBoxInputValue('');
  };

  //  TODO: prioritise the filters. Create a piece of filter state amd use that as a source of truth
  if (isGenreFilterActive) {
    applyGenreFilterActive();
    displayData = [...new Set(displayData)];
  }
  if (isYearFilterActive) {
    applyYearFilter();
    displayData = [...new Set(displayData)];
  }
  if (isRadioFilterActive) {
    applyRadioFilter();
    displayData = [...new Set(displayData)];
  }
  if (isTextFilterActive) {
    applyTextFilter();
    displayData = [...new Set(displayData)];
  }

  if (
    !isGenreFilterActive &&
    !isYearFilterActive &&
    !isRadioFilterActive &&
    !isTextFilterActive
  ) {
    displayData = mediaItems.slice(0);
  }

  displayData.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <div className="filters-container">
        <div className="top-filters">
          <div className="dropdown-filters">
            <div>
              <Filter
                type="genre"
                buttonText={`${
                  filteredGenreItems.length > 0 ? filteredGenreItems.length : ''
                } GENRE${filteredGenreItems.length === 1 ? '' : 'S'} V`}
                config={genreList}
                onChange={handleCheckedGenreStateOnChange}
                checkedState={checkedGenreState}
              />
              <Filter
                type="year"
                buttonText={`${
                  filteredYearItems.length > 0 ? filteredYearItems.length : ''
                } YEAR${filteredYearItems.length === 1 ? '' : 'S'} V`}
                config={yearList}
                onChange={handleCheckedYearStateOnChange}
                checkedState={checkedYearState}
              />
            </div>
            <SearchBox
              inputValue={searchBoxInputValue}
              handleOnChange={handleOnChange}
            />
          </div>
          <RadioFilter
            type="format-type"
            config={formatTypeList}
            onChange={handleCheckedFormatTypeStateOnChange}
            checkedState={checkedFormatTypeState}
          />
          <ClearFilterButton
            className="clear-filters"
            buttonText="CLEAR FILTERS"
            handleOnClick={handleClearFilter}
          />
        </div>
      </div>
      <div className="media-item-container">
        {displayData && displayData.length > 0 ? (
          displayData.map((item, index) => {
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
    </div>
  );
}

MediaLibrary.propTypes = {};

// TODO: Use context to showcase skills
// TODO: mention I would have liked to setup storybook for dev purposes etc
// TODO: Swing back for chevron caret
// TODO: fix styling on title, year and genre's
// TODO: nicer error handling
// TODO: rename to media viewer or library viewer ?

export default MediaLibrary;
