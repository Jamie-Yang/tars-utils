/**
 * 生成随机字符串
 *
 * @param {number} [len] 长度
 * @returns {string} 随机字符串
 */
const randomString = (len = 32) => {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789';
  let str = '';
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

/**
 * 生成随机Hex颜色值
 *
 * @returns {string} 随机Hex颜色值
 */
const randomColor = () => {
  return '#' + ('00000' + (~~(Math.random() * (1 << 24))).toString(16)).slice(-6);
};

/**
 * 按指定范围生成随机数
 *
 * @param {number} m 最小值
 * @param {number} n 最大值
 * @param {boolean|string} [int] 是否生成整数
 * @returns {number} 随机数
 */
const randomM2N = (m, n, int) => {
  let result = Math.random() * (m - n) + m;
  return int ? Math.floor(result) : result;
};

/**
 * 生成uuid
 *
 * @returns {string} uuid
 */
const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0;
    let v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export { randomString, randomColor, randomM2N, uuid };
