import getSearchParams from './get-search-params';
import stringifyQuery from './stringify-query';
import removeHash from './remove-hash';
import getHash from './get-hash';

/**
 * URL解析对象序列化
 *
 * @param {object} obj URL 解析对象
 * @returns {string} URL 字符串
 */
export default function stringifyUrl(obj) {
  let { url, query, hash } = obj;

  url = removeHash(url).split('?')[0];

  const queryFromUrl = getSearchParams(url);
  const queryString = stringifyQuery({ ...queryFromUrl, ...query });
  const search = queryString ? `?${queryString}` : '';

  const hashFromURL = getHash(url);
  hash = hash ?? hashFromURL;

  return `${url}${search}${hash}`;
}
