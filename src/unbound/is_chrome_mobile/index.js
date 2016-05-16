var isChrome = require('../is_chrome')
var isAndroid = require('../is_android')

module.exports = function isChromeMobile (str) {
  return isChrome(str) && isAndroid(str) || /CriOS/i.test(str)
}
