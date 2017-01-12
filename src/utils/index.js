export default () => {};

export const diffObject = (a, b) => (
  Object.keys(a).reduce((map, k) => {
    if (a[k] !== b[k]) map[k] = b[k]; // eslint-disable-line no-param-reassign
    return map;
  }, {})
);
