var isWindows = require('../is_windows');

describe('isWindows', function() {
  it("returns true for Windows' user agent", function() {
    [
      'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14',
      'Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0',
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
      'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'
    ].forEach(function(userAgent) {
      expect(isWindows(userAgent)).to.be.true;
    })
  });

  it('returns false for non Windows user agent', function() {
    var nonWindowsUserAgent = [
      'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11; IEMobile/11.0; NOKIA; Lumia 928) like Gecko',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko',
      'Mozilla/5.0 (Android; Mobile; rv:22.0) Gecko/22.0 Firefox/22.0',
      'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C25 Safari/419.3'
    ].forEach(function(userAgent) {
      expect(isWindows(userAgent)).to.be.false;
    })
  });
});

