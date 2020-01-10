/**
 * 获取UA
 *
 * @param {any} lower 是否转小写
 * @returns {string} UA
 */
const ua = (lower) => {
  return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
};

/**
 * 是否为iOS系统
 *
 * @returns {boolean} 是否为iOS系统
 */
const isIOS = () => {
  return /iPhone|iPad|iPod/.test(ua());
};

/**
 * 是否为iPhone设备
 *
 * @returns {boolean} 是否为iPhone设备
 */
const isIPhone = () => {
  return /iPhone/.test(ua());
};

/**
 * 是否为iPad设备
 *
 * @returns {boolean} 是否为iPad设备
 */
const isIPad = () => {
  return /iPad/.test(ua());
};

/**
 * 是否为Android系统
 *
 * @returns {boolean} 是否为Android系统
 */
const isAndroid = () => {
  return /Android/i.test(ua());
};

/**
 * 是否为微信客户端
 *
 * @returns {boolean} 是否为微信客户端
 */
const isWeiXin = () => {
  return /MicroMessenger/i.test(ua());
};

/**
 * 是否为iPhone刘海屏机型：X XS, XS Max, XR, 11, 11 Pro, 11 Pro Max
 *
 * @returns {boolean} 是否为微信客户端
 */
const isNotchIPhone = () => {
  const screens = [
    { dpr: 3, width: 375, height: 812 },
    { dpr: 3, width: 414, height: 896 },
    { dpr: 2, width: 414, height: 896 }
  ];
  if (typeof window !== 'undefined' && window) {
    const { devicePixelRatio, screen } = window;
    const { width, height } = screen;
    return screens.some(
      (item) => item.dpr === devicePixelRatio && item.width === width && item.height === height
    );
  }
  return false;
};

export { ua, isIOS, isIPhone, isIPad, isAndroid, isWeiXin, isNotchIPhone };
