import getSearchParams from './get-search-params';

/**
 * 获取 URL search 指定的查询参数值
 * @param {string} key 参数名
 * @param {string} [url] URL
 * @returns {string} 参数值
 */
export default function getSearchParam(key, url = window.location.href) {
  return getSearchParams(url)[key];
}
