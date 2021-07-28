import parseUrl from './parse-url';
import createUrl from './create-url';
import omit from '../object/omit';

/**
 * 按需移除 URL 某些参数
 *
 * @param {Array} keys 需要移除的参数列表
 * @param {string} [url] URL
 * @returns {string} 移除参数后的URL
 */
export default function omitParams(keys, url = window.location.href) {
  const parsedUrl = parseUrl(url);
  const query = omit(parsedUrl.query, keys);
  return createUrl({ ...parsedUrl, query });
}
