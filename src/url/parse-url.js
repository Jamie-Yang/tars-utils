import getHash from './get-hash';
import getSearchParams from './get-search-params';
import removeHash from './remove-hash';

/**
 * 解析 URL 字符串为描述对象：{ url, query, hash }
 * @param {string} url URL
 * @returns {object} 解析结果对象
 */
export default function parseUrl(url = window.location.href) {
  const _url = removeHash(url).split('?')[0];
  const query = getSearchParams(url);
  const hash = getHash(url);

  return { url: _url, query, hash };
}
