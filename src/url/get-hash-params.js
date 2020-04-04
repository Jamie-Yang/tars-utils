import getParams from './get-params';

/**
 * 获取URL hash 参数对象
 *
 * @param {string} [url] 链接
 * @returns {object} 参数对象
 */
export default function getHashParams(url = window.location.href) {
  return getParams(new URL(url).hash);
}
