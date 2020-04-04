/**
 * 移除html标签
 *
 * @param {string} str 原始字符串
 * @returns {string} 无标签字符串
 */
export default function stripTags(str) {
  return str.replace(/<script[^>]*>(\S\s*?)<\/script>/gim, '').replace(/<[^>]+>/g, '');
}
