const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domain) {
  let result = domain.reduce((prevItem, current) => {
    let saveDomain = '';
    let invertDomain = current.split('.').reverse().map(item => '.' + item)
    invertDomain.forEach(item => {
      saveDomain += item;
      console.log(prevItem)
      if (prevItem[saveDomain]) {
        prevItem[saveDomain]++;
      } else {
        prevItem[saveDomain] = 1;
      }
    });
    return prevItem
  }, {});
  return result
}

module.exports = {
  getDNSStats
};
