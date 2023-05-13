/**
 * 数组切片
 * @param {Array} arr 数组
 * @param {number} size 切片长度
 * @returns {Array} 切片后的二维数组
 * @example
 * chunk([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
 */
export default function chunk(arr, size = 1) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) => arr.slice(i * size, i * size + size));
}
