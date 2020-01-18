import tars from '../dist/tars-utils.min.js';

console.log(tars.ua());

console.log(
  tars.stringifyQueryString({
    test: 1,
    arr: [1, 2],
  })
);
