/**
 * 获取UA
 * @param {any} lower 是否转小写
 * @returns {string} UA
 */
export default function (lower) {
  return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
}
