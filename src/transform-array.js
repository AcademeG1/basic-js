const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //
  let copyArr = arr;
  if (!Array.isArray(copyArr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  copyArr.forEach((item, index) => {
    if (item === undefined) {
      copyArr.splice(index, 1)
    }
    if (item === '--discard-next') {
      if (index === copyArr.length-1) {
        copyArr.splice(index,1)
      } else copyArr.splice(index, index, index+1)
    } else if (item === '--discard-prev') {
      if (index === 0) {
        copyArr.splice(0,1)
      } else {
        copyArr.splice(index - 1, index - 1)
      }
    } else if (item === '--double-next') {

      if (index === copyArr.length-1) {
        copyArr.splice(index,1)
      } else {copyArr.splice(index, 0, copyArr[index+1])}

    } else if (item === '--double-prev') {
      if (index === 0) {
        copyArr.splice(index,1)
      } else copyArr.splice(index, 0, copyArr[index-1])
    }
  })
  return copyArr
}

module.exports = {
  transform
};
