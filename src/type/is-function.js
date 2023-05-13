import getType from './get-type';

/**
 * 检查数据类型是否为：函数
 * @param {*} func 数据
 * @returns {boolean} 是否
 */
export default function isFunction(func) {
  return getType(func) === 'function';
}
