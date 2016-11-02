const test = require('ava')
const isLinuxUbuntu = require('.')

test('isLinuxUbuntu returns true if a user agent string belongs to Ubuntu Linux', (t) => {
  [
    'Mozilla/5.0 (X11; U; Linux x86_64; en; rv:1.9.0.14) Gecko/20080528 Ubuntu/9.10 (karmic) Epiphany/2.22 Firefox/3.0',
    'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.8) Gecko/2009032712 Ubuntu/8.04 (hardy) Firefox/3.0.8 GTB5',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0'
  ].forEach(function (ua) {
    t.true(isLinuxUbuntu(ua))
  })
})

test("isLinuxUbuntu returns false if a user agent string doesn't belong to Ubuntu Linux", (t) => {
  [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach(function (ua) {
    t.false(isLinuxUbuntu(ua))
  })
})
