/**
 * Returns user agent string converted to lowercase
 * @returns {string}
 */
var userAgent = function(){
  return navigator.userAgent.toLowerCase()
}

module.exports = userAgent;
