import removeHash from './remove-hash';

/**
 * 解析 URL 参数字符串为对象
 *
 * @param {string} [url] 参数字段
 * @returns {object} 参数对象
 */
export default function parseQuery(url = window.location.href) {
  const _url = removeHash(url);
  return (_url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const pair = v.split('=');
    a[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    return a;
  }, {});
}
