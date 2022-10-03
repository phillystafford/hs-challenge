import React, { useEffect, useState } from 'react';

import MediaItem from '../MediaItem/MediaItem';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import RadioFilter from '../RadioFilter/RadioFilter';
import SearchBox from '../SearchBox/SearchBox';
import { Button as ClearFilterButton } from '../Button/Button';
import {
  initialFilterBuilder,
  genreList,
  yearList,
  formatTypeList,
} from '../../utils/filterUtils';

function MediaLibrary() {
  const [mediaItems, setMediaItems] = useState(() => {
    return [];
  });

  const [filteredMediaItems, setFilteredMediaItems] = useState(() => {
    return [];
  });

  const [filteredGenreItems, setFilteredGenreItems] = useState(() => {
    return [];
  });

  const [filteredYearItems, setFilteredYearItems] = useState(() => {
    return [];
  });

  const [filteredFormatTypeItems, setFilteredFormatTypeItems] = useState(() => {
    return [];
  });
  const [searchBoxInputValue, setSearchBoxInputValue] = useState(() => {
    return '';
  });

  const [checkedGenreState, setCheckedGenreState] = useState(() => {
    return initialFilterBuilder(genreList);
  });

  const [checkedYearState, setCheckedYearState] = useState(() => {
    return initialFilterBuilder(yearList);
  });

  const [checkedFormatTypeState, setCheckedFormatTypeState] = useState(() => {
    return initialFilterBuilder(formatTypeList);
  });

  useEffect(() => {
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
    let updatedFilteredMediaItems = mediaItems.slice(0);

    if (filteredGenreItems.length > 0) {
      let tempListMatchingGenres = [];
      mediaItems.forEach((item, index) => {
        for (let i = 0; i < item.genre.length; i++) {
          for (let j = 0; j < filteredGenreItems.length; j++) {
            if (item.genre[i] === filteredGenreItems[j]) {
              tempListMatchingGenres.push(mediaItems[index]);
            }
          }
        }
      });
      updatedFilteredMediaItems = [...new Set(tempListMatchingGenres)];
    } else if (filteredYearItems.length > 0) {
      updatedFilteredMediaItems = mediaItems.filter((item) =>
        filteredYearItems.includes(item.year)
      );
    } else if (checkedFormatTypeState.some((item) => item.isChecked === true)) {
      let formatTypeToDisplay = checkedFormatTypeState.filter((item) => {
        return item.isChecked === true;
      });
      updatedFilteredMediaItems = mediaItems.filter((item) => {
        return formatTypeToDisplay[0].value.includes(item.type);
      });
    } else if (searchBoxInputValue.length > 0) {
      updatedFilteredMediaItems = mediaItems.filter((item) => {
        const lowerCaseInputValue = searchBoxInputValue.toLowerCase();
        return item.title.toLowerCase().includes(lowerCaseInputValue);
      });
    } else {
      updatedFilteredMediaItems = mediaItems.slice(0);
    }

    setFilteredMediaItems(
      updatedFilteredMediaItems.sort((a, b) => {
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
    );
  }, [
    searchBoxInputValue,
    filteredGenreItems,
    filteredYearItems,
    filteredFormatTypeItems,
  ]);

  useEffect(() => {
    setFilteredMediaItems(mediaItems);
  }, [mediaItems]);

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

  const handleCheckedFormatTypeStateOnChange = (formatType) => {
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

  const handleClearFilter = () => {
    setCheckedGenreState(initialFilterBuilder(genreList));
    setCheckedYearState(initialFilterBuilder(yearList));
    setCheckedFormatTypeState(initialFilterBuilder(formatTypeList));
    setSearchBoxInputValue('');
  };

  let messageComponent;

  if (mediaItems.length > 0 && filteredMediaItems.length > 0) {
    messageComponent = filteredMediaItems.map((item, index) => {
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
    });
  } else if (mediaItems.length > 0 && filteredMediaItems.length === 0) {
    messageComponent = (
      <div className="error-message">
        Nothing meets your criteria. Please remove some filters
      </div>
    );
  } else if (mediaItems.length === 0) {
    messageComponent = (
      <div className="error-message">
        Ooops :( Check your internet connection. There&#39;s a problem loading
        the media library
      </div>
    );
  } else {
    messageComponent = (
      <div className="error-message">Something really weird happened</div>
    );
  }

  return (
    <div className="exercise-2__container">
      <div className="filter__container">
        <div className="top-filter__container">
          <div className="filter-dropdown__container">
            <FilterDropdown
              type="genre"
              buttonText={`${
                filteredGenreItems.length > 0 ? filteredGenreItems.length : ''
              } GENRE${filteredGenreItems.length <= 1 ? '' : 'S'}`}
              config={genreList}
              onChange={handleCheckedGenreStateOnChange}
              checkedState={checkedGenreState}
            />
            <FilterDropdown
              type="year"
              buttonText={`${
                filteredYearItems.length > 0 ? filteredYearItems.length : ''
              } YEAR${filteredYearItems.length <= 1 ? '' : 'S'}`}
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
        <div className="bottom-filter__container">
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
      <div className="media-view__container">{messageComponent}</div>
    </div>
  );
}

MediaLibrary.propTypes = {};

export default MediaLibrary;
