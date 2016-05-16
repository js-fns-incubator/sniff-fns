var isAndroid = require('../is_android')

module.exports = function isLinux (str) {
  return /linux/i.test(str) && !isAndroid(str)
}
