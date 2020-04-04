/**
 * 获取URL参数对象
 *
 * @param {string} [query] 参数字段
 * @returns {object} 参数对象
 */
export default function getParams(query) {
  return (query.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1);
    return a;
  }, {});
}
