import tars, { isAndroid } from '../dist_npm/tars-utils.esm';

console.log(isAndroid());
const a = 'https://www.baidu.com/path?a=1&b=2#/?c=3';
console.log(tars.getSearchParams(a));
console.log(tars.getHashParams(a));
console.log(tars.parseQuery('?a=1&b=2'));
console.log(tars.stringifyQuery({ a: '1', b: '2' }));
