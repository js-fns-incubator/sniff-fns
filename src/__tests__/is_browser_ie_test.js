var isIE = require('../is_browser_ie');

describe('isIE', function(){
  it("returns true if string belongs to an  IE's user agent", function(){
    var ieUserAgents = [
      'Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)',
      'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
      'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)',
      'Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)',
      'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko'
    ];

    expect(isArrayPassFunction(ieUserAgents, isIE)).to.be.true;
  });

  it("returns false if string doesn't belongs to IE's user agent", function(){
    var notIEUserAgents = [
      'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1',
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16'
    ];

    expect(isArrayPassFunction(notIEUserAgents, isIE)).to.be.false;
  });
});
