var whichOs = require('../which_os');

describe('whichOs', function () {
  it('returns \'android\'', function () {
    var androidUA = [
      'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
      'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('android');
    })
  });

  it('returns \'blackberry\'', function () {
    var bbUA = [
      'Mozilla/5.0 (BB10; <Device Model>) AppleWebKit/<WebKit Version> (KHTML, like Gecko) Version/<BB Version #> Mobile Safari/<WebKit Version>'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('blackberry');
    })
  });

  it('returns \'iphone\'', function () {
    var iphoneUA = [
      'Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1C25 Safari/419.3',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
      'Mozilla/5.0 (iPod touch; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('iphone');
    })
  });

  it('returns \'mac\'', function () {
    var macUA = [
      'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
      'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('mac');
    })
  });

  it('returns \'windows\'', function () {
    var windowsUA = [
      'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14',
      'Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0',
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('windows');
    })
  });

  it('returns \'windows mobile\'', function () {
    var WindowsUA = [
      'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11; IEMobile/11.0) like Android 4.1.2; compatible) like iPhone OS 7_0_3 Mac OS X WebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Mobile Safari /537.36',
      'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11; IEMobile/11.0; NOKIA; Lumia 928) like Gecko',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('windows mobile');
    })
  });

  it('returns \'unknown os\'', function () {
    var unknown = [
      'Opera/9.80 (NT 6.0) Presto/2.12.388 Version/12.14'
    ].forEach(function (userAgent) {
      expect(whichOs(userAgent)).to.equal('unknown os');
    })
  });
});
