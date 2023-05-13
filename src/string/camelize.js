/**
 * 转换 _ 或 - 为驼峰形式
 * @param {string} str 原始字符串
 * @returns {string} CamelCase 形式
 */
export default function camelize(str) {
  if (str.indexOf('-') < 0 && str.indexOf('_') < 0) {
    return str;
  }
  return str.replace(/[-_][^-_]/g, (match) => match.charAt(1).toUpperCase());
}
