import parseUrl from './parse-url';
import makeUrl from './make-url';
import omit from '../object/omit';

/**
 * 移除 URL 指定参数
 * @param {Array} keys 参数列表
 * @param {string} [url] URL
 * @returns {string} 移除参数后的 URL
 */
export default function omitParams(keys, url = window.location.href) {
  const parsedUrl = parseUrl(url);
  const query = omit(parsedUrl.query, keys);
  return makeUrl({ ...parsedUrl, query });
}
