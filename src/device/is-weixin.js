import ua from './ua';

/**
 * 是否为微信客户端
 *
 * @returns {boolean} 是否为微信客户端
 */
export default function isWeixin() {
  return /MicroMessenger/i.test(ua());
}
