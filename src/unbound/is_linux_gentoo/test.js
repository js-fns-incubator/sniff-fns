const test = require('ava')
const isLinuxGentoo = require('.')

test('isLinuxGentoo returns true if a user agent string belongs to Gentoo Linux', (t) => {
  [
    'Mozilla/5.0 (X11; U; Linux Gentoo i686; pl; rv:1.8.0.8) Gecko/20061219 Firefox/1.5.0.8',
    'ELinks (0.11.3; Linux 2.6.23-gentoo-r6 i686; 128x48)'
  ].forEach(function (ua) {
    t.true(isLinuxGentoo(ua))
  })
})

test("isLinuxGentoo returns false if a user agent string doesn't belong to Gentoo Linux", (t) => {
  [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach(function (ua) {
    t.false(isLinuxGentoo(ua))
  })
})
