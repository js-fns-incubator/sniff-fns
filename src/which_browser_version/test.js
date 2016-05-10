const test = require('ava')
const whichBrowserVersion = require('.')

test('whichBrowserVersion detects Google Chrome version', (t) => {
  t.is(41, whichBrowserVersion('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'))
  t.is(12, whichBrowserVersion('Mozilla/5.0 (X11; Linux i686) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.91 Chromium/12.0.742.91 Safari/534.30'))
  t.is(undefined, whichBrowserVersion('Chrome'))
})

test('whichBrowserVersion detects Google Chrome Mobile version', (t) => {
  t.is(19, whichBrowserVersion('Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3'))
  t.is(18, whichBrowserVersion('Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19'))
  t.is(undefined, whichBrowserVersion('CriOS'))
})

test('whichBrowserVersion detects Mozilla Firefox version', (t) => {
  t.is(36, whichBrowserVersion('Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0'))
  t.is(33, whichBrowserVersion('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0'))
  t.is(4, whichBrowserVersion('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b11pre) Gecko/20110128 Firefox/4.0b11pre'))
  t.is(undefined, whichBrowserVersion('Firefox'))
})

test('whichBrowserVersion detects Microsoft Internet Explorer version', (t) => {
  t.is(11, whichBrowserVersion('Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko'))
  t.is(11, whichBrowserVersion('Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'))
  t.is(10, whichBrowserVersion('Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0'))
  t.is(10, whichBrowserVersion('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 7.0; InfoPath.3; .NET CLR 3.1.40767; Trident/6.0; en-IN)'))
  t.is(9, whichBrowserVersion('Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))'))
  t.is(8, whichBrowserVersion('Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)'))
  t.is(7, whichBrowserVersion('Mozilla/4.0(compatible; MSIE 7.0b; Windows NT 6.0)'))
  t.is(6, whichBrowserVersion('Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)'))
  t.is(5, whichBrowserVersion('Mozilla/4.0 (compatible; MSIE 5.50; Windows NT; SiteKiosk 4.9; SiteCoach 1.0)'))
  t.is(4, whichBrowserVersion('Mozilla/4.0 (compatible; MSIE 4.5; Windows 98; )'))
  t.is(3, whichBrowserVersion('Mozilla/2.0 (compatible; MSIE 3.03; Windows 3.1)'))
  t.is(2, whichBrowserVersion('Mozilla/4.0 (compatible; MSIE 2.0; Windows NT 5.0; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)'))
  t.is(undefined, whichBrowserVersion('MSIE'))
})

test('whichBrowserVersion detects Apple Safari version', (t) => {
  t.is(7, whichBrowserVersion('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A'))
  t.is(6, whichBrowserVersion('Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25'))
  t.is(5, whichBrowserVersion('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2'))
  t.is(5, whichBrowserVersion('Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko ) Version/5.1 Mobile/9B176 Safari/7534.48.3'))
  t.is(4, whichBrowserVersion('Mozilla/5.0 (Windows; U; Windows NT 6.1; es-ES) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'))
  t.is(4, whichBrowserVersion('Mozilla/5.0 (Windows; U; Windows NT 6.1; es-ES) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'))
  t.is(3, whichBrowserVersion('Mozilla/5.0 (Windows; U; Windows NT 6.0; hu-HU) AppleWebKit/525.26.2 (KHTML, like Gecko) Version/3.2 Safari/525.26.13'))
  t.is(2, whichBrowserVersion('Mozilla/5.0 (Macintosh; U; PPC Mac OS X; it-it) AppleWebKit/412.6 (KHTML, like Gecko) Safari/412.2'))
  t.is(1, whichBrowserVersion('Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-us) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.6'))
  t.is(undefined, whichBrowserVersion('Apple Safari'))
})

test('whichBrowserVersion detects Opera version', (t) => {
  t.is(12, whichBrowserVersion('Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16'))
  t.is(12, whichBrowserVersion('Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16'))
  t.is(11, whichBrowserVersion('Opera/9.80 (Windows NT 5.1; U; en) Presto/2.9.168 Version/11.51'))
  t.is(10, whichBrowserVersion('Opera/9.80 (Windows NT 5.2; U; ru) Presto/2.5.22 Version/10.51'))
  t.is(undefined, whichBrowserVersion('Opera'))
})

test("whichBrowserVersion returns undefined if version can't be detected", (t) => {
  t.is(undefined, whichBrowserVersion('LOLBrowser'))
})
