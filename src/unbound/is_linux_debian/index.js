module.exports = function isLinuxDebian (str) {
  return /debian/i.test(str)
}
