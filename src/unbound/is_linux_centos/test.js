const test = require('ava')
const isLinuxCentos = require('.')

test('isLinuxCentos returns true if a user agent string belongs to Centos Linux', (t) => {
  [
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.5) Gecko/2008121911 CentOS/3.0.5-1.el5.centos Firefox/3.0.5',
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.0.12) Gecko/20080419 CentOS/1.5.0.12-0.15.el4.centos Firefox/1.5.0.12 pango-text'
  ].forEach(function (ua) {
    t.true(isLinuxCentos(ua))
  })
})

test("isLinuxCentos returns false if a user agent string doesn't belong to Centos Linux", (t) => {
  [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach(function (ua) {
    t.false(isLinuxCentos(ua))
  })
})
