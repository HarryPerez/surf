const isHigher = (a, b) => a > b;
const isLower = (a, b) => a < b;

export const ORDER_OPTIONS = {
  ASCENDINGLY: 'ascendingly',
  DESCENDINGLY: 'descendingly'
};

export const SORT_FUNCS = {
  ascendingly: isHigher,
  descendingly: isLower
};
