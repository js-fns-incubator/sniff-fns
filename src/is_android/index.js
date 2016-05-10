module.exports = function isAndroid (str) {
  return /; android/i.test(str)
}
