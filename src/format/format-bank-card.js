/**
 * 银行卡格式化，格式为四位分割
 * @param {string|number} bankCard 银行卡号
 * @param {string} separator 分隔符，默认空格
 * @returns {string} 格式化结果
 */
export default function formatBankCard(bankCard, separator = ' ') {
  const str = bankCard.toString().replace(/\s/g, '');
  return str.replace(/(\d{4})(?=\d)/g, `$1${separator}`);
}
