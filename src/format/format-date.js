import formatTime from './format-time';

/**
 * 时间格式化
 *
 * @param {Date} date 时间对象
 * @param {string} format 格式描述：YYYY-MM-DD HH:mm:ss.SSS
 * @returns {string} 格式化结果：2020-01-01 12:00:00.000
 */
export default function formatDate(date, format) {
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
}
