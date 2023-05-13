import getType from './get-type';

/**
 * 检查数据类型是否为：Set
 * @param {*} set 数据
 * @returns {boolean} 是否
 */
export default function isSet(set) {
  return getType(set) === 'set';
}
