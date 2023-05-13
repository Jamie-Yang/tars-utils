const root = document.documentElement;

/**
 * 获取视窗宽度
 * @returns {number} 视窗宽度
 */
export default function getViewWidth() {
  return root.clientWidth;
}
