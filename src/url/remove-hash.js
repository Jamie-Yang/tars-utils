/**
 * 去除 URL 哈希字符串
 *
 * @param {string} url 链接
 * @returns {string} 去除哈希后的链接
 */
export default function removeHash(url = window.location.href) {
  let res = url;
  const hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    res = url.slice(0, hashStart);
  }
  return res;
}
