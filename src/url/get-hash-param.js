import getHashParams from './get-hash-params';

/**
 * 获取 URL hash 指定的查询参数值
 * @param {string} key 参数名
 * @param {string} [url] URL
 * @returns {string} 参数值
 */
export default function getHashParam(key, url = window.location.href) {
  return getHashParams(url)[key];
}
