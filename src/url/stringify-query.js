/**
 * 查询参数对象序列化
 * 支持一层对象
 *
 * @param {JSON} obj 查询参数对象，JSON 子集，不支持数组类型
 * @returns {string} 查询参数序列化后的字符串
 */
export default function stringifyQuery(obj) {
  if (!obj) return '';
  let pairs = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return pairs.join('&');
}
