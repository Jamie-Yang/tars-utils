import parseQuery from './parse-query';
import getHash from './get-hash';

/**
 * 获取 URL hash 参数对象
 *
 * @param {string} [url] 链接
 * @returns {object} 参数对象
 */
export default function getHashParams(url = window.location.href) {
  return parseQuery(getHash(url));
}
