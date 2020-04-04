/**
 * 生成随机Hex颜色值
 *
 * @returns {string} 随机Hex颜色值
 */
export default function randomColor() {
  return '#' + ('00000' + (~~(Math.random() * (1 << 24))).toString(16)).slice(-6);
}
