const test = require('ava')
const isLinuxDebian = require('.')

test('isLinuxDebian returns true if a user agent string belongs to Debian Linux', (t) => {
  [
    'Mozilla/5.0 (compatible; Konqueror/3.5; Linux; x86_64) KHTML/3.5.5 (like Gecko) (Debian)',
    'Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.1.5) Gecko/20091112 Iceweasel/3.5.5 (like Firefox/3.5.5; Debian-3.5.5-1)'
  ].forEach(function (ua) {
    t.true(isLinuxDebian(ua))
  })
})

test("isLinuxDebian returns false if a user agent string doesn't belong to Debian Linux", (t) => {
  [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach(function (ua) {
    t.false(isLinuxDebian(ua))
  })
})
