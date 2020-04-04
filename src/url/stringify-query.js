/**
 * 对象序列化
 * 支持一层对象
 *
 * @param {JSON} obj JSON对象
 * @returns {string} 序列化查询参数串
 */
export default function stringifyQuery(obj) {
  if (!obj) return '';
  let pairs = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      let value = obj[key];

      if (value instanceof Array) {
        pairs = pairs.concat(
          value.map((v, i) => `${encodeURIComponent(key)}[${i}]=${encodeURIComponent(v)}`)
        );
        continue;
      }
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    }
  }
  return pairs.join('&');
}
