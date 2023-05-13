/**
 * 计算base64字符串大小
 * @param {string} base64 base64
 * @returns {number} 返回KB数字
 */
export default function getBase64Size(base64) {
  let strLen = base64.length;
  let fileSize = strLen - (strLen / 8) * 2;
  return Math.ceil(fileSize / 1024);
}
