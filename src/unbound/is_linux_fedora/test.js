const test = require('ava')
const isLinuxFedora = require('.')

test('isLinuxFedora returns true if a user agent string belongs to Fedora Linux', (t) => {
  [
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.6) Gecko/20060905 Fedora/1.5.0.6-10 Firefox/1.5.0.6 pango-text',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6'
  ].forEach(function (ua) {
    t.true(isLinuxFedora(ua))
  })
})

test("isLinuxFedora returns false if a user agent string doesn't belong to Fedora Linux", (t) => {
  [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach(function (ua) {
    t.false(isLinuxFedora(ua))
  })
})
