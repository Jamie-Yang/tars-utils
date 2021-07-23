import parseUrl from './parse-url';
import stringifyUrl from './stringify-url';
import omit from '../utils/omit';

/**
 * 移除URL的某些参数
 *
 * @param {string} url URL
 * @param {Array} params 需要移除的参数列表
 * @returns {string} 移除参数后的URL
 */
export default function omitParams(url, params) {
  const parsedUrl = parseUrl(url);
  const query = omit(parsedUrl.query, params);
  return stringifyUrl({ ...parsedUrl, query });
}
