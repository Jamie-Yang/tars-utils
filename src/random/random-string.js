/**
 * 生成随机字符串
 *
 * @param {number} [len] 长度
 * @returns {string} 随机字符串
 */
export default function randomString(len = 32) {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
