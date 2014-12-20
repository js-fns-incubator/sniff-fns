var sniffSafari = require('../sniff_browser_safari');

describe('sniffSafari', function(){
  it('returns true if string belongs to safari\'s user agent', function(){
    var SafariUserAgents = [
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71',
      'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'
    ];

    expect(isArrayPassFunction(SafariUserAgents, sniffSafari)).to.be.true;
  });

  it('returns false if string doesn\'t belongs to safari\'s user agent', function(){
    var NotSafariUserAgents = [
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko',
    ];

    expect(isArrayPassFunction(NotSafariUserAgents, sniffSafari)).to.be.false;
  });
});
