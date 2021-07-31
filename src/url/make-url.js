import getSearchParams from './get-search-params';
import stringifyQuery from './stringify-query';
import removeHash from './remove-hash';
import getHash from './get-hash';

/**
 * 根据描述对象组合 URL，query 合并，hash 覆盖
 *
 * @param {object} object URL 描述对象
 * @param {string} object.url 基础 URL
 * @param {object} [object.query] 查询参数对象
 * @param {string} [object.hash] 哈希字符串
 * @returns {string} URL
 */
export default function makeUrl(object) {
  let { url, query = {}, hash } = object;

  url = removeHash(url).split('?')[0];

  const queryFromUrl = getSearchParams(url);
  const queryString = stringifyQuery({ ...queryFromUrl, ...query });
  const search = queryString ? `?${queryString}` : '';

  const hashFromURL = getHash(url);
  hash = hash ?? hashFromURL;

  return `${url}${search}${hash}`;
}
