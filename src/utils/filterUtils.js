export const initialFilterItem = (value) => {
  return {
    value,
    isChecked: false,
  };
};

export const initialFilterBuilder = (filterList) =>
  filterList.map((item) => initialFilterItem(item.name));

export const genreList = [
  {
    name: 'action',
    inputType: 'checkbox',
  },
  {
    name: 'adventure',
    inputType: 'checkbox',
  },
  {
    name: 'animation',
    inputType: 'checkbox',
  },
  {
    name: 'biography',
    inputType: 'checkbox',
  },
  {
    name: 'classes',
    inputType: 'checkbox',
  },
  {
    name: 'comedy',
    inputType: 'checkbox',
  },
  {
    name: 'crime',
    inputType: 'checkbox',
  },
];

export const yearList = [
  {
    name: '1870',
    inputType: 'checkbox',
  },
  {
    name: '1892',
    inputType: 'checkbox',
  },
  {
    name: '1895',
    inputType: 'checkbox',
  },
  {
    name: '1963',
    inputType: 'checkbox',
  },
  {
    name: '1971',
    inputType: 'checkbox',
  },
  {
    name: '1973',
    inputType: 'checkbox',
  },
  {
    name: '1974',
    inputType: 'checkbox',
  },
];
export const formatTypeList = [
  {
    name: 'movies',
    inputType: 'radio',
  },
  {
    name: 'books',
    inputType: 'radio',
  },
];
