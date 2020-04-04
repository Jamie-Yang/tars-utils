/**
 * 手机号格式化，格式为344
 *
 * @param {string|number} tel 手机号码
 * @param {string} separator 分隔符，默认空格
 * @returns {string} 格式化结果
 */
export default function formatTel(tel, separator = ' ') {
  const str = tel.toString().replace(/\s/g, '');

  if (/(\d{3})(\d{4})(\d{4})/.test(str)) {
    return `${RegExp.$1}${separator}${RegExp.$2}${separator}${RegExp.$3}`;
  }

  return tel;
}
