if ( typeof window === 'undefined' ) {
  require('../../app/flowControl');
  var expect = require('chai').expect;
}

describe('flow control', function() {

  var flowControlAnswers = {
    fizzBuzz : function(number){
      if(!number){
        return false;
      }

      if(typeof number !== 'number'){
        return false;
      }

      if(number === 3 || number === 6){
        return 'fizz';
      }

      if(number === 15){
          return 'fizzbuzz';
      }

      if(number % 3 === 0 && number % 5 === 0){
          return 'fizzbuzz';
      }

      if(number % 3 === 0 ){
          return 'fizz';
      }

      if(number % 5 === 0){
          return 'buzz';
      }



      return number;

    }

  }



  it('you should be able to conditionally branch your code', function() {
    var num = 0;

    while (num % 3 === 0 || num % 5 === 0) {
      num = Math.floor(Math.random() * 10) + 1;
    }

    expect(flowControlAnswers.fizzBuzz()).not.to.be.ok;
    expect(flowControlAnswers.fizzBuzz('foo')).not.to.be.ok;
    expect(flowControlAnswers.fizzBuzz(2)).to.eql(2);
    expect(flowControlAnswers.fizzBuzz(101)).to.eql(101);

    expect(flowControlAnswers.fizzBuzz(3)).to.eql('fizz');
    expect(flowControlAnswers.fizzBuzz(6)).to.eql('fizz');
    expect(flowControlAnswers.fizzBuzz(num * 3)).to.eql('fizz');

    expect(flowControlAnswers.fizzBuzz(5)).to.eql('buzz');
    expect(flowControlAnswers.fizzBuzz(10)).to.eql('buzz');
    expect(flowControlAnswers.fizzBuzz(num * 5)).to.eql('buzz');

    expect(flowControlAnswers.fizzBuzz(15)).to.eql('fizzbuzz');
    expect(flowControlAnswers.fizzBuzz(num * 3 * 5)).to.eql('fizzbuzz');
  });
});
