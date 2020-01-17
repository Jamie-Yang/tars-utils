/**
 * 时间格式标记替换通用逻辑
 *
 * @param {object} time 时间对象：形式如defaults
 * @param {string} format 格式描述：YYYY-MM-DD HH:mm:ss.SSS 或 d天 HH:mm:ss.SSS
 * @returns {string} 2020-01-01 12:00:00.000 或 1天 12:00:00.00
 */
const formatTime = (time = {}, format) => {
  const defaults = {
    year: 0,
    month: 0,
    date: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  };

  const t = { ...defaults, ...time };

  const map = {
    'Y+': t.year,
    'M+': t.month,
    'D+': t.date,
    'H+': t.hour,
    'm+': t.minute,
    's+': t.second,
    'S+': t.millisecond,
    d: t.day,
  };

  let result = format;

  for (const k in map) {
    if (new RegExp(`(${k})`).test(format)) {
      let v;
      if (k === 'd') {
        v = map[k];
      } else {
        v = ('00' + map[k]).slice(-RegExp.$1.length);
      }
      result = result.replace(RegExp.$1, v);
    }
  }

  return result;
};

/**
 * 时间格式化
 *
 * @param {Date} date 时间对象
 * @param {string} format 格式描述：YYYY-MM-DD HH:mm:ss.SSS
 * @returns {string} 格式化结果：2020-01-01 12:00:00.000
 */
const formatDate = (date, format) => {
  const time = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds(),
  };

  return formatTime(time, format);
};

/**
 * 剩余时间格式化（不支持年月，因其周期不固定）
 *
 * @param {number} remain 剩余毫秒数
 * @param {string} format 格式描述：d天 HH:mm:ss.SSS
 * @returns {string} 格式化结果：1天 12:00:00.00
 */
const formateRemainTime = (remain, format) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  let time = {
    day: Math.floor(remain / DAY),
    hour: Math.floor((remain % DAY) / HOUR),
    minute: Math.floor((remain % HOUR) / MINUTE),
    second: Math.floor((remain % MINUTE) / SECOND),
    millisecond: Math.floor(remain % SECOND),
  };

  return formatTime(time, format);
};

/**
 * 手机号格式化，格式为344
 *
 * @param {string|number} tel 手机号码
 * @param {string} separator 分隔符，默认空格
 * @returns {string} 格式化结果
 */
const formatTel = (tel, separator = ' ') => {
  const str = tel.toString().replace(/\s/g, '');

  if (/(\d{3})(\d{4})(\d{4})/.test(str)) {
    return `${RegExp.$1}${separator}${RegExp.$2}${separator}${RegExp.$3}`;
  }

  return tel;
};

/**
 * 银行卡格式化，格式为四位分割
 *
 * @param {string|number} bankCard 银行卡号
 * @param {string} separator 分隔符，默认空格
 * @returns {string} 格式化结果
 */
const formatBankCard = (bankCard, separator = ' ') => {
  const str = bankCard.toString().replace(/\s/g, '');
  return str.replace(/(\d{4})(?=\d)/g, `$1${separator}`);
};

/**
 * 金额格式化，保留两位小数、千分位格式化 2333 -> 2,333.00
 *
 * @param {number} amount 金额
 * @returns {string} 格式化结果
 */
const formatAmount = (amount) => {
  const num = Number(amount);

  if (isNaN(num)) {
    return amount;
  }

  return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
};

export { formatDate, formateRemainTime, formatTel, formatBankCard, formatAmount };
