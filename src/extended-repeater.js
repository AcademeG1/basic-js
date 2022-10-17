const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  let keySet = new Set(Object.keys(options));
  let repTime = (keySet.has('repeatTimes')) ? options.repeatTimes : 1
  let separOption = (keySet.has('separator')) ? options.separator : '+'
  let addStr = (keySet.has('addition')) ? options.addition : ''
  let addTimer = (keySet.has('additionRepeatTimes')) ? options.additionRepeatTimes : 1
  let addSepar = (keySet.has('additionSeparator')) ? options.additionSeparator : '|'

  for (let i = 0; i < repTime; i++) {
    resultStr += str
      for (let k = 0; k < addTimer; k++) {
        resultStr += k < addTimer - 1 ? addStr + addSepar : addStr
      }
    resultStr += i < repTime - 1 ? separOption : ''
  }
  return resultStr
}

module.exports = {
  repeater
};
