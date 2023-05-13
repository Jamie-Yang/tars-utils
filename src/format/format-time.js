/**
 * 时间格式标记替换通用逻辑
 * @param {object} time 时间对象：形式如defaults
 * @param {string} format 格式描述：YYYY-MM-DD HH:mm:ss.SSS 或 d天 HH:mm:ss.SSS
 * @returns {string} 2020-01-01 12:00:00.000 或 1天 12:00:00.00
 */
export default function formatTime(time = {}, format) {
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
}
