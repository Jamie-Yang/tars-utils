/**
 * 乱序（洗牌算法）
 *
 * @param {Array} arr 数组
 * @returns {Array} 经过随机乱序后的数组
 */
export default function shuffle(arr = []) {
  let cursor = arr.length;

  while (--cursor) {
    const random = Math.floor(Math.random() * cursor);
    [arr[cursor], arr[random]] = [arr[random], arr[cursor]];
  }

  return arr;
}
