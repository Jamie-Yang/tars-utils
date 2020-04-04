import formatTime from './format-time';

/**
 * 剩余时间格式化（不支持年月，因其周期不固定）
 *
 * @param {number} remain 剩余毫秒数
 * @param {string} format 格式描述：d天 HH:mm:ss.SSS
 * @returns {string} 格式化结果：1天 12:00:00.00
 */
export default function formatRemainTime(remain, format) {
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
}
