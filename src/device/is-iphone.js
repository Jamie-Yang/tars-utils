import ua from './ua';

/**
 * 是否为iPhone设备
 * @returns {boolean} 是否为iPhone设备
 */
export default function isIPhone() {
  return /iPhone/.test(ua());
}
