/**
 * 加载 JavaScript 脚本
 *
 * @param {string} url script URL
 * @param {string} [id] script 元素 id
 * @param {Function} onload script 元素 onload 事件回调
 * @returns {Element} script 元素
 */
export default function loadScript(url, id, onload) {
  const script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  if (id) {
    script.id = id;
  }
  if (onload) {
    script.onload = onload;
  }
  document.body.appendChild(script);
  return script;
}
