import loadScript from './load-script';

/**
 * 加载 JavaScript 脚本的 Promise 封装，通过 id 避免重复加载同一文件
 *
 * @param {string} url script URL
 * @param {string} id script 元素 id
 * @returns {Promise} Promise 对象
 */
export default function loadScriptAsync(url, id) {
  return new Promise((resolve) => {
    let script = document.getElementById(id);
    if (script && script.src === url) {
      return resolve();
    }
    script = loadScript(url, id);
    script.onload = () => {
      resolve();
    };
  });
}
