var sniffChrome = require('../sniff_browser_chrome');

describe('sniffChrome', function(){
  it('returns true if string belongs to chrome\'s user agent', function(){
    var ChromeUserAgents = [
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36'
    ];

    var result = ChromeUserAgents.map(function(userAgent){
      return sniffChrome(userAgent);
    }).every(Boolean);

    expect(result).to.be.true;
  });

  it('returns false if string doesn\'t belongs to chrome\'s user agent', function(){
    var ChromeUserAgents = [
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko',
    ];

    var result = ChromeUserAgents.map(function(userAgent){
      return sniffChrome(userAgent);
    }).every(Boolean);

    expect(result).to.be.false;
  });
});
