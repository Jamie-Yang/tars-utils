import getParams from './get-params';
import getSearch from './get-search';

/**
 * 获取URL search 参数对象
 *
 * @param {string} [url] 链接
 * @returns {object} 参数对象
 */
export default function getSearchParams(url = window.location.href) {
  return getParams(getSearch(url));
}
