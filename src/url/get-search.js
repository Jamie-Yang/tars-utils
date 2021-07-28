import removeHash from './remove-hash';

/**
 * 获得 URL 查询参数字符串
 *
 * @param {string} [url] 链接
 * @returns {string} 查询参数字符串
 */
export default function getSearch(url = window.location.href) {
  const _url = removeHash(url);
  const queryStart = _url.indexOf('?');
  if (queryStart === -1) {
    return '';
  }
  return _url.slice(queryStart + 1);
}
