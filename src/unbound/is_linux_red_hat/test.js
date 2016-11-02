const test = require('ava')
const isLinuxRedHat = require('.')

test('isLinuxRedHat returns true if a user agent string belongs to Red Hat Linux', (t) => {
  [
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.22) Gecko/20110904 Red Hat/3.6-1.el5_7 Firefox/3.6.22',
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.12) Gecko/2009070811 Red Hat/3.0.12-1.el5_3 Firefox/3.0.12',
    'Wget/1.11.4 (Red Hat modified)',
    'Mozilla/5.0 (compatible; Konqueror/4.3; Linux) KHTML/4.3.4 (like Gecko) Red Hat Enterprise Linux/4.3.4-21.el6_5',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.9) Gecko/20100827 Red Hat/3.6.9-2.el6 Firefox/41.0.2',
    'Mozilla/5.0/Rebulid/By/Tyn (X11; Red Hat Enterprise; Linux i686; rv:43.0) Gecko/20100101 Firefox/43.0',
    'Mozilla/5.0 (X11; Red Hat Enterprise; Linux i686; rv:41.0) Gecko/20100101 Firefox/41.0',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.9) Gecko/20100827 Red Hat/3.6.9-2.el6 Firefox/3.6.9'
  ].forEach(function (ua) {
    t.true(isLinuxRedHat(ua))
  })
})

test("isLinuxRedHat returns false if a user agent string doesn't belong to Red Hat Linux", (t) => {
  [
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach(function (ua) {
    t.false(isLinuxRedHat(ua))
  })
})
