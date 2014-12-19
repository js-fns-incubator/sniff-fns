var sniffBB = require('../sniff_browser_blackberry');

describe('sniffBlackberry', function(){
  it('returns true if string belongs to mobile blackberry\'s user agent', function(){
    var BlackberryUserAgents = [
      'Mozilla/5.0 (BB10; <Device Model>) AppleWebKit/<WebKit Version> (KHTML, like Gecko) Version/<BB Version #> Mobile Safari/<WebKit Version>'
    ];

    var result = BlackberryUserAgents.map(function(userAgent){
      return sniffBB(userAgent);
    }).every(Boolean);

    expect(result).to.be.true;
  });

  it('returns false if string doesn\'t belongs to blackberry\'s user agent', function(){
    var NotBlackberryUserAgents = [
      'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9'
    ];

    var result = NotBlackberryUserAgents.map(function(userAgent){
      return sniffBB(userAgent);
    }).every(Boolean);

    expect(result).to.be.false;
  });
});
