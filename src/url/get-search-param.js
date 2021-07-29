import getSearchParams from './get-search-params';

/**
 * 获取 URL search 指定的查询参数
 *
 * @param {string} key 参数名
 * @param {string} [url] 链接
 * @returns {string} 指定参数的值
 */
export default function getSearchParam(key, url = window.location.href) {
  return getSearchParams(url)[key];
}
