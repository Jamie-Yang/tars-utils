/**
 * 查询参数对象转换为字符串
 *
 * @param {JSON} query 查询参数对象，JSON 子集，不支持数组类型
 * @returns {string} 查询参数字符串
 */
export default function stringifyQuery(query) {
  if (!query) return '';
  let pairs = [];

  for (let key in query) {
    if ({}.hasOwnProperty.call(query, key)) {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`);
    }
  }
  return pairs.join('&');
}
