import { oneOfType, shape, string, number } from 'prop-types';

export const sourceModel = oneOfType([
  shape({
    uri: string.isRequired,
    priority: string
  }),
  number
]);
