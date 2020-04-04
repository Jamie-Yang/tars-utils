const root = document.documentElement;
const body = document.body;

/**
 * 获取页面宽度
 *
 * @returns {number} 页面宽度
 */
export default function getPageWidth() {
  return Math.max(root.scrollWidth, body.scrollWidth, root.clientWidth);
}
