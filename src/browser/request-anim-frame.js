/**
 * Polyfill for requestAnimationFrame
 * @see https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
 */

let lastTime = 0;

/**
 * 回退方法
 * @param {Function} callback 回调方法
 * @returns {Function} fallback
 */
function fallback(callback) {
  const now = Date.now();
  const nextTime = Math.max(lastTime + 16, now);

  return setTimeout(function () {
    callback((lastTime = nextTime));
  }, nextTime - now);
}

/**
 * @param {Function} callback 回调方法
 * @returns {Function} requestAnimationFrame 或 回退方法setTimeout
 */
export default function requestAnimFrame(callback) {
  return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || fallback)(callback);
}
