var userAgent = require('../sniff_user_agent');

// describe('isToday', function() {
//   beforeEach(function() {
//     this.clock = sinon.useFakeTimers(
//       new Date(2014, 8 /* starts from 0 */, 25).getTime()
//     );
//   });

//   afterEach(function() {
//     this.clock.restore();
//   });

//   it('returns true if passed is weekend', function() {
//     var result = isToday(new Date(2014, 8 /* starts from 0 */, 25));
//     expect(result).to.be.true;
//   });

//   it('returns false if passed date is not today', function() {
//     var result = isToday(new Date(2014, 8 /* starts from 0 */, 26));
//     expect(result).to.be.false;
//   });

//   it('allows to pass string', function() {
//     var result = isToday(new Date(2014, 8 /* starts from 0 */, 25).toString());
//     expect(result).to.be.true;
//   });
// });

describe('userAgent', function(){
  it('return userAgent information in lowercase', function(){
    var userAgentString = true;

    expect(userAgent).to.be.true;
  });
});
