const should = require('chai').should();

const fizzer = require('../fizzBuzzer');

describe('fizzer', function() {

it('should be divisible', function(){
  const normalCases = [
    {a: 15, expected: 'fizz-buzz'},
    {a: 9, expected: 'fizz'},
    {a: 20, expected: 'buzz'},
    {a: 7, expected: 7}
    ];

    normalCases.forEach(function(input){
      const answer = fizzer(input.a);
      answer.should.equal(input.expected);
    });
  });

it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzer(input[0])
      }).should.throw(Error);
    });
  });
});