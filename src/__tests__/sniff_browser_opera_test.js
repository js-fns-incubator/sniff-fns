var sniffOpera = require('../sniff_browser_opera');

describe('sniffOpera', function(){
  it('returns true if string belongs to opera\'s user agent', function(){
    var OperaUserAgents = [
      'Opera/9.80 (Android; Opera Mini/7.5.33361/31.1448; U; en) Presto/2.8.119 Version/11.1010',
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36 OPR/16.0.1196.73',
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100'
    ];

    var result = OperaUserAgents.map(function(userAgent){
      return sniffOpera(userAgent);
    }).every(Boolean);

    expect(result).to.be.true;
  });

  it('returns false if string doesn\'t belongs to opera\'s user agent', function(){
    var NotOperaUserAgents = [
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko',
    ];

    var result = NotOperaUserAgents.map(function(userAgent){
      return sniffOpera(userAgent);
    }).every(Boolean);

    expect(result).to.be.false;
  });
});
