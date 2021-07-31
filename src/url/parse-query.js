/**
 * 解析查询参数字符串为对象
 *
 * @param {string} qs 查询参数字符串
 * @returns {object} 查询参数对象
 */
export default function parseQuery(qs) {
  return (qs.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const pair = v.split('=');
    a[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    return a;
  }, {});
}
