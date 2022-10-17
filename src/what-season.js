const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = Date
  let dateArray = [0,1,2,3,4,5,6,7,8,9,10,11]
  let dateSpring = [2,3,4]
  let dateSummer = [5,6,7]
  let dateAutumn = [8,9,10]
  let dateWinter = [1,11,0]
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  try {
    month = date.getMonth();
  } catch (err) {
    throw new Error('Invalid date!');
  }
  if (!dateArray.includes(month)) {
    return 'Invalid date!'
  }
  if (dateSpring.includes(month)) {
    return 'spring'
  }
  if (dateSummer.includes(month)) {
    return 'summer'
  }
  if (dateAutumn.includes(month)) {
    return 'autumn'
  }
  if (dateWinter.includes(month)) {
    return 'winter'
  }
}

module.exports = {
  getSeason
};
