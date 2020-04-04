import getHashParams from './get-hash-params';

/**
 * 获取URL hash 指定的查询参数
 *
 * @param {string} key 参数名
 * @param {string} [url] 链接
 * @returns {string} 指定参数的值
 */
export default function getHashParam(key, url = window.location.href) {
  return getHashParams(url)[key];
}
