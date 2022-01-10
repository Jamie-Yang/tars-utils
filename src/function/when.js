/**
 * 等待第三方条件满足后执行
 *
 * @param {Function} conditionFn 条件检查方法
 * @param {number} wait 等待间隙
 * @param {number} maxWait 最大等待时间
 * @returns {Promise} Promise
 */
export default function when(conditionFn, wait = 100, maxWait = 3000) {
  let time = 0;
  return new Promise((resolve, reject) => {
    (function check() {
      if (conditionFn()) return resolve();
      time += wait;
      if (time >= maxWait) return reject(new Error('timeout'));
      setTimeout(check, wait);
    })();
  });
}
