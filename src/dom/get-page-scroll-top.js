const root = document.documentElement;
const body = document.body;

/**
 * 获取页面scrollTop
 * @returns {number} 滚动值
 */
export default function getPageScrollTop() {
  return root.scrollTop || body.scrollTop;
}
