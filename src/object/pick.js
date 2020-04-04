/**
 * 筛选对象的key，浅拷贝对象
 *
 * @param {object} obj 原始对象
 * @param {string[]} arr 需保留的key
 * @returns {object} 处理后的对象
 * @example
 * pick({a:1, b:2, c:3}, ['b', 'c']) => {b:2, c:3}
 */
export default function pick(obj, arr) {
  return arr.reduce((acc, cur) => {
    cur in obj && (acc[cur] = obj[cur]);
    return acc;
  }, {});
}
