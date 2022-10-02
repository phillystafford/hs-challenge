import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import MediaItem from '../MediaItem/MediaItem';
import Filter from '../Filter/Filter';
import RadioFilter from '../RadioFilter/RadioFilter';
import SearchBox from '../SearchBox/SearchBox';
import { genreList, yearList, formatTypeList } from '../../utils/filterConfigs';

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
  const [filteredFormatTypeItems, setFilteredFormatTypeItems] = useState(() => {
    return [];
  });
  const [inputValue, setInputValue] = useState(() => {
    return '';
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

  const [checkedFormatTypeState, setCheckedFormatTypeState] = useState(() => {
    // TODO: try to use name of item as key. i.e. {action: false}
    return formatTypeList.map((item) => {
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
    // debugger;
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

    // const updatedCheckedFormatTypeState = checkedFormatTypeState.map((item) => {
    //   debugger;
    //   return { isChecked: !item.isChecked, value: item.value };
    // });
    // const updatedCheckedFormatTypeState = {
    //   isChecked: !checkedFormatTypeState.isChecked,
    //   value: checkedFormatTypeState.value,
    // };
  };

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleCheckedYearStateOnChange = (position) => {
  //   const updatedCheckedYearState = checkedYearState.map((item, index) =>
  //     index === position ? !item : item
  //   );

  //   setCheckedYearState(updatedCheckedYearState);
  // };

  let renderThisData = [];

  // const isGenreFilterActive = () => {
  //   debugger;
  //   console.log('filteredGenreItems', filteredGenreItems);
  //   if (filteredGenreItems.length > 0) {
  //     mediaItems.forEach((item, index) => {
  //       console.log('item -> ', item, ' - > index -> ', index);

  //       if (index % 2 === 0) {
  //         renderThisData.push(mediaItems[index]);
  //       }
  //     });

  //     // renderThisData = mediaItems.filter((item) => {
  //     //   return item.genre.filter((item) => {
  //     //     return filteredGenreItems.includes(item);
  //     //   });
  //     // });
  //   } else {
  //     console.log(
  //       '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀'
  //     );
  //     // renderThisData = mediaItems.slice();
  //   }
  // };
  const isGenreFilterActive = () => {
    console.log('filteredGenreItems', filteredGenreItems);
    if (filteredGenreItems.length > 0) {
      mediaItems.forEach((item, index) => {
        for (let i = 0; i < item.genre.length; i++) {
          for (let j = 0; j < filteredGenreItems.length; j++) {
            if (item.genre[i] === filteredGenreItems[j]) {
              renderThisData.push(mediaItems[index]);
            }
          }
        }
      });
    } else {
      renderThisData = mediaItems.slice(0);
    }
  };

  console.log('renderThisData -> ', renderThisData);

  const isYearFilterActive = () => {
    // console.log('filteredGenreItems.length > 0', filteredYearItems.length > 0);
    if (filteredYearItems.length > 0) {
      renderThisData = mediaItems.filter((item) =>
        filteredYearItems.includes(item.year)
      );
    } else {
      renderThisData = mediaItems.slice();
    }
  };

  let radioFilterData;

  const isRadioFilterActive = () => {
    if (checkedFormatTypeState.some((item) => item.isChecked === true)) {
      // console.log('IN IF');
      // console.log('IN IF - mediaItems.length ->', mediaItems.length);
      // console.log('IN IF - checkedFormatTypeState ->', checkedFormatTypeState);
      // debugger;
      let formatTypeToDisplay = checkedFormatTypeState.filter((item) => {
        // console.log(
        //   '🚀 ~ file: MediaLibrary.jsx ~ line 231 ~ formatTypeToDisplay ~ item',
        //   item
        // );
        // console.log('🚀 ~ item.isChecked === true', item.isChecked === true);
        return item.isChecked === true;
      });

      // trim the plural s from movies or books
      // formatTypeToDisplay[0].value = formatTypeToDisplay[0].value.slice(0, -1);

      // console.log('IN IF - formatTypeToDisplay ->', formatTypeToDisplay);
      // console.log(
      //   'IN IF - formatTypeToDisplay.value ->',
      //   formatTypeToDisplay[0].value
      // );
      // debugger;
      renderThisData = mediaItems.filter((item) => {
        // console.log('🚀 ~ item', item.type);
        // console.log(
        //   '🚀 ~ formatTypeToDisplay[0].value === item.type',
        //   formatTypeToDisplay[0].value === item.type
        // );
        // console.log(
        //   '🚀 ~ formatTypeToDisplay.value',
        //   formatTypeToDisplay[0].value
        // );

        // filteredYearItems.includes(item.year);
        return formatTypeToDisplay[0].value.includes(item.type);
        // return formatTypeToDisplay[0].value === item.type;
      });

      console.log('IN IF - RENDERTHISDATA ->', renderThisData);
    }
  };

  const isTextFilterActive = () => {
    // console.log('🚀 renderThisData', renderThisData);
    if (inputValue.length > 0) {
      renderThisData = mediaItems.filter((item) => {
        console.log('🚀 inputValue', inputValue);
        console.log('🚀 inputValue', item.title);

        console.log(
          '🚀 ~ inputValue.includes(item.title)',
          inputValue.includes(item.title)
        );
        const lowerCaseInputValue = inputValue.toLowerCase();
        return item.title.toLowerCase().includes(lowerCaseInputValue);
      });
    }
  };
  // console.log('🚀 Hitting? isTextFilterActive', isTextFilterActive);

  isGenreFilterActive();
  // isYearFilterActive();
  // debugger;
  // isRadioFilterActive();
  // isTextFilterActive();

  // const array1 = [1, 2, 2, 3, 3, 3, 1, 4];
  // const uniq = [...new Set([1, 2, 2, 3, 3, 3, 1, 4, 0])];
  // console.log('uniq -> ', uniq);

  // console.log('🚀 CHECKEDGENRESTATE ->', checkedGenreState);
  // console.log('🚀 FILTEREDGENREITEMS ->', filteredGenreItems);

  // console.log('🚀 CHECKEDYEARSTATE ->', checkedYearState);
  // console.log('🚀 CHECKEDFORMATTYPESTATE ->', checkedFormatTypeState);
  // console.log('🚀 CHECKEDFORMATTYPESTATE ->', checkedFormatTypeState);
  // console.log('🚀 RENDERTHISDATA ->', renderThisData);
  // console.log('🚀 RADIOFILTERDATA ->', radioFilterData);

  renderThisData = [...new Set(renderThisData)];

  return (
    <div>
      <div className="filters-container">
        <div className="top-filters">
          <div className="dropdown-filters">
            <div>
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
            </div>
            <SearchBox
              inputValue={inputValue}
              handleOnChange={handleOnChange}
            />
          </div>
          <RadioFilter
            type="format-type"
            config={formatTypeList}
            onChange={handleCheckedFormatTypeStateOnChange}
            checkedState={checkedFormatTypeState}
          />
          <button>Clear Filters Link</button>
        </div>
      </div>
      {true && (
        <div className="media-item-container">
          {/* <pre>{renderThisData}</pre> */}
          {/* <pre>renderThisData -> {JSON.stringify(renderThisData)}</pre> */}
          {renderThisData && renderThisData.length > 0 ? (
            renderThisData.map((item, index) => {
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
// TODO: rename to media viewer or library viewer ?

export default MediaLibrary;
