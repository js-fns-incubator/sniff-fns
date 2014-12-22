var isBB = require('../is_blackberry');

describe('isBlackberry', function(){
  it('returns true if string belongs to mobile blackberry\'s user agent', function(){
    var BlackberryUserAgents = [
      'Mozilla/5.0 (BB10; <Device Model>) AppleWebKit/<WebKit Version> (KHTML, like Gecko) Version/<BB Version #> Mobile Safari/<WebKit Version>'
    ];

    expect(isArrayPassFunction(BlackberryUserAgents, isBB)).to.be.true;
  });

  it('returns false if string doesn\'t belongs to blackberry\'s user agent', function(){
    var NotBlackberryUserAgents = [
      'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9'
    ];

    expect(isArrayPassFunction(NotBlackberryUserAgents, isBB)).to.be.false;
  });
});
