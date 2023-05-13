/**
 * 消除非交互元素的touch事件
 */
export default function lockTouch() {
  document.addEventListener('touchmove', function (e) {
    e.preventDefault();
  });
  document.addEventListener('touchstart', preventDefault);
  document.addEventListener('touchend', preventDefault);

  /**
   * 判断事件是否非由某类元素触发
   * @param {Event} e 事件
   * @param {string} tag 标签名
   * @returns {boolean} 非指定元素
   */
  function not(e, tag) {
    return e.target.tagName !== tag.toUpperCase() && e.target.tagName !== tag.toLowerCase();
  }

  /**
   * 阻止非交互元素触发事件
   * @param {Event} e 事件
   * @returns {undefined}
   */
  function preventDefault(e) {
    if (not(e, 'input') && not(e, 'textarea') && not(e, 'select') && not(e, 'menus')) e.preventDefault();
  }
}
