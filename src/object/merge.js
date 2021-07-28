/**
 * 对象深合并
 *
 * @param {...object} objects 对象
 * @returns {object} 合并后的对象
 * @example
 * merge({a:[1,2]}, {a:[3,4]}) => {a:[1,2,3,4]}
 */
export default function merge(...objects) {
  return [...objects].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((_a, k) => {
        acc[k] = {}.hasOwnProperty.call(acc, k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
}
