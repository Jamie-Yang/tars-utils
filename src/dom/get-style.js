/**
 * 获取元素样式
 * @param {Element} el 元素
 * @param {string} ruleName 属性名
 * @returns {string} 样式
 */
export default function getStyle(el, ruleName) {
  return getComputedStyle(el)[ruleName];
}
