const root = document.documentElement;

/**
 * 获取视窗高度
 * @returns {number} 视窗高度
 */
export default function getViewHeight() {
  return root.clientHeight;
}
