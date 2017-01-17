// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.
"use strict";

class Hamming {
  compute(first, second) {
    if (first === second) {
      return 0;
    } else if (first.length !== second.length ){
      throw 'DNA strands must be of equal length.';
    } else {
      return first.split('').filter((dna, index) => dna !== second.split('')[index]).length;
    }
  }
}

module.exports = Hamming;
