import isIPhone from './is-iphone';

/**
 * 是否为iPhone刘海屏机型：X XS, XS Max, XR, 11, 11 Pro, 11 Pro Max
 *
 * @returns {boolean} 是否为微信客户端
 */
export default function isNotchIPhone() {
  if (!isIPhone()) {
    return false;
  }

  const screens = [
    { dpr: 3, width: 375, height: 812 },
    { dpr: 3, width: 414, height: 896 },
    { dpr: 2, width: 414, height: 896 },
  ];
  if (typeof window !== 'undefined' && window) {
    const { devicePixelRatio, screen } = window;
    const { width, height } = screen;
    return screens.some(
      (item) => item.dpr === devicePixelRatio && item.width === width && item.height === height
    );
  }
  return false;
}
