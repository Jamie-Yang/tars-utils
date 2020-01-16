/**
 * Polyfill for requestAnimationFrame
 *
 * @see https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
 */

let lastTime = 0;

/**
 * 回退方法
 *
 * @param {Function} callback 回调方法
 * @returns {Function} fallback
 */
function fallback(callback) {
  const now = Date.now();
  const nextTime = Math.max(lastTime + 16, now);

  return setTimeout(function() {
    callback((lastTime = nextTime));
  }, nextTime - now);
}

/**
 * @param {Function} callback 回调方法
 * @returns {Function} requestAnimationFrame 或 回退方法setTimeout
 */
const requestAnimFrame = (callback) => {
  return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || fallback)(callback);
};

/**
 * @param {number} id 事件ID
 * @returns {undefined}
 */
const cancelAnimFrame = (id) => {
  (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
};

export { requestAnimFrame, cancelAnimFrame };
