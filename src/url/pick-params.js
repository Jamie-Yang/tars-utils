import parseUrl from './parse-url';
import stringifyUrl from './stringify-url';
import pick from '../object/pick';

/**
 * @param {string} url URL
 * @param {Array} params 需要的参数列表
 * @returns {string} 仅保留需要参数的 URL
 */
export default function pickParams(url, params) {
  const parsedUrl = parseUrl(url);
  const query = pick(parsedUrl.query, params);
  return stringifyUrl({ ...parsedUrl, query });
}
