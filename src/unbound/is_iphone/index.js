module.exports = function isIphone (str) {
  return /iphone;/i.test(str) || /ipod touch;/i.test(str)
}
