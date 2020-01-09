const ua = (lower) => {
  return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
};

const isIOS = () => {
  return /iPhone|iPad|iPod/.test(ua());
};

const isIPhone = () => {
  return /iPhone/.test(ua());
};

const isIPad = () => {
  return /iPad/.test(ua());
};

const isAndroid = () => {
  return /Android/i.test(ua());
};

const isWeiXin = () => {
  return /MicroMessenger/i.test(ua());
};

// X XS, XS Max, XR, 11, 11 Pro, 11 Pro Max
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
