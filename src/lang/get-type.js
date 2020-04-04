/**
 * 获取数据类型
 *
 * @param {*} val 数据
 * @returns {string} 类型名 object，array，string，boolean，number，map，set，function, undefined
 */
const getType = (val) => {
  return Object.prototype.toString
    .call(val)
    .slice(8, -1) // [object XXX]
    .toLowerCase();
};

export default getType;
