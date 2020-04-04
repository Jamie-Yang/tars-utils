import ua from './ua';

/**
 * 是否为Android系统
 *
 * @returns {boolean} 是否为Android系统
 */
export default function isAndroid() {
  return /Android/i.test(ua());
}
