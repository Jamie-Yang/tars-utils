/**
 * 按指定范围生成随机数
 *
 * @param {number} a 最小值
 * @param {number} b 最大值
 * @param {boolean|string} [int] 是否生成整数
 * @returns {number} 随机数
 */
export default function randomA2B(a, b, int) {
  let result = Math.random() * (a - b) + a;
  return int ? Math.floor(result) : result;
}
