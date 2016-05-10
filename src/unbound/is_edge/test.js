const test = require('ava')
const isEdge = require('.')

test('isEdge returns true if a user agent string belongs to Edge', (t) => {
  ;[
    'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'
  ].forEach((ua) => {
    t.true(isEdge(ua))
  })
})

test("isEdge returns false if a user agent string doesn't belong to Edge", (t) => {
  ;[
    'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; rv:11; NOKIA; Lumia 920) like Gecko'
  ].forEach((ua) => {
    t.false(isEdge(ua))
  })
})
