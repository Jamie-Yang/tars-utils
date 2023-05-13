import getType from './get-type';

/**
 * 检查数据类型是否为：字符串
 * @param {*} str 数据
 * @returns {boolean} 是否
 */
export default function isString(str) {
  return getType(str) === 'string';
}
