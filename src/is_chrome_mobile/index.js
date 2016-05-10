const isChrome = require('../is_chrome')
const isAndroid = require('../is_android')

module.exports = function isChromeMobile (str) {
  return isChrome(str) && isAndroid(str) || /CriOS/i.test(str)
}
