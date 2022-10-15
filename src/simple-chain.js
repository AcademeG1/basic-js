const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],

  getLength() {
    return this.arr.length
  },

  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (position > this.arr.length || typeof position !== 'number' || position < 1) {
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.arr.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.arr.reverse()
    return this
  },

  finishChain() {
    const result = this.arr.join('~~')
    this.arr = []
    return result
  }
};


module.exports = {
  chainMaker
};
