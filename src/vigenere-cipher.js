const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {

  constructor(logic = true) {
    this.charactersAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.logic = logic;
  }

  encrypt(message, key) {
    console.log(key)
    if (arguments.length !== 2 || typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const result = [];
    let keyPointer = 0;
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');

    message.map((item) => {
        if (this.charactersAlphabet.includes(item)) {

            const сharacterShift = this.charactersAlphabet.indexOf(key[keyPointer]); // на сколько символв сдвиг
            const sequenceNumberInAlphabet = this.charactersAlphabet.indexOf(item);
            const doneIndexCharacter = (sequenceNumberInAlphabet + сharacterShift) % this.charactersAlphabet.length; // % на длину массива решается перенос коретки, если число больше массива
            result.push(this.charactersAlphabet[doneIndexCharacter]);

            keyPointer++;
            if (keyPointer >= key.length) {
                keyPointer = 0;
            }

        } else {
            result.push(item);
        }
    })
    return this.logic !== true ? result.reverse().join("") : result.join('');
  }

  decrypt(encryptedMessage, key) {
    
    if (arguments.length !== 2 || typeof encryptedMessage !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const result = [];
    let keyPointer = 0;
    encryptedMessage = encryptedMessage.toUpperCase().split('');
    key = key.toUpperCase().split('');

    encryptedMessage.map((item) => {
        if (this.charactersAlphabet.includes(item)) {

            const сharacterShift = this.charactersAlphabet.indexOf(key[keyPointer]); // на сколько символв сдвиг
            const sequenceNumberInAlphabet = this.charactersAlphabet.indexOf(item);
            const doneIndexCharacter = (sequenceNumberInAlphabet + this.charactersAlphabet.length - сharacterShift) % this.charactersAlphabet.length; // % на длину массива решается перенос коретки, если число больше массива
            result.push(this.charactersAlphabet[doneIndexCharacter]);

            keyPointer++;
            if (keyPointer >= key.length) {
                keyPointer = 0;
            }

        } else {
            result.push(item);
        }
    })
    return this.logic !== true ? result.reverse().join("") : result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
