import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FilterButton from '../FilterButton/FilterButton';
import FilterList from '../FilterList/FilterList';
import FilterItem from '../FilterItem/FilterItem';

function Filter({ type, config, onChange, checkedState }) {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(() => {
    return false;
  });

  const handleIsFilterMenuOpenOnChange = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <div className="filter__container">
      <FilterButton type={type} onChange={handleIsFilterMenuOpenOnChange} />
      {isFilterMenuOpen && (
        <FilterList>
          {/* TODO: error handling really needed here? */}
          {config &&
            config.length > 0 &&
            config.map(({ name, inputType }, index) => {
              return (
                <FilterItem
                  key={index}
                  inputType={inputType}
                  id={`${type}-checkbox-${index}`}
                  name={name}
                  value={name}
                  isChecked={checkedState[index].isChecked}
                  onChange={() => onChange(checkedState[index])}
                />
              );
            })}
        </FilterList>
      )}
    </div>
  );
}

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  checkedState: PropTypes.array,
};

export default Filter;

// const isFilterActive = () => {
//   if (filteredGenreItems.length > 0 || filteredYearItems.length > 0) {
//     debugger;
//     renderThisData = mediaItems.filter((item) => {
//       // console.log('🚀 1st ITEM ->', item);
//       item.genre.filter((item) => {
//         // console.log('🚀 2nd ITEM ->', item);
//         // console.log('🚀 FILTEREDGENREITEMS ->', filteredGenreItems);
//         // console.log('🚀 FILTEREDGENREITEMS ->', filteredGenreItems);
//         // console.log('🚀 ITEM ->', item);
//         // console.log(
//         //   `🚀 ${filteredGenreItems} === ${item} ->`,
//         //   filteredGenreItems.includes(item)
//         // );
//         filteredGenreItems.includes(item);
//       });
//     });
//   } else {
//     console.log('NOT BOOM');
//     renderThisData = mediaItems.slice();
//   }
// };

// TODO: check why filtering isn't working properly
// {
//   mediaItems && (
//     <div className="media-item-container">
//       {true && true ? (
//         mediaItems
//           .filter((item) => {
//             item.genre.filter((item) => {
//               console.log(
//                 `🚀 filteredGenreItems.includes(item)`,
//                 filteredGenreItems,
//                 '==='.item,
//                 filteredGenreItems.includes(item)
//               );
//               filteredGenreItems.includes(item);
//             });
//           })
//           .map((item, index) => {
//             return (
//               <MediaItem
//                 key={index}
//                 title={item.title}
//                 year={item.year}
//                 poster={item.poster}
//                 genre={item.genre}
//                 type={item.type}
//               />
//             );
//           })
//       ) : (
//         <div>
//           Ooops :( there seems to be a problem loading the media library
//         </div>
//       )}
//     </div>
//   );
// }
