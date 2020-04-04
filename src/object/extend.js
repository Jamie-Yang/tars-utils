/**
 * 对象深复制
 *
 * @param {object} target 目标对象
 * @param {object} objects 对象
 * @returns {object} 复制的对象
 */
export default function extend(target, ...objects) {
  return [...objects].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((_a, k) => {
        const v = obj[k];
        if (Array.isArray(v)) {
          acc[k] = extend([], v);
        } else if (v instanceof Object) {
          acc[k] = extend({}, v);
        } else {
          acc[k] = v;
        }
        return acc;
      }, {}),
    target
  );
}
