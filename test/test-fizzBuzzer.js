'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz if the number is divisible by 15, fizz if divisible by 3, buzz if divisible by 5, and the number input otherwise', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 45, expected: 'fizz-buzz'},
      {a: 25, expected: 'buzz'},
      {a: 18, expected: 'fizz'},
      {a: 2, expected: 2}
    ];
    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a',
      'x',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});