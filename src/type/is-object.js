import getType from './get-type';

/**
 * 检查数据类型是否为：对象
 *
 * @param {*} obj 数据
 * @returns {boolean} 是否
 */
export default function isObject(obj) {
  return getType(obj) === 'object';
}
