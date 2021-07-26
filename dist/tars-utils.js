
/*
 * tars-utils
 * https://github.com/Jamie-Yang/tars-utils.git
 * version 1.0.1
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.tars = {}));
}(this, (function (exports) { 'use strict';

  /**
   * 数组切片
   *
   * @param {Array} arr 数组
   * @param {number} size 切片长度
   * @returns {Array} 切片后的二维数组
   * @example
   * chunk([1, 2, 3, 4], 2) => [[1, 2], [3, 4]]
   */
  function chunk(arr) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return Array.from({
      length: Math.ceil(arr.length / size)
    }, function (_v, i) {
      return arr.slice(i * size, i * size + size);
    });
  }

  /**
   * Polyfill for requestAnimationFrame
   *
   * @see https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
   */
  var lastTime = 0;
  /**
   * 回退方法
   *
   * @param {Function} callback 回调方法
   * @returns {Function} fallback
   */

  function fallback(callback) {
    var now = Date.now();
    var nextTime = Math.max(lastTime + 16, now);
    return setTimeout(function () {
      callback(lastTime = nextTime);
    }, nextTime - now);
  }
  /**
   * @param {Function} callback 回调方法
   * @returns {Function} requestAnimationFrame 或 回退方法setTimeout
   */


  function requestAnimFrame(callback) {
    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || fallback)(callback);
  }

  /**
   * @param {number} id 事件ID
   * @returns {undefined}
   */
  function cancelAnimFrame(id) {
    (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout)(id);
  }

  /**
   * 获取UA
   *
   * @param {any} lower 是否转小写
   * @returns {string} UA
   */
  function ua (lower) {
    return lower ? window.navigator.userAgent.toLowerCase() : window.navigator.userAgent;
  }

  /**
   * 是否为Android系统
   *
   * @returns {boolean} 是否为Android系统
   */

  function isAndroid() {
    return /Android/i.test(ua());
  }

  /**
   * 是否为iOS系统
   *
   * @returns {boolean} 是否为iOS系统
   */

  function isIOS() {
    return /iPhone|iPad|iPod/.test(ua());
  }

  /**
   * 是否为iPad设备
   *
   * @returns {boolean} 是否为iPad设备
   */

  function isIPad() {
    return /iPad/.test(ua());
  }

  /**
   * 是否为iPhone设备
   *
   * @returns {boolean} 是否为iPhone设备
   */

  function isIPhone() {
    return /iPhone/.test(ua());
  }

  /**
   * 是否为iPhone刘海屏机型：X XS, XS Max, XR, 11, 11 Pro, 11 Pro Max
   *
   * @returns {boolean} 是否为微信客户端
   */

  function isNotchIPhone() {
    if (!isIPhone()) {
      return false;
    }

    var screens = [{
      dpr: 3,
      width: 375,
      height: 812
    }, {
      dpr: 3,
      width: 414,
      height: 896
    }, {
      dpr: 2,
      width: 414,
      height: 896
    }];

    if (typeof window !== 'undefined' && window) {
      var _window = window,
          devicePixelRatio = _window.devicePixelRatio,
          screen = _window.screen;
      var width = screen.width,
          height = screen.height;
      return screens.some(function (item) {
        return item.dpr === devicePixelRatio && item.width === width && item.height === height;
      });
    }

    return false;
  }

  /**
   * 是否为微信客户端
   *
   * @returns {boolean} 是否为微信客户端
   */

  function isWeixin() {
    return /MicroMessenger/i.test(ua());
  }

  var root = document.documentElement;
  var body = document.body;
  /**
   * 获取页面高度
   *
   * @returns {number} 页面高度
   */

  function getPageHeight() {
    return Math.max(root.scrollHeight, body.scrollHeight, root.clientHeight);
  }

  var root$1 = document.documentElement;
  var body$1 = document.body;
  /**
   * 获取页面宽度
   *
   * @returns {number} 页面宽度
   */

  function getPageWidth() {
    return Math.max(root$1.scrollWidth, body$1.scrollWidth, root$1.clientWidth);
  }

  var root$2 = document.documentElement;
  var body$2 = document.body;
  /**
   * 获取页面scrollTop
   *
   * @returns {number} 滚动值
   */

  function getPageScrollTop() {
    return root$2.scrollTop || body$2.scrollTop;
  }

  /**
   * 获取元素样式
   *
   * @param {Element} el 元素
   * @param {string} ruleName 属性名
   * @returns {string} 样式
   */
  function getStyle(el, ruleName) {
    return getComputedStyle(el)[ruleName];
  }

  var root$3 = document.documentElement;
  /**
   * 获取视窗高度
   *
   * @returns {number} 视窗高度
   */

  function getViewHeight() {
    return root$3.clientHeight;
  }

  var root$4 = document.documentElement;
  /**
   * 获取视窗宽度
   *
   * @returns {number} 视窗宽度
   */

  function getViewWidth() {
    return root$4.clientWidth;
  }

  /**
   * 判断元素是否在可视窗口可见
   *
   * @param {Element} el 元素
   * @param {boolean} partiallyVisible 是否部分可见
   * @returns {boolean} 是否可见
   */
  function elementIsVisibleInViewport(el) {
    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _el$getBoundingClient = el.getBoundingClientRect(),
        top = _el$getBoundingClient.top,
        left = _el$getBoundingClient.left,
        bottom = _el$getBoundingClient.bottom,
        right = _el$getBoundingClient.right;

    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  }

  /**
   * 消除非交互元素的touch事件
   */
  function lockTouch() {
    document.addEventListener('touchmove', function (e) {
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
      if (not(e, 'input') && not(e, 'textarea') && not(e, 'select') && not(e, 'menus')) e.preventDefault();
    }
  }

  /**
   * 生成随机Hex颜色值
   *
   * @returns {string} 随机Hex颜色值
   */
  function randomColor() {
    return '#' + ('00000' + (~~(Math.random() * (1 << 24))).toString(16)).slice(-6);
  }

  /**
   * 框出所有元素，检测布局
   */

  function outlineElements() {
    document.querySelectorAll('*').forEach(function (el) {
      el.style.outline = '1px solid ' + randomColor;
    });
  }

  /**
   * 将输入框光标定位在文端结尾处
   *
   * @param {Element} el 元素
   */
  function putCursorAtEnd(el) {
    el.focus(); // If this function exists... (IE 9+)

    if (el.setSelectionRange) {
      // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
      var len = el.value.length * 2; // Timeout seems to be required for Blink

      setTimeout(function () {
        el.setSelectionRange(len, len);
      }, 0);
    } else {
      // As a fallback, replace the contents with itself
      el.value = el.value; // eslint-disable-line no-self-assign
    } // Scroll to the bottom, in case we're in a tall textarea
    // (Necessary for Firefox and Chrome)


    el.scrollTop = 999999;
  }

  /**
   * 平滑滚动
   *
   * @param {object} options 配置项
   * @param {Element|Window} [options.el] 滚动容器元素或window
   * @param {number} [options.from] 起始位置
   * @param {number} options.to 终止位置
   * @param {number} [options.duration] 过渡时间
   * @param {Function} [options.onEnd] 结束回调
   */
  function scrollTo(options) {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = window.webkitRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }

    var _options$el = options.el,
        el = _options$el === void 0 ? window : _options$el,
        _options$from = options.from,
        from = _options$from === void 0 ? 0 : _options$from,
        to = options.to,
        _options$duration = options.duration,
        duration = _options$duration === void 0 ? 500 : _options$duration,
        onEnd = options.onEnd;
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);

    var scroll = function scroll(start, end, step) {
      if (start === end) {
        onEnd && onEnd();
        return;
      }

      var d = start + step > end ? end : start + step;

      if (start > end) {
        d = start - step < end ? end : start - step;
      }

      if (el === window) {
        window.scrollTo(0, d);
      } else {
        el.scrollTop = d;
      }

      window.requestAnimationFrame(function () {
        return scroll(d, end, step);
      });
    };

    scroll(from, to, step);
  }

  /**
   * 设置元素样式
   *
   * @param {Element} el 元素
   * @param {string} ruleName 样式名
   * @param {string} val 样式
   */
  function setStyle(el, ruleName, val) {
    el.style[ruleName] = val;
  }

  /**
   * 金额格式化，保留两位小数、千分位格式化 2333 -> 2,333.00
   *
   * @param {number} amount 金额
   * @returns {string} 格式化结果
   */
  function formatAmount(amount) {
    var num = Number(amount);

    if (isNaN(num)) {
      return amount;
    }

    return num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
  }

  /**
   * 银行卡格式化，格式为四位分割
   *
   * @param {string|number} bankCard 银行卡号
   * @param {string} separator 分隔符，默认空格
   * @returns {string} 格式化结果
   */
  function formatBankCard(bankCard) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    var str = bankCard.toString().replace(/\s/g, '');
    return str.replace(/(\d{4})(?=\d)/g, "$1".concat(separator));
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * 时间格式标记替换通用逻辑
   *
   * @param {object} time 时间对象：形式如defaults
   * @param {string} format 格式描述：YYYY-MM-DD HH:mm:ss.SSS 或 d天 HH:mm:ss.SSS
   * @returns {string} 2020-01-01 12:00:00.000 或 1天 12:00:00.00
   */
  function formatTime() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 ? arguments[1] : undefined;
    var defaults = {
      year: 0,
      month: 0,
      date: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };

    var t = _objectSpread2(_objectSpread2({}, defaults), time);

    var map = {
      'Y+': t.year,
      'M+': t.month,
      'D+': t.date,
      'H+': t.hour,
      'm+': t.minute,
      's+': t.second,
      'S+': t.millisecond,
      d: t.day
    };
    var result = format;

    for (var k in map) {
      if (new RegExp("(".concat(k, ")")).test(format)) {
        var v = void 0;

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

  /**
   * 时间格式化
   *
   * @param {Date} date 时间对象
   * @param {string} format 格式描述：YYYY-MM-DD HH:mm:ss.SSS
   * @returns {string} 格式化结果：2020-01-01 12:00:00.000
   */

  function formatDate(date, format) {
    var time = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      millisecond: date.getMilliseconds()
    };
    return formatTime(time, format);
  }

  /**
   * 剩余时间格式化（不支持年月，因其周期不固定）
   *
   * @param {number} remain 剩余毫秒数
   * @param {string} format 格式描述：d天 HH:mm:ss.SSS
   * @returns {string} 格式化结果：1天 12:00:00.00
   */

  function formatRemainTime(remain, format) {
    var SECOND = 1000;
    var MINUTE = 60 * SECOND;
    var HOUR = 60 * MINUTE;
    var DAY = 24 * HOUR;
    var time = {
      day: Math.floor(remain / DAY),
      hour: Math.floor(remain % DAY / HOUR),
      minute: Math.floor(remain % HOUR / MINUTE),
      second: Math.floor(remain % MINUTE / SECOND),
      millisecond: Math.floor(remain % SECOND)
    };
    return formatTime(time, format);
  }

  /**
   * 手机号格式化，格式为344
   *
   * @param {string|number} tel 手机号码
   * @param {string} separator 分隔符，默认空格
   * @returns {string} 格式化结果
   */
  function formatTel(tel) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    var str = tel.toString().replace(/\s/g, '');

    if (/(\d{3})(\d{4})(\d{4})/.test(str)) {
      return "".concat(RegExp.$1).concat(separator).concat(RegExp.$2).concat(separator).concat(RegExp.$3);
    }

    return tel;
  }

  /**
   * 函数组合
   * 可将 fn1(fn2(fn3(fn4(x)))) 这种嵌套的调用方式
   * 改成 compose(fn1,fn2,fn3,fn4)(x) 的方式调用
   *
   * @param  {...Function} funcs 方法
   * @returns {Function} 组合结果方法
   */
  function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }

  /**
   * 获取数据类型
   *
   * @param {*} val 数据
   * @returns {string} 类型名 object，array，string，boolean，number，map，set，function, undefined
   */
  function getType(val) {
    return Object.prototype.toString.call(val).slice(8, -1) // [object XXX]
    .toLowerCase();
  }

  /**
   * 检查数据类型是否为：对象
   *
   * @param {*} obj 数据
   * @returns {boolean} 是否
   */

  function isObject(obj) {
    return getType(obj) === 'object';
  }

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */

  function debounce(func, wait, options) {
    var lastArgs;
    var lastThis;
    var maxWait;
    var result;
    var timerId;
    var lastCallTime;
    var lastInvokeTime = 0;
    var leading = false;
    var maxing = false;
    var trailing = true;

    if (typeof func !== 'function') {
      throw new TypeError('Expected a function');
    }

    wait = Number(wait) || 0; // eslint-disable-line no-param-reassign

    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    /**
     * @param {number} time 时间戳
     * @returns {*} 方法执行结果
     */


    function invokeFunc(time) {
      var args = lastArgs;
      var thisArg = lastThis;
      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    /**
     * @param {number} time 时间戳
     * @returns {*} 方法执行结果
     */


    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time; // Start the timer for the trailing edge.

      timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

      return leading ? invokeFunc(time) : result;
    }
    /**
     * @param {number} time 时间戳
     * @returns {number} 剩余等待时间
     */


    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime;
      var timeSinceLastInvoke = time - lastInvokeTime;
      var timeWaiting = wait - timeSinceLastCall;
      return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    /**
     * @param {number} time 时间戳
     * @returns {boolean} 可否调用
     */


    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime;
      var timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.

      return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    /**
     * @returns {number} 定时器ID
     */


    function timerExpired() {
      var time = Date.now();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      } // Restart the timer.


      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    /**
     * @param {number} time 时间戳
     * @returns {*} 方法执行结果
     */


    function trailingEdge(time) {
      timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.

      if (trailing && lastArgs) {
        return invokeFunc(time);
      }

      lastArgs = lastThis = undefined;
      return result;
    }
    /**
     *  取消方法
     */


    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }

      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    /**
     * 立即执行
     *
     * @returns {*} 方法执行结果
     */


    function flush() {
      return timerId === undefined ? result : trailingEdge(Date.now());
    }
    /**
     * @param {...*} args 方法参数
     * @returns {*} 方法执行结果
     */


    function debounced() {
      var time = Date.now();
      var isInvoking = shouldInvoke(time);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      lastArgs = args;
      lastThis = this; // eslint-disable-line no-invalid-this

      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }

        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }

      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }

      return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @since 0.1.0
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */

  function throttle(func, wait, options) {
    var leading = true;
    var trailing = true;

    if (typeof func !== 'function') {
      throw new TypeError('Expected a function');
    }

    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    return debounce(func, wait, {
      leading: leading,
      maxWait: wait,
      trailing: trailing
    });
  }

  /**
   * 优化图片尺寸和文件大小
   * 不支持Gif格式
   *
   * @param {object|string} image 原始图片，支持File对象和base64字符串
   * @param {number} [quality] 品质，范围为 0 - 1, 仅支持MIME类型为 image/jpeg 或 image/webp
   * @param {object} [options={}] 配置项
   * @param {number} [options.maxWidth=750] 生成图片的最大宽度，若原始图片宽度小于此值，则使用原始图片的宽度
   * @param {string} [options.mimeType] 生成图片的MIME类型
   * @returns {Promise<Blob>} 生成图片 Blob对象
   */
  function optimizeImage(image) {
    var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.9;

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$maxWidth = _ref.maxWidth,
        maxWidth = _ref$maxWidth === void 0 ? 750 : _ref$maxWidth,
        mimeType = _ref.mimeType;

    return new Promise(function (resolve, reject) {
      if (image instanceof File) {
        var reader = new FileReader();

        reader.onload = function () {
          toBlob(this.result);
        };

        reader.readAsDataURL(image);
      } else if (typeof image === 'string') {
        toBlob(image);
      }
      /**
       * To Blob
       *
       * @param {string} data - Image: Data URL
       * @returns {Promise<Blob>} 生成图片 Blob对象
       */


      function toBlob(data) {
        var type = data.match(/data:([^;,]+)/);

        if (Array.isArray(type)) {
          var outputType = mimeType ? mimeType : type[1];

          if (outputType === 'image/gif') {
            return resolve(image);
          }

          var virtualImage = new Image();
          virtualImage.src = data;

          virtualImage.onload = function () {
            var width = this.naturalWidth;
            var height = this.naturalHeight;

            if (width > maxWidth) {
              height = Math.round(maxWidth * height / width);
              width = maxWidth;
            }

            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext('2d');
            context.drawImage(this, 0, 0, width, height);
            canvas.toBlob(function (blob) {
              resolve(blob);
            }, mimeType ? mimeType : type[1], quality);
          };
        } else {
          reject(new Error('[Slug Function] Non-picture type Data URLs'));
        }
      }
    });
  }

  /**
   * 检查数据类型是否为：数组
   *
   * @param {*} arr 数据
   * @returns {boolean} 是否
   */

  function isArray(arr) {
    return getType(arr) === 'array';
  }

  /**
   * 检查数据类型是否为：布尔
   *
   * @param {*} bool 数据
   * @returns {boolean} 是否
   */

  function isBoolean(bool) {
    return getType(bool) === 'boolean';
  }

  /**
   * 检查数据是否为空：null、空对象、空数组
   *
   * @param {*} val 数据
   * @returns {boolean} 是否
   */
  function isEmpty(val) {
    return val === null || !(Object.keys(val) || val).length;
  }

  /**
   * 检查数据类型是否为：函数
   *
   * @param {*} func 数据
   * @returns {boolean} 是否
   */

  function isFunction(func) {
    return getType(func) === 'function';
  }

  /**
   * 检查数据类型是否为：Map
   *
   * @param {*} map 数据
   * @returns {boolean} 是否
   */

  function isMap(map) {
    return getType(map) === 'map';
  }

  /**
   * 检查数据类型是否为：数值
   *
   * @param {*} number 数据
   * @returns {boolean} 是否
   */

  function isNumber(number) {
    return getType(number) === 'number';
  }

  /**
   * 检查数据类型是否为：Set
   *
   * @param {*} set 数据
   * @returns {boolean} 是否
   */

  function isSet(set) {
    return getType(set) === 'set';
  }

  /**
   * 检查数据类型是否为：字符串
   *
   * @param {*} str 数据
   * @returns {boolean} 是否
   */

  function isString(str) {
    return getType(str) === 'string';
  }

  /**
   * 对象深复制
   *
   * @param {object} target 目标对象
   * @param {object} objects 对象
   * @returns {object} 复制的对象
   */
  function extend(target) {
    for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objects[_key - 1] = arguments[_key];
    }

    return [].concat(objects).reduce(function (acc, obj) {
      return Object.keys(obj).reduce(function (_a, k) {
        var v = obj[k];

        if (Array.isArray(v)) {
          acc[k] = extend([], v);
        } else if (v instanceof Object) {
          acc[k] = extend({}, v);
        } else {
          acc[k] = v;
        }

        return acc;
      }, {});
    }, target);
  }

  /**
   * 对象深合并
   *
   * @param {...object} objects 对象
   * @returns {object} 合并后的对象
   * @example
   * merge({a:[1,2]}, {a:[3,4]}) => {a:[1,2,3,4]}
   */
  function merge() {
    for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
      objects[_key] = arguments[_key];
    }

    return [].concat(objects).reduce(function (acc, obj) {
      return Object.keys(obj).reduce(function (_a, k) {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {});
    }, {});
  }

  /**
   * 移除对象的key，浅拷贝对象
   *
   * @param {object} obj 原始对象
   * @param {string[]} arr 需排除的key
   * @returns {object} 处理后的对象
   * @example
   * omit({a:1, b:2, c:3}, ['b', 'c']) => {a:1}
   */
  function omit(obj, arr) {
    return Object.keys(obj).filter(function (k) {
      return !arr.includes(k);
    }).reduce(function (acc, key) {
      acc[key] = obj[key];
      return acc;
    }, {});
  }

  /**
   * 筛选对象的key，浅拷贝对象
   *
   * @param {object} obj 原始对象
   * @param {string[]} arr 需保留的key
   * @returns {object} 处理后的对象
   * @example
   * pick({a:1, b:2, c:3}, ['b', 'c']) => {b:2, c:3}
   */
  function pick(obj, arr) {
    return arr.reduce(function (acc, cur) {
      cur in obj && (acc[cur] = obj[cur]);
      return acc;
    }, {});
  }

  /**
   * 按指定范围生成随机数
   *
   * @param {number} a 最小值
   * @param {number} b 最大值
   * @param {boolean|string} [int] 是否生成整数
   * @returns {number} 随机数
   */
  function randomA2B(a, b, _int) {
    var result = Math.random() * (b - a) + a;
    return _int ? Math.floor(result) : result;
  }

  /**
   * 生成随机字符串
   *
   * @param {number} [len] 长度
   * @returns {string} 随机字符串
   */
  function randomString() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789';
    var str = '';

    for (var i = 0; i < len; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
  }

  /**
   * 生成uuid
   *
   * @returns {string} uuid
   */
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }

  /**
   * 转换 _ 或 - 为驼峰形式
   *
   * @param {string} str 原始字符串
   * @returns {string} CamelCase 形式
   */
  function camelize(str) {
    if (str.indexOf('-') < 0 && str.indexOf('_') < 0) {
      return str;
    }

    return str.replace(/[-_][^-_]/g, function (match) {
      return match.charAt(1).toUpperCase();
    });
  }

  /**
   * 转换驼峰形式至 "_" 分割形式
   *
   * @param {string} str 原始字符串
   * @returns {string} camel_case 形式
   */
  function underscored(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
  }

  /**
   * 转换驼峰形式至 "-" 分割形式
   *
   * @param {string} str 原始字符串
   * @returns {string} camel-case 形式
   */

  function dasherize(str) {
    return underscored(str).replace(/_/g, '-');
  }

  /**
   * 计算base64字符串大小
   *
   * @param {string} base64 base64
   * @returns {number} 返回KB数字
   */
  function getBase64Size(base64) {
    var strLen = base64.length;
    var fileSize = strLen - strLen / 8 * 2;
    return Math.ceil(fileSize / 1024);
  }

  /**
   * 移除html标签
   *
   * @param {string} str 原始字符串
   * @returns {string} 无标签字符串
   */
  function stripTags(str) {
    return str.replace(/<script[^>]*>(\S\s*?)<\/script>/gim, '').replace(/<[^>]+>/g, '');
  }

  /**
   * 防XSS攻击过滤
   *
   * @param {string} str 原始字符串
   * @returns {string} 过滤后字符串
   */
  function xssFilter(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
  }

  /**
   * 解析 URL 查询参数字符串为对象
   *
   * @param {string} qs 查询参数字符串
   * @returns {object} 查询参数对象
   */
  function parseQuery(qs) {
    return (qs.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
      var pair = v.split('=');
      a[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      return a;
    }, {});
  }

  /**
   * 获得 URL 哈希字符串
   *
   * @param {string} url 链接
   * @returns {string} 哈希字符串
   */
  function getHash(url) {
    var hash = '';
    var hashStart = url.indexOf('#');

    if (hashStart !== -1) {
      hash = url.slice(hashStart);
    }

    return hash;
  }

  /**
   * 获取 URL hash 参数对象
   *
   * @param {string} [url] 链接
   * @returns {object} 参数对象
   */

  function getHashParams() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
    return parseQuery(getHash(url));
  }

  /**
   * 获取 URL hash 指定的查询参数
   *
   * @param {string} key 参数名
   * @param {string} [url] 链接
   * @returns {string} 指定参数的值
   */

  function getHashParam(key) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    return getHashParams(url)[key];
  }

  /**
   * 去除 URL 哈希字符串
   *
   * @param {string} url 链接
   * @returns {string} 去除哈希后的链接
   */
  function removeHash(url) {
    var res = url;
    var hashStart = url.indexOf('#');

    if (hashStart !== -1) {
      res = url.slice(0, hashStart);
    }

    return res;
  }

  /**
   * 获得 URL 查询参数字符串
   *
   * @param {string} url 链接
   * @returns {string} 查询参数字符串
   */

  function getSearch(url) {
    var _url = removeHash(url);

    var queryStart = _url.indexOf('?');

    if (queryStart === -1) {
      return '';
    }

    return _url.slice(queryStart + 1);
  }

  /**
   * 获取URL search 参数对象
   *
   * @param {string} [url] 链接
   * @returns {object} 参数对象
   */

  function getSearchParams() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
    return parseQuery(getSearch(url));
  }

  /**
   * 获取URL search 指定的查询参数
   *
   * @param {string} key 参数名
   * @param {string} [url] 链接
   * @returns {string} 指定参数的值
   */

  function getSearchParam(key) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
    return getSearchParams(url)[key];
  }

  /**
   * 解析 URL 字符串
   *
   * @param {string} url URL 字符串
   * @returns {object} 解析结果对象
   */

  function parseUrl(url) {
    var _url = removeHash(url).split('?')[0];
    var query = getSearchParams(url);
    var hash = getHash(url);
    return {
      url: _url,
      query: query,
      hash: hash
    };
  }

  /**
   * 查询参数对象序列化
   * 支持一层对象
   *
   * @param {JSON} obj 查询参数对象，JSON 子集，不支持数组类型
   * @returns {string} 查询参数序列化后的字符串
   */
  function stringifyQuery(obj) {
    if (!obj) return '';
    var pairs = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        pairs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
      }
    }

    return pairs.join('&');
  }

  /**
   * URL解析对象序列化
   *
   * @param {object} obj URL 解析对象
   * @returns {string} URL 字符串
   */

  function stringifyUrl(obj) {
    var _hash;

    var url = obj.url,
        query = obj.query,
        hash = obj.hash;
    url = removeHash(url).split('?')[0];
    var queryFromUrl = getSearchParams(url);
    var queryString = stringifyQuery(_objectSpread2(_objectSpread2({}, queryFromUrl), query));
    var search = queryString ? "?".concat(queryString) : '';
    var hashFromURL = getHash(url);
    hash = (_hash = hash) !== null && _hash !== void 0 ? _hash : hashFromURL;
    return "".concat(url).concat(search).concat(hash);
  }

  /**
   * 移除URL的某些参数
   *
   * @param {string} url URL
   * @param {Array} params 需要移除的参数列表
   * @returns {string} 移除参数后的URL
   */

  function omitParams(url, params) {
    var parsedUrl = parseUrl(url);
    var query = omit(parsedUrl.query, params);
    return stringifyUrl(_objectSpread2(_objectSpread2({}, parsedUrl), {}, {
      query: query
    }));
  }

  /**
   * @param {string} url URL
   * @param {Array} params 需要的参数列表
   * @returns {string} 仅保留需要参数的 URL
   */

  function pickParams(url, params) {
    var parsedUrl = parseUrl(url);
    var query = pick(parsedUrl.query, params);
    return stringifyUrl(_objectSpread2(_objectSpread2({}, parsedUrl), {}, {
      query: query
    }));
  }

  var tars = {
    // array
    chunk: chunk,
    // browser
    requestAnimFrame: requestAnimFrame,
    cancelAnimFrame: cancelAnimFrame,
    // device
    isAndroid: isAndroid,
    isIOS: isIOS,
    isIPad: isIPad,
    isIPhone: isIPhone,
    isNotchIPhone: isNotchIPhone,
    isWeixin: isWeixin,
    ua: ua,
    // dom
    getPageHeight: getPageHeight,
    getPageWidth: getPageWidth,
    getPageScrollTop: getPageScrollTop,
    getStyle: getStyle,
    getViewHeight: getViewHeight,
    getViewWidth: getViewWidth,
    isElementVisible: elementIsVisibleInViewport,
    lockTouch: lockTouch,
    outlineElements: outlineElements,
    putCursorAtEnd: putCursorAtEnd,
    scrollTo: scrollTo,
    setStyle: setStyle,
    // format
    formatAmount: formatAmount,
    formatBankCard: formatBankCard,
    formatDate: formatDate,
    formatRemainTime: formatRemainTime,
    formatTel: formatTel,
    // function
    compose: compose,
    debounce: debounce,
    throttle: throttle,
    // image
    optimizeImage: optimizeImage,
    // lang
    getType: getType,
    isArray: isArray,
    isBoolean: isBoolean,
    isEmpty: isEmpty,
    isFunction: isFunction,
    isMap: isMap,
    isNumber: isNumber,
    isObject: isObject,
    isSet: isSet,
    isString: isString,
    // object
    extend: extend,
    merge: merge,
    omit: omit,
    pick: pick,
    // random
    randomA2B: randomA2B,
    randomColor: randomColor,
    randomString: randomString,
    uuid: uuid,
    // string
    camelize: camelize,
    dasherize: dasherize,
    getBase64Size: getBase64Size,
    stripTags: stripTags,
    underscored: underscored,
    xssFilter: xssFilter,
    // url
    getHashParam: getHashParam,
    getHashParams: getHashParams,
    getSearchParam: getSearchParam,
    getSearchParams: getSearchParams,
    removeHash: removeHash,
    getHash: getHash,
    getSearch: getSearch,
    omitParams: omitParams,
    pickParams: pickParams,
    parseQuery: parseQuery,
    stringifyQuery: stringifyQuery,
    parseUrl: parseUrl,
    stringifyUrl: stringifyUrl
  };

  exports.default = tars;
  exports.tars = tars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
