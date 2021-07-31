import getType from './get-type';

/**
 * 检查数据类型是否为：数组
 *
 * @param {*} arr 数据
 * @returns {boolean} 是否
 */
export default function isArray(arr) {
  return getType(arr) === 'array';
}
