import { randomColor } from './random';

const root = document.documentElement;
const body = document.body;

// 获取页面高度
const getPageHeight = () => Math.max(root.scrollHeight, body.scrollHeight, root.clientHeight);

// 获取页面宽度
const getPageWidth = () => Math.max(root.scrollWidth, body.scrollWidth, root.clientWidth);

// 获取视窗高度
const getViewHeight = () => root.clientHeight;

// 获取视窗宽度
const getViewWidth = () => root.clientWidth;

// 获取页面scrollTop
const getPageScrollTop = () => root.scrollTop || body.scrollTop;

// 获取元素样式
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

// 设置元素样式
const setStyle = (el, ruleName, val) => {
  el.style[ruleName] = val;
};

/**
 * 平滑滚动
 *
 * @param {Element|Window} el 滚动容器
 * @param {number} from 起始量
 * @param {number} to 终止量
 * @param {number} duration 过渡时间
 * @param {Function} endCallback 结束回调
 */
// eslint-disable-next-line max-params
const scrollTo = (el, from = 0, to, duration = 500, endCallback) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      ((callback) => {
        window.setTimeout(callback, 1000 / 60);
      });
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil((difference / duration) * 50);

  const scroll = (start, end, step) => {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  };
  scroll(from, to, step);
};

/**
 * 判断元素是否在可视窗口可见
 *
 * @param {Element} el 元素
 * @param {boolean} partiallyVisible 是否部分可见
 * @returns {boolean} 是否可见
 */
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/**
 * 消除非交互元素的touch事件
 */
const lockTouch = () => {
  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  });
  document.addEventListener('touchstart', preventDefault);
  document.addEventListener('touchend', preventDefault);

  /**
   * 判断事件是否非由某类元素触发
   *
   * @param {Event} e 事件
   * @param {string} tag 标签名
   * @returns {boolean} 非指定元素
   */
  function not(e, tag) {
    return e.target.tagName !== tag.toUpperCase() && e.target.tagName !== tag.toLowerCase();
  }

  /**
   * 阻止非交互元素触发事件
   *
   * @param {Event} e 事件
   * @returns {undefined}
   */
  function preventDefault(e) {
    if (not(e, 'input') && not(e, 'textarea') && not(e, 'select') && not(e, 'menus'))
      e.preventDefault();
  }
};

/**
 * 框出所有元素，检测布局
 */
const outlineElements = () => {
  document.querySelectorAll('*').forEach((el) => {
    el.style.outline = '1px solid ' + randomColor;
  });
};

/**
 * 将输入框光标定位在文端结尾处
 *
 * @param {Element} el 元素
 */
const putCursorAtEnd = (el) => {
  el.focus();

  // If this function exists... (IE 9+)
  if (el.setSelectionRange) {
    // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
    let len = el.value.length * 2;

    // Timeout seems to be required for Blink
    setTimeout(function() {
      el.setSelectionRange(len, len);
    }, 0);
  } else {
    // As a fallback, replace the contents with itself
    el.value = el.value; // eslint-disable-line no-self-assign
  }

  // Scroll to the bottom, in case we're in a tall textarea
  // (Necessary for Firefox and Chrome)
  el.scrollTop = 999999;
};

export {
  getPageHeight,
  getPageWidth,
  getViewHeight,
  getViewWidth,
  getPageScrollTop,
  getStyle,
  setStyle,
  scrollTo,
  elementIsVisibleInViewport,
  lockTouch,
  outlineElements,
  putCursorAtEnd,
};
