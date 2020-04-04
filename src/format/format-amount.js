/**
 * 金额格式化，保留两位小数、千分位格式化 2333 -> 2,333.00
 *
 * @param {number} amount 金额
 * @returns {string} 格式化结果
 */
export default function formatAmount(amount) {
  const num = Number(amount);

  if (isNaN(num)) {
    return amount;
  }

  return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
