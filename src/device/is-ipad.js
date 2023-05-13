import ua from './ua';

/**
 * 是否为iPad设备
 * @returns {boolean} 是否为iPad设备
 */
export default function isIPad() {
  return /iPad/.test(ua());
}
