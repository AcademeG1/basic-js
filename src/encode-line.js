const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let result = ''
  let counter = 1
  string = string.split('')
  string.forEach((item, index) => {
    if (string[index] === string[index+1]) {
      counter++
    } else {
      result += counter + string[index]
      counter = 1
    }
  })
  return result.replace(/1/g, '')
}

module.exports = {
  encodeLine
};
