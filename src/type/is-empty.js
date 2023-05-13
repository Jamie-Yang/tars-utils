/**
 * 检查数据是否为空：null、空对象、空数组
 * @param {*} val 数据
 * @returns {boolean} 是否
 */
export default function isEmpty(val) {
  return val === null || !(Object.keys(val) || val).length;
}
