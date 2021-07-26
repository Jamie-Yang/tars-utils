import removeHash from './remove-hash';

/**
 * 解析 URL 查询参数字符串为对象
 *
 * @param {string} [url] 查询参数字符串，支持完整 URL
 * @returns {object} 查询参数对象
 */
export default function parseQuery(url = window.location.href) {
  const _url = removeHash(url);
  return (_url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const pair = v.split('=');
    a[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    return a;
  }, {});
}
