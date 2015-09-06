var isEdge = require('../is_browser_edge');

describe('isEdge', function(){
  it('returns true if string belongs to edge\'s user agent', function(){
    [
      'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'
    ].forEach(function(userAgent) {
      expect(isEdge(userAgent)).to.be.true;
    });
  });

  it('returns false if string doesn\'t belongs to edge\'s user agent', function(){
    var NotEdgeUserAgents = [
      'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
      'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko'
    ].forEach(function(userAgent) {
      expect(isEdge(userAgent)).to.be.false;
    });
  });
});
