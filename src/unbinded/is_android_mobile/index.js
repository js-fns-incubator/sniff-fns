const isAndroid = require('../is_android')

module.exports = function isAndroidMobile (str) {
  return isAndroid(str) && /mobile/i.test(str)
}
