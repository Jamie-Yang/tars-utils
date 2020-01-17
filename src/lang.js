/**
 * 获取数据类型 object，array，string，boolean，number，map，set，function, undefined
 *
 * @param {*} val 数据
 * @returns {string} 类型名
 */
const getType = (val) => {
  return Object.prototype.toString
    .call(val)
    .slice(8, -1) // [object XXX]
    .toLowerCase();
};

const isObject = (obj) => getType(obj) === 'object';

const isArray = (arr) => getType(arr) === 'array';

const isString = (str) => getType(str) === 'string';

const isBoolean = (bool) => getType(bool) === 'boolean';

const isNumber = (number) => getType(number) === 'number';

const isMap = (map) => getType(map) === 'map';

const isSet = (set) => getType(set) === 'set';

const isFunction = (func) => getType(func) === 'function';

const isEmpty = (val) => val === null || !(Object.keys(val) || val).length;

export {
  getType,
  isObject,
  isArray,
  isString,
  isBoolean,
  isNumber,
  isMap,
  isSet,
  isFunction,
  isEmpty,
};
