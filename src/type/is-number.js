import getType from './get-type';

/**
 * 检查数据类型是否为：数值
 * @param {*} number 数据
 * @returns {boolean} 是否
 */
export default function isNumber(number) {
  return getType(number) === 'number';
}
