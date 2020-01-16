/**
 * 转换 _ 或 - 为驼峰形式
 *
 * @param {string} str 原始字符串
 * @returns {string} CamelCase 形式
 */
const camelize = (str) => {
  if (str.indexOf('-') < 0 && str.indexOf('_') < 0) {
    return str;
  }
  return str.replace(/[-_][^-_]/g, (match) => match.charAt(1).toUpperCase());
};

/**
 * 转换驼峰形式至 "_" 分割形式
 *
 * @param {string} str 原始字符串
 * @returns {string} camel_case 形式
 */
const underscored = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
};

/**
 * 转换驼峰形式至 "-" 分割形式
 *
 * @param {string} str 原始字符串
 * @returns {string} camel-case 形式
 */
const dasherize = (str) => {
  return underscored(str).replace(/_/g, '-');
};

/**
 * 移除html标签
 *
 * @param {string} str 原始字符串
 * @returns {string} 无标签字符串
 */
const stripTags = (str) => {
  return str.replace(/<script[^>]*>(\S\s*?)<\/script>/gim, '').replace(/<[^>]+>/g, '');
};

/**
 * 防XSS攻击过滤
 *
 * @param {string} str 原始字符串
 * @returns {string} 过滤后字符串
 */
const xssFilter = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};

export { camelize, underscored, dasherize, stripTags, xssFilter };
