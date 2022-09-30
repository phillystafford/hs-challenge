import React from 'react';
import PropTypes from 'prop-types';

function FilterItem({ inputType, id, name, value, isChecked, onChange }) {
  // console.log(`isChecked in component -> ${isChecked)}`);
  // console.log(`config -> ${JSON.stringify(config)}`);
  // const inputComponent =
  //   inputType === 'text' ? (
  //     <input type={inputType} id={inputType} name={inputType} />
  //   ) : (
  //     <>
  //       <input
  //         type={inputType}
  //         id={name}
  //         name={name}
  //         value={name}
  //         checked={isChecked}
  //       />

  //       {/* <label htmlFor={inputType}>{inputType.toString()}</label> */}
  //       <label htmlFor={inputType}>{inputType}</label>
  //     </>
  //   );

  return (
    <li className="genre-checkbox">
      <input
        type={inputType}
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
}

FilterItem.propTypes = {
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FilterItem;
