import getType from './get-type';

/**
 * 检查数据类型是否为：Map
 * @param {*} map 数据
 * @returns {boolean} 是否
 */
export default function isMap(map) {
  return getType(map) === 'map';
}
