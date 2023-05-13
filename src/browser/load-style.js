/**
 * 加载 style 脚本
 *
 * @param {string} url style URL
 */
export default function loadStyle(url) {
  const link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  document.head.appendChild(link);
}
