/**
 * 防XSS攻击过滤
 *
 * @param {string} str 原始字符串
 * @returns {string} 过滤后字符串
 */
export default function xssFilter(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
