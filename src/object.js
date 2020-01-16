/**
 * 移除对象的key，浅拷贝对象
 *
 * @param {object} obj 原始对象
 * @param {string[]} arr 需排除的key
 * @returns {object} 处理后的对象
 * @example
 * omit({a:1, b:2, c:3}, ['b', 'c']) => {a:1}
 */
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});

/**
 * 筛选对象的key，浅拷贝对象
 *
 * @param {object} obj 原始对象
 * @param {string[]} arr 需保留的key
 * @returns {object} 处理后的对象
 * @example
 * pick({a:1, b:2, c:3}, ['b', 'c']) => {b:2, c:3}
 */
const pick = (obj, arr) =>
  arr.reduce((acc, cur) => {
    cur in obj && (acc[cur] = obj[cur]);
    return acc;
  }, {});

/**
 * 对象深合并
 *
 * @param {...object} objects 对象
 * @returns {object} 合并后的对象
 * @example
 * merge({a:[1,2]}, {a:[3,4]}) => {a:[1,2,3,4]}
 */
const merge = (...objects) =>
  [...objects].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((_a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );

/**
 * 对象深复制
 *
 * @param {object} target 目标对象
 * @param {object} objects 对象
 * @returns {object} 复制的对象
 */
const extend = (target, ...objects) =>
  [...objects].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((_a, k) => {
        const v = obj[k];
        if (Array.isArray(v)) {
          acc[k] = extend([], v);
        } else if (v instanceof Object) {
          acc[k] = extend({}, v);
        } else {
          acc[k] = v;
        }
        return acc;
      }, {}),
    target
  );

export const string = { omit, pick, merge, extend };
