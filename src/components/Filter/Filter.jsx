import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButton from '../FilterButton/FilterButton';
import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';
// import { genreList } from '../../utils/filterConfigs';

function Filter({ type, config }) {
  return (
    <div className="genre-filter__container">
      <FilterButton type={type} />
      <FilterList>
        {/* { renderGenreFilters } */}
        <FilterItem inputType="checkbox" checked />
      </FilterList>
    </div>
  );
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  // inputType: PropTypes.string.isRequired,
};

export default Filter;

// const [checkedGenreState, setCheckedGenreState] = useState(
//     new Array(genreList.length).fill(false)
//   );

//   const handleOnChange = (position) => {
//     const updatedCheckedGenreState = checkedGenreState.map((item, index) =>
//       index === position ? !item : item
//     );

//     setCheckedGenreState(updatedCheckedGenreState);

//     // const totalPrice = updatedCheckedState.reduce(
//     //   (sum, currentState, index) => {
//     //     if (currentState === true) {
//     //       return sum + toppings[index].price;
//     //     }
//     //     return sum;
//     //   },
//     //   0
//     // );

//   // console.log(`genreList -> ${JSON.stringify(genreList)}`);
//     // console.log(`checkedGenreState -> ${JSON.stringify(checkedGenreState)}`);

//     const renderGenreFilters = genreList.map(({ name, inputType }, index) => {
//       return (
//         <FilterItem
//           key={index}
//           type={inputType}
//           id={`genre-checkbox-${index}`}
//           name={name}
//           value={name}
//           checked={checkedGenreState[index]}
//           onChange={() => handleOnChange(index)}
//         />
//       );
//     });