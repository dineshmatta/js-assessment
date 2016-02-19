if ( typeof window === 'undefined' ) {
  require('../../app/async');
  var expect = require('chai').expect;
}

describe('async behavior', function() {

  var asyncAnswers = {

    async : function(val){
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          if (val) {
            resolve(val);
          }
          else {
            reject(Error("It broke"));
          }
        }, 10);
      });
    },

    manipulateRemoteData : function(url){
      return new Promise(function(resolve, reject) {
        $.ajax(url).then(function(resp) {
          var people = resp.people.map(function(person) { return person.name} );
          resolve(people.sort());
        });
      });
    }
  }

  it('you should understand how to use promises to handle asynchronicity', function(done) {
    var flag = false;
    var finished = 0;
    var total = 2;

    function finish(done) {
      if (++finished === total) { done(); }
    }

    asyncAnswers.async(true).then(function(result) {
      flag = result;
      expect(flag).to.eql(true);
      finish(done);
    });

    asyncAnswers.async('success').then(function(result) {
      flag = result;
      expect(flag).to.eql('success');
      finish(done);
    });

    expect(flag).to.eql(false);
  });

  it('you should be able to retrieve data from the server and return a sorted array of names', function(done) {
    var url = '/data/testdata.json';

    asyncAnswers.manipulateRemoteData(url).then(function(result) {
      expect(result).to.have.length(5);
      expect(result.join(' ')).to.eql('Adam Alex Matt Paul Rebecca');
      done();
    });
  });
});
