import parseUrl from './parse-url';
import makeUrl from './make-url';
import pick from '../object/pick';

/**
 * 保留 URL 指定参数
 *
 * @param {Array} keys 参数列表
 * @param {string} [url] URL
 * @returns {string} 保留需要参数的 URL
 */
export default function pickParams(keys, url = window.location.href) {
  const parsedUrl = parseUrl(url);
  const query = pick(parsedUrl.query, keys);
  return makeUrl({ ...parsedUrl, query });
}
