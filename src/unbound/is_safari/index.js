const isChrome = require('../is_chrome')
const isAndroid = require('../is_android')

module.exports = function isSafari (str) {
  return /safari/i.test(str) &&
    /apple/i.test(str) &&
    !isChrome(str) &&
    !isAndroid(str)
}
