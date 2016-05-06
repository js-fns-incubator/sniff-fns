var isChrome = require('../is_browser_chrome');

describe('isChrome', function(){
  it('returns true if string belongs to chrome\'s user agent', function(){
    [
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36'
    ].forEach(function(userAgent) {
      expect(isChrome(userAgent)).to.be.true;
    });
  });

  it("returns true if it's Chromium's user agent", function() {
    expect(isChrome('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Ubuntu/11.10 Chromium/18.0.1025.142 Chrome/18.0.1025.142 Safari/535.19'))
      .to.be.true
  })

  it('returns false if string doesn\'t belongs to chrome\'s user agent', function(){
    var NotChromeUserAgents = [
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
      'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko'
    ].forEach(function(userAgent) {
      expect(isChrome(userAgent)).to.be.false;
    });
  });
});
