import parseUrl from './parse-url';
import stringifyQuery from './stringify-query';

/**
 * 修改 URL 参数，没有则新增
 *
 * @param {object} query 参数对象
 * @param {string} [url] URL
 * @returns {string} 修改参数后的 URL
 */
export default function setSearchParams(query, url = window.location.href) {
  const parsedUrl = parseUrl(url);
  const queryString = stringifyQuery({ ...parsedUrl.query, ...query });
  const search = queryString ? `?${queryString}` : '';

  return `${parsedUrl.url}${search}${parsedUrl.hash}`;
}
