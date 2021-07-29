import tars, { isAndroid } from '../dist_npm/tars-utils.esm';

console.log(isAndroid());
const url = 'https://www.baidu.com/path?a=1&b=2#/?c=3';
console.log(tars.getSearchParams(url));
console.log(tars.getSearch(url));
console.log(tars.getHash(url));
console.log(tars.parseUrl(url));
