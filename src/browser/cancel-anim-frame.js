/**
 * @param {number} id 事件ID
 * @returns {undefined}
 */
export default function cancelAnimFrame(id) {
  (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
}
