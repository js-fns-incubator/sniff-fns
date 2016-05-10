const test = require('ava')
const isOpera = require('.')

test('isOpera returns true if a user agent string belongs to Opera', (t) => {
  ;[
    'Opera/9.80 (Android; Opera Mini/7.5.33361/31.1448; U; en) Presto/2.8.119 Version/11.1010',
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36 OPR/16.0.1196.73',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100'
  ].forEach((ua) => {
    t.true(isOpera(ua))
  })
})

test("isOpera returns false if a user agent string doesn't belong to Opera", (t) => {
  ;[
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; ARM; Touch; WPDesktop)',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko'
  ].forEach((ua) => {
    t.false(isOpera(ua))
  })
})
