import ua from './ua';

/**
 * 是否为iOS系统
 * @returns {boolean} 是否为iOS系统
 */
export default function isIOS() {
  return /iPhone|iPad|iPod/.test(ua());
}
