import chunk from './array/chunk';

import requestAnimFrame from './browser/request-anim-frame';
import cancelAnimFrame from './browser/cancel-anim-frame';

import isAndroid from './device/is-android';
import isIOS from './device/is-ios';
import isIPad from './device/is-ipad';
import isIPhone from './device/is-iphone';
import isNotchIPhone from './device/is-notch-iphone';
import isWeixin from './device/is-weixin';
import ua from './device/ua';

import getPageHeight from './dom/get-page-height';
import getPageWidth from './dom/get-page-width';
import getPageScrollTop from './dom/get-page-scroll-top';
import getStyle from './dom/get-style';
import getViewHeight from './dom/get-view-height';
import getViewWidth from './dom/get-view-width';
import isElementVisible from './dom/is-element-visible';
import lockTouch from './dom/lock-touch';
import outlineElements from './dom/outline-elements';
import putCursorAtEnd from './dom/put-cursor-at-end';
import scrollTo from './dom/scroll-to';
import setStyle from './dom/set-style';

import formatAmount from './format/format-amount';
import formatBankCard from './format/format-bank-card';
import formatDate from './format/format-date';
import formatRemainTime from './format/format-remain-time';
import formatTel from './format/format-tel';

import compose from './function/compose';
import debounce from './function/debounce';
import throttle from './function/throttle';

import optimizeImage from './image/optimize-image';

import getType from './type/get-type';
import isArray from './type/is-array';
import isBoolean from './type/is-boolean';
import isEmpty from './type/is-empty';
import isFunction from './type/is-function';
import isMap from './type/is-map';
import isNumber from './type/is-number';
import isObject from './type/is-object';
import isSet from './type/is-set';
import isString from './type/is-string';

import extend from './object/extend';
import merge from './object/merge';
import omit from './object/omit';
import pick from './object/pick';

import randomA2B from './random/random-a2b';
import randomColor from './random/random-color';
import randomString from './random/random-string';
import uuid from './random/uuid';

import camelize from './string/camelize';
import dasherize from './string/dasherize';
import getBase64Size from './string/get-base64-size';
import stripTags from './string/strip-tags';
import underscored from './string/underscored';
import xssFilter from './string/xxs-filter';

import getHashParam from './url/get-hash-param';
import getHashParams from './url/get-hash-params';
import getSearchParam from './url/get-search-param';
import getSearchParams from './url/get-search-params';
import removeHash from './url/remove-hash';
import getHash from './url/get-hash';
import getSearch from './url/get-search';
import omitParams from './url/omit-params';
import pickParams from './url/pick-params';
import parseQuery from './url/parse-query';
import stringifyQuery from './url/stringify-query';
import parseUrl from './url/parse-url';
import makeUrl from './url/make-url';

export {
  // array
  chunk,
  // browser
  requestAnimFrame,
  cancelAnimFrame,
  // device
  isAndroid,
  isIOS,
  isIPad,
  isIPhone,
  isNotchIPhone,
  isWeixin,
  ua,
  // dom
  getPageHeight,
  getPageWidth,
  getPageScrollTop,
  getStyle,
  getViewHeight,
  getViewWidth,
  isElementVisible,
  lockTouch,
  outlineElements,
  putCursorAtEnd,
  scrollTo,
  setStyle,
  // format
  formatAmount,
  formatBankCard,
  formatDate,
  formatRemainTime,
  formatTel,
  // function
  compose,
  debounce,
  throttle,
  // image
  optimizeImage,
  // lang
  getType,
  isArray,
  isBoolean,
  isEmpty,
  isFunction,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  // object
  extend,
  merge,
  omit,
  pick,
  // random
  randomA2B,
  randomColor,
  randomString,
  uuid,
  // string
  camelize,
  dasherize,
  getBase64Size,
  stripTags,
  underscored,
  xssFilter,
  // url
  getHashParam,
  getHashParams,
  getSearchParam,
  getSearchParams,
  removeHash,
  getHash,
  getSearch,
  omitParams,
  pickParams,
  parseQuery,
  stringifyQuery,
  parseUrl,
  makeUrl,
};

export default {
  // array
  chunk,
  // browser
  requestAnimFrame,
  cancelAnimFrame,
  // device
  isAndroid,
  isIOS,
  isIPad,
  isIPhone,
  isNotchIPhone,
  isWeixin,
  ua,
  // dom
  getPageHeight,
  getPageWidth,
  getPageScrollTop,
  getStyle,
  getViewHeight,
  getViewWidth,
  isElementVisible,
  lockTouch,
  outlineElements,
  putCursorAtEnd,
  scrollTo,
  setStyle,
  // format
  formatAmount,
  formatBankCard,
  formatDate,
  formatRemainTime,
  formatTel,
  // function
  compose,
  debounce,
  throttle,
  // image
  optimizeImage,
  // lang
  getType,
  isArray,
  isBoolean,
  isEmpty,
  isFunction,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  // object
  extend,
  merge,
  omit,
  pick,
  // random
  randomA2B,
  randomColor,
  randomString,
  uuid,
  // string
  camelize,
  dasherize,
  getBase64Size,
  stripTags,
  underscored,
  xssFilter,
  // url
  getHashParam,
  getHashParams,
  getSearchParam,
  getSearchParams,
  removeHash,
  getHash,
  getSearch,
  omitParams,
  pickParams,
  parseQuery,
  stringifyQuery,
  parseUrl,
  makeUrl,
};
