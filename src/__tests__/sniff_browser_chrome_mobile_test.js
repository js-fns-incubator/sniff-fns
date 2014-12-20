var sniffChromeMobile = require('../sniff_browser_chrome_mobile');

describe('sniffChromeMobile', function(){
  it('returns true if string belongs to chrome mobile\'s user agent', function(){
    var ChromeMobileUserAgents = [
      'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
      'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'
    ];

    expect(isArrayPassFunction(ChromeMobileUserAgents, sniffChromeMobile)).to.be.true;
  });

  it('returns false if string doesn\'t belongs to chrome\'s user agent', function(){
    var NotChromeMobileUserAgents = [
      'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36'
    ];

    expect(isArrayPassFunction(NotChromeMobileUserAgents, sniffChromeMobile)).to.be.false;
  });
});
