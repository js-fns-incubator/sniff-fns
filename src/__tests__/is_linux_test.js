var isLinux = require('../is_linux');

describe('isLinux', function() {
  it("returns true for Linux's user agent", function() {
    [
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
      'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
      'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
    ].forEach(function(userAgent) {
      expect(isLinux(userAgent)).to.be.true;
    })
  });

  it('returns false for non Linux user agent', function() {
    [
      'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Android; Mobile; rv:22.0) Gecko/22.0 Firefox/22.0',
      'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11; IEMobile/11.0; NOKIA; Lumia 928) like Gecko',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko',
      'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C25 Safari/419.3'
    ].forEach(function(userAgent) {
      expect(isLinux(userAgent)).to.be.false;
    })
  });
});

