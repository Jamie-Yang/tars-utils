/**
 * 设置元素样式
 * @param {Element} el 元素
 * @param {string} ruleName 样式名
 * @param {string} val 样式
 */
export default function setStyle(el, ruleName, val) {
  el.style[ruleName] = val;
}
