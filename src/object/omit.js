/**
 * 移除对象的key，浅拷贝对象
 *
 * @param {object} obj 原始对象
 * @param {string[]} arr 需排除的key
 * @returns {object} 处理后的对象
 * @example
 * omit({a:1, b:2, c:3}, ['b', 'c']) => {a:1}
 */
export default function omit(obj, arr) {
  return Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}
