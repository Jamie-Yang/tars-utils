const root = document.documentElement;
const body = document.body;

/**
 * 获取页面高度
 * @returns {number} 页面高度
 */
export default function getPageHeight() {
  return Math.max(root.scrollHeight, body.scrollHeight, root.clientHeight);
}
