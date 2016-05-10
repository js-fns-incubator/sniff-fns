module.exports = function isIE (str) {
  return /MSIE/i.test(str) || // Common IE pattern
    /Trident\/7/i.test(str) // IE11
}
