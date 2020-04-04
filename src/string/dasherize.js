import underscored from './underscored';

/**
 * 转换驼峰形式至 "-" 分割形式
 *
 * @param {string} str 原始字符串
 * @returns {string} camel-case 形式
 */
export default function dasherize(str) {
  return underscored(str).replace(/_/g, '-');
}
