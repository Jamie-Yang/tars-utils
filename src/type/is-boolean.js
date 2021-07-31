import getType from './get-type';

/**
 * 检查数据类型是否为：布尔
 *
 * @param {*} bool 数据
 * @returns {boolean} 是否
 */
export default function isBoolean(bool) {
  return getType(bool) === 'boolean';
}
